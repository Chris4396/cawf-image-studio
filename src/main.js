const LOGO_SRC = 'assets/cawf-logo.png';
const DOWNLOAD_FILE_PREFIX = 'cawf-image-studio';
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/heic', 'image/heif'];
const ACCEPTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.heic', '.heif'];
const UPLOAD_ACCEPT = ACCEPTED_IMAGE_TYPES.join(',');

const outputPresets = [
  { value: 'website', label: 'Website', detail: '1000 x 730', width: 1000, height: 730, slug: 'website' },
  { value: 'twitter', label: 'X / Twitter', detail: '1600 x 900', width: 1600, height: 900, slug: 'x-twitter' },
  { value: 'instagram-feed', label: 'Instagram Feed', detail: '1080 x 1350', width: 1080, height: 1350, slug: 'instagram-feed' },
  { value: 'linkedin', label: 'LinkedIn', detail: '1200 x 627', width: 1200, height: 627, slug: 'linkedin' },
];

const imageFitModes = [
  { value: 'crop', label: 'Centre crop', detail: 'Auto fill' },
  { value: 'manual', label: 'Manual crop', detail: 'Move and zoom' },
  { value: 'contain', label: 'Fit whole image', detail: 'Add padding' },
  { value: 'stretch', label: 'Squeeze', detail: 'No cropping' },
];

const positions = [
  { value: 'bottom-right', label: 'Bottom right' },
  { value: 'bottom-left', label: 'Bottom left' },
  { value: 'top-right', label: 'Top right' },
  { value: 'top-left', label: 'Top left' },
];

const sizes = [
  { value: 'small', label: 'Small', ratio: 0.16 },
  { value: 'medium', label: 'Medium', ratio: 0.24 },
  { value: 'large', label: 'Large', ratio: 0.34 },
];

const opacities = [
  { value: 0.5, label: '50%' },
  { value: 0.7, label: '70%' },
  { value: 1, label: '100%' },
];

const textColors = [
  { value: '#ffffff', label: 'White', swatch: '#ffffff' },
  { value: '#ff3131', label: 'Red', swatch: '#ff3131' },
  { value: '#004876', label: 'Blue', swatch: '#004876' },
  { value: '#111827', label: 'Black', swatch: '#111827' },
];

const textSizes = [
  { value: 'small', label: 'Small', ratio: 0.038 },
  { value: 'medium', label: 'Medium', ratio: 0.052 },
  { value: 'large', label: 'Large', ratio: 0.068 },
];

const textBackingStyles = [
  { value: 'blue', label: 'CAWF blue' },
  { value: 'dark', label: 'Dark' },
  { value: 'none', label: 'None' },
];

const textWidths = [
  { value: 'compact', label: 'Compact', ratio: 0.42 },
  { value: 'medium', label: 'Medium', ratio: 0.58 },
  { value: 'wide', label: 'Wide', ratio: 0.72 },
];

const advancedTextWidthRatios = {
  compact: 0.58,
  medium: 0.76,
  wide: 0.94,
};

const textAlignments = [
  { value: 'left', label: 'Left' },
  { value: 'center', label: 'Centre' },
];

const textPositions = [
  { value: 'top-left', label: 'Top left' },
  { value: 'top-center', label: 'Top centre' },
  { value: 'bottom-left', label: 'Bottom left' },
  { value: 'bottom-center', label: 'Bottom centre' },
];

const advancedPanelColors = [
  { value: '#003f73', label: 'CAWF blue', swatch: '#003f73' },
  { value: '#007f89', label: 'Teal', swatch: '#007f89' },
  { value: '#111827', label: 'Black', swatch: '#111827' },
  { value: '#ffffff', label: 'White', swatch: '#ffffff' },
  { value: '#1687d9', label: 'Bright blue', swatch: '#1687d9' },
  { value: '#0f766e', label: 'Green', swatch: '#0f766e' },
  { value: '#b91c1c', label: 'Red', swatch: '#b91c1c' },
  { value: '#b9e7f8', label: 'Light blue', swatch: '#b9e7f8' },
];

const advancedBarColors = [
  { value: '#ffffff', label: 'White', swatch: '#ffffff' },
  { value: '#003f73', label: 'CAWF blue', swatch: '#003f73' },
  { value: '#b9e7f8', label: 'Light blue', swatch: '#b9e7f8' },
  { value: '#111827', label: 'Black', swatch: '#111827' },
];

const advancedHighlightColors = [
  { value: '#12aeea', label: 'Sky blue', swatch: '#12aeea' },
  { value: '#ff3131', label: 'Red', swatch: '#ff3131' },
  { value: '#76dd55', label: 'Green', swatch: '#76dd55' },
  { value: '#ffffff', label: 'White', swatch: '#ffffff' },
  { value: '#003f73', label: 'CAWF blue', swatch: '#003f73' },
  { value: '#facc15', label: 'Yellow', swatch: '#facc15' },
];

const advancedImageSides = [
  { value: 'left', label: 'Photo left' },
  { value: 'right', label: 'Photo right' },
];

const state = {
  advancedBarColor: '#ffffff',
  advancedBarEnabled: true,
  advancedBarHeight: 0.16,
  advancedHighlightColor: '#12aeea',
  advancedImageSide: 'left',
  advancedImageWidth: 0.46,
  advancedMode: false,
  advancedPanelColor: '#003f73',
  advancedPanelOpacity: 1,
  advancedPhotoX: 0,
  advancedPhotoY: 0,
  image: null,
  imageFit: 'crop',
  logo: null,
  logoReady: false,
  logoIsFallback: false,
  showLogo: true,
  lastSavedPath: '',
  manualCropX: 0,
  manualCropY: 0,
  manualZoom: 1,
  mobilePreviewSize: 'compact',
  opacity: 1,
  outputPreset: 'website',
  pendingExportBlob: null,
  pendingExportSize: '',
  pendingExportUrl: '',
  position: 'bottom-right',
  size: 'medium',
  textAlign: 'left',
  textBackingStyle: 'blue',
  textBody: '',
  textColor: '#ffffff',
  textEmphasis: '',
  textHeadline: '',
  textOffsetX: 0,
  textOffsetY: 0,
  textPosition: 'top-left',
  textSize: 'medium',
  textWidth: 'medium',
};

