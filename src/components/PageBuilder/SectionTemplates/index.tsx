import GrapesJS from 'grapesjs';
import React, { useEffect, useState } from 'react';
// import PageManagerPlugin from 'grapesjs-project-manager'
import { Eyebrow } from 'payload/components/elements';
import plugin from '../ExperfyPlugin';
import Blocks from 'grapesjs-blocks-basic';
import { useStepNav } from 'payload/components/hooks';

const PageBuilder: React.FC = () => {
  const [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/page-builder',
      },
    ]);
  }, [setStepNav]);


  useEffect(() => {
    const editor = GrapesJS.init({
      container: '#gjs',
      pageManager: {
        pages: [],
      },
      plugins: [Blocks],
      pluginsOpts: {
        plugin: {
          showStylesOnChange: true,
        },
      },
      height: '100%',
      autorender: true,
      storageManager: {
        type: 'local',
        autoload: true,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
          local: {
            key: 'global-theme-settings',
          }
        }
      }
    });

    setEditor(editor);
    editor.onReady((clb) => {
      console.log('Editor is ready');
      Text(editor);
      // ImageComponent(editor);
      // MapComponent(editor);
    });

  }, [setEditor]);


  
  //Trait for Map
  

  //Trait for Image
  

  //Trait for Button

  // editor.DomComponents.addType('button', {
  //   model: {
  //     defaults: {
  //       traits: [
  //         {
  //           type: 'select',
  //           name: 'btn-type',
  //           label: 'Type',
  //           default: 'default',
  //           options: [
  //             { id: 'default', name: 'Default' },
  //             { id: 'info', name: 'Info' },
  //             { id: 'success', name: 'Success' },
  //             { id: 'warning', name: 'Warning ' },
  //             { id: 'danger', name: 'Danger' },
  //           ],
  //         },
  //         {
  //           type: 'text',
  //           name: 'btn-text',
  //           label: 'Text',
  //           placeholder: 'Click Here',
  //         },
  //         {
  //           type: 'text',
  //           name: 'btn-link',
  //           label: 'Link',
  //           placeholder: '#',
  //         },
  //         {
  //           type: 'select',
  //           name: 'btn-alignment',
  //           label: 'Alignment',
  //           default: 'left',
  //           options: [
  //             { id: 'left', name: 'Left' },
  //             { id: 'center', name: 'Center' },
  //             { id: 'right', name: 'Right' },
  //             { id: 'justified', name: 'Justified' },
  //           ],
  //         },

  //         {
  //           type: 'select',
  //           name: 'btn-size',
  //           label: 'Size',
  //           default: 'medium',
  //           options: [
  //             { id: 'extrasmall', name: 'Extra Small' },
  //             { id: 'small', name: 'Small' },
  //             { id: 'medium', name: 'Medium' },
  //             { id: 'large', name: 'Large' },
  //             { id: 'extralarge', name: 'Extra Large' },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // });

  //Trait for Icon
  // editor.DomComponents.addType('icon', {
  //   model: {
  //     defaults: {
  //       traits: [
  //         {
  //           type: 'select',
  //           name: 'icon-view',
  //           label: 'View',
  //           default: 'default',
  //           options: [
  //             { id: 'default', name: 'Default' },
  //             { id: 'stacked', name: 'Stacked' },
  //             { id: 'framed', name: 'Framed' },
  //           ],
  //         },
  //         {
  //           type: 'text',
  //           name: 'icon-link',
  //           label: 'Link',
  //           placeholder: 'https://your-link.com',
  //         },
  //         {
  //           type: 'select',
  //           name: 'icon-alignment',
  //           label: 'Alignment',
  //           default: 'left',
  //           options: [
  //             { id: 'left', name: 'Left' },
  //             { id: 'center', name: 'Center' },
  //             { id: 'right', name: 'Right' },
  //           ],
  //         },
  //       ],
  //     },
  //   },
  // });

  //Trait for Inner Section
  // editor.DomComponents.addType('inner-section', {
  //   model: {
  //     defaults: {
  //       traits: [
  //         {
  //           type: 'select',
  //           name: 'inner-section-content-width',
  //           label: 'Content Width',
  //           default: ' boxed',
  //           options: [
  //             { id: 'boxed', name: 'Boxed' },
  //             { id: 'full', name: 'Full Width' },
  //           ],
  //         },
  //         {
  //           type: 'select',
  //           name: 'inner-section-content-gap',
  //           label: 'Column Gap',
  //           default: 'default',
  //           options: [
  //             { id: 'default', name: 'Default' },
  //             { id: 'nogap', name: 'No Gap' },
  //             { id: 'extended', name: 'Extended' },

  //             { id: 'narrow', name: 'Narrow' },
  //             { id: 'wide', name: 'Wide' },
  //             { id: 'wider', name: 'Wider' },
  //             { id: 'custom', name: 'Custom' },
  //           ],
  //         },
  //         {
  //           type: 'select',
  //           name: 'inner-section-content-height',
  //           label: 'Height',
  //           default: 'default',
  //           options: [
  //             { id: 'default', name: 'Default' },
  //             { id: 'fit', name: 'Fit to Screen' },
  //             { id: 'min', name: 'Min Height' },
  //           ],
  //         },
  //         {
  //           type: 'select',
  //           name: 'inner-section-content-vertical-alignment',
  //           label: 'Vertical Align',
  //           default: 'default',
  //           options: [
  //             { id: 'default', name: 'Default' },
  //             { id: 'top', name: 'Top' },
  //             { id: 'middle', name: 'Middle' },
  //             { id: 'bottom', name: 'Bottom' },
  //             { id: 'between', name: 'Space Between' },
  //             { id: 'around', name: 'Space Around' },
  //             { id: 'evenly', name: 'Space Evenly' },

  //           ],
  //         },
  //         {
  //           type: 'select',
  //           name: 'inner-section-content-overflow',
  //           label: 'Overflow',
  //           default: 'default',
  //           options: [
  //             { id: 'default', name: 'Default' },
  //             { id: 'hidden', name: 'Hidden' },
  //           ],
  //         },
  //         {
  //           type: 'select',
  //           name: 'inner-section-content-html-tag',
  //           label: 'HTML Tag',
  //           default: 'div',
  //           options: [
  //             { id: 'div', name: 'div' },
  //             { id: 'section', name: 'section' },
  //             { id: 'header', name: 'header' },
  //             { id: 'footer', name: 'footer' },
  //             { id: 'main', name: 'main' },
  //             { id: 'article', name: 'article' },
  //             { id: 'aside', name: 'aside' },
  //             { id: 'nav', name: 'nav' },

  //           ],
  //         },
  //       ],
  //     },
  //   },
  // });

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="styles-container"></div>
      <div id="gjs" />
    </div>
  );
};

