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
  property: 'state',
  default: 'normal',
  options: [
    { value: 'normal', name: 'Normal' },
    { value: 'hover', name: 'Hover' },
  ],
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
  default: '#ea4c89',
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
      default: 14,
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
      default: '400',
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
      default: 'left',
      options: textAlignOptions,
    },
    {
      type: 'slider',
      Name: 'Letter Spacing',
      property: 'letter-spacing',
      default: 0,
      unit: 'rem',
      min: 0,
      max: 10,
      step: 1,
    },
    {
      id: makeId(),
      cid: makeId(),
      type: 'slider',
      name: 'Line Height',
      property: 'line-height',
      default: 1,
      unit: 'rem',
      min: 0,
      max: 10,
      step: 0.1,
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
// const borderRadiusOptions = [
//   {
//     type: 'number',
//     units: ['px'],
//     default: 0,
//     property: 'border-top-radius',
//     name: 'Top',
//   },
//   {
//     type: 'number',
//     units: ['px'],
//     default: 0,
//     property: 'border-right-radius',
//     name: 'Right',
//   },
//   {
//     type: 'number',
//     units: ['px'],
//     default: 0,
//     property: 'border-bottom-radius',
//     name: 'Bottom',
//   },
//   {
//     type: 'number',
//     units: ['px'],
//     default: 0,
//     property: 'border-left-radius',
//     name: 'Left',
//   },
// ];

const obj = {
  header_1: [
    {
      name: 'Header',
      open: true,
      buildProps: [
        'font-family',
        'font-size',
        'font-weight',
        'letter-spacing',
        'line-height',
        'text-align',
        'text-shadow',
        'background-color',
      ],
      attributes: {
        'data-target': '.header-div .header-navabr a',
      },

      properties: [
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          units: ['px', 'rem'],
          defaults: '14',
          min: 0,
          max: 100,
        },
        {
          type: 'slider',
          name: 'Line Height',
          property: 'line-height',
          units: ['px', 'rem'],
          defaults: '1',
          min: 1,
          max: 50,
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          units: ['px', 'rem'],
          defaults: '0',
        },
        {
          type: 'radio',
          name: 'Text Align',
          property: 'text-align',
          defaults: 'left',
          options: textAlignOptions,
        },
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'header-text-color',
            'data-target': '.header-logo-text',
          },
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
      ],
    },
    {
      name: 'Logo',
      open: true,
      buildProps: [
        'backdrop-filter',
        'background-color',
        'border-radius',
        'animation-name',
        'backdrop-filter',
      ],

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
          attributes: {
            'data-type': 'width',
            'data-attribute': 'header-logo-width',
            'data-target': '.header-div',
          },
        },

        {
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          default: 1,
          step: 0.1,
          min: 0,
          max: 1,
          attributes: {
            'data-type': 'opacity',
            'data-attribute': 'header-logo-opacity',
            'data-target': '.logo',
          },
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

          attributes: {
            'data-type': 'backdrop-filter',
            'data-attribute': 'header-logo-brightness',
            'data-target': '.logo',
          },
        },
        {
          type: 'number',
          name: 'Contrast',
          property: 'backdrop-filter',
          default: 'contrast(100%)',
          attributes: {
            'data-type': 'backdrop-filter',
            'data-attribute': 'header-logo-contrast',
            'data-target': '.logo',
          },
        },
        {
          type: 'select',
          name: 'Saturation',
          property: 'backdrop-filter',
          default: 'saturate(100%)',

          attributes: {
            'data-type': 'backdrop-filter',
            'data-attribute': 'header-logo-saturation',
            'data-target': '.logo',
          },
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
      name: 'Border',
      open: true,

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
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-target': 'divider',
          },
        },
        {
          type: 'slider',
          name: 'Weight',
          property: 'height',
          default: 2,
          units: 'px',
          attributes: {
            'data-type': 'height',
            'data-target': 'divider',
          },
        },
        {
          type: 'slider',
          name: 'Gap',
          property: 'gap',
          default: 0,
          units: 'px',
          attributes: {
            'data-type': 'gap',
          },
        },
      ],
    },
    {
      name: 'Social Media',
      open: true,

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
        {
          type: 'select',
          name: 'Border Style',
          property: 'border-style',
          options: borderStyleOptions,
        },
        {
          type: 'slider',
          name: 'Size',
          property: 'width',
          default: '14px',
          attributes: {
            'data-type': 'width',
            'data-target': 'social-media',
          },
        },
        {
          type: 'slider',
          name: 'Padding',
          property: 'padding',
          buildProps: ['padding'],
          default: '10px',
          units: 'px',
        },
        {
          type: 'slider',
          name: 'Spacing',
          property: 'letter-spacing',
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
  ],
  footer_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',

          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'Img-main-color',
            'data-target': '.main_heading  .sub_heading',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'main-font-family',
            'data-target': '.main_heading .sub_heading',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'main-font-size',
            'data-target': '.main_heading .sub_heading',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'main-font-weight',
            'data-target': '.main_heading .sub_heading',
          },
        },

        {
          type: 'select',
          name: 'Transform',
          property: 'text-transform',
          default: 'default',
          options: textTransformOptions,
          attributes: {
            'data-type': 'text-transform',
            'data-attribute': 'main-text-transform',
            'data-target': '.main_heading .sub_heading',
          },
        },

        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'main-letter-spacing',
            'data-target': '.main_heading .sub_heading',
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
            'data-type': 'line-height',
            'data-attribute': 'main-line-height',
            'data-target': '.main_heading .sub_heading',
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
            'data-type': 'text-align',
            'data-attribute': 'main-text-align',
            'data-target': '.main_heading .sub_heading',
          },
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'main-text-decoration',
            'data-target': '.main_heading .sub_heading',
          },
        },
      ],
    },

    {
      name: 'Image Gallery',
      open: false,
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
          attributes: {
            'data-type': 'border-color',
            'data-attribute': 'image-border-color',
            'data-target': '.img_container img',
          },
        },

        {
          type: 'slider',
          name: 'Spacing',
          property: 'padding',
          attributes: {
            'data-type': 'padding',
            'data-attribute': 'image-padding',
            'data-target': '.img_container img',
          },
          default: '1',
          units: ['px', 'em', 'rem'],
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          default: 'solid',
          attributes: {
            'data-type': 'border-style',
            'data-attribute': 'image-border-style',
            'data-target': '.img_container img',
          },
          options: borderStyleOptions,
        },
      ],
    },
    {
      name: 'Gallery Caption',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: 'show',
          attributes: {
            'data-type': 'display',
            'data-attribute': 'gallery-display',
            'data-target': '.figure_caption',
          },
          options: [
            { value: 'block', name: 'Show' },
            { value: 'none', name: 'Hide' },
          ],
        },
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'gallery-color',
            'data-target': '.figure_caption',
          },
        },

        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'gallery-font-family',
            'data-target': '.figure_caption',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'gallery-font-size',
            'data-target': '.figure_caption',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'gallery-font-weight',
            'data-target': '.figure_caption',
          },
        },

        {
          type: 'select',
          name: 'Transform',
          property: 'text-transform',
          default: 'default',
          options: textTransformOptions,
          attributes: {
            'data-type': 'text-transform',
            'data-attribute': 'gallery-text-transform',
            'data-target': '.figure_caption',
          },
        },

        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'gallery-letter-spacing',
            'data-target': '.figure_caption',
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
            'data-type': 'line-height',
            'data-attribute': 'gallery-line-height',
            'data-target': '.figure_caption',
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
            'data-type': 'text-align',
            'data-attribute': 'gallery-text-align',
            'data-target': '.figure_caption',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'gallery-text-decoration',
            'data-target': '.figure_caption',
          },
        },
      ],
    },
    {
      name: 'Button Border',
      open: false,
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
          min: 0.1,
          max: 1,
          steps: 0.1,
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
  benefit_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'benefit-text-color',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,

      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'benefit-font-family',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'benefit-font-size',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'benefit-font-weight',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'benefit-letter-spacing',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
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
            'data-type': 'line-height',
            'data-attribute': 'benefit-line-height',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
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
            'data-type': 'text-align',
            'data-attribute': 'benefit-text-align',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'benefit-text-decoration',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
      ],
    },
    {
      name: 'Icon',
      open: false,

      properties: [
        {
          type: 'color',
          name: 'Primary Color',

          property: 'fill',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'fill',
            'data-attribute': 'benefit-Icon-color',
            'data-target': '.benefit-holder svg ',
          },
        },

        {
          type: 'slider',
          name: 'Icon Size',
          property: 'width',
        },
        {
          type: 'slider',
          name: 'Padding',
          property: 'padding',
          default: '0',
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'padding',
            'data-attribute': 'benefit-Icon-padding',
            'data-target': '.benefit-holder svg ',
          },
        },
      ],
    },
  ],
  testimonial_1: [
    {
      name: 'Content',
      open: false,

      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'content-color',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'content-font-family',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'content-font-size',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'content-font-weight',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'content-letter-spacing',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
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
            'data-type': 'line-height',
            'data-attribute': 'content-line-height',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
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
            'data-type': 'text-align',
            'data-attribute': 'content-text-align',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'content-text-decoration',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'name-color',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },

        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'name-font-family',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'name-font-size',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'name-font-weight',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },

        {
          type: 'select',
          name: 'Transform',
          property: 'text-transform',
          default: 'default',
          options: textTransformOptions,
          attributes: {
            'data-type': 'text-transform',
            'data-attribute': 'name-text-transform',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },

        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'name-letter-spacing',
            'data-target': '.slider-content-main-div .left-container h2',
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
            'data-type': 'line-height',
            'data-attribute': 'name-line-height',
            'data-target': '.slider-content-main-div .left-container h2',
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
            'data-type': 'text-align',
            'data-attribute': 'name-text-align',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'name-text-decoration',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },

        {
          type: 'slider',
          name: 'Blur',
          property: 'backdrop:filter: blur',
          default: '10',

          attributes: {
            'data-type': 'backdrop-filter: blur',
            'data-attribute': 'name-blur',
            'data-target': '.testimonial-image',
          },
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
    {
      name: 'Title',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'content-color',
            'data-target': '.section-title',
          },
        },

        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'content-font-family',
            'data-target': '.section-title',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'content-font-size',
            'data-target': '.section-title',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'content-font-weight',
            'data-target': '.section-title',
          },
        },

        {
          type: 'select',
          name: 'Transform',
          property: 'text-transform',
          default: 'default',
          options: textTransformOptions,
          attributes: {
            'data-type': 'text-transform',
            'data-attribute': 'content-text-transform',
            'data-target': '.section-title',
          },
        },

        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'content-letter-spacing',
            'data-target': '.section-title',
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
            'data-type': 'line-height',
            'data-attribute': 'content-line-height',
            'data-target': '.section-title',
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
            'data-type': 'text-align',
            'data-attribute': 'content-text-align',
            'data-target': '.section-title',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'content-text-decoration',
            'data-target': '.section-title',
          },
        },

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
  ],
  practice_area_1: [
    {
      name: 'Background',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Background Color',
          property: 'background-color',
          attributes: {
            'data-type': 'background-color',
            'data-attribute': 'background-color',
          },
        },
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
          default: 1,
          step: 0.01,
          max: 1,
          min: 0,
        },
      ],
    },
    {
      name: 'Section Heading',
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
  video_1: [
    {
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
          attributes: {
            'data-type': 'padding-top',
            'data-attribute': 'video-aspect-ratio',
            'data-target':
              '.video-main-wrapper .video-container-main-div .video-div  ',
          },
        },
      ],
    },
    {
      name: 'Css Filters',
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

  number_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'number-heading-color',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'number-heading-font-family',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'number-heading-font-size',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'number-heading-font-weight',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'number-heading-letter-spacing',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
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
            'data-type': 'line-height',
            'data-attribute': 'number-heading-line-height',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
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
            'data-type': 'text-align',
            'data-attribute': 'number-heading-text-align',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'number-heading-text-decoration',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
      ],
    },

    {
      name: 'Numbers',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Number',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'number-value-color',
            'data-target':
              '.number-percentages-section .percentage-info  h1  .number-percentages-section .percentage-info  h1 span',
          },
        },
        {
          type: 'select',
          name: 'Number Font',
          property: 'font-family',
          defaults: 'Arial, Helvetica, sans-serif',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'number-value-font',
            'data-target':
              '.number-percentages-section .percentage-info  h1  .number-percentages-section .percentage-info  h1 span',
          },
        },
        {
          type: 'select',
          name: 'Weight',
          property: 'font-weight',
          default: 'default',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'number-value-weight',
            'data-target':
              '.number-percentages-section .percentage-info  h1  .number-percentages-section .percentage-info  h1 span',
          },
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
          attributes: {
            'data-type': 'transform',
            'data-attribute': 'number-value-transform',
            'data-target':
              '.number-percentages-section .percentage-info  h1  .number-percentages-section .percentage-info  h1 span',
          },
        },
        {
          type: 'radio',
          name: 'Decoration',
          property: 'text-decoration',
          default: 'default',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'number-value-decoration',
            'data-target':
              '.number-percentages-section .percentage-info  h1  .number-percentages-section .percentage-info  h1 span',
          },
        },
      ],
    },
    {
      name: 'Numbers Description',
      open: false,
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
            'data-attribute': 'number-description-color',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
        {
          type: 'select',
          name: 'Text Font',
          property: 'font-family',
          default: 'Arial, Helvetica, sans-serif',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'number-description-font',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
        {
          type: 'slider',
          name: 'Text Font Size',
          property: 'font-size',
          default: 14,
          units: ['px', 'em', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'number-description-font-size',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
        {
          type: 'select',
          name: 'Weight',
          property: 'font-weight',
          default: 'default',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'number-description-weight',
            'data-target': '.number-percentages-section .percentage-info p',
          },
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
          attributes: {
            'data-type': 'text-transform',
            'data-attribute': 'number-description-transform',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
        {
          type: 'radio',
          name: 'Decoration',
          property: 'text-decoration',
          default: 'default',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'number-description-decoration',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: '0 px',
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'number-description-letter-spacing',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
        {
          type: 'slider',
          name: 'Line Height',
          property: 'line-height',
          ResizeObserver: true,
          default: '1',
          units: ['px', 'em', 'rem'],
          attributes: {
            'data-type': 'line-height',
            'data-attribute': 'number-description-line-height',
            'data-target': '.number-percentages-section .percentage-info p',
          },
        },
      ],
    },

    {
      name: 'Numbers Border',
      open: false,
      buildProps: [
        'border-radius',

        'border-style',
        'box-shadow',
        // 'padding',
      ],
      attributes: {
        'data-target': '.benefit percentage-info',
      },
      properties: [
        {
          type: 'color',
          name: 'Border Color',
          property: 'border-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'border-color',
            'data-attribute': 'benefit-border-color',
            'data-target': '.benefit percentage-info',
          },
        },

        {
          type: 'composite',
          name: 'Border Width',
          property: 'border-width',
          properties: widthOptions,
          attributes: {
            'data-type': 'border-width',
            'data-attribute': 'benefit-border-width',
            'data-target': '.benefit percentage-info',
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
            'data-type': 'text-align',
            'data-attribute': 'benefit-text-align',
            'data-target': '.benefit percentage-info',
          },
        },
      ],
    },
  ],
  paragraph_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'paragraph-text-color',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
        },
      ],
    },
    {
      name: 'Typography',
      open: false,
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
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'paragraph-heading-font-size',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'paragraph-heading-font-weight',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
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
          attributes: {
            'data-type': 'transform',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'paragraph-heading-letter-spacing',
            'data-target': '.paragraph-container h1 .paragraph-container p',
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
            'data-type': 'line-height',
            'data-attribute': 'paragraph-heading-line-height',
            'data-target': '.paragraph-container h1 .paragraph-container p',
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
            'data-type': 'text-align',
            'data-attribute': 'paragraph-heading-text-align',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'paragraph-heading-text-decoration',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
        },
      ],
    },
  ],

  image_banner_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'bannar-color',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'bannar-font-family',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'bannar-font-size',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'bannar-font-weight',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
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
          attributes: {
            'data-type': 'transform',
          },
        },

        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'bannar-letter-spacing',
            'data-target': '.bannar-content h1 .bannar-content p',
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
            'data-type': 'line-height',
            'data-attribute': 'bannar-line-height',
            'data-target': '.bannar-content h1 .bannar-content p',
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
            'data-type': 'text-align',
            'data-attribute': 'bannar-text-align',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'bannar-text-decoration',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
      ],
    },
  ],
  image_text_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',

          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'Img-main-color',
            'data-target': '.main_heading  .sub_heading',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'main-font-family',
            'data-target': '.main_heading .sub_heading',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'main-font-size',
            'data-target': '.main_heading .sub_heading',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'main-font-weight',
            'data-target': '.main_heading .sub_heading',
          },
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
          attributes: {
            'data-type': 'transform',
          },
        },

        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'main-letter-spacing',
            'data-target': '.main_heading .sub_heading',
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
            'data-type': 'line-height',
            'data-attribute': 'main-line-height',
            'data-target': '.main_heading .sub_heading',
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
            'data-type': 'text-align',
            'data-attribute': 'main-text-align',
            'data-target': '.main_heading .sub_heading',
          },
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'main-text-decoration',
            'data-target': '.main_heading .sub_heading',
          },
        },
      ],
    },

    {
      name: 'Image Gallery',
      open: false,
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
          attributes: {
            'data-type': 'border-color',
            'data-attribute': 'image-border-color',
            'data-target': '.img_container img',
          },
        },

        {
          type: 'slider',
          name: 'Spacing',
          property: 'padding',
          attributes: {
            'data-type': 'padding',
            'data-attribute': 'image-padding',
            'data-target': '.img_container img',
          },
          default: '1',
          units: ['px', 'em', 'rem'],
        },
        {
          type: 'select',
          name: 'Border Type',
          property: 'border-style',
          default: 'solid',
          attributes: {
            'data-type': 'border-style',
            'data-attribute': 'image-border-style',
            'data-target': '.img_container img',
          },
          options: borderStyleOptions,
        },
      ],
    },
    {
      name: 'Gallery Caption',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: 'show',
          attributes: {
            'data-type': 'display',
            'data-attribute': 'gallery-display',
            'data-target': '.figure_caption',
          },
          options: [
            { value: 'block', name: 'Show' },
            { value: 'none', name: 'Hide' },
          ],
        },
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'gallery-color',
            'data-target': '.figure_caption',
          },
        },

        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'gallery-font-family',
            'data-target': '.figure_caption',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'gallery-font-size',
            'data-target': '.figure_caption',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'gallery-font-weight',
            'data-target': '.figure_caption',
          },
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
          attributes: {
            'data-type': 'transform',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'gallery-letter-spacing',
            'data-target': '.figure_caption',
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
            'data-type': 'line-height',
            'data-attribute': 'gallery-line-height',
            'data-target': '.figure_caption',
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
            'data-type': 'text-align',
            'data-attribute': 'gallery-text-align',
            'data-target': '.figure_caption',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'gallery-text-decoration',
            'data-target': '.figure_caption',
          },
        },
      ],
    },
  ],

  guideline_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'color',
            'data-attribute': 'guidelines-text-color',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'guidelines-font-family',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'guidelines-font-size',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'guidelines-font-weight',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'guidelines-letter-spacing',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
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
            'data-type': 'line-height',
            'data-attribute': 'guidelines-line-height',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
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
            'data-type': 'text-align',
            'data-attribute': 'guidelines-text-align',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
        {
          type: 'radio',
          name: 'Text Decoration',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'guidelines-text-decoration',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
      ],
    },
    {
      name: 'Guideline',
      open: false,
      buildProps: ['border-radius', 'box-shadow', 'padding'],
      attributes: {
        'data-target': '.guidline-option',
      },
      properties: [
        {
          type: 'color',
          name: 'Bullet Point Color',
          property: 'background-color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'background-color',
            'data-attribute': 'guidelines-bullet-background-color',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h3',
          },
        },

        {
          type: 'slider',
          name: 'Bullet Point Size',
          property: 'width',
          default: '15',
          units: ['px'],
          attributes: {
            'data-type': 'background-color',
            'data-attribute': 'guidelines-bullet-background-color',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h3',
          },
        },
        {
          type: 'select',
          name: 'Bullet Font',
          property: 'font-family',
          default: 'Arial',
          options: fontFamilies,
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
          type: 'select',
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
          type: 'select',
          name: 'Decoration',
          property: 'text-decoration',
          default: 'default',
          options: textDecorationOptions,
        },
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
  ],

  location_1: [
    {
      name: 'Text Color',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'bannar-font-family',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
      ],
    },

    {
      name: 'Typography',
      open: false,

      properties: [
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: fontFamilies,
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'bannar-font-family',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'slider',
          name: 'Font Size',
          property: 'font-size',
          default: 16,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'font-size',
            'data-attribute': 'bannar-font-size',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: fontWeightOptions,
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'bannar-font-weight',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'slider',
          name: 'Letter Spacing',
          property: 'letter-spacing',
          default: 0,
          units: ['px', 'rem'],
          attributes: {
            'data-type': 'letter-spacing',
            'data-attribute': 'bannar-letter-spacing',
            'data-target': '.bannar-content h1 .bannar-content p',
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
            'data-type': 'line-height',
            'data-attribute': 'bannar-line-height',
            'data-target': '.bannar-content h1 .bannar-content p',
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
            'data-type': 'text-align',
            'data-attribute': 'bannar-text-align',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'radio',
          name: 'Font Style',
          property: 'text-decoration',
          default: 'none',
          options: textDecorationOptions,
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'bannar-text-decoration',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
      ],
    },
    {
      name: 'Icon List',
      open: false,
      properties: [
        {
          type: 'slider',
          name: 'Icon Size',
          property: 'height',
        },
        {
          type: 'slider',
          name: 'Icon Rotate',
          property: 'transform:rotate',
          default: '0.5',
          min: '0',
          max: '1',
        },
        {
          type: 'radio',
          name: 'Alignment',
          property: 'text-align',
          default: 'left',
          options: textAlignOptions,
        },
        {
          type: 'color',
          name: 'Text Cover',
          property: 'color',
          default: '#4aa4da',
        },
        {
          type: 'color',
          name: 'Hover Cover',
          property: ':hover',
          default: '#4aa4da',
        },
        {
          type: 'slider',
          name: 'Text Indent',
          property: 'text-indent',
          default: '1',
        },
        {
          type: 'color',
          name: 'List Typography',
          property: 'color',
          default: '#4aa4da',
        },
      ],
    },
    {
      name: 'Icon',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Primary Color',
          property: 'fill',
          default: '#e6e6e6',
          attributes: {
            'data-type': 'fill',
            'data-attribute': 'icon-color',
            'data-target': '.address-icon svg',
          },
        },

        {
          type: 'slider',
          name: 'Icon Size',
          property: 'icon-size',
          default: '0',
        },
        {
          type: 'slider',
          name: 'Padding',
          property: 'padding',
          default: '0',
          units: ['px'],
          attributes: {
            'data-type': 'fill',
            'data-attribute': 'icon-color',
            'data-target': '.address-icon svg',
          },
        },
      ],
    },
  ],

  talent_1: [],

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
      buildProps: ['color'],
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
        'state',
        'border-style',
        'border-radius',
        'opacity',
        'box-shadow',
        'CSS',
      ],
      properties: [
        State,
        {
          id: makeId(),
          cid: makeId(),
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          default: 1,
          min: 0,
          max: 1,
          step: 0.01,
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
      buildProps: 'color',
      id: 'body-text',
      properties: [typography],
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
      id: 'link',
      buildProps: 'color',
      properties: [State, typography],
    },
    {
      name: 'Label',
      open: false,
      id: 'label',
      buildProps: ['color'],
      properties: [typography],
    },
    {
      name: 'Field',
      open: false,
      id: 'input',
      buildProps: [
        'color',
        'background-color',
        'border-style',
        'border-width',
        'border-color',
        'border-radius',
        'padding',
      ],
      properties: [typography, State],
    },
  ],

  department_1: [
    {
      name: 'Section Heading',
      open: false,
      properties: [color, typography],
    },
    {
      name: 'Sub Section Heading',
      open: false,
      properties: [color, typography, HtmlTag],
    },
    {
      name: 'Job Title',
      open: false,
      properties: [color, typography, HtmlTag],
    },
    {
      name: 'Company Name',
      open: false,
      properties: [color, typography, HtmlTag],
    },
    {
      name: 'Date Posted',
      open: false,
      properties: [color, typography, HtmlTag],
    },
    {
      name: 'Descriptive Text',
      open: false,
      properties: [color, typography, HtmlTag],
    },
    {
      name: 'Feature List',
      open: false,
      properties: [
        color,
        typography,
        HtmlTag,

        {
          type: 'slider',
          name: 'Space Between',
          property: 'space-between',
          default: 1,
          units: ['px', 'rem'],
        },
        {
          type: 'color',
          name: 'Icon Color',
          property: 'color',

          colorPicker: {
            preferredFormat: 'hex',
            showInput: true,
          },
        },
        {
          type: 'slider',
          name: 'Icon Size',
          property: 'icon-size',
          default: 1,
          units: ['px', 'rem'],
        },
        {
          type: 'slider',
          name: 'Text Indent',
          property: 'text-indent',
          default: 1,
          units: ['px', 'rem'],
        },
      ],
    },
  ],

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

export const getSectors = (name) => {
  return obj[name];
};