document.getElementById('root').innerHTML = `
  <main class="app-shell">
    <header class="app-header">
      <div class="brand-lockup">
        <img class="brand-logo" src="${LOGO_SRC}" alt="CAWF" />
        <div>
          <p class="eyebrow">Internal staff tool</p>
          <h1>CAWF Image Studio</h1>
        </div>
      </div>
      <div class="header-status">Local version</div>
    </header>

    <section class="workspace" aria-label="CAWF Image Studio tool">
      <aside class="controls-panel" aria-label="Branding controls">
        <section class="control-section">
          <div class="section-heading">
            <span class="step-number">1</span>
            <h2>Upload</h2>
          </div>
          <label class="upload-control">
            <span aria-hidden="true">+</span>
            <span>Upload JPG, PNG or HEIC</span>
            <input type="file" accept="${UPLOAD_ACCEPT}" />
          </label>
          <button class="upload-drop-zone" type="button">
            <span class="drop-icon" aria-hidden="true">+</span>
            <span>
              <strong class="drop-primary">Tap or click to browse</strong>
              <small class="drop-secondary">choose from Photos or Files</small>
            </span>
          </button>
          <p class="file-summary">No image selected</p>
        </section>

        <section class="control-section">
          <div class="section-heading">
            <span class="step-number">2</span>
            <h2>Output</h2>
          </div>
          <fieldset class="control-group">
            <legend>Use</legend>
            <div class="platform-grid" data-control="outputPreset"></div>
          </fieldset>
          <fieldset class="control-group">
            <legend>Fit</legend>
            <div class="fit-grid" data-control="imageFit"></div>
          </fieldset>
          <div class="manual-crop-controls" hidden>
            <label class="range-control">
              <span>Zoom <output class="manual-zoom-value">100%</output></span>
              <input class="manual-zoom" type="range" min="1" max="3" step="0.05" value="1" />
            </label>
            <label class="range-control">
              <span>Horizontal <output class="manual-x-value">0</output></span>
              <input class="manual-x" type="range" min="-100" max="100" step="1" value="0" />
            </label>
            <label class="range-control">
              <span>Vertical <output class="manual-y-value">0</output></span>
              <input class="manual-y" type="range" min="-100" max="100" step="1" value="0" />
            </label>
            <button class="secondary-action manual-crop-reset" type="button">Reset crop</button>
          </div>
          <label class="fit-toggle advanced-mode-toggle-row">
            <input class="advanced-mode-toggle" type="checkbox" />
            <span>
              <strong>Advanced campaign layout</strong>
              <small>Split photo, text panel and logo bar</small>
            </span>
          </label>
          <div class="advanced-controls" hidden>
            <fieldset class="control-group">
              <legend>Photo side</legend>
              <div class="segmented-grid" data-control="advancedImageSide"></div>
            </fieldset>
            <fieldset class="control-group">
              <legend>Text panel colour</legend>
              <div class="color-grid advanced-color-grid" data-control="advancedPanelColor"></div>
            </fieldset>
            <label class="range-control">
              <span>Panel opacity <output class="advanced-panel-opacity-value">100%</output></span>
              <input class="advanced-panel-opacity" type="range" min="45" max="100" step="5" value="100" />
            </label>
            <label class="range-control">
              <span>Photo width <output class="advanced-image-width-value">46%</output></span>
              <input class="advanced-image-width" type="range" min="35" max="62" step="1" value="46" />
            </label>
            <label class="range-control">
              <span>Photo horizontal <output class="advanced-photo-x-value">0%</output></span>
              <input class="advanced-photo-x" type="range" min="-100" max="100" step="1" value="0" />
            </label>
            <label class="range-control">
              <span>Photo vertical <output class="advanced-photo-y-value">0%</output></span>
              <input class="advanced-photo-y" type="range" min="-100" max="100" step="1" value="0" />
            </label>
            <button class="secondary-action advanced-photo-reset" type="button">Reset photo position</button>
            <fieldset class="control-group">
              <legend>Emphasis highlight colour</legend>
              <div class="color-grid advanced-color-grid" data-control="advancedHighlightColor"></div>
            </fieldset>
            <label class="fit-toggle advanced-bar-toggle-row">
              <input class="advanced-bar-toggle" type="checkbox" checked />
              <span>
                <strong>Bottom logo bar</strong>
                <small>Centre the CAWF logo in a footer strip</small>
              </span>
            </label>
            <fieldset class="control-group advanced-bar-options">
              <legend>Logo bar colour</legend>
              <div class="color-grid advanced-color-grid" data-control="advancedBarColor"></div>
            </fieldset>
            <label class="range-control advanced-bar-options">
              <span>Logo bar height <output class="advanced-bar-height-value">16%</output></span>
              <input class="advanced-bar-height" type="range" min="10" max="24" step="1" value="16" />
            </label>
          </div>
          <p class="output-summary">Website export: 1000 x 730 px.</p>
        </section>

        <section class="control-section">
          <div class="section-heading">
            <span class="step-number">3</span>
            <h2>Logo</h2>
          </div>
          <p class="logo-status">Loading CAWF logo...</p>
          <label class="fit-toggle logo-toggle-row">
            <input class="logo-toggle" type="checkbox" checked />
            <span>
              <strong>Add CAWF logo</strong>
              <small>Turn off when the source image already includes branding</small>
            </span>
          </label>

          <div class="logo-options">
            <fieldset class="control-group">
              <legend>Position</legend>
              <div class="segmented-grid" data-control="position"></div>
            </fieldset>

            <fieldset class="control-group">
              <legend>Size</legend>
              <div class="segmented-row" data-control="size"></div>
            </fieldset>

            <fieldset class="control-group">
              <legend>Opacity</legend>
              <div class="segmented-row" data-control="opacity"></div>
            </fieldset>
          </div>
        </section>

        <section class="control-section">
          <div class="section-heading">
            <span class="step-number">4</span>
            <h2>Text</h2>
          </div>
          <div class="text-stack">
            <label class="text-field">
              <span>Headline</span>
              <textarea class="text-headline-input" rows="2" placeholder="Main campaign line..."></textarea>
            </label>
            <label class="text-field">
              <span>Red emphasis</span>
              <textarea class="text-emphasis-input" rows="2" placeholder="Optional red highlight line..."></textarea>
            </label>
            <label class="text-field">
              <span>Body copy</span>
              <textarea class="text-body-input" rows="4" placeholder="Supporting campaign copy..."></textarea>
            </label>
          </div>

          <fieldset class="control-group">
            <legend>Text colour</legend>
            <div class="color-grid" data-control="textColor"></div>
          </fieldset>

          <fieldset class="control-group">
            <legend>Size</legend>
            <div class="segmented-row" data-control="textSize"></div>
          </fieldset>

          <fieldset class="control-group">
            <legend>Backing</legend>
            <div class="segmented-row" data-control="textBackingStyle"></div>
          </fieldset>

          <fieldset class="control-group">
            <legend>Text line width</legend>
            <div class="segmented-row" data-control="textWidth"></div>
          </fieldset>

          <fieldset class="control-group">
            <legend>Alignment</legend>
            <div class="segmented-grid" data-control="textAlign"></div>
          </fieldset>

          <fieldset class="control-group">
            <legend>Position</legend>
            <div class="segmented-grid" data-control="textPosition"></div>
          </fieldset>

          <div class="text-position-controls">
            <label class="range-control">
              <span>Move across <output class="text-x-value">0%</output></span>
              <input class="text-x" type="range" min="-100" max="100" step="1" value="0" />
            </label>
            <label class="range-control">
              <span>Move up/down <output class="text-y-value">0%</output></span>
              <input class="text-y" type="range" min="-100" max="100" step="1" value="0" />
            </label>
            <button class="secondary-action text-position-reset" type="button">Reset text position</button>
          </div>
          <p class="text-summary">No text overlay added.</p>
        </section>

        <section class="control-section actions-section">
          <div class="section-heading">
            <span class="step-number">5</span>
            <h2>Export</h2>
          </div>
          <div class="action-row">
            <button class="secondary-action" type="button">Reset</button>
            <button class="primary-action" disabled type="button">Save PNG...</button>
          </div>
          <button class="folder-action" hidden type="button">Show saved file</button>
          <p class="status" role="status">Upload a JPG, PNG or HEIC image to begin.</p>
        </section>
      </aside>

      <section class="preview-panel" aria-label="Preview">
        <div class="preview-header">
          <div>
            <p class="eyebrow">Preview</p>
            <h2>Image preview</h2>
          </div>
          <div class="preview-meta">
            <span class="quality-note">Full-quality PNG export</span>
            <button class="mobile-preview-toggle" type="button">Large preview</button>
          </div>
        </div>
        <div class="preview-frame">
          <canvas aria-label="Branded image preview"></canvas>
          <div class="empty-state">
            <div class="empty-icon" aria-hidden="true">+</div>
            <h2>Preview ready</h2>
          <p class="empty-copy">Your finished image will appear here.</p>
          </div>
          <div class="drop-overlay" hidden>
            <div>Drop image to upload</div>
          </div>
        </div>
      </section>
    </section>
  </main>

  <div class="mobile-save-panel" hidden role="dialog" aria-modal="true" aria-labelledby="mobile-save-title">
    <div class="mobile-save-dialog">
      <div class="mobile-save-header">
        <div>
          <p class="eyebrow">iPhone export</p>
          <h2 id="mobile-save-title">Save image</h2>
        </div>
        <button class="save-close" type="button" aria-label="Close save preview">X</button>
      </div>
      <img class="mobile-save-image" alt="CAWF image ready to save" />
      <div class="mobile-save-actions">
        <button class="primary-action mobile-share-action" type="button">Save to Photos...</button>
        <a class="secondary-action mobile-download-link" download="${getDownloadFileName()}">Download PNG</a>
      </div>
      <p class="mobile-save-note"></p>
    </div>
  </div>
`;

const canvas = document.querySelector('canvas');
const emptyState = document.querySelector('.empty-state');
const previewFrame = document.querySelector('.preview-frame');
const uploadDropZone = document.querySelector('.upload-drop-zone');
const dropOverlay = document.querySelector('.drop-overlay');
const dropPrimaryText = document.querySelector('.drop-primary');
const dropSecondaryText = document.querySelector('.drop-secondary');
const mobileSavePanel = document.querySelector('.mobile-save-panel');
const mobileSaveImage = document.querySelector('.mobile-save-image');
const mobileSaveCloseButton = document.querySelector('.save-close');
const mobileSaveShareButton = document.querySelector('.mobile-share-action');
const mobileSaveDownloadLink = document.querySelector('.mobile-download-link');
const mobileSaveNote = document.querySelector('.mobile-save-note');
const advancedModeToggle = document.querySelector('.advanced-mode-toggle');
const advancedControls = document.querySelector('.advanced-controls');
const advancedPanelOpacityInput = document.querySelector('.advanced-panel-opacity');
const advancedPanelOpacityValue = document.querySelector('.advanced-panel-opacity-value');
const advancedImageWidthInput = document.querySelector('.advanced-image-width');
const advancedImageWidthValue = document.querySelector('.advanced-image-width-value');
const advancedPhotoXInput = document.querySelector('.advanced-photo-x');
const advancedPhotoXValue = document.querySelector('.advanced-photo-x-value');
const advancedPhotoYInput = document.querySelector('.advanced-photo-y');
const advancedPhotoYValue = document.querySelector('.advanced-photo-y-value');
const advancedPhotoResetButton = document.querySelector('.advanced-photo-reset');
const advancedBarToggle = document.querySelector('.advanced-bar-toggle');
const advancedBarToggleRow = document.querySelector('.advanced-bar-toggle-row');
const advancedBarHeightInput = document.querySelector('.advanced-bar-height');
const advancedBarHeightValue = document.querySelector('.advanced-bar-height-value');
const advancedBarOptions = document.querySelectorAll('.advanced-bar-options');
const manualCropControls = document.querySelector('.manual-crop-controls');
const manualCropResetButton = document.querySelector('.manual-crop-reset');
const manualZoomInput = document.querySelector('.manual-zoom');
const manualXInput = document.querySelector('.manual-x');
const manualYInput = document.querySelector('.manual-y');
const manualZoomValue = document.querySelector('.manual-zoom-value');
const manualXValue = document.querySelector('.manual-x-value');
const manualYValue = document.querySelector('.manual-y-value');
const textHeadlineInput = document.querySelector('.text-headline-input');
const textEmphasisInput = document.querySelector('.text-emphasis-input');
const textBodyInput = document.querySelector('.text-body-input');
const textXInput = document.querySelector('.text-x');
const textYInput = document.querySelector('.text-y');
const textXValue = document.querySelector('.text-x-value');
const textYValue = document.querySelector('.text-y-value');
const textPositionResetButton = document.querySelector('.text-position-reset');
const logoToggle = document.querySelector('.logo-toggle');
const logoOptions = document.querySelector('.logo-options');
const uploadInput = document.querySelector('input[type="file"]');
const resetButton = document.querySelector('.actions-section .secondary-action');
const downloadButton = document.querySelector('.actions-section .primary-action');
const openDownloadsButton = document.querySelector('.folder-action');
const statusText = document.querySelector('.status');
const logoStatus = document.querySelector('.logo-status');
const fileSummary = document.querySelector('.file-summary');
const outputSummary = document.querySelector('.output-summary');
const textSummary = document.querySelector('.text-summary');
const brandLogo = document.querySelector('.brand-logo');
const qualityNote = document.querySelector('.quality-note');
const headerStatus = document.querySelector('.header-status');
const mobilePreviewToggleButton = document.querySelector('.mobile-preview-toggle');
const isMobileRuntime = isLikelyMobileBrowser();
let cropDragState = null;