export default PageBuilder;


function Text(editor: GrapesJS.Editor) {
  editor.DomComponents.addType('text', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'text-title',
            label: 'Title',
            placeholder: 'Enter your title ',
          },
          {
            type: 'text',
            name: 'text-link',
            label: 'Link',
            placeholder: 'Paste URL or Type ',
          },
          {
            type: 'select',
            name: 'text-size',
            label: 'Size',
            default: 'default',
            options: [
              { id: 'default', name: 'Default' },
              { id: 'small', name: 'Small' },
              { id: 'medium', name: 'Medium' },
              { id: 'large', name: 'Large' },
              { id: 'xl', name: 'XL' },
              { id: 'xxl', name: 'XXL' },
            ],
          },

          {
            type: 'select',
            name: 'text-html-tag',
            label: 'HTML Tag',
            default: 'h1',
            options: [
              { id: 'h1', name: 'H1' },
              { id: 'h2', name: 'H2' },
              { id: 'h3', name: 'H3' },
              { id: 'h4', name: 'H4' },
              { id: 'h5', name: 'H5' },
              { id: 'h6', name: 'H6' },
              { id: 'div', name: 'div' },
              { id: 'span', name: 'span' },
              { id: 'p', name: 'p' },
            ],
          },
          {
            type: 'select',
            name: 'text-alignment',
            label: 'Alignment',
            default: 'left',
            options: [
              { id: 'left', name: 'Left' },
              { id: 'center', name: 'Center' },
              { id: 'right', name: 'Right' },
              { id: 'justified', name: 'Justified' },
            ],
          },
        ],
      },
    },
  });
  //Trait for Map
  editor.DomComponents.addType('map', {
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            name: 'map-location',
            label: 'Location',
            placeholder: 'Enter your location ',
          },
        ],
      },
    },
  });

  //Trait for Image
  editor.DomComponents.addType('image', {
    model: {
      defaults: {
        traits: [
          {
            type: 'select',
            name: 'image-size',
            label: 'Size',
            default: 'large',
            options: [
              { id: 'thumbnail', name: 'Thumbnail- 150 x 150' },
              { id: 'medium', name: 'Medium- 300 x 300' },
              { id: 'medium-large', name: 'Medium Large-  768 x 0' },
              { id: 'large', name: 'Large- 1024 x 1024 ' },
              { id: 'custom', name: 'Custom' },
              { id: 'full', name: 'Full' },
            ],
          },
          {
            type: 'select',
            name: 'image-alignment',
            label: 'Alignment',
            default: 'left',
            options: [
              { id: 'left', name: 'Left' },
              { id: 'center', name: 'Center' },
              { id: 'right', name: 'Right' },
            ],
          },
          {
            type: 'select',
            name: 'image-caption',
            label: 'Caption',
            default: 'none',
            options: [
              { id: 'none', name: 'None' },
              { id: 'attachment', name: 'Attachment Caption' },
              { id: 'custom', name: 'Custom Caption' },
            ],
          },
          {
            type: 'select',
            name: 'image-link',
            label: 'Link',
            default: 'none',
            options: [
              { id: 'none', name: 'None' },
              { id: 'media ', name: 'Media File' },
              { id: 'curl', name: 'Custom URL' },
            ],
          },
        ],
      },
    },
  });


  return (
    <div className="main__content">
      <Eyebrow />
      <div id="gjs" />
      
    </div>
  );
  
};

