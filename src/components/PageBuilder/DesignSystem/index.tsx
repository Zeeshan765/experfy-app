import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useConfig } from 'payload/components/utilities';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

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
      height: '0%',
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
        autosave: false,
        autoload: false,
        options: {
          storeCss: true,
          storeStyles: true,
          storeHtml: false,
          storeComponents: false,

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
                  {
                    value: 'left',
                    name: `<i class="fa fa-align-left" aria-hidden="true"></i>`,
                  },
                  {
                    value: 'center',
                    name: `<i class="fa fa-align-center" aria-hidden="true"></i>`,
                  },
                  {
                    value: 'right',
                    name: `<i class="fa fa-align-right" aria-hidden="true"></i>`,
                  },
                  {
                    value: 'justify',
                    name: `<i class="fa fa-align-justify" aria-hidden="true"></i>`,
                  },
                ],
              },
              {
                type: 'select',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  {
                    value: 'underline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatUnderlinedIcon"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>',
                  },
                  {
                    value: 'line-through',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StrikethroughSIcon"><path d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21V12z"></path></svg>',
                  },
                  {
                    value: 'overline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatOverlineIcon"><path d="M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></svg>',
                  },
                ],
              },
              {
                type: 'stack',
                property: 'text-shadow',
                properties: [
                  {
                    type: 'number',
                    units: ['px'],
                    default: '0',
                    property: 'x',
                  },
                  {
                    type: 'number',
                    units: ['px'],
                    default: '0',
                    property: 'y',
                  },
                  {
                    type: 'number',
                    units: ['px'],
                    default: '0',
                    property: 'blur',
                  },
                  { type: 'color', default: 'black', property: 'color' },
                ],
              },

              {
                type: 'select',
                name: 'Text Transform',
                property: 'text-transform',
                default: 'none',
                options: [
                  { value: 'uppercase', name: '<span>TT</span>' },
                  { value: 'lowercase', name: '<span>tt</span>' },
                  { value: 'capitalize', name: '<span>Tt</span>' },
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
                  {
                    value: 'left',
                    name: `<i class="fa fa-align-left" aria-hidden="true"></i>`,
                  },
                  {
                    value: 'center',
                    name: `<i class="fa fa-align-center" aria-hidden="true"></i>`,
                  },
                  {
                    value: 'right',
                    name: `<i class="fa fa-align-right" aria-hidden="true"></i>`,
                  },
                  {
                    value: 'justify',
                    name: `<i class="fa fa-align-justify" aria-hidden="true"></i>`,
                  },
                ],
              },
              {
                type: 'select',
                name: 'Text Decoration',
                property: 'text-decoration',
                default: 'none',
                options: [
                  {
                    value: 'underline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatUnderlinedIcon"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>',
                  },
                  {
                    value: 'line-through',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StrikethroughSIcon"><path d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21V12z"></path></svg>',
                  },
                  {
                    value: 'overline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatOverlineIcon"><path d="M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></svg>',
                  },
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
            buildProps: ['color', 'font-weight'],
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
                  {
                    value: 'underline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatUnderlinedIcon"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>',
                  },
                  {
                    value: 'line-through',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StrikethroughSIcon"><path d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21V12z"></path></svg>',
                  },
                  {
                    value: 'overline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatOverlineIcon"><path d="M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></svg>',
                  },
                ],
              },
            ],
          },
          {
            name: 'Form Fields',
            open: showTheme,
            buildProps: ['color', 'background-color', 'font-weight'],
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
                  {
                    value: 'underline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatUnderlinedIcon"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>',
                  },
                  {
                    value: 'line-through',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StrikethroughSIcon"><path d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21V12z"></path></svg>',
                  },
                  {
                    value: 'overline',
                    name: '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatOverlineIcon"><path d="M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></svg>',
                  },
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
          <div className="back__panel panel-header">
            <Link className="panel-header__link" to={`${admin}/`}>
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <span className="panel-header__title">Global Theme Settings</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
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
