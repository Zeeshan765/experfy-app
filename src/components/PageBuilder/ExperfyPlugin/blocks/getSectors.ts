import GrapesJS from 'grapesjs';
const fontFamilies = [
  { value: 'proxima-nova', name: 'Proxima Nova' },
  { value: 'Arial', name: 'Arial' },
  { value: 'Arial Black', name: 'Arial Black' },
  { value: 'Brush Script MT', name: 'Brush Script MT' },
  {
    value: 'Comic Sans MS',
    name: 'Comic Sans MS',
  },
  { value: 'Courier New', name: 'Courier New' },
  { value: 'Georgia, serif', name: 'Georgia' },
  { value: 'Helvetica', name: 'Helvetica' },
  { value: 'Impact', name: 'Impact' },
  {
    value: 'Lucida Sans Unicode',
    name: 'Lucida Sans Unicode',
  },
  { value: 'Tahoma, Geneva', name: 'Tahoma' },
  { value: 'Times New Roman', name: 'Times New Roman' },
  {
    value: 'Trebuchet MS',
    name: 'Trebuchet MS',
  },
  { value: 'Verdana', name: 'Verdana' },
];

const borderStyleOptions = [
  { value: 'none', name: 'None' },
  { value: 'solid', name: 'Solid' },
  { value: 'dotted', name: 'Dotted' },
  { value: 'dashed', name: 'Dashed' },
  { value: 'double', name: 'Double' },
  { value: 'groove', name: 'Groove' },
  { value: 'ridge', name: 'Ridge' },
  { value: 'inset', name: 'Inset' },
  { value: 'outset', name: 'Outset' },
];

const fontWeightOptions = [
  { value: '100', name: '100' },
  { value: '200', name: '200' },
  { value: '300', name: '300' },
  { value: '400', name: '400' },
  { value: '500', name: '500' },
  { value: '600', name: '600' },
  { value: '700', name: '700' },
];

const textDecorationOptions = [
  {
    value: 'underline',
    name: `<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatUnderlinedIcon"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>`,
  },
  {
    value: 'line-through',
    name: `<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StrikethroughSIcon"><path d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21V12z"></path></svg>`,
  },
  {
    value: 'overline',
    name: `<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FormatOverlineIcon"><path d="M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path></svg>`,
  },
];

const textAlignOptions = [
  {
    value: 'left',
    name: `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 4.5H3" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9.5H3" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M21 14.5H3" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 19.5H3" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
  },
  {
    value: 'center',
    name: `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M3 4.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 9.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M3 14.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
  },
  {
    value: 'right',
    name: `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M3 4.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.5293 9.5H20.9993" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M3 14.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.5293 19.5H20.9993" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
  },
  {
    value: 'justify',
    name: `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 4.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.26001 9.5H16.74" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 14.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.26001 19.5H16.74" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,
  },
];

const textTransformOptions = [
  { value: 'uppercase', name: '<span>TT</span>' },
  { value: 'lowercase', name: '<span>tt</span>' },
  { value: 'capitalize', name: '<span>Tt</span>' },
];

const fontStyle = [
  { value: 'bold', name: '<strong>B</strong>' },
  { value: 'italic', name: '<i>I</i>' },
  { value: 'underline', name: '<u>U</u>' },
];

const makeId = () => {
  let ID = 'c';
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 5; i++) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
  return ID;
};

let State = {
  name: 'State',
  type: 'radio',
  id: makeId(),
  cid: makeId(),
  options: [
    { value: '', name: 'Normal' },
    { value: 'hover', name: 'Hover' },
  ],
  property: 'selector',
  onChange: (e) => {
    console.log(e);
    if (e.value === 'hover') _editor.SelectorManager.add('hover');
    else _editor.SelectorManager.remove('hover');
    // else _editor.SelectorManager.re
  },
};

const shadowOptions = (which: String) => {
  return {
    name: which + ' Shadow',
    type: 'stack',
    property: which.toLowerCase() + '-shadow',
    detached: false,
    properties: [
      {
        type: 'color',
        name: 'Color',
        property: 'color',
        default: '#000',
      },
      {
        type: 'number',
        name: 'X',
        property: 'offset-x',
        default: 0,
        units: ['px'],
      },
      {
        type: 'number',
        name: 'Y',
        property: 'offset-y',
        default: 0,
        units: ['px'],
      },
      {
        type: 'number',
        name: 'Blur',
        property: 'blur-radius',
        default: 0,
        units: ['px'],
      },
      {
        type: 'number',
        name: 'Spread',
        property: 'spread-radius',
        default: 0,
        units: ['px'],
      },
      {
        type: 'select',
        name: 'Position',
        property: 'shadow-position',
        default: 'outset',
        options: [
          { value: 'outset', name: 'Outset' },
          { value: 'inset', name: 'Inset' },
        ],
      },
    ],
  };
};

let color = {
  id: makeId(),
  cid: makeId(),
  type: 'color',
  name: 'Color',
  property: 'color',
  // default: '#ea4c89',
  colorPicker: {
    preferredFormat: 'hex',
    showInput: true,
  },
};
let backgroundColor = {
  id: makeId(),
  cid: makeId(),
  type: 'color',
  name: 'Background Color',
  property: 'background-color',
  // default: '#ea4c89',
  colorPicker: {
    preferredFormat: 'hex',
    showInput: true,
  },
};
let typography = {
  type: 'stack',
  name: 'Typography',
  detached: true,
  preview: false,

  properties: [
    {
      id: makeId(),
      cid: makeId(),
      type: 'select',
      name: 'Font Family',
      property: 'font-family',
      default: 'proxima-nova',
      options: fontFamilies,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'slider',
      name: 'Font Size',
      property: 'font-size',
      // default: 14,
      unit: 'px',
      min: 8,
      max: 72,
      step: 1,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'select',
      name: 'Font Weight',
      property: 'font-weight',
      // default: '400',
      options: fontWeightOptions,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'radio',
      label: 'Text Transform',
      property: 'text-transform',
      default: 'none',
      options: textTransformOptions,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'radio',
      name: 'Text Align',
      property: 'text-align',
      // default: 'center',
      options: textAlignOptions,
    },
    {
      type: 'slider',
      Name: 'Letter Spacing',
      property: 'letter-spacing',
      // default: 0,
      unit: 'px',
      min: 0,
      max: 15,
      step: 1,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'slider',
      name: 'Line Height',
      property: 'line-height',
      // default: 1,
      unit: 'px',
      min: 0,
      max: 15,
      step: 0.1,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'slider',
      name: 'Paragraph Spacing',
      property: 'margin-bottom',
      // default: 1,
      unit:'px',
      min: 0,
      max: 15,
    
    },
  ],
};

