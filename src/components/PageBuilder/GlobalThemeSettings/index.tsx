import GrapesJS from 'grapesjs';
import plugin from 'grapesjs-project-manager';
import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.css';
import 'grapesjs/dist/css/grapes.min.css';
import { Eyebrow } from 'payload/components/elements';
import React, { ReactPropTypes, useEffect, useState } from 'react';
import experfy from '../ExperfyPlugin';
import '../index.scss';

import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';

export interface GrapesjsReactProps {
  id: HTMLElement['id'];
  onInit?(editor?: GrapesJS.Editor): void;
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
  const [editor, setEditor] = useState<GrapesJS.Editor>();
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
    const editor = GrapesJS.init({
      container: '#gjs',
      height: '100%',
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
            id: 'style-manager',
            el: '.panel__left',
            active: true,
            label: 'Global Color Collection',
            command: 'show-styles',
            toggle: false,
          },
        ],
      },

      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Global Colors Collection',
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
                options: fontsList,
              },
              {
                type: 'slider',
                name: 'Font Size',
                property: 'font-size',
                units: ['px', 'rem'],
                max: 72,
              },
              {
                type: 'radio',
                name: 'Font Weight',
                property: 'font-weight',
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
                default: '1',
                units: ['px', 'em', 'rem'],
              },
              {
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
                name: 'Border Style',
                property: 'border-style',
                default: 'solid',
                options: borderStyle,
              },
              {
                type: 'color',
                name: 'Border Color',
                property: 'border-color',
                default: '#212e44',
                attributes: {
                  'data-type': 'border-color',
                },
              },
              {
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
                name: 'Font Weight',
                property: 'font-weight',
                default: 'normal',
                options: fontWeight,
              },
              {
                type: 'radio',
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
                type: 'radio',
                name: 'Font Weight',
                property: 'font-weight',
                default: 'normal',
                options: fontWeight,
              },

              {
                type: 'radio',
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
  }, [setEditor]);

  return (
    <div>
      <Eyebrow />
      <div className="editor-canvas">
        <div id="gjs"></div>
      </div>
      <div className="panel__left">
        <div className="styles-container"></div>
      </div>
    </div>
  );
};

export default GlobalThemeSettings;
