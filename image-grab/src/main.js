const acceptedExtensions = ['.jpg', '.jpeg', '.png', '.heic', '.heif', '.webp'];
const imageItems = [];

const fileInput = document.querySelector('[data-file-input]');
const shareAllButton = document.querySelector('[data-share-all]');
const clearButton = document.querySelector('[data-clear]');
const statusText = document.querySelector('[data-status]');
const runtimePill = document.querySelector('[data-runtime]');
const nonIosNote = document.querySelector('[data-non-ios]');
const countHeading = document.querySelector('[data-count-heading]');
const emptyState = document.querySelector('[data-empty]');
const gallery = document.querySelector('[data-gallery]');
const sharePointLinks = document.querySelectorAll('[data-sharepoint-open]');

const isIosRuntime = isLikelyIos();
runtimePill.textContent = isIosRuntime ? 'iPhone only' : 'Open on iPhone';
nonIosNote.hidden = isIosRuntime;
if (!isIosRuntime) {
  setStatus('Open this page on iPhone Safari to use the Photos save sheet.');
}

fileInput.addEventListener('change', handleFileSelection);
shareAllButton.addEventListener('click', shareAllImages);
clearButton.addEventListener('click', clearImages);
sharePointLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setStatus('In SharePoint, tap share, then Send a copy. The blue Send button only sends a link/message.');
  });
});

function handleFileSelection(event) {
  const selectedFiles = [...(event.target.files || [])].filter(isImageFile);

  if (!selectedFiles.length) {
    setStatus('Choose JPG, PNG, HEIC or WebP images from Files or Downloads.');
    return;
  }

  addFiles(selectedFiles);
  fileInput.value = '';
}

function addFiles(files) {
  for (const file of files) {
    imageItems.push({
      file,
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      url: URL.createObjectURL(file),
    });
  }

  renderGallery();
  setStatus(`${files.length} image${files.length === 1 ? '' : 's'} imported. Tap Save to Photos, or save one image below.`);
}

function renderGallery() {
  gallery.innerHTML = '';
  emptyState.hidden = imageItems.length > 0;
  shareAllButton.disabled = imageItems.length === 0;
  clearButton.disabled = imageItems.length === 0;
  countHeading.textContent = imageItems.length
    ? `${imageItems.length} image${imageItems.length === 1 ? '' : 's'} ready`
    : 'No images yet';

  for (const item of imageItems) {
    const card = document.createElement('article');
    const preview = document.createElement('img');
    const details = document.createElement('div');
    const name = document.createElement('h3');
    const meta = document.createElement('p');
    const actions = document.createElement('div');
    const shareButton = document.createElement('button');

    card.className = 'image-card';
    preview.src = item.url;
    preview.alt = item.file.name || 'Selected image';
    preview.loading = 'lazy';
    details.className = 'image-details';
    name.textContent = item.file.name || 'Selected image';
    meta.textContent = `${formatFileSize(item.file.size)} - ${getFileTypeLabel(item.file)}`;
    actions.className = 'card-actions';
    shareButton.type = 'button';
    shareButton.textContent = 'Save to Photos...';
    shareButton.addEventListener('click', () => shareSingleImage(item));

    actions.append(shareButton);
    details.append(name, meta, actions);
    card.append(preview, details);
    gallery.append(card);
  }
}

async function shareAllImages() {
  if (!imageItems.length) return;

  await shareFiles(
    imageItems.map((item) => item.file),
    `${imageItems.length} CAWF image${imageItems.length === 1 ? '' : 's'}`
  );
}

async function shareSingleImage(item) {
  await shareFiles([item.file], item.file.name || 'CAWF image');
}

