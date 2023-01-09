import GrapesJS from 'grapesjs';
import React from 'react';
import plugin1 from './vendor/plugins/grapesjs-tailwind/src/index';

const NewPageBuilder = () => {
  const [editorState, setEditorState] = React.useState<GrapesJS.Editor>();

  React.useEffect(() => {
    const editor = GrapesJS.init({
      container: '#editor-row',
      fromElement: true,
      plugins: [plugin1],
      height: '100%',
      autorender: true,
      storageManager: {
        type: 'local',
        autoload: true,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
          local: {
            key: 'gts',
          },
        },
      },
      canvas: {
        styles: ['../index.scss'],
      },
      styleManager: {
        sectors: [
          {
            name: 'General',
            open: false,
            buildProps: ['display', 'position'],
          },
          {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'margin', 'padding'],
          },
          {
            name: 'Decorations',
            open: false,
            buildProps: ['background-color'],
          },
        ],
        clearProperties: false,
        appendTo: '.styles-container',
      },
    });

    setEditorState(editor);

    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'text-title',
              label: 'Title',
              placeholder: 'Enter your title ',
              className: 'custom-text',
            },
            {
              type: 'text',
              name: 'text-link',
              label: 'Link',
              placeholder: 'Paste URL or Type ',
              class: 'custom-link',
            },
            {
              type: 'select',
              name: 'text-size',
              label: 'Size',
              default: 'default',
              options: [
                { id: 'default', name: 'Default' },
                { id: 'small', name: 'Small' },
                { id: 'medium', name: 'Medium' },
                { id: 'large', name: 'Large' },
                { id: 'xl', name: 'XL' },
                { id: 'xxl', name: 'XXL' },
              ],
            },

            {
              type: 'select',
              name: 'text-html-tag',
              label: 'HTML Tag',
              default: 'h1',
              options: [
                { id: 'h1', name: 'H1' },
                { id: 'h2', name: 'H2' },
                { id: 'h3', name: 'H3' },
                { id: 'h4', name: 'H4' },
                { id: 'h5', name: 'H5' },
                { id: 'h6', name: 'H6' },
                { id: 'div', name: 'div' },
                { id: 'span', name: 'span' },
                { id: 'p', name: 'p' },
              ],
            },
            {
              type: 'select',
              name: 'text-alignment',
              label: 'Alignment',
              default: 'left',
              options: [
                { id: 'left', name: 'Left' },
                { id: 'center', name: 'Center' },
                { id: 'right', name: 'Right' },
                { id: 'justified', name: 'Justified' },
              ],
            },
          ],
        },
      },
      // canvas: {
      //   styles: ['../index.scss'],
      // },
      // styleManager: {
      //   sectors: [
      //     {
      //       name: 'General',
      //       open: false,
      //       buildProps: ['display', 'position'],
      //     },
      //     {
      //       name: 'Dimension',
      //       open: false,
      //       buildProps: ['width', 'height', 'margin', 'padding'],
      //     },
      //     {
      //       name: 'Decorations',
      //       open: false,
      //       buildProps: ['background-color'],
      //     },
      //   ],
      //   clearProperties: false,
      //   appendTo: '.styles-container',
      // },

      // panels: {
      //   defaults: [
      //     {
      //       id: 'panel-switcher',
      //       el: '.panel__left',
      //       active: true,
      //       label: 'General Styles',
      //       enable: true,
      //     },
      //     {
      //       id: 'save',
      //       el: '.panel__top',
      //       visible: true,
      //       label: 'Save',
      //       toggle: false,
      //       buttons: [
      //         {
      //           id: 'save',
      //           className: 'fa fa-floppy-o',
      //           command: 'save',
      //           attributes: {
      //             title: 'Save',
      //           },
      //         },
      //       ],
      //     },
      //     // {
      //     //   id: 'open-templates',
      //     //   className: 'fa fa-folder-o',
      //     //   attributes: {
      //     //     title: 'Open projects and templates'
      //     //   },
      //     //   command: 'open-templates', //Open modal
      //     // },
      //     // {
      //     //   id: 'open-pages',
      //     //   className: 'fa fa-file-o',
      //     //   attributes: {
      //     //     title: 'Take Screenshot'
      //     //   },
      //     //   command: 'open-pages',
      //     //   toggle: false,
      //     // }
      //   ],
      // },
    });
  }, []);

  return (
    <div className="main">
      <div id="editor"></div>
      <div className="myblocks"></div>
      <div className="styles-container"></div>
    </div>
  );
};
export default NewPageBuilder;