if (window.cawfDesktop?.runtime === 'electron') {
  headerStatus.textContent = 'Desktop app';
} else if (isStandalonePwa()) {
  headerStatus.textContent = 'Installed app';
} else if (isMobileRuntime) {
  headerStatus.textContent = 'Mobile web app';
}

if (isMobileRuntime) {
  downloadButton.textContent = 'Save to Photos...';
  dropPrimaryText.textContent = 'Tap to browse';
  dropSecondaryText.textContent = 'choose from Photos or Files';
}

if (!isMobileRuntime) {
  dropPrimaryText.textContent = 'Drag image here';
  dropSecondaryText.textContent = 'or click to browse';
}

brandLogo.addEventListener('error', () => {
  brandLogo.hidden = true;
});

renderOptionButtons('outputPreset', outputPresets, state.outputPreset);
renderOptionButtons('imageFit', imageFitModes, state.imageFit);
renderOptionButtons('position', positions, state.position);
renderOptionButtons('size', sizes, state.size);
renderOptionButtons('opacity', opacities, state.opacity);
renderOptionButtons('textAlign', textAlignments, state.textAlign);
renderOptionButtons('textBackingStyle', textBackingStyles, state.textBackingStyle);
renderOptionButtons('textColor', textColors, state.textColor);
renderOptionButtons('textSize', textSizes, state.textSize);
renderOptionButtons('textPosition', textPositions, state.textPosition);
renderOptionButtons('textWidth', textWidths, state.textWidth);
renderOptionButtons('advancedImageSide', advancedImageSides, state.advancedImageSide);
renderOptionButtons('advancedPanelColor', advancedPanelColors, state.advancedPanelColor);
renderOptionButtons('advancedBarColor', advancedBarColors, state.advancedBarColor);
renderOptionButtons('advancedHighlightColor', advancedHighlightColors, state.advancedHighlightColor);
updateLogoControls();
updateAdvancedControls();
updateManualCropControls();
updateTextPositionControls();
updateMobilePreviewMode();
updateOutputSummary();
updateTextSummary();
loadLogo();

uploadInput.addEventListener('change', handleUpload);
uploadDropZone.addEventListener('click', () => uploadInput.click());
resetButton.addEventListener('click', resetImage);
downloadButton.addEventListener('click', downloadImage);
openDownloadsButton.addEventListener('click', showSavedFile);
advancedModeToggle.addEventListener('change', handleAdvancedModeToggle);
advancedBarToggle.addEventListener('change', handleAdvancedBarToggle);
logoToggle.addEventListener('change', handleLogoToggle);
advancedPanelOpacityInput.addEventListener('input', handleAdvancedRangeChange);
advancedImageWidthInput.addEventListener('input', handleAdvancedRangeChange);
advancedBarHeightInput.addEventListener('input', handleAdvancedRangeChange);
advancedPhotoResetButton.addEventListener('click', resetAdvancedPhotoPosition);
[advancedPhotoXInput, advancedPhotoYInput].forEach((input) => {
  input.addEventListener('input', handleAdvancedPhotoPositionChange);
});
manualCropResetButton.addEventListener('click', resetManualCrop);
[manualZoomInput, manualXInput, manualYInput].forEach((input) => {
  input.addEventListener('input', handleManualCropChange);
});
textPositionResetButton.addEventListener('click', resetTextPosition);
[textHeadlineInput, textEmphasisInput, textBodyInput].forEach((input) => {
  input.addEventListener('input', handleCampaignTextInput);
});
[textXInput, textYInput].forEach((input) => {
  input.addEventListener('input', handleTextPositionChange);
});
mobilePreviewToggleButton.addEventListener('click', toggleMobilePreviewSize);
canvas.addEventListener('pointerdown', startCropDrag);
canvas.addEventListener('pointermove', handleCropDrag);
canvas.addEventListener('pointerup', endCropDrag);
canvas.addEventListener('pointercancel', endCropDrag);
mobileSaveCloseButton.addEventListener('click', hideMobileSavePreview);
mobileSavePanel.addEventListener('click', (event) => {
  if (event.target === mobileSavePanel) hideMobileSavePreview();
});
mobileSaveShareButton.addEventListener('click', sharePendingMobileExport);
[previewFrame, uploadDropZone].forEach((dropTarget) => {
  dropTarget.addEventListener('dragenter', handleDragEnter);
  dropTarget.addEventListener('dragover', handleDragOver);
  dropTarget.addEventListener('dragleave', handleDragLeave);
  dropTarget.addEventListener('drop', handleDrop);
});
document.addEventListener('dragover', preventFileDropNavigation);
document.addEventListener('drop', preventFileDropNavigation);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileSavePanel.hidden) hideMobileSavePreview();
});
if (document.fonts?.ready) {
  document.fonts.ready.then(() => drawCanvas()).catch(() => {});
}

function renderOptionButtons(controlName, options, selectedValue) {
  const container = document.querySelector(`[data-control="${controlName}"]`);
  container.innerHTML = '';

  options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.value = option.value;
    button.className = String(option.value) === String(selectedValue) ? 'selected' : '';
    button.setAttribute('aria-pressed', String(option.value) === String(selectedValue));
    if (option.swatch) {
      button.classList.add('color-option');
      const swatch = document.createElement('span');
      const label = document.createElement('span');
      swatch.className = 'color-swatch';
      swatch.style.background = option.swatch;
      label.textContent = option.label;
      button.append(swatch, label);
    } else if (option.detail) {
      const label = document.createElement('span');
      const detail = document.createElement('small');
      label.textContent = option.label;
      detail.textContent = option.detail;
      button.append(label, detail);
    } else {
      button.textContent = option.label;
    }
    button.addEventListener('click', () => {
      state[controlName] = option.value;
      renderOptionButtons(controlName, options, option.value);
      if (controlName === 'outputPreset') updateOutputSummary();
      if (controlName === 'imageFit') {
        updateManualCropControls();
        updateOutputSummary();
      }
      if (controlName.startsWith('text')) updateTextSummary();
      if (controlName.startsWith('advanced')) {
        updateAdvancedControls();
        updateOutputSummary();
      }
      drawCanvas();
    });
    container.appendChild(button);
  });
}

function handleAdvancedModeToggle() {
  state.advancedMode = advancedModeToggle.checked;
  updateAdvancedControls();
  updateOutputSummary();
  drawCanvas();
}

function handleAdvancedBarToggle() {
  state.advancedBarEnabled = advancedBarToggle.checked;
  updateAdvancedControls();
  updateOutputSummary();
  drawCanvas();
}

function handleLogoToggle() {
  state.showLogo = logoToggle.checked;
  updateLogoControls();
  updateAdvancedControls();
  updateOutputSummary();
  drawCanvas();
}

function handleAdvancedRangeChange() {
  state.advancedPanelOpacity = Number(advancedPanelOpacityInput.value) / 100;
  state.advancedImageWidth = Number(advancedImageWidthInput.value) / 100;
  state.advancedBarHeight = Number(advancedBarHeightInput.value) / 100;
  updateAdvancedControls();
  drawCanvas();
}

function handleAdvancedPhotoPositionChange() {
  state.advancedPhotoX = Number(advancedPhotoXInput.value);
  state.advancedPhotoY = Number(advancedPhotoYInput.value);
  updateAdvancedControls();
  drawCanvas();
}

function resetAdvancedPhotoPosition() {
  state.advancedPhotoX = 0;
  state.advancedPhotoY = 0;
  updateAdvancedControls();
  drawCanvas();
}

function updateAdvancedControls() {
  advancedModeToggle.checked = state.advancedMode;
  advancedControls.hidden = !state.advancedMode;
  advancedPanelOpacityInput.value = String(Math.round(state.advancedPanelOpacity * 100));
  advancedImageWidthInput.value = String(Math.round(state.advancedImageWidth * 100));
  advancedPhotoXInput.value = String(state.advancedPhotoX);
  advancedPhotoYInput.value = String(state.advancedPhotoY);
  advancedBarToggle.checked = state.advancedBarEnabled;
  advancedBarHeightInput.value = String(Math.round(state.advancedBarHeight * 100));
  advancedPanelOpacityValue.textContent = `${Math.round(state.advancedPanelOpacity * 100)}%`;
  advancedImageWidthValue.textContent = `${Math.round(state.advancedImageWidth * 100)}%`;
  advancedPhotoXValue.textContent = `${state.advancedPhotoX}%`;
  advancedPhotoYValue.textContent = `${state.advancedPhotoY}%`;
  advancedBarHeightValue.textContent = `${Math.round(state.advancedBarHeight * 100)}%`;
  advancedBarToggleRow.hidden = !state.showLogo;
  advancedBarOptions.forEach((item) => {
    item.hidden = !state.showLogo || !state.advancedBarEnabled;
  });
  updatePhotoDragCursor();
}