async function shareFiles(files, title) {
  if (!canUseShareApi()) {
    setStatus('The iOS save sheet is not available here. Press and hold a preview image, then choose Save to Photos.');
    return;
  }

  shareAllButton.disabled = true;
  setStatus('Preparing fresh image copy dated now...');

  const preparedFiles = await createFreshImageCopies(files);
  const shareData = { files: preparedFiles, title };

  if (!canShareFiles(shareData)) {
    shareAllButton.disabled = imageItems.length === 0;
    setStatus('The iOS save sheet is not available here. Press and hold a preview image, then choose Save to Photos.');
    return;
  }

  setStatus('Opening iPhone Photos save options...');

  try {
    await navigator.share(shareData);
    setStatus('Fresh copy sent to the iPhone sheet. If you chose Save Photo, check Recently Added.');
  } catch (error) {
    if (error.name === 'AbortError') {
      setStatus('Save cancelled.');
      return;
    }

    console.warn(error);
    setStatus('Could not open the save sheet. Press and hold a preview image, then choose Save to Photos.');
  } finally {
    shareAllButton.disabled = imageItems.length === 0;
  }
}

async function createFreshImageCopies(files) {
  const timestamp = new Date();
  const freshFiles = [];

  for (const [index, file] of files.entries()) {
    try {
      freshFiles.push(await createFreshImageCopy(file, timestamp, index));
    } catch (error) {
      console.warn('Could not make a fresh dated copy; using original file.', error);
      freshFiles.push(file);
    }
  }

  return freshFiles;
}

async function createFreshImageCopy(file, timestamp, index) {
  const image = await loadImage(file);
  const canvas = document.createElement('canvas');
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;

  if (!width || !height) {
    throw new Error('Image dimensions were not available.');
  }

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const blob = await canvasToBlob(canvas, 'image/jpeg', 0.95);
  return new File([blob], getFreshFileName(file, timestamp, index), {
    lastModified: timestamp.getTime(),
    type: 'image/jpeg',
  });
}

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Image could not be loaded for a fresh dated copy.'));
    };
    image.src = url;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }

      reject(new Error('Image copy export failed.'));
    }, type, quality);
  });
}

function getFreshFileName(file, timestamp, index) {
  const baseName = String(file.name || 'sharepoint-image')
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9_-]+/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 52) || 'sharepoint-image';
  const indexSuffix = index > 0 ? `-${index + 1}` : '';

  return `${baseName}-grabbed-${formatTimestampForFileName(timestamp)}${indexSuffix}.jpg`;
}

function formatTimestampForFileName(date) {
  const parts = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0'),
    '-',
    String(date.getHours()).padStart(2, '0'),
    String(date.getMinutes()).padStart(2, '0'),
    String(date.getSeconds()).padStart(2, '0'),
  ];

  return parts.join('');
}

function canUseShareApi() {
  return 'share' in navigator && 'File' in window;
}

function canShareFiles(shareData) {
  if (!canUseShareApi()) return false;

  if (!navigator.canShare) return true;

  try {
    return navigator.canShare(shareData);
  } catch {
    return false;
  }
}

function clearImages() {
  for (const item of imageItems) URL.revokeObjectURL(item.url);
  imageItems.splice(0, imageItems.length);
  renderGallery();
  setStatus('If SharePoint saves into Files, import that file here. SharePoint downloads do not appear here automatically.');
}

function isImageFile(file) {
  const type = (file.type || '').toLowerCase();
  const name = (file.name || '').toLowerCase();

  return type.startsWith('image/') || acceptedExtensions.some((extension) => name.endsWith(extension));
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return 'Image file';
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileTypeLabel(file) {
  if (file.type) return file.type.replace('image/', '').toUpperCase();

  const name = file.name || '';
  const extension = name.includes('.') ? name.split('.').pop() : '';
  return extension ? extension.toUpperCase() : 'Image';
}

function isLikelyIos() {
  const userAgent = navigator.userAgent || '';
  const appleTouchTablet = /Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1;
  return /iPhone|iPad|iPod/i.test(userAgent) || appleTouchTablet;
}

function setStatus(message) {
  statusText.textContent = message;
}
