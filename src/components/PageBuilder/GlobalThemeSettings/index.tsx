import * as GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import basic from 'grapesjs-blocks-basic';
import React, { useEffect, useState } from 'react';
import '../index.scss';



export interface GrapesjsReactProps {
  id: HTMLElement['id'];
  onInit?(editor?: GrapesJS.default.Editor): void;
  onDestroy?(): void;
}
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
  { value: 'proxima-nova', name: 'Proxima Nova' },
  { value: 'Roboto', name: 'Roboto' },
  { value: 'Open Sans', name: 'Open Sans' },
  { value: 'Lato', name: 'Lato' },
  { value: 'Montserrat', name: 'Montserrat' },
  { value: 'Raleway', name: 'Raleway' },
  { value: 'Oswald', name: 'Oswald' },
  { value: 'Lora', name: 'Lora' },
  { value: 'Merriweather', name: 'Merriweather' },
  { value: 'Playfair Display', name: 'Playfair Display' },
  { value: 'Nunito', name: 'Nunito' },
  { value: 'Poppins', name: 'Poppins' },
  { value: 'Source Sans Pro', name: 'Source Sans Pro' },
  { value: 'PT Sans', name: 'PT Sans' },
  { value: 'PT Serif', name: 'PT Serif' },
  { value: 'Work Sans', name: 'Work Sans' },
  { value: 'Noto Sans', name: 'Noto Sans' },
  { value: 'Noto Serif', name: 'Noto Serif' },
  { value: 'Muli', name: 'Muli' },
  { value: 'Rubik', name: 'Rubik' },
  { value: 'Quicksand', name: 'Quicksand' },
  { value: 'Fira Sans', name: 'Fira Sans' },
  { value: 'Dosis', name: 'Dosis' },
  { value: 'Ubuntu', name: 'Ubuntu' },
  { value: 'Titillium Web', name: 'Titillium Web' },
  { value: 'Varela Round', name: 'Varela Round' },
  { value: 'Exo 2', name: 'Exo 2' },
  { value: 'Cabin', name: 'Cabin' },
  { value: 'Fjalla One', name: 'Fjalla One' },
  { value: 'Francois One', name: 'Francois One' },
];
const GlobalThemeSettings: React.FC<GrapesjsReactProps> = () => {
  const [editor, setEditor] = useState<GrapesJS.default.Editor>();
  const { setStepNav } = useStepNav();


  useEffect(() => {
    setStepNav([
      {
        label: 'Global Theme Settings',
        url: '/collections/global-theme-settings',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    const editor = GrapesJS.default.init({
      container: '#gjs',
      height: '100%',
      fromElement: true,
      nativeDnD: true,
      storageManager: {
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
          local: {
            key: 'global-theme-settings',
          },
        },
      },


      panels: {

        defaults: [
          {
            id: 'global-style',
            el: '.panel__left',
            active: true,
            label: 'Global Theme Settings',

          },
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
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Global Colors Collection',
            default: true,
            hideNotStylable: true,
            highlightChanged: true,
            highlightComputed: true,
            icon: 'fa fa-paint-brush',
            open: true,
            buildProps: ['background-color', 'color'],
            properties: [
              {
                type: 'color',
                name: 'Primary',
                property: 'background-color',
                default: '#e6e6e6',
                attributes: {
                  'data-type': 'background-color',
                },
              },
              {
                type: 'color',
                name: 'Secondary',
                property: 'color',
                default: '#4aa4da',
                attributes: {
                  'data-type': 'color',
                },
              },
            ],
          },
          {
            name: 'Global Fonts Collection',
            open: false,
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
                default: 'Roboto',
                ResizeObserver: true,
                options: fontsList,
              },
              {
                type: 'slider',
                name: 'Font Size',
                ResizeObserverSize: 'font-size',

                property: 'font-size',
                units: ['px', 'rem'],
              },
              {
                type: 'select',
                name: 'Font Weight',
                property: 'font-weight',
                ResizeObserver: 'font-weight',
                default: 'normal',
                options: fontWeight,
              },
              {
                type: 'slider',
                name: 'Letter Spacing',

                property: 'letter-spacing',
                default: '0',
                units: ['px', 'rem'],
              },
              {
                type: 'integer',
                name: 'Line Height',
                property: 'line-height',
                ResizeObserver: 'letter-spacing',
                default: '1',
                units: ['px', 'em', 'rem'],
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
            name: 'Global Border Collection',
            open: false,
            buildProps: ['border-radius', 'border', 'box-shadow'],
            properties: [
              {
                type: 'integer',
                name: 'Border Radius',
                property: 'border-radius',
                default: '0',
                units: ['px', '%'],

              }, {
                type: 'integer',
                name: 'Border Width',
                property: 'border-width',
                default: '0',
                units: ['px', '%'],

              },
              {
                type: 'select',
                name: 'Border Style',
                property: 'border-style',
                default: 'solid',
                options: [
                  { value: 'solid', name: 'Solid' },
                  { value: 'dotted', name: 'Dotted' },
                  { value: 'dashed', name: 'Dashed' },
                  { value: 'double', name: 'Double' },
                  { value: 'groove', name: 'Groove' },
                  { value: 'ridge', name: 'Ridge' },
                  { value: 'inset', name: 'Inset' },
                  { value: 'outset', name: 'Outset' },
                  { value: 'none', name: 'None' },
                  { value: 'hidden', name: 'Hidden' },
                ],

              },

              {
                type: 'select',
                name: 'Box Shadow',
                property: 'box-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                ],
              },
            ],
          },
          {
            name: 'Buttons',
            open: false,
            buildProps: [
              'background-color',
              'border-radius',
              'border',
              'box-shadow',
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
                default: 'Proxima Nova',
                options: fontsList,
              },
              {
                type: 'slider',
                name: 'Font Size',
                property: 'font-size',
                default: '14',
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
            name: 'Images',
            open: false,
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
                default: 'X Y',
                units: ['px', 'em', 'rem'],
              },
            ],
          },
          {
            name: 'Body Text',
            open: false,
            buildProps: [
              'font-family',
              'font-size',
              'font-weight',
              'letter-spacing',
              'line-height',
              'text-align',
              'text-decoration',
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
            ],
          },
          {
            name: 'Links',
            open: false,
            buildProps: ['color', 'font-weight', 'text-decoration'],
            properties: [
              {
                type: 'color',
                name: 'Color',
                property: 'text-color',
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
            open: false,
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
    editor.onReady(clb => {
      console.log('Editor is ready');
      
    });

  }, [setEditor]);



  // editor.setDragMode('translate');


  return (
    <div className='main__content'>
      <Eyebrow />
      <div className="editor-row">
        {/* <div className="panel__top">
          <div className="panel__basic-actions"></div>
        </div> */}
        <div className="panel__left">
          <div className="styles-container"></div>
        </div>
        <div className="editor-canvas">
          <div id="gjs"></div>
        </div>
        
      </div>
      
    </div>
  );
};

export default GlobalThemeSettings;