function updateLogoControls() {
  logoToggle.checked = state.showLogo;
  logoOptions.hidden = !state.showLogo;
  if (!state.logoReady) return;
  if (!state.showLogo) {
    logoStatus.textContent = 'Logo will not be added to exported images.';
  } else {
    logoStatus.textContent = state.logoIsFallback ? 'Placeholder logo active' : 'Official CAWF logo loaded';
  }
}

function handleManualCropChange() {
  state.manualZoom = Number(manualZoomInput.value);
  state.manualCropX = Number(manualXInput.value);
  state.manualCropY = Number(manualYInput.value);
  updateManualCropControls();
  drawCanvas();
}

function resetManualCrop() {
  state.manualZoom = 1;
  state.manualCropX = 0;
  state.manualCropY = 0;
  updateManualCropControls();
  drawCanvas();
}

function updateManualCropControls() {
  const isManualCrop = state.imageFit === 'manual';
  manualCropControls.hidden = !isManualCrop;
  manualZoomInput.value = String(state.manualZoom);
  manualXInput.value = String(state.manualCropX);
  manualYInput.value = String(state.manualCropY);
  manualZoomValue.textContent = `${Math.round(state.manualZoom * 100)}%`;
  manualXValue.textContent = `${state.manualCropX}%`;
  manualYValue.textContent = `${state.manualCropY}%`;
  updatePhotoDragCursor();
}

function startCropDrag(event) {
  const dragMode = getActivePhotoDragMode();
  if (!dragMode) return;

  const point = getCanvasPoint(event);
  const imageRect = getActiveImageRect(canvas);
  if (!isPointInRect(point, imageRect)) return;

  const pan = getActivePhotoPan(dragMode, state.image, imageRect);
  if (!pan.maxPanX && !pan.maxPanY) return;

  cropDragState = {
    lastX: point.x,
    lastY: point.y,
    mode: dragMode,
    pointerId: event.pointerId,
  };
  canvas.setPointerCapture?.(event.pointerId);
  previewFrame.classList.add('crop-dragging');
  event.preventDefault();
}

function handleCropDrag(event) {
  if (!cropDragState || event.pointerId !== cropDragState.pointerId) return;

  const point = getCanvasPoint(event);
  const dx = point.x - cropDragState.lastX;
  const dy = point.y - cropDragState.lastY;
  const imageRect = getActiveImageRect(canvas);
  const pan = getActivePhotoPan(cropDragState.mode, state.image, imageRect);

  updatePhotoPanFromDrag(cropDragState.mode, dx, dy, pan);

  cropDragState.lastX = point.x;
  cropDragState.lastY = point.y;
  updateAdvancedControls();
  updateManualCropControls();
  drawCanvas();
  event.preventDefault();
}

function endCropDrag(event) {
  if (!cropDragState || event.pointerId !== cropDragState.pointerId) return;

  canvas.releasePointerCapture?.(event.pointerId);
  cropDragState = null;
  previewFrame.classList.remove('crop-dragging');
}

function canDragManualCrop() {
  return state.imageFit === 'manual' && Boolean(state.image) && canvas.width > 0 && canvas.height > 0;
}

function canDragAdvancedPhoto() {
  return (
    state.advancedMode &&
    Boolean(state.image) &&
    (state.imageFit === 'crop' || state.imageFit === 'manual') &&
    canvas.width > 0 &&
    canvas.height > 0
  );
}

function getActivePhotoDragMode() {
  if (canDragAdvancedPhoto()) return 'advanced';
  if (canDragManualCrop()) return 'manual';
  return '';
}

function updatePhotoDragCursor() {
  previewFrame.classList.toggle('crop-drag-ready', Boolean(getActivePhotoDragMode()));
}

function getCanvasPoint(event) {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * canvas.width,
    y: ((event.clientY - bounds.top) / bounds.height) * canvas.height,
  };
}

function getActiveImageRect(targetCanvas) {
  if (state.advancedMode) {
    return getAdvancedLayoutRects(targetCanvas).imageRect;
  }

  return getCanvasRect(targetCanvas);
}

function isPointInRect(point, rect) {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
}

function getManualCropPan(image, rect) {
  return getPannedCoverMetrics(image, rect, state.manualZoom);
}

function getAdvancedPhotoPan(image, rect) {
  const zoom = state.imageFit === 'manual' ? state.manualZoom : 1;
  return getPannedCoverMetrics(image, rect, zoom);
}

function getActivePhotoPan(dragMode, image, rect) {
  return dragMode === 'advanced' ? getAdvancedPhotoPan(image, rect) : getManualCropPan(image, rect);
}

function updatePhotoPanFromDrag(dragMode, dx, dy, pan) {
  const advancedPan = getAdvancedPhotoPanValues();
  const currentX = dragMode === 'advanced' ? advancedPan.x : state.manualCropX;
  const currentY = dragMode === 'advanced' ? advancedPan.y : state.manualCropY;
  const nextX = pan.maxPanX ? Math.round(clamp(currentX + ((dx / pan.maxPanX) * 100), -100, 100)) : currentX;
  const nextY = pan.maxPanY ? Math.round(clamp(currentY + ((dy / pan.maxPanY) * 100), -100, 100)) : currentY;

  if (dragMode === 'advanced') {
    const manualX = state.imageFit === 'manual' ? state.manualCropX : 0;
    const manualY = state.imageFit === 'manual' ? state.manualCropY : 0;
    state.advancedPhotoX = Math.round(clamp(nextX - manualX, -100, 100));
    state.advancedPhotoY = Math.round(clamp(nextY - manualY, -100, 100));
  } else {
    state.manualCropX = nextX;
    state.manualCropY = nextY;
  }
}

function handleCampaignTextInput() {
  state.textHeadline = textHeadlineInput.value;
  state.textEmphasis = textEmphasisInput.value;
  state.textBody = textBodyInput.value;
  updateTextSummary();
  drawCanvas();
}

function handleTextPositionChange() {
  state.textOffsetX = Number(textXInput.value);
  state.textOffsetY = Number(textYInput.value);
  updateTextPositionControls();
  drawCanvas();
}

function resetTextPosition() {
  state.textOffsetX = 0;
  state.textOffsetY = 0;
  updateTextPositionControls();
  drawCanvas();
}

function updateTextPositionControls() {
  textXInput.value = String(state.textOffsetX);
  textYInput.value = String(state.textOffsetY);
  textXValue.textContent = `${state.textOffsetX}%`;
  textYValue.textContent = `${state.textOffsetY}%`;
}

function toggleMobilePreviewSize() {
  state.mobilePreviewSize = state.mobilePreviewSize === 'large' ? 'compact' : 'large';
  updateMobilePreviewMode();
}

function updateMobilePreviewMode() {
  const isLarge = state.mobilePreviewSize === 'large';
  document.body.classList.toggle('mobile-preview-large', isLarge);
  mobilePreviewToggleButton.textContent = isLarge ? 'Compact preview' : 'Large preview';
}

function loadLogo() {
  const logo = new Image();
  logo.onload = () => {
    state.logo = logo;
    state.logoReady = true;
    state.logoIsFallback = false;
    updateLogoControls();
    drawCanvas();
  };
  logo.onerror = () => {
    state.logo = createPlaceholderLogo();
    state.logoReady = true;
    state.logoIsFallback = true;
    updateLogoControls();
    setStatus('Using a placeholder logo. Add the official CAWF logo at public/assets/cawf-logo.png when ready.');
    drawCanvas();
  };
  logo.src = LOGO_SRC;
}

function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  loadImageFile(file);
}