let HtmlTag = {
  type: 'select',
  name: 'HTML Tag',
  property: 'html-tag',
  default: 'H1',
  options: [
    { value: 'div', name: 'Div' },
    { value: 'h1', name: 'H1' },
    { value: 'h2', name: 'H2' },
    { value: 'h3', name: 'H3' },
    { value: 'h4', name: 'H4' },
    { value: 'h5', name: 'H5' },
    { value: 'h6', name: 'H6' },
    { value: 'p', name: 'P' },
    { value: 'span', name: 'Span' },
  ],
};

const widthOptions = [
  {
    type: 'number',
    units: ['px'],
    default: 0,
    property: 'top',
    name: 'Top',
  },
  {
    type: 'number',
    units: ['px'],
    default: 0,
    property: 'right',
    name: 'Right',
  },
  {
    type: 'number',
    units: ['px'],
    default: 0,
    property: 'bottom',
    name: 'Bottom',
  },
  {
    type: 'number',
    units: ['px'],
    default: 0,
    property: 'left',
    name: 'Left',
  },
];



let NumbersProp=[
  {
    type: 'color',
    name: 'Number',
    property: 'color',
    colorPicker: {
      preferredFormat: 'hex',
      showInput: true,
    },
  },
  {
    type: 'select',
    name: 'Number Font',
    property: 'font-family',
    defaults: 'Arial, Helvetica, sans-serif',
    options: fontFamilies,
  },
  {
    type: 'select',
    name: 'Weight',
    property: 'font-weight',
    default: 'default',
    options: fontWeightOptions,
  },
  {
    type: 'radio',
    name: 'Font Style',
    property: 'font-style',
    default: 'default',

    options: [
      {
        value: 'bold',
        name: '<span>B</span>',
      },
      {
        value: 'italic',
        name: '<span style="font-style: italic;">I</span>',
      },
      {
        value: 'underline',
        name: '<span  style="font-style: underline;">U</span>',
      },
    ],
  },

  {
    type: 'radio',
    name: 'Transform',
    property: 'text-transform',
    default: 'default',
    options: [
      { value: 'uppercase', name: '<span>TT</span>' },
      { value: 'lowercase', name: '<span>tt</span>' },
      { value: 'capitalize', name: '<span>Tt</span>' },
    ],
  },
  {
    type: 'radio',
    name: 'Decoration',
    property: 'text-decoration',
    default: 'default',
    options: textDecorationOptions,
  },
];

let NumbersDescription = [
  {
    type: 'color',
    name: 'Color',
    property: 'color',
    colorPicker: {
      preferredFormat: 'hex',
      showInput: true,
    },
  },
  {
    type: 'select',
    name: 'Text Font',
    property: 'font-family',
    default: 'Arial, Helvetica, sans-serif',
    options: fontFamilies,
  },
  {
    type: 'slider',
    name: 'Text Font Size',
    property: 'font-size',
    default: 14,
    units: ['px', 'em', 'rem'],
  },
  {
    type: 'select',
    name: 'Weight',
    property: 'font-weight',
    default: 'default',
    options: fontWeightOptions,
  },
  {
    type: 'radio',
    name: 'Font Style',
    property: 'font-style',
    default: 'default',

    options: [
      {
        value: 'bold',
        name: '<span>B</span>',
      },
      {
        value: 'italic',
        name: '<span style="font-style: underline;"></span>',
      },
      {
        value: 'underline',
        name: '<span  style="font-style: underline;">U</span>',
      },
    ],
  },

  {
    type: 'radio',
    name: ' Transform',
    property: 'text-transform',
    default: 'default',
    options: [
      { value: 'uppercase', name: '<span>TT</span>' },
      { value: 'lowercase', name: '<span>tt</span>' },
      { value: 'capitalize', name: '<span>Tt</span>' },
    ],
  },
  {
    type: 'radio',
    name: 'Decoration',
    property: 'text-decoration',
    default: 'default',
    options: textDecorationOptions,
  },
  {
    type: 'slider',
    name: 'Letter Spacing',
    property: 'letter-spacing',
    default: '0 px',
    units: ['px', 'rem'],
  },
  {
    type: 'slider',
    name: 'Line Height',
    property: 'line-height',
    ResizeObserver: true,
    default: '1',
    units: ['px', 'em', 'rem'],
  },
  {
    type: 'slider',
    name: 'Paragraph Spacing',
    property: 'margin-bottom',
    ResizeObserver: true,
    default: '1',
    units: ['px', 'em', 'rem'],
  },
];


let NumbersBorder= [
  {
    type: 'color',
    name: 'Border Color',
    property: 'border-color',
    colorPicker: {
      preferredFormat: 'hex',
      showInput: true,
    },
  },

  {
    type: 'composite',
    name: 'Border Width',
    property: 'border-width',
    properties: widthOptions,
  },
];














