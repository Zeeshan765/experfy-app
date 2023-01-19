import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';
import { useAuth, useConfig } from 'payload/components/utilities';

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
  const {
    admin: { user: userSlug },
    routes: { admin },
  } = useConfig();

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
        url: '/collections/design-system',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    let editor = GrapesJS.init({
      container: '#gjs',
      fromElement: true,
      avoidDefaults: true,
      el: '#gjs',

      commands: {
        defaults: [
          {
            id: 'save',
            run: (editor: GrapesJS.Editor) => {
              editor.store(editor.getCss());
            },
          },
        ],
      },

      storageManager: {
        type: 'local',
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

      styleManager: {
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
                attributes: { class: 'gjs-fonts gjs-f-b1' },
              },
              {
                type: 'color',
                name: 'Secondary',
                property: 'color',
                default: '#4a5162',
              },
              {
                type: 'color',
                name: 'Accent Color',
                property: 'accent-color',
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
                options: fontsList,
              },
              {
                type: 'slider',
                name: 'Font Size',
                property: 'font-size',
                default: 16,
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
                label: 'Line Height',
                name: 'Line Height',
                property: 'line-height',
                ResizeObserver: true,
                default: 1,
                units: ['px', 'rem'],
              },
              {
                type: 'radio',
                name: 'Text Align',
                property: 'text-align',
                default: '',
                ResizeObserver: true,
                options: [
                  { value: 'left', name: 'L' },
                  { value: 'center', name: 'C' },
                  { value: 'right', name: 'R' },
                  { value: 'justify', name: 'J' },
                ],
              },
              {
                type: 'radio',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: '&#8416' },
                  { value: 'underline', name: 'U' },
                  { value: 'line-through', name: 'S' },
                ],
              },
              {
                type: 'radio',
                name: 'Text Shadow',
                property: 'text-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'S' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'M' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'B' },
                ],
              },
              {
                type: 'radio',
                name: 'Text Transform',
                property: 'text-transform',
                default: 'none',
                options: [
                  { value: 'none', name: '&#8416' },
                  { value: 'uppercase', name: 'AA' },
                  { value: 'lowercase', name: 'aa' },
                  { value: 'capitalize', name: 'Aa' },
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
              'font-family',
              'text-shadow',
              'color',
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
                type: 'radio',
                name: 'Text Shadow',
                property: 'text-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'S' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'M' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'B' },
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
                type: 'integer',
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
                type: 'radio',
                name: 'Border Shadow',
                property: 'box-shadow',
                default: 'none',
                options: [
                  { value: 'none', name: 'None' },
                  { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'S' },
                  { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'M' },
                  { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'B' },
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
                  { value: 'none', name: '&#8416' },
                  { value: 'underline', name: 'U' },
                  { value: 'line-through', name: 'S' },
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
                type: 'radio',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: '&#8416' },
                  { value: 'underline', name: 'U' },
                  { value: 'line-through', name: 'S' },
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
                type: 'radio',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  { value: 'none', name: '&#8416' },
                  { value: 'underline', name: 'U' },
                  { value: 'line-through', name: 'S' },
                ],
              },
            ],
          },
        ],
      },
    });
  }, [setEditor]);

  // editor.setDragMode('translate');

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="back-blue-panel">
            <span>&#10094;</span>
            <Link to={`${admin}/`}>Global Theme Settings</Link>
            <span>&#9783;</span>
          </div>
          <div className="panel__top"></div>
          <div className="styles-container"></div>
          <div className="panel__basic-actions"></div>
          <div className="panel__switcher"></div>
        </div>
        <div id="gjs"></div>
      </div>
    </div>
  );
};

export default DesignSystem;