function loadImageFile(file) {
  if (!isSupportedImageFile(file)) {
    setStatus('Please choose a JPG, PNG or HEIC image.');
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  const image = new Image();
  image.onload = () => {
    URL.revokeObjectURL(imageUrl);
    state.image = image;
    state.advancedPhotoX = 0;
    state.advancedPhotoY = 0;
    emptyState.hidden = true;
    downloadButton.disabled = false;
    updateAdvancedControls();
    updateManualCropControls();
    drawCanvas();
    fileSummary.textContent = `${file.name} loaded. ${getSelectedOutputPreset().label} export: ${getCanvasSizeText()}.`;
    qualityNote.textContent = `${getSelectedOutputPreset().label}: ${getCanvasSizeText()}`;
    setStatus('Preview ready. Choose the platform, adjust the logo, then save or share the PNG.');
  };
  image.onerror = () => {
    URL.revokeObjectURL(imageUrl);
    setStatus('That image could not be loaded. Please try another JPG, PNG or HEIC image.');
  };
  image.src = imageUrl;
}

function handleDragEnter(event) {
  event.preventDefault();
  previewFrame.classList.add('drag-active');
  uploadDropZone.classList.add('drag-active');
  dropOverlay.hidden = false;
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
}

function handleDragLeave(event) {
  if (previewFrame.contains(event.relatedTarget)) return;
  hideDropOverlay();
}

function handleDrop(event) {
  event.preventDefault();
  hideDropOverlay();

  const file = [...event.dataTransfer.files].find(isSupportedImageFile);

  if (!file) {
    setStatus('Drop a JPG, PNG or HEIC image to upload.');
    return;
  }

  uploadInput.value = '';
  loadImageFile(file);
}

function hideDropOverlay() {
  previewFrame.classList.remove('drag-active');
  uploadDropZone.classList.remove('drag-active');
  dropOverlay.hidden = true;
}

function preventFileDropNavigation(event) {
  if (!isFileDrag(event)) return;

  event.preventDefault();

  if (
    event.type === 'drop' &&
    !previewFrame.contains(event.target) &&
    !uploadDropZone.contains(event.target)
  ) {
    hideDropOverlay();
    setStatus('Drop the image onto the upload panel or preview area.');
  }
}

function isFileDrag(event) {
  return [...(event.dataTransfer?.types || [])].includes('Files');
}

function resetImage() {
  const context = canvas.getContext('2d');
  state.advancedBarColor = '#ffffff';
  state.advancedBarEnabled = true;
  state.advancedBarHeight = 0.16;
  state.advancedHighlightColor = '#12aeea';
  state.advancedImageSide = 'left';
  state.advancedImageWidth = 0.46;
  state.advancedMode = false;
  state.advancedPanelColor = '#003f73';
  state.advancedPanelOpacity = 1;
  state.advancedPhotoX = 0;
  state.advancedPhotoY = 0;
  state.image = null;
  state.imageFit = 'crop';
  state.lastSavedPath = '';
  state.manualCropX = 0;
  state.manualCropY = 0;
  state.manualZoom = 1;
  state.opacity = 1;
  state.outputPreset = 'website';
  state.pendingExportBlob = null;
  state.pendingExportSize = '';
  state.position = 'bottom-right';
  state.showLogo = true;
  state.size = 'medium';
  state.textAlign = 'left';
  state.textBackingStyle = 'blue';
  state.textBody = '';
  state.textColor = '#ffffff';
  state.textEmphasis = '';
  state.textHeadline = '';
  state.textOffsetX = 0;
  state.textOffsetY = 0;
  state.textPosition = 'top-left';
  state.textSize = 'medium';
  state.textWidth = 'medium';

  hideMobileSavePreview();
  uploadInput.value = '';
  textHeadlineInput.value = '';
  textEmphasisInput.value = '';
  textBodyInput.value = '';
  canvas.width = 0;
  canvas.height = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  emptyState.hidden = false;
  downloadButton.disabled = true;
  openDownloadsButton.hidden = true;
  fileSummary.textContent = 'No image selected';
  qualityNote.textContent = 'Full-quality PNG export';
  renderOptionButtons('outputPreset', outputPresets, state.outputPreset);
  renderOptionButtons('imageFit', imageFitModes, state.imageFit);
  renderOptionButtons('position', positions, state.position);
  renderOptionButtons('size', sizes, state.size);
  renderOptionButtons('opacity', opacities, state.opacity);
  renderOptionButtons('textAlign', textAlignments, state.textAlign);
  renderOptionButtons('textBackingStyle', textBackingStyles, state.textBackingStyle);
  renderOptionButtons('textColor', textColors, state.textColor);
  renderOptionButtons('textSize', textSizes, state.textSize);
  renderOptionButtons('textPosition', textPositions, state.textPosition);
  renderOptionButtons('textWidth', textWidths, state.textWidth);
  renderOptionButtons('advancedImageSide', advancedImageSides, state.advancedImageSide);
  renderOptionButtons('advancedPanelColor', advancedPanelColors, state.advancedPanelColor);
  renderOptionButtons('advancedBarColor', advancedBarColors, state.advancedBarColor);
  renderOptionButtons('advancedHighlightColor', advancedHighlightColors, state.advancedHighlightColor);
  updateLogoControls();
  updateAdvancedControls();
  updateManualCropControls();
  updateTextPositionControls();
  updateOutputSummary();
  updateTextSummary();
  setStatus(state.logoIsFallback ? 'Using the placeholder logo.' : 'Upload a JPG, PNG or HEIC image to begin.');
}

async function downloadImage() {
  if (!state.image) {
    setStatus('Upload an image before saving.');
    return;
  }

  downloadButton.disabled = true;
  setStatus('Preparing full-quality PNG...');

  try {
    const blob = await canvasToPngBlob();
    const exportSize = getCanvasSizeText();

    if (window.cawfDesktop?.savePng) {
      const saved = await saveWithDesktopDialog(blob, exportSize);
      if (saved) return;
    }

    if (isLikelyMobileBrowser()) {
      const shared = await shareWithSystemSheet(blob, exportSize);
      if (shared) return;

      showMobileSavePreview(blob, exportSize);
      return;
    }

    if ('showSaveFilePicker' in window) {
      const saved = await saveWithFilePicker(blob, exportSize);
      if (saved) return;
    }

    if (shouldUseLocalDownloadsHelper() && await saveToDownloadsFolder(blob, exportSize)) {
      return;
    }

    downloadBlob(blob);
    setStatus(getDownloadFallbackStatus(exportSize));
  } catch (error) {
    console.error(error);
    setStatus('The PNG export could not be created. Please try again.');
  } finally {
    downloadButton.disabled = false;
  }
}

function isSupportedImageFile(file) {
  const fileType = (file.type || '').toLowerCase();
  const fileName = (file.name || '').toLowerCase();

  return (
    ACCEPTED_IMAGE_TYPES.includes(fileType) ||
    ACCEPTED_IMAGE_EXTENSIONS.some((extension) => fileName.endsWith(extension))
  );
}

async function saveWithDesktopDialog(blob, exportSize) {
  try {
    setStatus('Choose where to save the PNG...');
    const fileData = await blob.arrayBuffer();
    const result = await window.cawfDesktop.savePng(fileData, getDownloadFileName());

    if (result?.canceled) {
      setStatus('Save cancelled.');
      return true;
    }

    if (!result?.saved) {
      setStatus('The PNG could not be saved. Please try again.');
      return true;
    }

    state.lastSavedPath = result.path || '';
    openDownloadsButton.textContent = 'Show saved file';
    openDownloadsButton.hidden = false;
    setStatus(`Saved to: ${state.lastSavedPath || getDownloadFileName()}. Export size: ${exportSize}.`);
    return true;
  } catch (error) {
    console.warn('Desktop save dialog failed, using fallback save path.', error);
    setStatus(`Could not open the Save As dialog: ${error.message}.`);
    return false;
  }
}

function drawCanvas() {
  if (!state.image || !state.logoReady || !state.logo) return;

  const context = canvas.getContext('2d');
  const selectedSize = sizes.find((item) => item.value === state.size) ?? sizes[1];
  const output = getSelectedOutputPreset();
  const padding = Math.max(18, Math.round(output.width * 0.025));
  const logoWidth = Math.round(output.width * selectedSize.ratio);
  const logoHeight = Math.round((state.logo.height / state.logo.width) * logoWidth);

  canvas.width = output.width;
  canvas.height = output.height;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (state.advancedMode) {
    drawAdvancedLayout(context, canvas, selectedSize, padding);
  } else {
    drawImageInRect(context, state.image, getCanvasRect(canvas), state.imageFit);
    drawTextOverlay(context, canvas);
    if (state.showLogo) drawRegularLogo(context, canvas, logoWidth, logoHeight, padding);
  }

  updateOutputSummary();
}

function drawAdvancedLayout(context, targetCanvas, selectedLogoSize, padding) {
  const { barHeight, imageRect, textRect } = getAdvancedLayoutRects(targetCanvas);

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, targetCanvas.width, targetCanvas.height);
  drawAdvancedImageInRect(context, state.image, imageRect);

  context.save();
  context.globalAlpha = state.advancedPanelOpacity;
  context.fillStyle = state.advancedPanelColor;
  context.fillRect(textRect.x, textRect.y, textRect.width, textRect.height);
  context.restore();

  drawAdvancedTextOverlay(context, textRect, targetCanvas);

  if (state.showLogo && state.advancedBarEnabled) {
    drawAdvancedLogoBar(context, targetCanvas, selectedLogoSize, barHeight);
  } else if (state.showLogo) {
    const logoWidth = Math.round(targetCanvas.width * selectedLogoSize.ratio);
    const logoHeight = Math.round((state.logo.height / state.logo.width) * logoWidth);
    drawRegularLogo(context, targetCanvas, logoWidth, logoHeight, padding);
  }
}

function getAdvancedLayoutRects(targetCanvas) {
  const barHeight = state.showLogo && state.advancedBarEnabled ? Math.round(targetCanvas.height * state.advancedBarHeight) : 0;
  const contentHeight = targetCanvas.height - barHeight;
  const imageWidth = clamp(
    Math.round(targetCanvas.width * state.advancedImageWidth),
    Math.round(targetCanvas.width * 0.28),
    Math.round(targetCanvas.width * 0.72),
  );
  const textWidth = targetCanvas.width - imageWidth;
  const imageOnRight = state.advancedImageSide === 'right';

  return {
    barHeight,
    imageRect: {
      x: imageOnRight ? textWidth : 0,
      y: 0,
      width: imageWidth,
      height: contentHeight,
    },
    textRect: {
      x: imageOnRight ? 0 : imageWidth,
      y: 0,
      width: textWidth,
      height: contentHeight,
    },
  };
}

