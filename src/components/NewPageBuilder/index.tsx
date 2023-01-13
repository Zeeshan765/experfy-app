import GrapesJS from 'grapesjs';
import Basics from 'grapesjs-blocks-basic';
import Experfy from '../PageBuilder/ExperfyPlugin';
import Forms from 'grapesjs-plugin-forms';
import NavBar from 'grapesjs-navbar';

import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useRef, useState } from 'react';
import '../PageBuilder/index.scss';

import { toast } from 'react-toastify';
const NewPageBuilder = () => {
  let [editor, setEditor] = React.useState<GrapesJS.Editor>();

  const { setStepNav } = useStepNav();

  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/new-page-builder',
      },
    ]);
  }, [setStepNav]);
  React.useEffect(() => {
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
      // 'testimonial',
      'video',
    ];
    const ExperfyBlocks = (editor, options) =>
      Experfy(editor, { ...options, blocks: sections });

    editor = GrapesJS.init({
      container: '.editor',
      plugins: [
        (editor) =>
          NavBar(editor, {
            label: 'Header',
            block: {
              category: 'Header',
            },
          }),
        ExperfyBlocks,
        (editor) =>
          Basics(editor, {
            blocks: [
              'column1',
              'column2',
              'column3',
              'column3-7',
              'text',
              'link',
              'image',
              'video',
              'map',
            ],
            flexGrid: true,
            addBasicStyle: true,
            rowHeight: 75,
          }),
        Forms,
      ],

      storageManager: {
        type: 'local',
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
      layerManager: {
        appendTo: '.layers-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        showComputed: true,
        highlightComputed: true,
        highlightChanged: true,
      },
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },

      selectorManager: {
        componentFirst: true,
        appendTo: '.styles-container',
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      showOffsets: true,
      multipleSelection: true,
      showToolbar: true,

      commands: {
        defaults: [
          {
            id: 'preview-fullscreen',
            run() {
              editor.runCommand('preview');
              editor.runCommand('fullscreen');
            },
            stop() {
              editor.stopCommand('fullscreen');
              editor.stopCommand('preview');
            },
          },
          {
            id: 'save-editor',
            async run(editor: GrapesJS.Editor) {
              const data = await editor.store(null);
              console.log('data', data);
              toast.success('Page have been saved successfully');
            },
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: 'panel__switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-blocks',
                className: 'fa fa-th-large',
                command: 'show-blocks',
                active: false,

                attributes: { title: 'Blocks' },
              },
              {
                id: 'show-layers',
                className: 'fa fa-bars',
                command: 'show-layers',
                active: false,

                attributes: { title: 'Layers' },
              },
              {
                id: 'show-style',
                className: 'fa fa-paint-brush',
                command: 'show-styles',

                active: false,
                attributes: { title: 'Styles' },
              },

              {
                id: 'show-traits',
                className: 'fa fa-cog',
                label: ' Traits',
                command: 'show-traits',
                active: false,

                attributes: { title: 'Traits' },
              },
            ],
          },
          {
            id: 'panel-top',
            el: '.panel__top',
            buttons: [
              {
                id: 'settings',
                className: 'fa fa-cog btn--style-secondary',
                command: 'sw-visibility',
                active: true,
                attributes: { title: 'Settings' },
              },
              {
                id: 'device-desktop',
                className: 'fa fa-desktop btn--style-secondary',
                command: 'toggle-devices',
                attributes: { title: 'Toggle Display' },
              },
              {
                id: 'history',
                className: 'fa fa-history btn--style-secondary',
                command: 'undo',
                togglable: true,
                attributes: { title: 'Undo' },
              },

              {
                id: 'preview',
                context: 'preview',
                label: '\t\tPreview',
                className: 'fa fa-eye btn--style-secondary',
                command: 'preview-fullscreen',

                attributes: { title: 'Preview' },
              },
              {
                id: 'save',
                className: 'btn--style-primary',
                command: 'save-editor',
                label: 'Save',
                attributes: { title: 'Save' },
              },
              {
                id: 'publish',
                className: 'radio btn--style-secondary fa fa-check',
                command: 'publish',
                label: ' Publish',
                togglable: false,
                icon: 'fa fa-check',
                attributes: { title: 'Publish' },
              },
            ],
          },
        ],
      },
    });

    setEditor(editor);

    const openBl = editor.Panels.getButton('panel__switcher', 'show-blocks');
    editor.on('load', () => openBl?.set('active', true));
    editor.onReady(() => {
      editor.runCommand('hide-styles');
      editor.runCommand('hide-traits');
      editor.runCommand('hide-layers');
    });

    editor.on('component:add', (component) => {
      editor.StyleManager.select(component);
      editor.runCommand('show-styles');
    });

    ///now it will only update text from traits
    editor.on('component:selected', (component) => {
      if (component.get('type') == 'text') {
        editor.runCommand('show-traits');
        if (component.get('traits').models[0].get('value').length == 0) {
          component.view.model.getEl().innerHTML = 'Insert text here';
        }

        component.set(
          'content',
          component.get('traits').models[0].get('value') //TODO we need to update trait as we are using ID for now.
        );
      }
    });
    editor.on('component:update', (component) => {
      if (component.get('type') == 'text') {
        component.view.model.getEl().innerHTML = component
          .get('traits')
          .models[0].get('value');
      }
    });

    // editor.on('component:select', (component) => {
    //   editor.StyleManager.select(component);
    //   editor.runCommand('show-styles');
    // });
  }, [setEditor]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row">
        <div className="panel__basic-actions"></div>
        <div className="panel__left">
          <div className="panel__switcher"></div>
          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="layers-container"></div>
          <div className="blocks"></div>
        </div>
        <div className="editor-canvas">
          <div className="editor"></div>
        </div>
      </div>
    </div>
  );
};
export default NewPageBuilder;
