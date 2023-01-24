const obj = {
  header_1: [
    {
      name: 'Header',
      open: true,
      buildProps: [
        'border',
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
        // {
        //   type: 'backgound-color',
        //   name: 'Background Color',
        //   property: 'backgound-color',
        //   // default: '#4aa4da',
        //   attributes: {
        //     'data-type': 'backgound-color',
        //     'data-attribute':'header-background-color',
        //     'data-target': '.header-div',
        //   },
        // },

        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'header-text-color',
            'data-target': '.header-logo-text',
          },
        },
      ],
    },
    {
      name: 'Logo',
      open: true,
      buildProps: ['border'],

      properties: [
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
            'data-target': '.logo',
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
          type: 'radio',
          name: 'Blur',
          property: 'backdrop-filter',
          options: [
            { value: 'blur(0px)', name: '0px' },
            { value: 'blur(2px)', name: '2px' },
            { value: 'blur(4px)', name: '4px' },
            { value: 'blur(6px)', name: '6px' },
            { value: 'blur(8px)', name: '8px' },
            { value: 'blur(10px)', name: '10px' },
          ],
          attributes: {
            'data-type': 'backdrop-filter',
            'data-attribute': 'header-logo-blur',
            'data-target': '.logo',
          },
        },
        {
          type: 'radio',
          name: 'Brightness',
          property: 'backdrop-filter',
          default: `brightness(100%)`,
          options: [
            { value: 'brightness(100%)', name: '100%' },
            { value: 'brightness(75%)', name: '75%' },
            { value: 'brightness(50%)', name: '50%' },
            { value: 'brightness(25%)', name: '25%' },
            { value: 'brightness(0%)', name: '0%' },
          ],
          attributes: {
            'data-type': 'backdrop-filter',
            'data-attribute': 'header-logo-brightness',
            'data-target': '.logo',
          },
        },
        {
          type: 'radio',
          name: 'Contrast',
          property: 'backdrop-filter',
          options: [
            { value: 'contrast(100%)', name: '100%' },
            { value: 'contrast(75%)', name: '75%' },
            { value: 'contrast(50%)', name: '50%' },
            { value: 'contrast(25%)', name: '25%' },
            { value: 'contrast(0%)', name: '0%' },
          ],
          attributes: {
            'data-type': 'backdrop-filter',
            'data-attribute': 'header-logo-contrast',
            'data-target': '.logo',
          },
        },
        {
          type: 'radio',
          name: 'Saturation',
          property: 'backdrop-filter',
          default: 'saturate(100%)',
          options: [
            { value: 'saturate(100%)', name: '100%' },
            { value: 'saturate(75%)', name: '75%' },
            { value: 'saturate(50%)', name: '50%' },
            { value: 'saturate(25%)', name: '25%' },
            { value: 'saturate(0%)', name: '0%' },
          ],
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
      buildProps: ['border'],
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
            'data-target': 'divider',
          },
        },
        {
          type: 'slider',
          name: 'Weight',
          property: 'height',
          default: '1px',
          attributes: {
            'data-type': 'height',
            'data-target': 'divider',
          },
        },
        {
          type: 'slider',
          name: 'Gap',
          property: 'gap',
          default: '0px',
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
      buildProps: ['border'],
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'content-text-align',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
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
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'content-text-decoration',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
        },
      ],
    },
    {
      name: 'Image Gallery',
      open: true,
      buildProps: ['border-radius', 'border-width', 'border-color'],
      properties: [
        {
          type: 'slider',
          name: 'Spacing',
          property: 'gap',
          default: '10px',
          units: 'px',
        },
        {
          type: 'select',
          name: 'Border Type',
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
      ],
    },
    {
      name: 'Gallery Caption',
      open: true,
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: '',
          options: [
            { value: '', name: 'Show' },
            { value: 'none', name: 'Hide' },
          ],
        },
        {
          type: 'radio',
          name: 'Alignment',
          property: 'text-align',
          default: 'left',
          options: [
            { value: 'left', name: 'Left' },
            { value: 'center', name: 'Center' },
            { value: 'right', name: 'Right' },
          ],
        },
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'select',
          name: 'Typography',
          property: 'font-family',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
      ],
    },

    {
      name: 'Button Border',
      open: true,
      buildProps: [
        'border-radius',
        'border-width',
        'border-style',
        'border-color',
        'box-shadow',
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
          default: '#4aa4da',
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'benefit-text-color',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'benefit-text-align',
            'data-target': '.benefits-title-div h1 .benefits-title-div h2',
          },
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
      open: true,
      // buildProps: ['fill'],

      properties: [
        {
          type: 'color',
          name: 'Primary Color',

          property: 'fill',
          default: '#4aa4da',
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
          default: '#4aa4da',
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
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'content-text-align',
            'data-target':
              '.user-detail-label  .user-detail-label span  .slider-text-div p',
          },
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
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'name-color',
            'data-target': '.slider-content-main-div .left-container h2',
          },
        },
        {
          type: 'composite',
          name: 'Typography',
          property: 'font',
          default: '#4aa4da',
          attributes: {
            'data-type': 'font',
            'data-attribute': 'name-typography',
            'data-target': '.testimonial-name',
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
          attributes: {
            'data-type': 'color',
            'data-attribute': 'content-color',
            'data-target': '.section-title',
          },
        },
        {
          type: 'composite',
          name: 'Typography',
          property: 'font',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
      name: 'Section Heading',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'section-heading-color',
            'data-target': '.section-title',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'section-heading-font-family',
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
            'data-attribute': 'section-heading-font-size',
            'data-target': '.section-title',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'section-heading-font-weight',
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
            'data-attribute': 'section-heading-letter-spacing',
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
            'data-attribute': 'section-heading-line-height',
            'data-target': '.section-title',
          },
        },
        {
          type: 'select',
          name: 'Text Align',
          property: 'text-align',
          default: 'center',
          ResizeObserver: true,
          options: [
            { value: 'left', name: 'Left' },
            { value: 'center', name: 'Center' },
            { value: 'right', name: 'Right' },
            { value: 'justify', name: 'Justify' },
          ],
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'section-heading-text-align',
            'data-target': '.section-title',
          },
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
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'section-heading-text-decoration',
            'data-target': '.section-title',
          },
        },
      ],
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
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'color',
            'data-attribute': 'sub-section-heading-color',
            'data-target': '.box-text-div p',
          },
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'title-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'title-typography',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'select',
          name: 'Title HTML Tag',
          property: 'title-tag',
          default: 'h2',
          options: [
            { value: 'h1', name: 'H1' },
            { value: 'h2', name: 'H2' },
            { value: 'h3', name: 'H3' },
            { value: 'h4', name: 'H4' },
            { value: 'h5', name: 'H5' },
            { value: 'h6', name: 'H6' },
          ],
        },
      ],
    },

    {
      name: 'Descriptive Text',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Color',
          property: 'desc-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'desc-typography',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'select',
          name: 'HTML Tag',
          property: 'desc-tag',
          default: 'h2',
          options: [
            { value: 'h1', name: 'H1' },
            { value: 'h2', name: 'H2' },
            { value: 'h3', name: 'H3' },
            { value: 'h4', name: 'H4' },
            { value: 'h5', name: 'H5' },
            { value: 'h6', name: 'H6' },
          ],
        },
      ],
    },

    {
      name: 'Border',
      open: false,
      buildProps: [
        'border-radius',
        'border-width',
        'border-color',
        'border-style',
        'padding',
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'number-heading-color',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'number-heading-text-align',
            'data-target': '.number-container-div h1 .number-container-div h2 ',
          },
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
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'number-value-color',
            'data-target':
              '.number-percentagges-section .percentage-info  h1  .number-percentagges-section .percentage-info  h1 span',
          },
        },
        {
          type: 'select',
          name: 'Number Font',
          property: 'font-family',
          defaults: 'Arial, Helvetica, sans-serif',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            {
              value: 'Arial Black, Gadget, sans-serif',
              name: 'Arial Black',
            },
            {
              value: 'Brush Script MT, sans-serif',
              name: 'Brush Script MT',
            },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
            {
              value: 'Courier New, Courier, monospace',
              name: 'Courier New',
            },
            { value: 'Georgia, serif', name: 'Georgia' },
            { value: 'Helvetica, sans-serif', name: 'Helvetica' },
            { value: 'Impact, Charcoal, sans-serif', name: 'Impact' },
            {
              value: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
              name: 'Lucida Sans Unicode',
            },
            { value: 'Tahoma, Geneva, sans-serif', name: 'Tahoma' },
            {
              value: 'Times New Roman, Times, serif',
              name: 'Times New Roman',
            },
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'number-value-font',
            'data-target':
              '.number-percentagges-section .percentage-info  h1  .number-percentagges-section .percentage-info  h1 span',
          },
        },
        {
          type: 'select',
          name: 'Weight',
          property: 'font-weight',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'bold', name: 'Bold' },
            { value: 'normal', name: 'Normal' },
          ],
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'number-value-weight',
            'data-target':
              '.number-percentagges-section .percentage-info  h1  .number-percentagges-section .percentage-info  h1 span',
          },
        },
        {
          type: 'select',
          name: 'Font Style',
          property: 'font-style',
          default: 'default',
          options: [
            {
              value: 'default',
              name: 'Default',
            },
            {
              value: 'italic',
              name: 'Italic',
            },
            {
              value: 'normal',
              name: 'Normal',
            },
          ],
        },

        {
          type: 'select',
          name: ' Transform',
          property: 'transform',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'uppercase', name: 'Uppercase' },
            { value: 'lowercase', name: 'Lowercase' },
            { value: 'capitalize', name: 'Capitalize' },
          ],
          attributes: {
            'data-type': 'transform',
            'data-attribute': 'number-value-transform',
            'data-target':
              '.number-percentagges-section .percentage-info  h1  .number-percentagges-section .percentage-info  h1 span',
          },
        },
        {
          type: 'select',
          name: 'Decoration',

          property: 'text-decoration',

          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'underline', name: 'Underline' },
            { value: 'line-through', name: 'Line Through' },
          ],
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'number-value-decoration',
            'data-target':
              '.number-percentagges-section .percentage-info  h1  .number-percentagges-section .percentage-info  h1 span',
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
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'number-description-color',
            'data-target': '.number-percentagges-section .percentage-info p',
          },
        },
        {
          type: 'select',
          name: 'Text Font',
          property: 'font-family',
          default: 'Arial, Helvetica, sans-serif',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            {
              value: 'Arial Black, Gadget, sans-serif',
              name: 'Arial Black',
            },
            {
              value: 'Brush Script MT, sans-serif',
              name: 'Brush Script MT',
            },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
            {
              value: 'Courier New, Courier, monospace',
              name: 'Courier New',
            },
            { value: 'Georgia, serif', name: 'Georgia' },
            { value: 'Helvetica, sans-serif', name: 'Helvetica' },
            { value: 'Impact, Charcoal, sans-serif', name: 'Impact' },
            {
              value: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
              name: 'Lucida Sans Unicode',
            },
            { value: 'Tahoma, Geneva, sans-serif', name: 'Tahoma' },
            {
              value: 'Times New Roman, Times, serif',
              name: 'Times New Roman',
            },
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'number-description-font',
            'data-target': '.number-percentagges-section .percentage-info p',
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
            'data-target': '.number-percentagges-section .percentage-info p',
          },
        },
        {
          type: 'select',
          name: 'Weight',
          property: 'font-weight',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'bold', name: 'Bold' },
            { value: 'normal', name: 'Normal' },
          ],
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'number-description-weight',
            'data-target': '.number-percentagges-section .percentage-info p',
          },
        },
        {
          type: 'select',
          name: 'Font Style',
          property: 'font-style',
          default: 'default',
          options: [
            {
              value: 'default',
              name: 'Default',
            },
            {
              value: 'italic',
              name: 'Italic',
            },
            {
              value: 'normal',
              name: 'Normal',
            },
          ],
          attributes: {
            'data-type': 'font-style',
            'data-attribute': 'number-description-style',
            'data-target': '.number-percentagges-section .percentage-info p',
          },
        },

        {
          type: 'select',
          name: ' Transform',
          property: 'text-transform',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'uppercase', name: 'Uppercase' },
            { value: 'lowercase', name: 'Lowercase' },
            { value: 'capitalize', name: 'Capitalize' },
          ],
          attributes: {
            'data-type': 'text-transform',
            'data-attribute': 'number-description-transform',
            'data-target': '.number-percentagges-section .percentage-info p',
          },
        },
        {
          type: 'select',
          name: 'Decoration',
          property: 'text-decoration',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'underline', name: 'Underline' },
            { value: 'line-through', name: 'Line Through' },
          ],
          attributes: {
            'data-type': 'text-decoration',
            'data-attribute': 'number-description-decoration',
            'data-target': '.number-percentagges-section .percentage-info p',
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
            'data-target': '.number-percentagges-section .percentage-info p',
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
            'data-target': '.number-percentagges-section .percentage-info p',
          },
        },
      ],
    },

    {
      name: 'Numbers Border',
      open: false,
      buildProps: [
        'border-radius',
        'border-width',
        'border-style',
        'border-color',
        'box-shadow',
        'padding',
        'text-align',
      ],
      attributes: {
        'data-target': '.benefit percentage-info',
      },
    },
  ],
  paragraph_1: [
    {
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'paragraph-text-color',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
        },

        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
          attributes: {
            'data-type': 'font-family',
            'data-attribute': 'paragraph-heading-font-family',
            'data-target': '.paragraph-container h1 .paragraph-container p',
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
            'data-attribute': 'paragraph-heading-font-size',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
        },
        {
          type: 'select',
          name: 'Font Weight',
          property: 'font-weight',
          default: 'normal',
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'paragraph-heading-font-weight',
            'data-target': '.paragraph-container h1 .paragraph-container p',
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
          type: 'select',
          name: 'Text Align',
          property: 'text-align',
          default: 'left',
          ResizeObserver: true,
          options: [
            { value: 'left', name: 'Left' },
            { value: 'center', name: 'Center' },
            { value: 'right', name: 'Right' },
          ],
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'paragraph-heading-text-align',
            'data-target': '.paragraph-container h1 .paragraph-container p',
          },
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'bannar-color',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'bannar-text-align',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
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
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: ' #171414',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'Img-main-color',
            'data-target': '.main_heading  .sub_heading',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
          attributes: {
            'data-type': 'font-weight',
            'data-attribute': 'main-font-weight',
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'main-text-align',
            'data-target': '.main_heading .sub_heading',
          },
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
      buildProps: ['border-radius', 'border-width', 'border-color'],
      properties: [
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
          options: [
            { value: 'solid', name: 'Solid' },
            { value: 'dotted', name: 'Dotted' },
            { value: 'dashed', name: 'Dashed' },
            { value: 'double', name: 'Double' },
            { value: 'groove', name: 'Groove' },
            { value: 'inset', name: 'Inset' },
            { value: 'outset', name: 'Outset' },
            { value: 'hidden', name: 'Hidden' },
          ],
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
          type: 'select',
          name: 'Alignment',
          property: 'text-align',
          default: 'left',
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'gallery-text-align',
            'data-target': '.figure_caption',
          },
          options: [
            { value: 'left', name: 'Left' },
            { value: 'center', name: 'Center' },
            { value: 'right', name: 'Right' },
          ],
        },
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'gallery-color',
            'data-target': '.figure_caption',
          },
        },
      ],
    },
  ],

  guideline_1: [
    {
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
            'data-attribute': 'guidelines-text-color',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'guidelines-text-align',
            'data-target':
              '.guideline-main-wrapper .guideline-container .guideline-header-section h1  .guideline-main-wrapper .guideline-container .guideline-header-section h2 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading h1 .guideline-main-wrapper .guideline-container .guidline-option .guideline .heading p',
          },
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
      buildProps: [
        'border-radius',
        'border-width',
        'border-color',
        'box-shadow',
        'padding',
      ],
      attributes: {
        'data-target': '.guidline-option',
      },
      properties: [
        {
          type: 'color',
          name: 'Bullet Point Color',
          property: 'baclgorund-color',
          default: '#FFC0CB',
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
          default: 'Arial, Helvetica, sans-serif',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            {
              value: 'Arial Black, Gadget, sans-serif',
              name: 'Arial Black',
            },
            {
              value: 'Brush Script MT, sans-serif',
              name: 'Brush Script MT',
            },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
            {
              value: 'Courier New, Courier, monospace',
              name: 'Courier New',
            },
            { value: 'Georgia, serif', name: 'Georgia' },
            { value: 'Helvetica, sans-serif', name: 'Helvetica' },
            { value: 'Impact, Charcoal, sans-serif', name: 'Impact' },
            {
              value: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
              name: 'Lucida Sans Unicode',
            },
            { value: 'Tahoma, Geneva, sans-serif', name: 'Tahoma' },
            {
              value: 'Times New Roman, Times, serif',
              name: 'Times New Roman',
            },
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
        },

        {
          type: 'radio',
          name: 'Font Style',
          property: 'font-style',
          default: 'default',
          options: [
            {
              value: 'default',
              name: '&#8416',
            },
            {
              value: 'italic',
              name: `<i>I</i>`,
            },
            {
              value: 'bold',
              name: '<b>B</b>',
            },
          ],
        },

        {
          type: 'radio',
          name: 'Transform',
          property: 'text-transform',
          default: 'default',
          options: [
            { value: 'default', name: '&#8416' },
            { value: 'uppercase', name: 'AA' },
            { value: 'lowercase', name: 'aa' },
            { value: 'capitalize', name: 'Aa' },
          ],
        },
        {
          type: 'radio',
          name: 'Decoration',
          property: 'text-decoration',
          default: 'default',
          options: [
            { value: 'default', name: `&#8416` },
            { value: 'underline', name: `&#xf0cd` },
            { value: 'line-through', name: `S` },
          ],
        },
      ],
    },
  ],

  location_1: [
    {
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'color',
          default: '#4aa4da',
        },
        {
          type: 'select',
          name: 'Font Family',
          property: 'font-family',
          options: [
            { value: 'Arial, Helvetica, sans-serif', name: 'Arial' },
            { value: 'Arial Black, Gadget, sans-serif', name: 'Arial Black' },
            { value: 'Brush Script MT, sans-serif', name: 'Brush Script MT' },
            {
              value: 'Comic Sans MS, cursive, sans-serif',
              name: 'Comic Sans MS',
            },
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
            {
              value: 'Trebuchet MS, Helvetica, sans-serif',
              name: 'Trebuchet MS',
            },
            { value: 'Verdana, Geneva, sans-serif', name: 'Verdana' },
          ],
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
          options: [
            { value: 'light', name: 'light' },
            { value: 'normal', name: 'Normal' },
            { value: 'semi-bold', name: 'Semi Bold' },
            { value: 'bold', name: 'Bold' },
            { value: 'bolder', name: 'Bolder' },
          ],
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
          attributes: {
            'data-type': 'text-align',
            'data-attribute': 'bannar-text-align',
            'data-target': '.bannar-content h1 .bannar-content p',
          },
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
      open: true,
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
          options: [
            { value: 'left', name: 'Left' },
            { value: 'center', name: '&#9776' },
            { value: 'right', name: 'Right' },
          ],
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

  generic: [],
};

export const getSectors = (name) => {
  return obj[name];
};