function drawAdvancedLogoBar(context, targetCanvas, selectedLogoSize, barHeight) {
  if (barHeight <= 0) return;

  const barY = targetCanvas.height - barHeight;
  context.fillStyle = state.advancedBarColor;
  context.fillRect(0, barY, targetCanvas.width, barHeight);

  const maxLogoWidth = Math.min(
    targetCanvas.width * 0.34,
    barHeight * 4.2,
    targetCanvas.width * (selectedLogoSize.ratio + 0.12),
  );
  const maxLogoHeight = barHeight * 0.72;
  const logoRatio = state.logo.width / state.logo.height;
  let logoWidth = maxLogoWidth;
  let logoHeight = logoWidth / logoRatio;
  if (logoHeight > maxLogoHeight) {
    logoHeight = maxLogoHeight;
    logoWidth = logoHeight * logoRatio;
  }

  const x = Math.round((targetCanvas.width - logoWidth) / 2);
  const y = Math.round(barY + (barHeight - logoHeight) / 2);
  context.save();
  context.globalAlpha = state.opacity;
  context.drawImage(state.logo, x, y, logoWidth, logoHeight);
  context.restore();
}

function drawRegularLogo(context, targetCanvas, logoWidth, logoHeight, padding) {
  const { x, y } = getLogoCoordinates(state.position, targetCanvas, logoWidth, logoHeight, padding);

  context.save();
  context.globalAlpha = state.opacity;
  context.drawImage(state.logo, x, y, logoWidth, logoHeight);
  context.restore();
}

function getCanvasRect(targetCanvas) {
  return { x: 0, y: 0, width: targetCanvas.width, height: targetCanvas.height };
}

function drawImageInRect(context, image, rect, mode) {
  context.save();
  context.beginPath();
  context.rect(rect.x, rect.y, rect.width, rect.height);
  context.clip();

  if (mode === 'stretch') {
    drawImageStretchRect(context, image, rect);
  } else if (mode === 'contain') {
    drawImageContainRect(context, image, rect);
  } else if (mode === 'manual') {
    drawImageManualCropRect(context, image, rect);
  } else {
    drawImageCoverRect(context, image, rect);
  }

  context.restore();
}

function drawAdvancedImageInRect(context, image, rect) {
  context.save();
  context.beginPath();
  context.rect(rect.x, rect.y, rect.width, rect.height);
  context.clip();

  if (state.imageFit === 'stretch') {
    drawImageStretchRect(context, image, rect);
  } else if (state.imageFit === 'contain') {
    drawImageContainRect(context, image, rect);
  } else {
    const zoom = state.imageFit === 'manual' ? state.manualZoom : 1;
    const pan = getAdvancedPhotoPanValues();
    drawImagePannedCoverRect(context, image, rect, pan.x, pan.y, zoom);
  }

  context.restore();
}

function getAdvancedPhotoPanValues() {
  if (state.imageFit !== 'manual') {
    return { x: state.advancedPhotoX, y: state.advancedPhotoY };
  }

  return {
    x: Math.round(clamp(state.advancedPhotoX + state.manualCropX, -100, 100)),
    y: Math.round(clamp(state.advancedPhotoY + state.manualCropY, -100, 100)),
  };
}

function drawImageStretchRect(context, image, rect) {
  context.drawImage(image, rect.x, rect.y, rect.width, rect.height);
}

function drawImageContainRect(context, image, rect) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const scale = Math.min(rect.width / imageWidth, rect.height / imageHeight);
  const drawWidth = Math.round(imageWidth * scale);
  const drawHeight = Math.round(imageHeight * scale);
  const x = Math.round(rect.x + (rect.width - drawWidth) / 2);
  const y = Math.round(rect.y + (rect.height - drawHeight) / 2);

  context.fillStyle = '#ffffff';
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
  context.drawImage(image, x, y, drawWidth, drawHeight);
}

function drawImageCoverRect(context, image, rect) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const imageRatio = imageWidth / imageHeight;
  const targetRatio = rect.width / rect.height;
  let sourceWidth = imageWidth;
  let sourceHeight = imageHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > targetRatio) {
    sourceWidth = Math.round(imageHeight * targetRatio);
    sourceX = Math.round((imageWidth - sourceWidth) / 2);
  } else {
    sourceHeight = Math.round(imageWidth / targetRatio);
    sourceY = Math.round((imageHeight - sourceHeight) / 2);
  }

  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
  );
}

function drawImageManualCropRect(context, image, rect) {
  drawImagePannedCoverRect(context, image, rect, state.manualCropX, state.manualCropY, state.manualZoom);
}

function drawImagePannedCoverRect(context, image, rect, panX, panY, zoom = 1) {
  const metrics = getPannedCoverMetrics(image, rect, zoom);
  const x = rect.x + ((rect.width - metrics.drawWidth) / 2) + ((panX / 100) * metrics.maxPanX);
  const y = rect.y + ((rect.height - metrics.drawHeight) / 2) + ((panY / 100) * metrics.maxPanY);

  context.drawImage(image, x, y, metrics.drawWidth, metrics.drawHeight);
}

function getPannedCoverMetrics(image, rect, zoom = 1) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const baseScale = Math.max(rect.width / imageWidth, rect.height / imageHeight);
  const scale = baseScale * zoom;
  const drawWidth = imageWidth * scale;
  const drawHeight = imageHeight * scale;

  return {
    drawHeight,
    drawWidth,
    maxPanX: Math.max(0, (drawWidth - rect.width) / 2),
    maxPanY: Math.max(0, (drawHeight - rect.height) / 2),
  };
}

function drawImageStretch(context, image, targetWidth, targetHeight) {
  context.drawImage(image, 0, 0, targetWidth, targetHeight);
}

function drawImageContain(context, image, targetWidth, targetHeight) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const scale = Math.min(targetWidth / imageWidth, targetHeight / imageHeight);
  const drawWidth = Math.round(imageWidth * scale);
  const drawHeight = Math.round(imageHeight * scale);
  const x = Math.round((targetWidth - drawWidth) / 2);
  const y = Math.round((targetHeight - drawHeight) / 2);

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, targetWidth, targetHeight);
  context.drawImage(image, x, y, drawWidth, drawHeight);
}

function drawImageCover(context, image, targetWidth, targetHeight) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const imageRatio = imageWidth / imageHeight;
  const targetRatio = targetWidth / targetHeight;
  let sourceWidth = imageWidth;
  let sourceHeight = imageHeight;
  let sourceX = 0;
  let sourceY = 0;

  if (imageRatio > targetRatio) {
    sourceWidth = Math.round(imageHeight * targetRatio);
    sourceX = Math.round((imageWidth - sourceWidth) / 2);
  } else {
    sourceHeight = Math.round(imageWidth / targetRatio);
    sourceY = Math.round((imageHeight - sourceHeight) / 2);
  }

  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    targetWidth,
    targetHeight,
  );
}

function drawImageManualCrop(context, image, targetWidth, targetHeight) {
  const imageWidth = image.naturalWidth || image.width;
  const imageHeight = image.naturalHeight || image.height;
  const baseScale = Math.max(targetWidth / imageWidth, targetHeight / imageHeight);
  const scale = baseScale * state.manualZoom;
  const drawWidth = imageWidth * scale;
  const drawHeight = imageHeight * scale;
  const maxPanX = Math.max(0, (drawWidth - targetWidth) / 2);
  const maxPanY = Math.max(0, (drawHeight - targetHeight) / 2);
  const x = ((targetWidth - drawWidth) / 2) + ((state.manualCropX / 100) * maxPanX);
  const y = ((targetHeight - drawHeight) / 2) + ((state.manualCropY / 100) * maxPanY);

  context.drawImage(image, x, y, drawWidth, drawHeight);
}

function drawAdvancedTextOverlay(context, rect, targetCanvas) {
  const margin = Math.max(22, Math.round(targetCanvas.width * 0.045));
  const selectedSize = textSizes.find((item) => item.value === state.textSize) ?? textSizes[1];
  const baseFontSize = Math.max(24, Math.round(targetCanvas.width * selectedSize.ratio * 0.92));
  const maxTextWidth = getAdvancedTextMaxWidth(rect, margin);
  const items = getAdvancedTextItems(context, maxTextWidth, baseFontSize);
  if (!items.length) return;

  const blockHeight = items.reduce((total, item) => total + item.height, 0);
  const isCentered = state.textAlign === 'center' || state.textPosition.endsWith('center');
  const isBottom = state.textPosition.startsWith('bottom');
  const offsetX = (state.textOffsetX / 100) * rect.width * 0.22;
  const offsetY = (state.textOffsetY / 100) * rect.height * 0.22;
  const minX = rect.x + margin * 0.55;
  const maxX = rect.x + rect.width - margin * 0.55;
  const minY = rect.y + margin * 0.55;
  const maxY = rect.y + rect.height - margin * 0.55;
  let currentY = isBottom ? rect.y + rect.height - margin - blockHeight : rect.y + margin;
  currentY = clamp(Math.round(currentY + offsetY), minY, maxY - blockHeight);

  context.save();
  context.textBaseline = 'alphabetic';

  for (const item of items) {
    if (item.type === 'gap') {
      currentY += item.height;
      continue;
    }

    const lineX = getAdvancedLineX(rect, margin, item.width, isCentered, offsetX);
    if (item.highlight) {
      const boxX = lineX - item.paddingX;
      const boxY = currentY;
      context.fillStyle = state.advancedHighlightColor;
      context.fillRect(boxX, boxY, item.width + item.paddingX * 2, item.height);
    }

    context.font = item.font;
    context.fillStyle = item.color;
    context.fillText(item.text, lineX, currentY + item.paddingY + item.baseline);
    currentY += item.height;
  }

  context.restore();
}

function getAdvancedLineX(rect, margin, lineWidth, isCentered, offsetX) {
  const baseX = isCentered
    ? rect.x + Math.round((rect.width - lineWidth) / 2)
    : rect.x + margin;
  const minX = rect.x + margin * 0.55;
  const maxX = rect.x + rect.width - margin * 0.55 - lineWidth;
  return clamp(Math.round(baseX + offsetX), minX, maxX);
}

