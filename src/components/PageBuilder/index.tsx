import GrapesJS from 'grapesjs';
import React, { PropsWithChildren } from 'react';
import './grapes.min.css';
// import './CustomGrapes.css';
import plugin2 from 'grapesjs-preset-newsletter';
import plugin1 from './vendor/plugins/grapesjs-tailwind/src/';

export interface GrapesjsReactProps {
  id: HTMLElement['id'];

  onInit?(editor?: GrapesJS.Editor): void;

  onDestroy?(): void;
}

function PageBuilder() {

  const [editor, setEditor] = React.useState(null);
  // const myFirstBlock = (editor) => {
  //   var blockManager = editor.BlockManager
  //   // 'my-first-block' is the ID of the block
  //   blockManager.add('my-first-block', {
  //    label: 'Button',
  //    content: {
  //      type: "button",
  //      tagName: 'button',
  //      draggable: false,
  //      attributes: { class: 'container'},
  //      style: { 'background-color': '#ffffff' },
  //      content: "Change Title",
  //    }
  //   });
  //  }
  React.useEffect(() => {
    const editor = GrapesJS.init({
      container: '#editor',
      plugins: [plugin2, plugin1],
      devicePreviewMode: false,
      storageManager: true,
      // panels: { defaults: [] },
    });
    const panelManager = editor.Panels;
    var newPanel = panelManager.addPanel({
      id: 'panelOne',
      className: 'btn-toggles-borders-panelOne',
      style: { color: 'red' },
      visible: true,

      buttons: [
        {
          id: 'visibility',
          active: false, // active by default
          className: 'btn-toggle-borders-panelOne panel-btn',
          label: `<div class="preview"> <div><svg class= "preview-icon"  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityIcon"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>  </div> <div class = "preview-text">Preview</div>`,
          command: 'preview', // Built-in command,
        },
        {
          id: 'visibility2',
          active: true, // active by default
          className: 'pg-builder-save-btn save-panel-btn',
          label: 'save',
          command: 'save', // Built-in command,
        },
        {
          id: 'visibility3',
          active: true, // active by default
          className: 'pg-builder-save-btn publish-btn',
          label: `<div>  <div>Publish</div> </div>`,
          // command: 'preview', // Built-in command,
          content: 'image',
        },
      ],
    });
    var newPanel2 = panelManager.addPanel({
      id: 'panelTwo',
      className: 'btn-toggles-borders-panelTwo',
      style: { color: 'red' },
      visible: true,
      buttons: [
        {
          id: 'history',
          active: true, // active by default
          className: 'btn-toggle-borders-panelTwo',
          label: `<div class="history"> <div><svg fill="#3a4152" class= "history-icon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TimerIcon"><path d="M9 1h6v2H9zm10.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM13 14h-2V8h2v6z"></path></svg></div>`,
          command: 'ammar', // Built-in command,
        },
        {
          id: 'setting',
          active: true, // active by default
          className: 'pg-setting-navbar',
          label:
            ' <div class ="setting"><svg class ="setting-icon" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg></div>',
          // command: 'preview', // Built-in command,
          content: 'image',
        },
      ],
    });
    setEditor(editor);
  }, []);

  return (
    <div className="main__content">
      <div id="editor"></div>
    </div>
  );
}

export default PageBuilder;
