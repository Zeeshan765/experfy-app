import GrapesJS from 'grapesjs';
import React, { useEffect, useState } from 'react';
// import PageManagerPlugin from 'grapesjs-project-manager'
import Blocks from 'grapesjs-blocks-basic';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import ExperfyPlugin from '../ExperfyPlugin';
import '../index.scss';
import plugin1 from '../vendor/plugins/grapesjs-tailwind/src/index';

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
      container: '#sections',
      fromElement: true,
      plugins: [Blocks, plugin1],
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
            key: 'gts',
          },
        },
      },
      canvas: {
        styles: ['../index.scss'],
      },
      styleManager: {
        sectors: [
          {
            name: 'General',
            open: false,
            buildProps: ['display', 'position'],
          },
          {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'margin', 'padding'],
          },
          {
            name: 'Decorations',
            open: false,
            buildProps: ['background-color'],
          },
        ],
        clearProperties: false,
        appendTo: '.styles-container',
      },

      panels: {
        defaults: [
          {
            id: 'panel-switcher',
            el: '.panel__left',
            active: true,
            label: 'General Styles',
            enable: true,
          },
          {
            id: 'save',
            el: '.panel__top',
            visible: true,
            label: 'Save',
            toggle: false,
            buttons: [
              {
                id: 'save',
                className: 'fa fa-floppy-o',
                command: 'save',
                attributes: {
                  title: 'Save',
                },
              },
            ],
          },
          // {
          //   id: 'open-templates',
          //   className: 'fa fa-folder-o',
          //   attributes: {
          //     title: 'Open projects and templates'
          //   },
          //   command: 'open-templates', //Open modal
          // },
          // {
          //   id: 'open-pages',
          //   className: 'fa fa-file-o',
          //   attributes: {
          //     title: 'Take Screenshot'
          //   },
          //   command: 'open-pages',
          //   toggle: false,
          // }
        ],
      },
    });

    setEditor(editor);
    editor.onReady((clb) => {
      console.log('Editor is ready');
    });
  }, [setEditor]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="editor-row">
        <div className="panel__left">
          <div className="styles-container"></div>
        </div>
        <div className="editor-canvas">
          <div id="sections"></div>
        </div>
      </div>
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
}