function getAdvancedTextMaxWidth(rect, margin) {
  const availableWidth = Math.max(80, rect.width - margin * 2);
  const widthRatio = advancedTextWidthRatios[state.textWidth] ?? advancedTextWidthRatios.medium;
  return Math.max(80, Math.round(availableWidth * widthRatio));
}

function getAdvancedTextItems(context, maxTextWidth, baseFontSize) {
  const textColor = state.textColor;
  const highlightTextColor = getReadableTextColor(state.advancedHighlightColor);
  const segments = [
    {
      color: textColor,
      fontSize: Math.round(baseFontSize * 1.02),
      highlight: false,
      text: state.textHeadline.trim(),
      weight: 900,
    },
    {
      color: highlightTextColor,
      fontSize: Math.round(baseFontSize * 0.96),
      highlight: true,
      text: state.textEmphasis.trim(),
      weight: 900,
    },
    {
      color: textColor,
      fontSize: Math.round(baseFontSize * 0.88),
      highlight: false,
      text: state.textBody.trim(),
      weight: 850,
    },
  ];
  const items = [];

  for (const segment of segments) {
    if (!segment.text) continue;

    const font = getCampaignTextFont(segment.fontSize, segment.weight);
    const paddingX = segment.highlight ? Math.round(segment.fontSize * 0.28) : 0;
    const paddingY = segment.highlight ? Math.round(segment.fontSize * 0.2) : 0;
    const lineHeight = Math.round(segment.fontSize * 1.22);
    const lineBoxHeight = segment.highlight ? lineHeight + paddingY * 2 : lineHeight;
    context.font = font;

    const wrapWidth = segment.highlight ? Math.max(40, maxTextWidth - paddingX * 2) : maxTextWidth;
    for (const line of getWrappedTextLines(context, segment.text, wrapWidth)) {
      items.push({
        baseline: Math.round(segment.fontSize * 0.84),
        color: segment.color,
        font,
        height: lineBoxHeight,
        highlight: segment.highlight,
        paddingX,
        paddingY,
        text: line,
        type: 'line',
        width: Math.ceil(context.measureText(line).width),
      });
    }

    items.push({ height: Math.round(segment.fontSize * 0.28), type: 'gap' });
  }

  if (items.at(-1)?.type === 'gap') items.pop();
  return items;
}

function getReadableTextColor(hexColor) {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '#ffffff';

  const luminance = ((0.299 * rgb.r) + (0.587 * rgb.g) + (0.114 * rgb.b)) / 255;
  return luminance > 0.62 ? '#17323f' : '#ffffff';
}

function hexToRgb(hexColor) {
  const hex = String(hexColor || '').replace('#', '');
  if (!/^[\da-f]{6}$/i.test(hex)) return null;

  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

function drawTextOverlay(context, targetCanvas) {
  const margin = Math.max(24, Math.round(targetCanvas.width * 0.03));
  const { blockHeight, blockWidth, lineItems } = getCampaignTextLineItems(context, targetCanvas, margin);
  if (!lineItems.length) return;

  const isCentered = state.textPosition.endsWith('center');
  const isBottom = state.textPosition.startsWith('bottom');
  const offsetX = (state.textOffsetX / 100) * targetCanvas.width * 0.25;
  const offsetY = (state.textOffsetY / 100) * targetCanvas.height * 0.25;
  const baseX = isCentered ? Math.round((targetCanvas.width - blockWidth) / 2) : margin;
  const minX = Math.round(margin * 0.4);
  const maxX = targetCanvas.width - blockWidth - minX;
  const minY = Math.round(margin * 0.4);
  const maxY = targetCanvas.height - blockHeight - minY;
  const blockX = clamp(Math.round(baseX + offsetX), minX, maxX);
  let currentY = isBottom ? targetCanvas.height - margin - blockHeight : margin;
  currentY = clamp(Math.round(currentY + offsetY), minY, maxY);
  const backingFill = getTextBackingFill();

  context.save();
  context.textBaseline = 'alphabetic';

  for (const item of lineItems) {
    if (item.type === 'gap') {
      currentY += item.height;
      continue;
    }

    const lineBoxWidth = Math.min(blockWidth, item.textWidth + item.paddingX * 2);
    const lineX = state.textAlign === 'center'
      ? Math.round(blockX + (blockWidth - lineBoxWidth) / 2)
      : blockX;

    if (backingFill) {
      context.shadowBlur = 0;
      context.fillStyle = backingFill;
      context.fillRect(lineX, currentY, lineBoxWidth, item.lineBoxHeight);
    } else {
      context.shadowColor = 'rgba(0, 0, 0, 0.68)';
      context.shadowBlur = Math.max(4, Math.round(item.fontSize * 0.08));
      context.shadowOffsetX = 0;
      context.shadowOffsetY = Math.max(2, Math.round(item.fontSize * 0.04));
    }

    context.font = item.font;
    context.fillStyle = item.color;
    context.fillText(item.text, lineX + item.paddingX, currentY + item.paddingY + item.baseline);
    currentY += item.lineBoxHeight;
  }

  context.restore();
}

function getCampaignTextLineItems(context, targetCanvas, margin) {
  const selectedWidth = textWidths.find((item) => item.value === state.textWidth) ?? textWidths[1];
  const maxTextWidth = Math.round(targetCanvas.width * selectedWidth.ratio);
  const segments = getCampaignTextSegments(targetCanvas);
  const lineItems = [];
  let maxPaddingX = 0;

  for (const segment of segments) {
    if (!segment.text) continue;

    context.font = segment.font;
    const lines = getWrappedTextLines(context, segment.text, maxTextWidth);
    if (!lines.length) continue;

    const paddingX = Math.round(segment.fontSize * 0.34);
    const paddingY = Math.round(segment.fontSize * 0.22);
    const lineHeight = Math.round(segment.fontSize * 1.16);
    const lineBoxHeight = lineHeight + paddingY * 2;
    maxPaddingX = Math.max(maxPaddingX, paddingX);

    for (const line of lines) {
      lineItems.push({
        baseline: Math.round(segment.fontSize * 0.82),
        color: segment.color,
        font: segment.font,
        fontSize: segment.fontSize,
        lineBoxHeight,
        paddingX,
        paddingY,
        text: line,
        textWidth: Math.ceil(context.measureText(line).width),
        type: 'line',
      });
    }

    lineItems.push({ height: Math.round(segment.fontSize * 0.18), type: 'gap' });
  }

  if (lineItems.at(-1)?.type === 'gap') lineItems.pop();

  const blockHeight = lineItems.reduce((total, item) => total + (item.lineBoxHeight || item.height), 0);
  const blockWidth = Math.min(targetCanvas.width - margin * 2, maxTextWidth + maxPaddingX * 2);

  return { blockHeight, blockWidth, lineItems };
}

function getCampaignTextSegments(targetCanvas) {
  const selectedSize = textSizes.find((item) => item.value === state.textSize) ?? textSizes[1];
  const baseFontSize = Math.max(22, Math.round(targetCanvas.width * selectedSize.ratio));
  const hasLeadText = Boolean(state.textHeadline.trim() || state.textEmphasis.trim());
  const bodyFontSize = Math.round(baseFontSize * (hasLeadText ? 0.78 : 1));

  return [
    {
      color: state.textColor,
      font: getCampaignTextFont(Math.round(baseFontSize * 1.08), 900),
      fontSize: Math.round(baseFontSize * 1.08),
      text: state.textHeadline.trim(),
    },
    {
      color: '#ff3131',
      font: getCampaignTextFont(Math.round(baseFontSize * 1.02), 900),
      fontSize: Math.round(baseFontSize * 1.02),
      text: state.textEmphasis.trim(),
    },
    {
      color: state.textColor,
      font: getCampaignTextFont(bodyFontSize, 800),
      fontSize: bodyFontSize,
      text: state.textBody.trim(),
    },
  ];
}

function getCampaignTextFont(fontSize, weight) {
  return `${weight} ${fontSize}px Oswald, "Arial Narrow", "Roboto Condensed", Arial, sans-serif`;
}

function getTextBackingFill() {
  if (state.textBackingStyle === 'none') return '';
  if (state.textBackingStyle === 'dark') return 'rgba(7, 18, 27, 0.76)';
  return 'rgba(0, 65, 105, 0.94)';
}

function clamp(value, min, max) {
  if (max < min) return min;
  return Math.min(max, Math.max(min, value));
}

function getWrappedTextLines(context, text, maxTextWidth) {
  const lines = [];

  for (const rawLine of text.split(/\r?\n/)) {
    const words = rawLine.trim().split(/\s+/).filter(Boolean);
    if (!words.length) continue;

    let currentLine = '';
    for (const word of words) {
      const nextLine = currentLine ? `${currentLine} ${word}` : word;
      if (currentLine && context.measureText(nextLine).width > maxTextWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = nextLine;
      }
    }

    if (currentLine) lines.push(currentLine);
  }

  return lines;
}

function getLogoCoordinates(position, targetCanvas, logoWidth, logoHeight, padding) {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('left');

  return {
    x: isLeft ? padding : targetCanvas.width - logoWidth - padding,
    y: isTop ? padding : targetCanvas.height - logoHeight - padding,
  };
}

// Browser fallback used only when public/assets/cawf-logo.png is missing.
function createPlaceholderLogo() {
  const placeholder = document.createElement('canvas');
  const context = placeholder.getContext('2d');
  placeholder.width = 420;
  placeholder.height = 160;

  context.fillStyle = '#00665e';
  context.fillRect(0, 0, placeholder.width, placeholder.height);
  context.fillStyle = '#ffffff';
  context.font = '700 58px Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText('CAWF', placeholder.width / 2, placeholder.height / 2);

  return placeholder;
}

function setStatus(message) {
  statusText.textContent = message;
}

function canvasToPngBlob() {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }

      reject(new Error('Canvas PNG export returned no data.'));
    }, 'image/png');
  });
}

