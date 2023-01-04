import GrapesJS from 'grapesjs';
import React from 'react';
import '../../index.scss';
import plugin1 from '../Header/vendor/plugins/grapesjs-tailwind/src/index';
import { Eyebrow } from 'payload/components/elements';

const Header = () => {
  const [editorState, setEditorState] = React.useState<GrapesJS.Editor>();

  React.useEffect(() => {
    const editor = GrapesJS.init({
      container: '#editor',
      height: '100%',
      plugins: [plugin1],
      showDevices: false,
      styleManager: {
        appendTo: '.styles-container',
      },
      traitManager: false,
      fromElement: true,
      commands: {
        defaults: [],
      },
      panels: {
        defaults: [],
      },
      blockManager: {
        appendTo: '.styles-container',
        blocks: [],
      },
    });

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
      buttons: [
        {
          id: 'open-assets',
          className: 'fa fa-folder-open',
          command: 'open-assets',
          attributes: { title: 'Open Assets' },
        },

        {
          id: 'open-style',
          className: 'fa fa-paint-brush',
          command: 'open-style',
          attributes: { title: 'Open Style' },
        },
      ],
    });
    editor.Commands.add('open-assets', {
      run(editor) {
        editor.Modal.setTitle('Assets');
        editor.Modal.setContent(`
        <div class="modal-form">
          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" id="image" name="image" accept="image/*">
          </div>
          <div class="form-group">
            <label for="video">Video</label>
            <input type="file" id="video" name="video" accept="video/*">
          </div>
        </div>
      `);
        editor.Modal.open();
        editor.Modal.getContentEl().querySelector('input').focus();
      },
    });
    setEditorState(editor);
    // editor.DomComponents.addType('text', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'text-title',
    //           label: 'Title',
    //           placeholder: 'Enter your title ',
    //           className: 'custom-text',
    //         },
    //         {
    //           type: 'text',
    //           name: 'text-link',
    //           label: 'Link',
    //           placeholder: 'Paste URL or Type ',
    //           class: 'custom-link',
    //         },
    //         {
    //           type: 'select',
    //           name: 'text-size',
    //           label: 'Size',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'small', name: 'Small' },
    //             { id: 'medium', name: 'Medium' },
    //             { id: 'large', name: 'Large' },
    //             { id: 'xl', name: 'XL' },
    //             { id: 'xxl', name: 'XXL' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'text-html-tag',
    //           label: 'HTML Tag',
    //           default: 'h1',
    //           options: [
    //             { id: 'h1', name: 'H1' },
    //             { id: 'h2', name: 'H2' },
    //             { id: 'h3', name: 'H3' },
    //             { id: 'h4', name: 'H4' },
    //             { id: 'h5', name: 'H5' },
    //             { id: 'h6', name: 'H6' },
    //             { id: 'div', name: 'div' },
    //             { id: 'span', name: 'span' },
    //             { id: 'p', name: 'p' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'text-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //             { id: 'justified', name: 'Justified' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });
  }, [setEditorState]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="panel__top"></div>
          <div className="styles-container"></div>
        </div>
        <div id="editor"></div>
      </div>
    </div>
  );
};
export default Header;