const obj = {
  headerSector: [
    {
      name: 'Background',
      open: false,
      id: 'header-gym',
      buildProps: ['background'],
      // properties: [backgroundColor],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          // default: '#ea4c89',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },

    {
      name: 'Header Text Color',
      open: false,
      id: 'a',

      properties: [typography, color],
    },
    {
      name: 'Logo',
      open: false,
      id: 'header-svg',
      buildProps: ['animation-name', 'backdrop-filter'],

      properties: [
        {
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        },
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          preferredFormat: 'hex',
          showInput: true,
        },

        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },
        {
          type: 'select',
          name: 'Border Style',
          property: 'border-style',
          options: borderStyleOptions,
        },
        {
          type: 'slider',
          name: 'Width',
          property: 'width',
        
          min: 0,
          max: 100,
          units: ['%', 'px'],
        },

        {
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          // default: 1,
          step: 1,
          min: 0,
          max: 100,
          units: ['%'],
        },
        {
          name: 'Blur',
          type: 'slider',
          property: {
            name: 'backdrop-filter',
            defaults: 'blur(1px)',
          },
          min: 1,
          max: 10,
          steps: 1,
          units: ['px'],
          // property: `backdrop-filter: blur(${0}px);`,
          onChange: ({ property, from, to }) => {
            console.log(`Changed property`, property.getName(), { from, to });
            return `property: ${property.getName()}(${to}${
              property.getUnits()[0]
            })`;
          },
        },

        {
          type: 'number',
          name: 'Brightness',
          property: 'backdrop-filter: brightness(100%)',
        },
        {
          type: 'number',
          name: 'Contrast',
          property: 'backdrop-filter',
          default: 'contrast(100%)',
        },
        {
          type: 'select',
          name: 'Saturation',
          property: 'backdrop-filter',
          default: 'saturate(100%)',
        },
        {
          type: 'select',
          name: 'Hover Text Animation',
          property: 'animation-name',
          default: 'none',
          options: [
            { value: 'none', name: 'None' },
            { value: 'bounce', name: 'Bounce' },
            { value: 'flash', name: 'Flash' },
            { value: 'pulse', name: 'Pulse' },
            { value: 'rubberBand', name: 'Rubber Band' },
            { value: 'shake', name: 'Shake' },
            { value: 'swing', name: 'Swing' },
          ],
        },
        {
          type: 'slider',
          name: 'Transition Duration',
          property: 'animation-duration',
          default: '1s',
          units: ['s'],
        },
      ],
    },
    {
      name: 'Logo Text',
      open: false,
      id: 'header-logo-text',
      properties: [color, typography],
    }

    // {
    //   name: 'Border',
    //   open: false,
    //   id: 'header-bd',
    //   properties: [
    //     {
    //       type: 'color',
    //       name: 'Border Color',
    //       property: 'border-color',
    //       colorPicker: {
    //         preferredFormat: 'hex',
    //         showInput: true,
    //       },
    //     },
    //     {
    //       type: 'composite',
    //       name: 'Border Width',
    //       property: 'border-width',
    //       properties: widthOptions,
    //     },
    //     {
    //       type: 'select',
    //       name: 'Border Style',
    //       property: 'border-style',
    //       options: borderStyleOptions,
    //     },
    //   ],
    // },
    // {
    //   name: 'Divider',
    //   open: true,
    //   properties: [
    //     {
    //       type: 'color',
    //       name: 'Color',
    //       property: 'color',
    //       colorPicker: {
    //         preferredFormat: 'hex',
    //         showInput: true,
    //       },
    //     },
    //     {
    //       type: 'slider',
    //       name: 'Weight',
    //       property: 'height',
    //       default: 2,
    //       units: 'px',
    //     },
    //     {
    //       type: 'slider',
    //       name: 'Gap',
    //       property: 'gap',
    //       default: 0,
    //       units: 'px',
    //     },
    //   ],
    // },
    // {
    //   name: 'Social Media',
    //   open: true,

    //   properties: [
    //     {
    //       type: 'color',
    //       name: 'Color',
    //       property: 'color',
    //       colorPicker: {
    //         preferredFormat: 'hex',
    //         showInput: true,
    //       },
    //       attributes: {
    //         'data-type': 'color',
    //       },
    //     },
    //     {
    //       type: 'color',
    //       name: 'Border Color',
    //       property: 'border-color',
    //       colorPicker: {
    //         preferredFormat: 'hex',
    //         showInput: true,
    //       },
    //     },
    //     {
    //       type: 'composite',
    //       name: 'Border Width',
    //       property: 'border-width',
    //       properties: widthOptions,
    //     },
    //     {
    //       type: 'select',
    //       name: 'Border Style',
    //       property: 'border-style',
    //       options: borderStyleOptions,
    //     },
    //     {
    //       type: 'slider',
    //       name: 'Size',
    //       property: 'width',
    //       default: '14px',
    //       attributes: {
    //         'data-type': 'width',
    //         'data-target': 'social-media',
    //       },
    //     },
    //     {
    //       type: 'slider',
    //       name: 'Padding',
    //       property: 'padding',
    //       buildProps: ['padding'],
    //       dheadingefault: '10px',
    //       units: 'px',
    //     },
    //     {
    //       type: 'slider',
    //       name: 'Spacing',
    //       property: 'letter-spacing',
    //       default: '5px',
    //       units: 'px',
    //     },
    //     {
    //       type: 'slider',
    //       name: 'Rows Gap',
    //       property: 'gap',
    //       default: '10px',
    //       units: 'px',
    //     },
    //   ],
    // },
  ],
  footerSector: [
    {
      name: 'Main Heading',
      open: false,
      id: 'main-footer-heading',
      properties: [color, typography],
    },
    {
      name: 'Sub Heading',
      open: false,
      id: 'sub-footer-heading',
      properties: [color, typography],
    },
    {
      name: 'Image Gallery',
      open: false,
      id: 'footer-image',
      buildProps: ['border-radius', 'border-width'],
      properties: [
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },

        {
          type: 'slider',
          name: 'Spacing',
          property: 'padding',

          default: '1',
          units: ['px', 'em', 'rem'],
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          default: 'solid',

          options: borderStyleOptions,
        },
      ],
    },
    {
      name: 'Gallery Caption',
      open: false,
      id: 'img-caption',
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: 'show',

          options: [
            { value: 'block', name: 'Show' },
            { value: 'none', name: 'Hide' },
          ],
        },
        color,
        typography,
      ],
    },
    {
      name: 'Button Border',
      open: false,
      id: 'footer-btn',
      buildProps: ['border-radius', 'border-style', 'box-shadow'],
      properties: [
        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },
    {
      name: 'Icon List',
      open: true,
      properties: [
        {
          type: 'slider',
          name: 'Space Between',
          property: 'gap',
          default: '10px',
          units: 'px',
        },
        {
          type: 'radio',
          name: 'Alignment',
          property: 'align-items',
          default: 'left',
          options: [
            { value: 'left', name: 'Left' },
            { value: 'center', name: 'Center' },
            { value: 'right', name: 'Right' },
          ],
        },
      ],
    },
    {
      name: 'Social Media Icons',
      open: true,
      buildProps: ['border-radius', 'border-style'],
      properties: [
        {
          type: 'color',
          name: 'Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Size',
          property: 'width',
          default: '14px',
          units: 'px',
          attributes: {
            'data-type': 'width',
            'data-target': 'social-media',
          },
        },
        {
          type: 'slider',
          name: 'Padding',
          property: 'padding',
          default: '10px',
          units: 'px',
        },
        {
          type: 'slider',
          name: 'Spacing',
          property: 'words-spacing',
          default: '5px',
          units: 'px',
        },
        {
          type: 'slider',
          name: 'Rows Gap',
          property: 'gap',
          default: '10px',
          units: 'px',
        },
      ],
    },
    {
      name: 'Logo',
      open: true,
      buildProps: [
        'border-radius',
        'border-width',
        'border-color',
        'border-style',
      ],
      properties: [
        {
          type: 'slider',
          name: 'Width',
          property: 'width',
          default: '14px',
          units: ['px', 'rem'],
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,
        },
        {
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          min: 1,
          max: 100,
          steps: 1,
          default: 100,
          units: ['%'],
        },
        {
          type: 'slider',
          name: 'Blur',
          property: 'backdrop-filter: blur(0px)',
          value: 'blur(0px)',
          default: '0px',
        },
        {
          type: 'slider',
          name: 'Brightness',
          property: 'backdrop-filter:brightness',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Contrast',
          property: 'backdrop-filter:contrast',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Saturation',
          property: 'backdrop-filter:saturation',
          default: '1',
        },
        {
          type: 'select',
          name: 'Hover Text Animation',
          property: 'animation',
          default: 'none',
          options: [
            { value: 'none', name: 'None' },
            { value: 'bounce', name: 'Bounce' },
            { value: 'flash', name: 'Flash' },
            { value: 'pulse', name: 'Pulse' },
            { value: 'rubberBand', name: 'Rubber Band' },
            { value: 'shake', name: 'Shake' },
            { value: 'swing', name: 'Swing' },
          ],
        },
        {
          type: 'slider',
          name: 'Transition Duration',
          property: 'animation-duration',
          default: '1',
        },
      ],
    },

    {
      name: 'Divider',
      open: true,
      properties: [
        {
          type: 'color',
          name: 'Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Weight',
          property: 'width',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Gap',
          property: 'gap',
        },
      ],
    },
  ],
  benefitSector: [
    {
      name: 'Background',
      open: false,
      id: 'benefits-container',
      buildProps: ['background'],
      properties: [
        // {
        //   type: 'color',
        //   name: 'Background Color',
        //   property: 'background-color',
        //   colorPicker: {
        //     preferredFormat: 'hex',
        //     showInput: true,
        //   },
        // },
        {
          type: 'slider',
          name: 'Overlay Opacity',
          property: 'opacity',
          defaults: 27,
          units: ['%'],
          step: 0.01,
      
          min: 6,
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,

        },
        {
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        },
      ],
    },
    {
      name: 'Main Heading',
      open: false,
      id: 'main-benefit-heading',
      properties: [color, typography],
    },
    {
      name: 'Sub Heading',
      open: false,
      properties: [color, typography],
      id: 'sub-benefit-heading',
    },

    {
      name: 'Icon',
      open: false,
      id: 'image-benefit',
      properties: [

          {
            type: 'composite',
            name: 'Border Radius',
            property: 'border-radius',
            properties: widthOptions,
          },
          {
            type: 'color',
            name: 'Border Color',
            property: 'border-color',
            preferredFormat: 'hex',
            showInput: true,
          },
  
          {
            type: 'composite',
            name: 'Border Width',
            property: 'border-width',
            properties: widthOptions,
          },
          {
            type: 'select',
            name: 'Border Style',
            property: 'border-style',
            options: borderStyleOptions,
          },
          {
            type: 'slider',
            name: 'Icon Size',
            property: 'width',
            default: '0%',
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
          {
            type: 'slider',
            name: 'Padding',
            property: 'padding',
           
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
          {
            type: 'slider',
            name: 'Opacity',
            property: 'opacity',
            default: 1,
            step: 1,
            min: 0,
            max: 100,
            units: ['%'],
          },
        ],
    
    },
    {
      name: 'Icon Heading',
      id: 'icon-benefit-heading',
      open: false,
      properties: [color, typography],
    },
    {
      name: 'Icon Sub Heading',
      id: 'icon-benefit-sub-heading',
      open: false,
      properties: [color, typography],
    },
  ],
  testimonialSector: [
    {
      name: 'Title',
      id: 'main-testimonial-title',
      open: false,
      properties: [
        color,
        typography,

        {
          type: 'slider',
          name: 'Blur',
          property: 'title-blur',
          default: '10',
        },

        {
          type: 'slider',
          name: 'Horizontal',
          property: 'title-horizontal',
          default: '0',
        },
        {
          type: 'slider',
          name: 'Vertical',
          property: 'title-vertical',
          default: '0',
        },
      ],
    },
    {
      name: 'Content',
      open: false,
      id: 'main-testimonial-content',
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
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
          options: fontWeightOptions,
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
          default: 'left',
          ResizeObserver: true,
          options: textAlignOptions,
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
        },
        {
          type: 'slider',
          name: 'Blur',
          property: 'backdrop:filter: blur',
          default: '10',
        },

        {
          type: 'slider',
          name: 'Horizontal',
          property: 'horizontal',
          default: '0',
        },
        {
          type: 'slider',
          name: 'Vertical',
          property: 'content-vertical',
          default: '0',
        },
      ],
    },
    {
      name: 'Image',
      open: false,
      id: 'testimonial-image',
      buildProps: ['border-radius', 'border-style'],
      properties: [
        {
          type: 'slider',
          name: 'Image Size',
          property: 'width',
          attributes: {
            'data-type': 'image',
            'data-attribute': 'image-size',
            'data-target': '.testimonial-image',
          },
        },
      ],
    },

    {
      name: 'Name',
      open: false,
      id: 'main-testimonial-name',
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },

        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
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
          options: fontWeightOptions,
        },

        {
          type: 'select',
          name: 'Transform',
          property: 'text-transform',
          default: 'default',
          options: textTransformOptions,
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
          default: 'left',
          ResizeObserver: true,
          options: textAlignOptions,
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
        },

        {
          type: 'slider',
          name: 'Blur',
          property: 'backdrop:filter: blur',
          default: '10',
        },

        {
          type: 'slider',
          name: 'Horizontal',
          property: 'name-horizontal',
          default: '0',
        },
        {
          type: 'slider',
          name: 'Vertical',
          property: 'name-vertical',
          default: '0',
        },
      ],
    },
  ],
  practiceAreaSector: [
    {
      name: 'Background',
      open: false,
      id: 'para-div',
      properties: [
        backgroundColor,
        {
          type: 'image',
          name: 'Background Image',
          property: 'background-image',
          attributes: {
            'data-type': 'background-image',
            'data-attribute': 'background-image',
          },
        },
        {
          type: 'select',
          name: 'Background Repeat',
          property: 'background-repeat',
          default: 'no-repeat',
          options: [
            { value: 'no-repeat', name: 'No Repeat' },
            { value: 'repeat', name: 'Repeat' },
            { value: 'repeat-x', name: 'Repeat Horizontally' },
            { value: 'repeat-y', name: 'Repeat Vertically' },
          ],
        },
        {
          type: 'select',
          name: 'Background Size',
          property: 'background-size',
          default: 'cover',
          options: [
            { value: 'cover', name: 'Cover' },
            { value: 'contain', name: 'Contain' },
            { value: 'auto', name: 'Auto' },
          ],
        },
        {
          type: 'radio',
          name: 'Background Position',
          property: 'background-position',
          default: 'center center',
          options: [
            { value: 'left top', name: `&#8662;` },
            { value: 'left bottom', name: `&#8665;` },
            { value: 'center top', name: `&#8657;` },
            { value: 'center center', name: `&#10560;` },
            { value: 'center bottom', name: `&#8659;` },
            { value: 'right top', name: `&#8663;` },
            { value: 'right center', name: `&#8667;` },
            { value: 'right bottom', name: `&#8664;` },
          ],
        },
        {
          type: 'select',
          name: 'Background Attachment',
          property: 'background-attachment',
          default: 'scroll',
          options: [
            { value: 'scroll', name: 'Scroll' },
            { value: 'fixed', name: 'Fixed' },
          ],
        },
        {
          type: 'slider',
          name: 'Background Opacity',
          property: 'background-opacity',
          default: 100,
          step: 1,
          max: 100,
          min: 0,
          unit: '%',
        },
      ],
    },
    {
      name: 'Section Heading',
      id: 'main-practice-heading',
      open: false,
      properties: [color, typography, HtmlTag],
    },
    {
      name: 'Sub Section Heading',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'sub-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'slider',
          label: 'Line Height',
          name: 'Line Height',
          property: 'line-height',
          ResizeObserver: true,
          default: 1,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'radio',
          name: 'Text Align',
          property: 'text-align',
          default: 'left',
          ResizeObserver: true,
          options: textAlignOptions,
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
        },
      ],
    },
    {
      name: 'Title',
      open: false,
      properties: [color, typography, HtmlTag],
    },

    {
      name: 'Descriptive Text',
      open: false,
      properties: [color, typography, HtmlTag],
    },

    {
      name: 'Border',
      open: false,
      buildProps: ['border-radius', 'border-color', 'border-style', 'padding'],
      properties: [
        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },
      ],
    },
  ],
  videoSector: [


     {
      name: 'Background',
      open: false,
      id: 'video-main-wrapper',
      buildProps: ['background'],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },
    
  

   

    
    {
      name: 'Aspect Ratio',
      id: 'video-ratio',
      properties: [
        {
          type: 'select',
          name: 'Aspect Ratio',

          property: 'padding-top',
          default: '16:9',
          options: [
            { value: '56.29%', name: '16:9' },
            { value: '75%', name: '4:3' },
            { value: '100%', name: '1:1' },
          ],
        },
      ],
    },
    {
      name: 'Main Heading',
      open: false,
      id: 'main-video-heading',
      properties: [color, typography],
    },
    {
      name: 'Sub Heading',
      open: false,
      properties: [color, typography],
      id: 'sub-video-heading',
    },
    {
      name: 'Css Filters',
      id: 'video-ratio',
      open: false,
      properties: [
        {
          type: 'radio',
          name: 'Blur',
          property: 'filter',
          options: [
            { value: 'blur(0px)', name: '0px' },
            { value: 'blur(2px)', name: '2px' },
            { value: 'blur(4px)', name: '4px' },
            { value: 'blur(6px)', name: '6px' },
            { value: 'blur(8px)', name: '8px' },
            { value: 'blur(10px)', name: '10px' },
          ],
          attributes: {
            'data-type': 'blur',
            'data-attribute': 'video-blur',
            'data-target': '.video-div video ',
          },
        },
        {
          type: 'radio',
          name: 'Brightness',
          property: 'filter',
          default: `brightness(100%)`,
          options: [
            { value: 'brightness(100%)', name: '100%' },
            { value: 'brightness(75%)', name: '75%' },
            { value: 'brightness(50%)', name: '50%' },
            { value: 'brightness(25%)', name: '25%' },
            { value: 'brightness(0%)', name: '0%' },
          ],
          attributes: {
            'data-type': 'brightness',
            'data-attribute': 'video-brightness',
            'data-target': '.video-div video ',
          },
        },
        {
          type: 'radio',
          name: 'Contrast',
          property: 'filter',
          options: [
            { value: 'contrast(100%)', name: '100%' },
            { value: 'contrast(75%)', name: '75%' },
            { value: 'contrast(50%)', name: '50%' },
            { value: 'contrast(25%)', name: '25%' },
            { value: 'contrast(0%)', name: '0%' },
          ],
          attributes: {
            'data-type': 'filter',
            'data-attribute': 'video-contrast',
            'data-target': '.video-div video ',
          },
        },
        {
          type: 'radio',
          name: 'Saturation',
          property: 'filter',
          default: 'saturate(100%)',
          options: [
            { value: 'saturate(100%)', name: '100%' },
            { value: 'saturate(75%)', name: '75%' },
            { value: 'saturate(50%)', name: '50%' },
            { value: 'saturate(25%)', name: '25%' },
            { value: 'saturate(0%)', name: '0%' },
          ],
          attributes: {
            'data-type': 'filter',
            'data-attribute': 'video-saturation',
            'data-target': '.video-div video ',
          },
        },
      ],
    },
  ],

  numbersSection: [
    {
      name: 'Section Background',
      open: false,
      id: 'number-container-div',
      buildProps: ['background'],
      properties: [
        // {
        //   type: 'color',
        //   name: 'Background Color',
        //   property: 'background-color',
        //   colorPicker: {
        //     preferredFormat: 'hex',
        //     showInput: true,
        //   },
        // },
      ],
    },
    {
      name: 'Section Heading',
      open: false,
      properties: [color, typography],
      id: 'main-number-heading',
      changeProp: 1,
    },
    {
      name: 'Section Description',
      open: false,
      id: 'sub-number-heading',
      properties: [color, typography],
      changeProp: 1,
    },
    {
      name: 'Numbers',
      id: 'number-val',
      open: false,
      properties: [color, typography],
      // properties: NumbersProp,
    },
    {
      name: 'Numbers Description',
      open: false,
      id: 'number-description',
      // properties:NumbersDescription,
      properties: [color, typography],

    },

    {
      name: 'Numbers Border',
      open: false,
      id: 'number-border',
      buildProps: [
        'border-radius',

        'border-style',
        'box-shadow',
        'padding',
      ],
      properties:NumbersBorder,
    },
  ],
  paragraphSector: [

    {
      name: 'Background',
      open: false,
      id: 'main-paragraph-wrapper',
      buildProps: ['background'],
      // properties: [
      //   {
      //     type: 'color',
      //     name: 'Background Color',
      //     property: 'background-color',
      //     colorPicker: {
      //       preferredFormat: 'hex',
      //       showInput: true,
      //     },
      //   },
      // ],
    },




    {
      name: 'Paragraph Heading',
      open: false,
      id: 'main-paragraph-heading',
      properties: [color, typography],
    },
    {
      name: 'Paragraph Description',
      open: false,
      id: 'sub-paragraph-heading',
      properties: [color, typography],
    },
  ],

  bannerSector: [
    {
      name: 'Banner Background',
      open: false,
      id: 'bannar-content',
      buildProps: ['background'],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          type: 'slider',
          name: 'Overlay Opacity',
          property: 'opacity',
          defaults: 27,
          units: ['%'],
          step: 0.01,
      
          min: 6,
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,

        },
        {
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        }
      ],
    },

    {
      name: 'Banner Heading',
      id: 'main-banner-heading',
      open: false,
      properties: [color, typography],
    },
    {
      name: 'Banner Description',
      id: 'sub-banner-heading',
      open: false,
      properties: [color, typography],
    },
    {
      name: 'Banner Button',
      id: 'banner-button',
      open: false,
      buildProps: ['background-color'],
      properties: [color,typography,
        {
        
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },
        {
      
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
      
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,
        },
        {
          
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        },
        'box-shadow',
        'padding',
      ],

    },

  ],
  ImageTextSector: [

    {
      name: 'Section Background',
      open: false,
      id: 'main_container',
      buildProps: ['background'],
      properties: [
        // {
        //   type: 'color',
        //   name: 'Background Color',
        //   property: 'background-color',
        //   colorPicker: {
        //     preferredFormat: 'hex',
        //     showInput: true,
        //   },
        // },
        {
          type: 'slider',
          name: 'Overlay Opacity',
          property: 'opacity',
          defaults: 27,
          units: ['%'],
          step: 0.01,
      
          min: 6,
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,

        },
        {
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        }
      ],
    },



    {
      name: 'Main Title',
      open: false,
      id: 'main-image-heading',
      properties: [color, typography],
    },
    {
      name: 'Description',
      open: false,
      id: 'sub-image-heading',
      properties: [color, typography],
    },

    {
      name: 'Image Gallery',
      id: 'image-gallery',
      open: false,
      buildProps: ['border-radius'],
      properties: [
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          default: 'solid',
          options: borderStyleOptions,
        },
        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },

        {
          type: 'slider',
          name: 'Spacing',
          property: 'padding',
          default: '1',
          units: ['px', 'em', 'rem'],
        },
      
      ],
    },
    {
      name: 'Gallery Caption',
      id: 'gallery-caption',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: 'Show',
          options: [
            { value: 'block', name: 'Show' },
            { value: 'none', name: 'Hide' },
          ],
        },
       
       color,typography

        
      ],
    },
  ],


  photoSector: [

    {
      name: 'Section Background',
      open: false,
      id: 'photo-container',
      buildProps: ['background'],
      properties: [
        {
          type: 'slider',
          name: 'Overlay Opacity',
          property: 'opacity',
          defaults: 27,
          units: ['%'],
          step: 0.01,
      
          min: 6,
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,

        },
        {
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        }
      ],
    },



    {
      name: 'Photo Gallery Heading',
      open: false,
      id: 'main-photo-heading',
      properties: [color, typography],
    },
    {
      name: 'Photo Gallery Description',
      open: false,
      id: 'sub-photo-heading',
      properties: [color, typography],
    },

    {
      name: 'Image Gallery',
      id: 'photo-image-gallery',
      open: false,
      buildProps: ['border-radius'],
      properties: [
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          default: 'solid',
          options: borderStyleOptions,
        },
        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },

        {
          type: 'slider',
          name: 'Spacing',
          property: 'padding',
          default: '1',
          units: ['px', 'em', 'rem'],
        },
      
      ],
    },
    {
      name: 'Gallery Caption',
      id: 'photo_figure_caption',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: 'show',
          options: [
            { value: 'block', name: 'Show' },
            { value: 'none', name: 'Hide' },
          ],
        },
       
       color,typography

        
      ],
    },
  ],























  guidelineSector: [
    {
      name: 'Main Heading',
      open: false,
      id: 'main-guideline-heading',
      properties: [color, typography],
    },
    {
      name: 'Sub Heading',
      open: false,
      id: 'sub-guideline-heading',
      properties: [color, typography],
    },
    {
      name: 'Guideline Step',
      open: false,
      id: 'guidline-option',
      
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },

    {
      name: 'Guideline Bullet',
      open: false,
      id: 'guideline-bullet',
      buildProps: ['width', 'height'],
      properties: [color, typography, backgroundColor],
    },

    {
      name: 'Bullet Heading',
      open: false,
      id: 'bullet-heading',
      properties: [color, typography],
    },
    {
      name: 'Bullet Sub Heading',
      open: false,
      id: 'bullet-sub-heading',
      properties: [color, typography],
    },
  ],

  locationSector: [ 
    {
      name: 'Background',
      open: false,
      id: 'location-content',
      buildProps: ['background'],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },









      ],
    },
    {
      name: 'Main Heading',
      open: false,
      id: 'main-location-heading',
      properties: [color, typography],
      
    },
    {
      name: 'Sub Heading',
      open: false,
      id: 'sub-location-heading',
      properties: [color, typography],
    },

    {
      name: 'Icon List',
      id: 'icon-text',
      open: false,
      properties: [
        {
          type: 'radio',
          name: 'Alignment',
          property: 'text-align',
         
          options: textAlignOptions,
        },
        {
          type: 'color',
          name: 'Text Cover',
          property: 'color',
         
        },
        {
          type: 'color',
          name: 'Hover Cover',
          property: `${`hover`}:${color}`,
       
        },
        {
          type: 'slider',
          name: 'Text Indent',
          property: 'text-indent',
          units: ['px'],
        
        },
        {
          type: 'color',
          name: 'List Typography',
          property: 'color',
        
        },
      ],
    },
    {
      name: 'Icon',
      open: false,
      id: 'image-location',
      properties: [
        
          {
            type: 'composite',
            name: 'Border Radius',
            property: 'border-radius',
            properties: widthOptions,
          },
          {
            type: 'color',
            name: 'Border Color',
            property: 'border-color',
            preferredFormat: 'hex',
            showInput: true,
          },
  
          {
            type: 'composite',
            name: 'Border Width',
            property: 'border-width',
            properties: widthOptions,
          },
          {
            type: 'select',
            name: 'Border Style',
            property: 'border-style',
            options: borderStyleOptions,
          },
          {
            type: 'slider',
            name: 'Width',
            property: 'width',
           
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
  
          {
            type: 'slider',
            name: 'Opacity',
            property: 'opacity',
            step: 1,
            min: 0,
            max: 100,
            units: ['%'],
          },
       
        {
          type: 'slider',
          name: 'Padding',
          property: 'padding',
          units: ['px'],
        },
      ],
    },
  ],

  talentSector: [
    {
      name: 'Background',
      open: false,
      id: 'talent-cloud-container',
      buildProps: ['background-image'],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },
    {
      name: 'Main Heading',
      open: false,
      id: 'main-talent-heading',
      properties: [color, typography],
    },
    {
      name: 'Sub Heading',
      open: false,
      id: 'sub-talent-heading',
      properties: [color, typography],
    },
    {
      name: 'Image Gallery',
      open: false,
      id: 'talent-image',
      properties: [
        {
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
        },
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          preferredFormat: 'hex',
          showInput: true,
        },

        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
        },
        {
          type: 'select',
          name: 'Border Style',
          property: 'border-style',
          options: borderStyleOptions,
        },
        {
          type: 'slider',
          name: 'Width',
          property: 'width',
          default: '100%',
          min: 0,
          max: 100,
          units: ['%', 'px'],
        },

        {
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          default: 1,
          step: 1,
          min: 0,
          max: 100,
          units: ['%'],
        },
      ],
    },
  ],

  theme_1: [
    {
      name: 'Design System',
      open: false,
      buildProps: ['color'],
    },
    {
      name: 'Global Colors Collection',
      open: false,
      buildProps: ['background-color', 'color'],
      properties: [
        {
          id: makeId(),
          cid: makeId(),
          type: 'color',
          name: 'Primary',
          property: 'background-color',
          default: '#fff',
          attributes: { class: 'gjs-fonts gjs-f-b1' },
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'color',
          name: 'Secondary',
          property: 'color',
          default: '#4a5162',
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'color',
          name: 'Accent Color',
          property: 'accent-color',
          default: '#4aa4da',
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
      ],
      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
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
          options: fontWeightOptions,
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
          options: textAlignOptions,
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
        },
        {
          type: 'stack',
          property: 'text-shadow',
          // label: 'Text Shadow',
          // Additional props
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
          type: 'radio',
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
      name: 'Theme Style',
      open: false,
      buildProps: [''],
    },
    {
      name: 'Buttons',
      open: false,
      id: 'button',

      properties: [
        typography,
        'text-shadow',
        State,
        {
          id: makeId(),
          cid: makeId(),
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },

        {
          id: makeId(),
          cid: makeId(),
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          options: borderStyleOptions,
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
          detached: false,
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
          detached: false,
        },
        'box-shadow',
        'padding',
      ],
    },
    {
      name: 'Images',
      id: 'image',
      open: false,

      buildProps: [
        'border-style',
        'border-radius',
        'opacity',
        'box-shadow',
        'CSS',
      ],
      properties: [
        // State,
        {
          id: makeId(),
          cid: makeId(),
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          default: 100,
          min: 0,
          max: 100,
          step: 1,
          units: ['%'],
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
          detached: false,
        },
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          id: makeId(),
          cid: makeId(),
          type: 'composite',
          name: 'Border Radius',
          property: 'border-radius',
          properties: widthOptions,
          detached: false,
        },
      ],
    },
    {
      name: 'Body Text',
      open: false,
      id: 'body-text',
      properties: [color, typography],
    },

    {
      name: 'Headings',
      open: false,
      buildProps: [''],
    },
    {
      name: 'H1',
      open: false,
      id: 'h1',
      properties: [color, typography],
    },
    {
      name: 'H2',
      open: false,
      id: 'h2',
      properties: [color, typography],
    },
    {
      name: 'H3',
      open: false,
      id: 'h3',
      properties: [color, typography],
    },
    {
      name: 'H4',
      open: false,
      id: 'h4',
      properties: [color, typography],
    },
    {
      name: 'H5',
      open: false,
      id: 'h5',
      properties: [color, typography],
    },
    {
      name: 'H6',
      open: false,
      id: 'h6',
      properties: [color, typography],
    },
    {
      name: 'Form Fields',
      open: false,
      buildProps: [''],
    },
    {
      name: 'Links',
      open: false,
      id: 'a',
      properties: [color, typography],
    },
    {
      name: 'Label',
      open: false,
      id: 'label',
      properties: [color, typography],
    },
    {
      name: 'Field',
      open: false,
      id: 'input',
      buildProps: [
        'border-style',
        'border-width',
        'border-color',
        'border-radius',
        'padding',
      ],
      properties: [color, typography, 'background-color'],
    },
  ],
  departmentSector: [
    {
      name: 'Background',
      open: false,
      id: 'department-container',
      buildProps: ['background-image'],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },
    {
      name: 'Department Heading',
      open: false,
      id: 'main-department-heading',
      properties: [color, typography],
    },
    {
      name: 'Department Sub Heading',
      open: false,
      properties: [color, typography],
      id: 'sub-department-heading',
    },

    {
      name: 'Department Icon',
      open: false,
      id: 'department-option',
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },

    {
      name: 'Icon',
      open: false,
      id: 'image-department',
      properties: [

          {
            type: 'composite',
            name: 'Border Radius',
            property: 'border-radius',
            properties: widthOptions,
          },
          {
            type: 'color',
            name: 'Border Color',
            property: 'border-color',
            preferredFormat: 'hex',
            showInput: true,
          },
  
          {
            type: 'composite',
            name: 'Border Width',
            property: 'border-width',
            properties: widthOptions,
          },
          {
            type: 'select',
            name: 'Border Style',
            property: 'border-style',
            options: borderStyleOptions,
          },
          {
            type: 'slider',
            name: 'Icon Size',
            property: 'width',
            default: '100%',
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
          {
            type: 'slider',
            name: 'Padding',
            property: 'padding',
           
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
          {
            type: 'slider',
            name: 'Opacity',
            property: 'opacity',
            default: 1,
            step: 1,
            min: 0,
            max: 100,
            units: ['%'],
          },
        ],
    
    },
    {
      name: 'Icon Heading',
      id: 'icon-department-heading',
      open: false,
      properties: [color, typography],
    },
    {
      name: 'Icon Sub Heading',
      id: 'icon-department-sub-heading',
      open: false,
      properties: [color, typography],
    },
  ],




































  JobsSector: [
    {
      name: 'Section Heading',
      // id: 'dept_section',
      open: false,
      id: 'department-container',
      buildProps: ['background-image'],
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },
    {
      name: 'Department Heading',
      open: false,
      id: 'main-department-heading',
      properties: [color, typography],
    },
    {
      name: 'Department Sub Heading',
      open: false,
      properties: [color, typography],
      id: 'sub-department-heading',
    },

    {
      name: 'Department Icon',
      open: false,
      id: 'department-option',
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
      ],
    },

    {
      name: 'Icon',
      open: false,
      id: 'image-department',
      properties: [

          {
            type: 'composite',
            name: 'Border Radius',
            property: 'border-radius',
            properties: widthOptions,
          },
          {
            type: 'color',
            name: 'Border Color',
            property: 'border-color',
            preferredFormat: 'hex',
            showInput: true,
          },
  
          {
            type: 'composite',
            name: 'Border Width',
            property: 'border-width',
            properties: widthOptions,
          },
          {
            type: 'select',
            name: 'Border Style',
            property: 'border-style',
            options: borderStyleOptions,
          },
          {
            type: 'slider',
            name: 'Icon Size',
            property: 'width',
            default: '100%',
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
          {
            type: 'slider',
            name: 'Padding',
            property: 'padding',
           
            min: 0,
            max: 100,
            units: ['%', 'px'],
          },
          {
            type: 'slider',
            name: 'Opacity',
            property: 'opacity',
            default: 1,
            step: 1,
            min: 0,
            max: 100,
            units: ['%'],
          },
        ],
    
    },
    {
      name: 'Icon Heading',
      id: 'icon-department-heading',
      open: false,
      properties: [color, typography],
    },
    {
      name: 'Icon Sub Heading',
      id: 'icon-department-sub-heading',
      open: false,
      properties: [color, typography],
    },
  ],




































  // departmentSector: [
  //   {
  //     name: 'Section Heading',
  //     id: 'dept_section',
  //     open: false,
  //     properties: [color, typography],
  //   },
  //   {
  //     name: 'Sub Section Heading',
  //     open: false,
  //     properties: [color, typography],
  //   },
  //   {
  //     name: 'Job Title',
  //     id: 'job_title',
  //     open: false,
  //     properties: [color, typography],
  //   },
  //   {
  //     name: 'Company Name',
  //     open: false,
  //     id: 'company_name',
  //     properties: [color, typography],
  //   },
  //   {
  //     name: 'Date Posted',
  //     id: 'posted',
  //     open: false,
  //     properties: [color, typography],
  //   },
  //   {
  //     name: 'Descriptive Text',
  //     id: 'descriptive_text',
  //     open: false,
  //     properties: [color, typography],
  //   },
  //   {
  //     name: 'Feature List',
  //     id: 'feature_list',
  //     open: false,
  //     properties: [
  //       color,
  //       typography,

  //       {
  //         type: 'slider',
  //         name: 'Space Between',
  //         property: 'space-between',
  //         default: 1,
  //         units: ['px', 'rem'],
  //       },
  //       {
  //         type: 'color',
  //         name: 'Icon Color',
  //         property: 'color',

  //         colorPicker: {
  //           preferredFormat: 'hex',
  //           showInput: true,
  //         },
  //       },
  //       {
  //         type: 'slider',
  //         name: 'Icon Size',
  //         property: 'icon-size',
  //         default: 1,
  //         units: ['px', 'rem'],
  //       },
  //       {
  //         type: 'slider',
  //         name: 'Text Indent',
  //         property: 'text-indent',
  //         default: 1,
  //         units: ['px', 'rem'],
  //       },
  //     ],
  //   },
  // ],

  wrapper: [
    // Default
    {
      name: 'General',
      open: false,
      buildProps: [
        'float',
        'display',
        'position',
        'top',
        'right',
        'left',
        'bottom',
      ],
    },
    {
      name: 'Flex',
      open: false,
      buildProps: [
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'order',
        'flex-basis',
        'flex-grow',
        'flex-shrink',
        'align-self',
      ],
    },
    {
      name: 'Dimension',
      open: false,
      buildProps: [
        'width',
        'height',
        'max-width',
        'min-height',
        'margin',
        'padding',
      ],
    },
    {
      name: 'Typography',
      open: false,
      buildProps: [
        'font-family',
        'font-size',
        'font-weight',
        'letter-spacing',
        'color',
        'line-height',
        'text-align',
        'text-decoration',
        'text-shadow',
      ],
    },
    {
      name: 'Decorations',
      open: false,
      buildProps: [
        'border-radius-c',
        'background-color',
        'border-radius',
        'border',
        'box-shadow',
        'background',
      ],
    },
    {
      name: 'Extra',
      open: false,
      buildProps: ['transition', 'perspective', 'transform'],
    },
  ],
};

let _editor;
const setEditor = (editor: GrapesJS.Editor) => {
  _editor = editor;
};
export const getSectors = (name: string, editor?: GrapesJS.Editor) => {
  setEditor(editor);
  return obj[name];
};