async function saveToDownloadsFolder(blob, exportSize) {
  try {
    const response = await fetch(`save-download?fileName=${encodeURIComponent(getDownloadFileName())}`, {
      method: 'POST',
      headers: { 'Content-Type': 'image/png' },
      body: blob,
    });

    if (!response.ok) {
      const errorResult = await response.json().catch(() => ({}));
      setStatus(`Could not save directly to Downloads: ${errorResult.message || 'local save failed'}.`);
      return false;
    }

    const result = await response.json();
    if (!result.saved) {
      setStatus(`Could not save directly to Downloads: ${result.message || 'local save failed'}.`);
      return false;
    }

    state.lastSavedPath = result.path || '';
    openDownloadsButton.textContent = 'Show saved file';
    openDownloadsButton.hidden = false;
    setStatus(`Saved to Downloads: ${state.lastSavedPath || getDownloadFileName()}. Export size: ${exportSize}.`);
    return true;
  } catch (error) {
    console.warn('Local Downloads save failed, using browser fallback.', error);
    setStatus(`Could not save directly to Downloads: ${error.message}.`);
    return false;
  }
}

async function shareWithSystemSheet(blob, exportSize) {
  if (!canAttemptSystemShare()) {
    return false;
  }

  const file = new File([blob], getDownloadFileName(), { type: 'image/png' });
  const shareData = {
    files: [file],
    title: `${getSelectedOutputPreset().label} CAWF Image Studio image`,
  };

  if (navigator.canShare) {
    try {
      if (!navigator.canShare(shareData)) return false;
    } catch (error) {
      console.warn('System share cannot accept PNG file data.', error);
      return false;
    }
  }

  try {
    setStatus('Opening iPhone save options...');
    await navigator.share(shareData);
    setStatus(`Choose Save Image or Save to Photos. ${getSelectedOutputPreset().label}: ${exportSize}.`);
    return true;
  } catch (error) {
    if (error.name === 'AbortError') {
      setStatus('Share cancelled.');
      return true;
    }

    console.warn('System share failed, using download fallback.', error);
    return false;
  }
}

function canAttemptSystemShare() {
  return 'File' in window && Boolean(navigator.share);
}

function showMobileSavePreview(blob, exportSize) {
  hideMobileSavePreview();

  state.pendingExportBlob = blob;
  state.pendingExportSize = exportSize;
  state.pendingExportUrl = URL.createObjectURL(blob);

  mobileSaveImage.src = state.pendingExportUrl;
  mobileSaveDownloadLink.href = state.pendingExportUrl;
  mobileSaveDownloadLink.download = getDownloadFileName();
  const canShare = canAttemptSystemShare();
  mobileSaveShareButton.hidden = !canShare;
  mobileSaveNote.textContent = canShare
    ? 'Choose Save Image or Save to Photos from the iPhone save options.'
    : 'Press and hold the preview image, then choose Save to Photos. The automatic iPhone save sheet needs the hosted HTTPS app.';

  mobileSavePanel.hidden = false;
  document.body.classList.add('modal-open');
  setStatus(`${getSelectedOutputPreset().label} PNG ready for iPhone Photos. Export size: ${exportSize}.`);
}

function hideMobileSavePreview() {
  mobileSavePanel.hidden = true;
  document.body.classList.remove('modal-open');
  mobileSaveImage.removeAttribute('src');
  mobileSaveDownloadLink.removeAttribute('href');

  if (state.pendingExportUrl) {
    URL.revokeObjectURL(state.pendingExportUrl);
    state.pendingExportUrl = '';
  }

  state.pendingExportBlob = null;
  state.pendingExportSize = '';
}

async function sharePendingMobileExport() {
  if (!state.pendingExportBlob) return;

  mobileSaveShareButton.disabled = true;
  try {
    const shared = await shareWithSystemSheet(state.pendingExportBlob, state.pendingExportSize);
    if (!shared) {
      setStatus('Press and hold the preview image, then choose Save to Photos.');
    }
  } finally {
    mobileSaveShareButton.disabled = false;
  }
}

async function saveWithFilePicker(blob, exportSize) {
  try {
    const fileHandle = await window.showSaveFilePicker({
      suggestedName: getDownloadFileName(),
      types: [
        {
          description: 'PNG image',
          accept: { 'image/png': ['.png'] },
        },
      ],
    });
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
    setStatus(`Saved ${getDownloadFileName()} in the location you selected. Export size: ${exportSize}.`);
    return true;
  } catch (error) {
    if (error.name === 'AbortError') {
      setStatus('Save cancelled.');
      return true;
    }

    console.warn('Save picker failed, using browser download fallback.', error);
    return false;
  }
}

function downloadBlob(blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = getDownloadFileName();
  link.href = url;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

function getDownloadFallbackStatus(exportSize) {
  if (isLikelyMobileBrowser()) {
    return `PNG prepared. Use the browser save/share controls if prompted. Export size: ${exportSize}.`;
  }

  return `Download created. Check your Downloads folder. Export size: ${exportSize}.`;
}

function getImageSizeText(image) {
  return `${image.naturalWidth || image.width} x ${image.naturalHeight || image.height} px`;
}

function getCanvasSizeText() {
  return `${canvas.width} x ${canvas.height} px`;
}

function getSelectedOutputPreset() {
  return outputPresets.find((preset) => preset.value === state.outputPreset) ?? outputPresets[0];
}

function getDownloadFileName() {
  const output = getSelectedOutputPreset();
  const fitSlug = getFitSlug();
  const layoutSlug = state.advancedMode ? `advanced-layout-${fitSlug}` : fitSlug;
  return `${DOWNLOAD_FILE_PREFIX}-${output.slug}-${layoutSlug}-${output.width}x${output.height}.png`;
}

function updateOutputSummary() {
  const output = getSelectedOutputPreset();
  const fitLabel = getFitLabel();
  const layoutLabel = state.advancedMode
    ? `advanced campaign layout, ${fitLabel}`
    : fitLabel;
  outputSummary.textContent = `${output.label} export: ${output.width} x ${output.height} px, ${layoutLabel}.`;
  if (state.image) {
    qualityNote.textContent = `${output.label}: ${output.width} x ${output.height} px`;
    fileSummary.textContent = `Image loaded. ${output.label} export: ${output.width} x ${output.height} px, ${layoutLabel}.`;
  }
}

function getFitSlug() {
  if (state.imageFit === 'stretch') return 'squeeze';
  if (state.imageFit === 'manual') return 'manual-crop';
  if (state.imageFit === 'contain') return 'fit-whole-image';
  return 'centre-crop';
}

function getFitLabel() {
  if (state.imageFit === 'stretch') return 'squeeze to fit';
  if (state.imageFit === 'manual') return 'manual crop; drag preview to position';
  if (state.imageFit === 'contain') return 'fit whole image with padding';
  return 'centre crop';
}

function updateTextSummary() {
  const textParts = [
    state.textHeadline.trim(),
    state.textEmphasis.trim(),
    state.textBody.trim(),
  ].filter(Boolean);

  if (!textParts.length) {
    textSummary.textContent = 'No text overlay added.';
    return;
  }

  const color = textColors.find((item) => item.value === state.textColor)?.label ?? 'Custom';
  const size = textSizes.find((item) => item.value === state.textSize)?.label ?? 'Medium';
  const backing = textBackingStyles.find((item) => item.value === state.textBackingStyle)?.label ?? 'CAWF blue';
  const width = textWidths.find((item) => item.value === state.textWidth)?.label ?? 'Medium';
  const emphasis = state.textEmphasis.trim()
    ? (state.advancedMode ? ', highlight box' : ', red emphasis')
    : '';
  const backingText = state.advancedMode ? 'advanced text panel' : `${backing.toLowerCase()} backing`;
  textSummary.textContent = `${size} ${color.toLowerCase()} campaign text${emphasis}, ${backingText}, ${width.toLowerCase()} line width.`;
}

async function showSavedFile() {
  if (window.cawfDesktop?.revealFile && state.lastSavedPath) {
    try {
      const result = await window.cawfDesktop.revealFile(state.lastSavedPath);
      if (result?.revealed) {
        setStatus(`Showing saved file: ${state.lastSavedPath}.`);
        return;
      }
    } catch (error) {
      console.warn(error);
    }
  }

  try {
    const response = await fetch('open-downloads', { method: 'POST' });
    if (!response.ok) throw new Error('Open Downloads request failed.');
    setStatus(`Opened Downloads folder. Saved file: ${state.lastSavedPath || getDownloadFileName()}.`);
  } catch (error) {
    console.warn(error);
    setStatus(`Please open this folder manually: ${state.lastSavedPath || 'C:\\Users\\Admin\\Downloads'}`);
  }
}

function shouldUseLocalDownloadsHelper() {
  return !isLikelyMobileBrowser();
}

function isLikelyMobileBrowser() {
  const userAgent = navigator.userAgent || '';
  const appleTouchTablet = /Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1;

  return /Android|iPhone|iPad|iPod/i.test(userAgent) || appleTouchTablet;
}

function isStandalonePwa() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}
