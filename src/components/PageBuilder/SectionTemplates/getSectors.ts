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
            buildProps: [
              'border-radius',
              'border-style',
            ],
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
                type: "color",
                name: "Primary Color",
                property: "background-color",
                default: "#e6e6e6",
                attributes: {
                  "data-type": "background-color",
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
    
   };

  export const getSectors = (name) => {
    return obj[name];
  };
