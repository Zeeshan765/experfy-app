const obj = {
  header_1: [
    {
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
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
          default: '14',
          units: ['px', 'rem', 'em', 'vm'],
        },
        {
          type: 'slider',
          name: 'Border Type',
          property: 'border-type',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Blur',
          property: 'blur',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Brightness',
          property: 'brightness',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Contrast',
          property: 'contrast',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Saturation',
          property: 'saturation',
          default: '2',
        },
        {
          type: 'select',
          name: 'Hover Text Animation',
          property: 'hover-text-animation',
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
          property: 'transition-duration',
          default: '2',
        },
      ],
    },

    {
      name: 'Border',
      open: true,
      buildProps: [
        'border-radius',
        'border-width',
        'border-color',
        'border-style',
      ],
    },
    {
      name: 'Divider',
      open: true,
      properties: [
        {
          type: 'color',
          name: 'Color',
          property: 'divider-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Weight',
          property: 'divider-weight',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Gap',
          property: 'divider-gap',
          default: '15',
        },
      ],
    },
    {
      name: 'Social Media',
      open: true,
      buildProps: ['border-radius', 'border-style'],
      properties: [
        {
          type: 'color',
          name: 'Color',
          property: 'social-media-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Size',
          property: 'social-media-size',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Padding',
          property: 'social-media-padding',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Spacing',
          property: 'social-media-spacing',
          default: '5',
        },
        {
          type: 'slider',
          name: 'Rows Gap',
          property: 'social-media-rows-gap',
          default: '1',
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
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'color-typo',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
          property: 'opacity',
          default: '1',
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
          default: 'show',
          options: [
            { value: 'show', name: 'Show' },
            { value: 'hide', name: 'Hide' },
          ],
        },
        {
          type: 'select',
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
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
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
          property: 'space-between-Icon',
          default: '1',
        },
        {
          type: 'select',
          name: 'Alignment',
          property: 'icon-align',
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
          property: 'social-media-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Size',
          property: 'social-media-size',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Padding',
          property: 'social-media-padding',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Spacing',
          property: 'social-media-spacing',
          default: '5',
        },
        {
          type: 'slider',
          name: 'Rows Gap',
          property: 'social-media-rows-gap',
          default: '1',
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
          default: '14',
          units: ['px', 'rem', 'em', 'vm'],
        },
        {
          type: 'slider',
          name: 'Border Type',
          property: 'border-type',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Opacity',
          property: 'opacity',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Blur',
          property: 'blur',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Brightness',
          property: 'brightness',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Contrast',
          property: 'contrast',
          default: '2',
        },
        {
          type: 'slider',
          name: 'Saturation',
          property: 'saturation',
          default: '2',
        },
        {
          type: 'select',
          name: 'Hover Text Animation',
          property: 'hover-text-animation',
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
          property: 'transition-duration',
          default: '2',
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
          property: 'divider-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Weight',
          property: 'divider-weight',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Gap',
          property: 'divider-gap',
          default: '15',
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
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
      ],
    },
    {
      name: 'Icon',
      open: true,
      properties: [
        {
          type: 'color',
          name: 'Primary Color',
          property: 'background-color',
          default: '#e6e6e6',
          attributes: {
            'data-type': 'background-color',
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
          property: 'content-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'content-typography',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Blur',
          property: 'content-blur',
          default: '10',
        },

        {
          type: 'slider',
          name: 'Horizontal',
          property: 'content-horizontal',
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
          property: 'image-size',
          default: '1',
          units: ['px', 'rem', 'em', 'vm'],
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
          property: 'name-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'name-typography',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'slider',
          name: 'Blur',
          property: 'name-blur',
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
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'section-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
          property: 'aspect-ratio',
          default: '16:9',
          options: [
            { value: '16:9', name: '16:9' },
            { value: '4:3', name: '4:3' },
            { value: '1:1', name: '1:1' },
          ],
        },
      ],
    },
    {
      name: 'Css Filters',
      open: false,
      properties: [
        {
          type: 'slider',
          name: 'Blur',
          property: 'css-filter-blur',
          default: '0',
        },

        {
          type: 'slider',
          name: 'Brightness',
          property: 'css-filter-brightness',
          default: '100',
        },
        {
          type: 'slider',
          name: 'Contrast',
          property: 'css-filter-contrast',
          default: '100',
        },
        {
          type: 'slider',
          name: 'Saturation',
          property: 'css-filter-saturation',
          default: '100',
        },
        {
          type: 'slider',
          name: 'Hue',
          property: 'css-filter-hue',
          default: '0',
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
          property: 'text-color',
          default: '#4aa4da',
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
          default: '#4aa4da',
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
          property: 'number-color',
          default: '#4aa4da',
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
          property: 'text-transform',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'uppercase', name: 'Uppercase' },
            { value: 'lowercase', name: 'Lowercase' },
            { value: 'capitalize', name: 'Capitalize' },
          ],
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
        },
      ],
    },
    {
      name: 'Numbers Description',
      open: false,
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'desc-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
          options: [
            { value: 'default', name: 'Default' },
            { value: 'bold', name: 'Bold' },
            { value: 'normal', name: 'Normal' },
          ],
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
          property: 'text-transform',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'uppercase', name: 'Uppercase' },
            { value: 'lowercase', name: 'Lowercase' },
            { value: 'capitalize', name: 'Capitalize' },
          ],
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
          property: 'line-height',
          ResizeObserver: true,
          default: '1',
          units: ['px', 'em', 'rem'],
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
    },
  ],
  paragraph_1: [
    {
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
      ],
    },
  ],

  image_banner_1: [],
  image_text_1: [
    {
      properties: [
        {
          type: 'color',
          name: 'Text Color',
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'color-typo',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
          property: 'opacity',
          default: '1',
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
      open: false,
      properties: [
        {
          type: 'select',
          name: 'Display',
          property: 'display',
          default: 'show',
          options: [
            { value: 'show', name: 'Show' },
            { value: 'hide', name: 'Hide' },
          ],
        },
        {
          type: 'select',
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
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
          },
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'text-color',
          default: '#4aa4da',
          attributes: {
            'data-type': 'color',
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
      properties: [
        {
          type: 'color',
          name: 'Bullet Point Color',
          property: 'bullet-color',
          default: '#FFC0CB',
        },

        {
          type: 'slider',
          name: 'Bullet Point Size',
          property: 'bullet-point-size',
          default: '15',
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
          property: 'text-transform',
          default: 'default',
          options: [
            { value: 'default', name: 'Default' },
            { value: 'uppercase', name: 'Uppercase' },
            { value: 'lowercase', name: 'Lowercase' },
            { value: 'capitalize', name: 'Capitalize' },
          ],
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
          property: 'loc-color',
          default: '#4aa4da',
        },
        {
          type: 'color',
          name: 'Typography',
          property: 'typo-color',
          default: '#4aa4da',
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
          property: 'icon-size',
          default: '1',
        },
        {
          type: 'slider',
          name: 'Icon Rotate',
          property: 'icon-rotate',
          default: '1',
        },
        {
          type: 'select',
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
          name: 'Text Cover',
          property: 'text-color',
          default: '#4aa4da',
        },
        {
          type: 'color',
          name: 'Hover Cover',
          property: 'hover-color',
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
          name: 'List Typoraphy',
          property: 'list-color',
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
          property: 'background-color',
          default: '#e6e6e6',
          attributes: {
            'data-type': 'background-color',
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
        },
      ],
    },
  ],

  talent_1: [],
};

export const getSectors = (name) => {
  return obj[name];
};
