import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import plugin from '../vendor/plugins/grapesjs-tailwind/src';
// import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import SectionTemplate from '../../SectionTemplate';
import '../index.scss';

const SectionPageBuilder: React.FC = () => {
  let [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  const sections = [
    'header',
    'footer',
    'image-banner',
    'image-gallery',
    'image-and-text',
    'paragraph',
    'practice-areas',
    'benefits',
    'departments',
    'guidelines',
    'location',
    'metrics-numbers',
    'talent-cloud-candidates',
    'testimonial',
    'video',
  ];
  const section = 'header'; //queryString.parse(window.location.search).section.toString();
  const showSections = true; //sections.includes(section) ? true : false;
  useEffect(() => {
    setStepNav([
      {
        label: 'Section Templates',
        url: '/collections/section-templates',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    editor = GrapesJS.init({
      container: '#sections',
      fromElement: true,
      storageManager: true,
      showOffsets: true,
      showOffsetsSelected: true,
      plugins: [plugin],
      pluginsOpts: {
        plugin: {
          // options
        },
      },
      blockManager: {
        appendTo: '.styles-container',
        blocks: [],
      },
      commands: {
        defaults: [
          {
            id: 'undo',
            run: (editor) => editor.UndoManager.undo(),
            stop: (editor) => editor.UndoManager.undo(),
          },
          {
            id: 'redo',
            run: (editor) => editor.UndoManager.redo(),
            stop: (editor) => editor.UndoManager.redo(),
          },
          {
            id: 'open-style-manager',
            run: (editor: GrapesJS.Editor) => editor.StyleManager.open(),
            stop: (editor: GrapesJS.Editor) => editor.StyleManager.close(),
          },
          {
            id: 'open-blocks',
            run: (editor: GrapesJS.Editor) => editor.BlockManager.open(),
            stop: (editor: GrapesJS.Editor) => editor.BlockManager.close(),
          },
        ],
      },

      // traitManager: {
      //   appendTo: '.styles-container',
      // },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Headers',
            open: false,
            buildProps: ['position', 'text'],
          },
          {
            name: 'Footers',
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
        ],
      },
      panels: {
        defaults: [
          {
            id: 'panel-switcher',
            el: '.panel__top',
            active: true,
            label: 'General Styles',
            enable: true,
            attributes: {
              title: 'Style',
            },
          },
          {
            id: 'back',
            el: '.panel__top',
            visible: true,
            label: 'Back',
            toggle: false,
            buttons: [
              {
                id: 'back',
                label: 'Back',
                className: 'fa fa-arrow-left',
              },
            ],
          },
        ],
      },
    });
    setEditor(editor);
    editor.onReady(() => {
      if (section === 'header') {
        // editor.addComponents(plugin.block.header);
      }
      editor.on('component:selected', (component) => {
        console.log(component.attributes);
      });
    });
  }, [setEditor]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="panel__top"></div>
          <div className="styles-container"></div>
        </div>
        {showSections ? <div id="sections"></div> : <SectionTemplate />}
      </div>
    </div>
  );
};

export default SectionPageBuilder;

// function Text(editor: GrapesJS.Editor) {
//   editor.DomComponents.addType('text', {
//     model: {
//       defaults: {
//         traits: [
//           {
//             type: 'text',
//             name: 'text-title',
//             label: 'Title',
//             placeholder: 'Enter your title ',
//           },
//           {
//             type: 'text',
//             name: 'text-link',
//             label: 'Link',
//             placeholder: 'Paste URL or Type ',
//           },
//           {
//             type: 'select',
//             name: 'text-size',
//             label: 'Size',
//             default: 'default',
//             options: [
//               { id: 'default', name: 'Default' },
//               { id: 'small', name: 'Small' },
//               { id: 'medium', name: 'Medium' },
//               { id: 'large', name: 'Large' },
//               { id: 'xl', name: 'XL' },
//               { id: 'xxl', name: 'XXL' },
//             ],
//           },

//           {
//             type: 'select',
//             name: 'text-html-tag',
//             label: 'HTML Tag',
//             default: 'h1',
//             options: [
//               { id: 'h1', name: 'H1' },
//               { id: 'h2', name: 'H2' },
//               { id: 'h3', name: 'H3' },
//               { id: 'h4', name: 'H4' },
//               { id: 'h5', name: 'H5' },
//               { id: 'h6', name: 'H6' },
//               { id: 'div', name: 'div' },
//               { id: 'span', name: 'span' },
//               { id: 'p', name: 'p' },
//             ],
//           },
//           {
//             type: 'select',
//             name: 'text-alignment',
//             label: 'Alignment',
//             default: 'left',
//             options: [
//               { id: 'left', name: 'Left' },
//               { id: 'center', name: 'Center' },
//               { id: 'right', name: 'Right' },
//               { id: 'justified', name: 'Justified' },
//             ],
//           },
//         ],
//       },
//     },
//   });
//   //Trait for Map
//   editor.DomComponents.addType('map', {
//     model: {
//       defaults: {
//         traits: [
//           {
//             type: 'text',
//             name: 'map-location',
//             label: 'Location',
//             placeholder: 'Enter your location ',
//           },
//         ],
//       },
//     },
//   });

//   //Trait for Image
//   editor.DomComponents.addType('image', {
//     model: {
//       defaults: {
//         traits: [
//           {
//             type: 'select',
//             name: 'image-size',
//             label: 'Size',
//             default: 'large',
//             options: [
//               { id: 'thumbnail', name: 'Thumbnail- 150 x 150' },
//               { id: 'medium', name: 'Medium- 300 x 300' },
//               { id: 'medium-large', name: 'Medium Large-  768 x 0' },
//               { id: 'large', name: 'Large- 1024 x 1024 ' },
//               { id: 'custom', name: 'Custom' },
//               { id: 'full', name: 'Full' },
//             ],
//           },
//           {
//             type: 'select',
//             name: 'image-alignment',
//             label: 'Alignment',
//             default: 'left',
//             options: [
//               { id: 'left', name: 'Left' },
//               { id: 'center', name: 'Center' },
//               { id: 'right', name: 'Right' },
//             ],
//           },
//           {
//             type: 'select',
//             name: 'image-caption',
//             label: 'Caption',
//             default: 'none',
//             options: [
//               { id: 'none', name: 'None' },
//               { id: 'attachment', name: 'Attachment Caption' },
//               { id: 'custom', name: 'Custom Caption' },
//             ],
//           },
//           {
//             type: 'select',
//             name: 'image-link',
//             label: 'Link',
//             default: 'none',
//             options: [
//               { id: 'none', name: 'None' },
//               { id: 'media ', name: 'Media File' },
//               { id: 'curl', name: 'Custom URL' },
//             ],
//           },
//         ],
//       },
//     },
//   });
// }
