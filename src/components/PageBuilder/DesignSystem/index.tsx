import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useState } from 'react';
import '../index.scss';

const borderStyle = [
  { value: 'solid', name: 'Solid' },
  { value: 'dotted', name: 'Dotted' },
  { value: 'dashed', name: 'Dashed' },
  { value: 'none', name: 'None' },
];
const fontWeight = [
  { value: 'light', name: 'light' },
  { value: 'normal', name: 'Normal' },
  { value: 'semi-bold', name: 'Semi Bold' },
  { value: 'bold', name: 'Bold' },
  { value: 'bolder', name: 'Bolder' },
];

const fontsList = [
  { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
  { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
  { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
  { value: 'Comic Sans MS, cursive, sans-serif', name: 'Comic Sans MS' },
  { value: 'Courier New, Courier, monospace', name: 'Courier New' },
  { value: 'Georgia, serif', name: 'Georgia' },
  { value: 'Helvetica, sans-serif', name: 'Helvetica' },
  { value: 'Impact, Charcoal, sans-serif', name: 'Impact' },
  {
    value: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    name: 'Lucida Sans Unicode',
  },
  { value: 'Tahoma, Geneva, sans-serif', name: 'Tahoma' },
  { value: 'Times New Roman, Times, serif', name: 'Times New Roman' },
  { value: 'Trebuchet MS, Helvetica, sans-serif', name: 'Trebuchet MS' },
  { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
];
const DesignSystem: React.FC = () => {
  const [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();

  const url = location.href ? location.href : '';
  let showTheme = false;
  if (url.includes('design-system')) {
    showTheme = false;
  } else {
    showTheme = true;
  }
  useEffect(() => {
    setStepNav([
      {
        label: 'Global Theme Settings',
        url: '/collections/global-theme-settings/design-system',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    const editor = GrapesJS.init({
      container: '#gjs',
      height: '100%',
      fromElement: true,
      showOffsets: true,

      commands: {
        defaults: [
          {
            id: 'save',
            run: (editor, sender) => {
              editor.store(editor.getCss());
            },
          },
          {
            id: 'open-templates',
          },
          {
            id: 'open-pages',
            run: (editor, sender) => {
              console.log('open-pages');
            },
          },
        ],
      },

      storageManager: {
        type: 'indexeddb',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 2,
        options: {
          storeCss: true,
          storeStyles: true,
          storeHtml: true,
          storeComponents: true,
          local: {
            key: 'gts',
            checkLocal: true,
          },
        },
      },

      panels: {
        defaults: [
          // {
          //   id: 'open-styles',
          //   el: '.styles-container',
          //   active: false,
          //   visible: true,
          //   command: 'open-sm',
          //   toggle: true,
          //   buttons: [
          //     {
          //       id: 'open-styles',
          //       className: 'fa fa-cog',
          //       command: 'open-styles',
          //       attributes: {
          //         title: 'Global Theme Settings',
          //       },
          //     },
          //   ],
          // },
          // {
          //   id: 'save',
          //   el: '.panel__top',
          //   visible: true,
          //   toggle: true,
          //   commands: 'save',
          //   buttons: [
          //     {
          //       id: 'save',
          //       className: 'fa fa-floppy-o',
          //       command: 'save',
          //       attributes: {
          //         title: 'Save',
          //       },
          //     },
          //   ],
          // },
          // {
          //   id: 'open-templates',
          //   className: 'fa fa-folder-o',
          //   attributes: {
          //     title: 'Open projects and templates'
          //   },
          //   command: 'open-templates', //Open modal
          // },
          // {
          //   id: 'open-pages',
          //   className: 'fa fa-file-o',
          //   attributes: {
          //     title: 'Take Screenshot'
          //   },
          //   command: 'open-pages',
          //   toggle: false,
          // }
        ],
      },

      styleManager: {
        showComputed: true,

        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Design System',
            open: false,
          },
          {
            name: 'Global Colors Collection',
            open: !showTheme ? true : false,
            buildProps: ['background-color', 'color'],
            properties: [
              {
                type: 'color',
                name: 'Primary',
                property: 'background-color',
                default: '#e6e6e6',
              },
              {
                type: 'color',
                name: 'Secondary',
                property: 'color',
                default: '#4aa4da',
              },
            ],
          },

          {
            name: 'Global Fonts Collection',
            open: !showTheme ? true : false,
            buildProps: [
              'font-family',
              'font-size',
              'font-weight',
              'letter-spacing',
              'line-height',
              'text-align',
              'text-decoration',
              'text-shadow',
              'text-transform',
            ],
            properties: [
              {
                type: 'select',
                name: 'Font Family',
                property: 'font-family',
                ResizeObserver: true,
                options: fontsList,
              },
              {
                type: 'slider',
                name: 'Font Size',
                property: 'font-size',
                units: ['px', 'rem'],
              },
              {
                type: 'select',
                name: 'Font Weight',
                property: 'font-weight',
                ResizeObserver: true,
                default: 'normal',
                options: fontWeight,
              },
              {
                type: 'slider',
                name: 'Letter Spacing',
                property: 'letter-spacing',
                default: 0,
                units: ['px', 'rem'],
              },
              {
                type: 'slider',
                label: 'Line Height',
                name: 'Line Height',
                property: 'line-height',
                ResizeObserver: true,
                default: '1',
                units: ['px', 'rem'],
              },
              {
                type: 'select',
                name: 'Text Align',
                property: 'text-align',
                default: 'left',
                ResizeObserver: true,
                options: [
                  { value: 'left', name: 'Left' },
                  { value: 'center', name: 'Center' },
                  { value: 'right', name: 'Right' },
                  { value: 'justify', name: 'Justify' },
                ],
              },
              {
                type: 'select',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: 'underline', name: 'Underline' },
                  { value: 'line-through', name: 'Line Through' },
                ],
              },
              {
                type: 'select',
                name: 'Text Shadow',
                property: 'text-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                ],
              },
              {
                type: 'select',
                name: 'Text Transform',
                property: 'text-transform',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: 'uppercase', name: 'Uppercase' },
                  { value: 'lowercase', name: 'Lowercase' },
                  { value: 'capitalize', name: 'Capitalize' },
                ],
              },
            ],
          },

          {
            name: 'THEME STYLE',
            open: false,
          },
          {
            name: 'Buttons',
            open: showTheme,
            buildProps: [
              'css-class',
              'button-font-family',
              'button-text-shadow',
              'text-color',
              'background-color',
              'border',
              'padding',
            ],
            properties: [
              {
                type: 'input',
                name: 'CSS Class',
                property: 'css-class',
                attributes: {
                  'data-type': 'css-class',
                },
                default: 'btn btn-primary',
              },
              {
                type: 'select',
                name: 'Font Family',
                property: 'font-family',

                options: fontsList,
              },
              {
                type: 'select',
                name: 'Text Shadow',
                property: 'text-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                ],
              },
              {
                type: 'color',
                name: 'Text Color',
                property: 'color',
                default: '#4aa4da',
              },
              {
                type: 'color',
                prefix: 'Background',
                name: 'Background Color',
                property: 'background-color',
                default: '#4aa4da',
              },

              {
                type: 'slider',
                name: 'Border Radius',
                property: 'border-radius',
                default: 0,
                units: ['px', 'rem'],
              },
              {
                type: 'integer',
                name: 'Border Width',
                property: 'border-width',
                default: 0,
                units: ['px', 'rem'],
              },
              {
                type: 'select',
                name: 'Border Style',
                property: 'border-style',
                default: 'solid',
                options: borderStyle,
              },
              {
                type: 'color',
                name: 'Border Color',
                property: 'border-color',
                default: '#4aa4da',
              },
              {
                type: 'slider',
                name: 'Padding',
                property: 'padding',
                default: 0,
                units: ['px', 'rem'],
              },
            ],
          },
          {
            name: 'Images',
            open: showTheme,
            buildProps: [
              'border-radius',
              'border',
              'box-shadow',
              'opacity',
              'background-position',
            ],
            properties: [
              {
                type: 'slider',
                name: 'Border Radius',
                property: 'border-radius',
                default: 0,
                units: ['px', 'rem'],
              },
              {
                type: 'integer',
                name: 'Border Width',
                property: 'border-width',
                default: 0,
                units: ['px', 'rem'],
              },
              {
                type: 'select',
                name: 'Border Style',
                property: 'border-style',
                default: 'solid',
                options: borderStyle,
              },
              {
                type: 'color',
                name: 'Border Color',
                property: 'border-color',
                default: 'transparent',
              },
              {
                type: 'select',
                name: 'Border Shadow',
                property: 'box-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                ],
              },
              {
                type: 'slider',
                name: 'Opacity',
                property: 'opacity',
                default: '1',
              },
              {
                type: 'integer',
                name: 'Background Position',
                property: 'background-position',
                default: '0 0',
                units: ['px', 'rem'],
              },
            ],
          },
          {
            name: 'Body Text',
            open: showTheme,
            buildProps: [
              'font-family',
              'font-size',
              'font-weight',
              'text-align',
              'text-decoration',
              'letter-spacing',
              'line-height',
            ],
            properties: [
              {
                type: 'select',
                name: 'Font',
                property: 'font-family',
                default: 'Proxima Nova',
                options: fontsList,
              },
              {
                type: 'integer',
                name: 'Font Size',
                property: 'font-size',
                default: 14,
                units: ['px', 'rem'],
              },
              {
                type: 'select',
                name: 'Font Weight',
                property: 'font-weight',
                default: 'normal',
                options: fontWeight,
              },

              {
                type: 'select',
                name: 'Text Align',
                property: 'text-align',
                default: 'left',
                options: [
                  { value: 'left', name: 'Left' },
                  { value: 'center', name: 'Center' },
                  { value: 'right', name: 'Right' },
                  { value: 'justify', name: 'Justify' },
                ],
              },
              {
                type: 'select',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: 'underline', name: 'Underline' },
                  { value: 'line-through', name: 'Line Through' },
                ],
              },
              {
                type: 'slider',
                name: 'Letter Spacing',
                property: 'letter-spacing',
                default: 0,
                units: ['px', 'rem'],
              },
              {
                type: 'slider',
                name: 'Line Height',
                property: 'line-height',
                default: 1,
                units: ['px', 'rem'],
              },
            ],
          },
          {
            name: 'Links',
            open: showTheme,
            buildProps: ['color', 'font-weight', 'text-decoration'],
            properties: [
              {
                type: 'color',
                name: 'Color',
                property: 'color',
                default: '#4a5162',
              },
              {
                type: 'select',
                name: 'Font Weight',
                property: 'font-weight',
                default: 'normal',
                options: fontWeight,
              },
              {
                type: 'select',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: 'underline', name: 'Underline' },
                  { value: 'line-through', name: 'Line Through' },
                ],
              },
            ],
          },
          {
            name: 'Form Fields',
            open: showTheme,
            buildProps: [
              'color',
              'background-color',
              'font-weight',
              'text-decoration',
            ],
            properties: [
              {
                type: 'color',
                name: 'Text Color',
                property: 'text-color',
                default: '#4a5162',
              },
              {
                type: 'color',
                name: 'Background Color',
                property: 'background-color',
                default: 'transparent',
              },
              {
                type: 'select',
                name: 'Font Weight',
                property: 'font-weight',
                default: 'normal',
                options: fontWeight,
              },

              {
                type: 'select',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: 'underline', name: 'Underline' },
                  { value: 'line-through', name: 'Line Through' },
                ],
              },
            ],
          },
        ],
      },
    });

    setEditor(editor);
    editor.onReady((clb) => {
      console.log('Editor is ready');
      editor.StyleManager.addType('input-text', {
        create: function (prop) {
          console.log(prop);
          var input = document.createElement('input');
          input.type = 'text';
          input.value = prop.get();
          input.onchange = function (e) {
            console.log(e.target);
            // prop.set(e.target.value);
          };
          return input;
        },
        update: function (prop, el) {
          el.value = prop.get();
        },
      });

      // Use `$${var}` to avoid escaping
    });
  }, [setEditor]);

  // editor.setDragMode('translate');

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="panel__top"></div>
          <div className="styles-container"></div>
        </div>
        <div id="gjs"></div>
      </div>
    </div>
  );
};

export default DesignSystem;
