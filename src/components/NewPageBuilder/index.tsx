import GrapesJS from 'grapesjs';
import Basics from 'grapesjs-blocks-basic';
import plugin1 from 'grapesjs-tailwind';

import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useRef, useState } from 'react';
import '../PageBuilder/index.scss';

import { toast } from 'react-toastify';
const NewPageBuilder = () => {
  let [editor, setEditor] = React.useState<GrapesJS.Editor>();
  const [elementCreate, setElementCreate] = useState(false);
  const { setStepNav } = useStepNav();
  const [headingText, setHeadingText] = React.useState<string>('abc');
  const testRef = useRef();

  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/new-page-builder',
      },
    ]);
  }, [setStepNav]);
  React.useEffect(() => {
    editor = GrapesJS.init({
      container: '.editor',
      plugins: [plugin1, Basics],
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
      },
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },

      selectorManager: {
        componentFirst: true,
        appendTo: '.styles-container',
      },
      showDevices: true,
      showOffsets: true,
      showOffsetsSelected: true,
      devicePreviewMode: true,

      commands: {
        defaults: [
          {
            id: 'preview-fullscreen',
            run() {
              editor.runCommand('fullscreen');
              editor.runCommand('preview');
            },
            stop() {
              editor.stopCommand('fullscreen');
              editor.stopCommand('preview');
            },
          },
          {
            id: 'save-editor',

            run(editor) {
              editor.store();
              toast.success('Saved Successfully');
            },
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-layers',
                className: 'fa fa-bars',
                command: 'show-layers',
                active: true,
                attributes: { title: 'Layers' },
              },
              {
                id: 'show-style',
                className: 'fa fa-paint-brush',
                command: 'show-styles',
                active: true,
                attributes: { title: 'Styles' },
              },
              {
                id: 'show-traits',
                className: 'fa fa-cog',
                label: ' Traits',
                command: 'show-traits',
                active: true,
                attributes: { title: 'Traits' },
              },
              {
                id: 'show-blocks',
                className: 'fa fa-th-large',
                command: 'show-blocks',
                active: true,
                attributes: { title: 'Blocks' },
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
                command: 'open-settings',
                attributes: { title: 'Settings' },
              },
              {
                id: 'device-desktop',
                className: 'fa fa-desktop btn--style-secondary',
                command: 'toggle-devices',
                active: true,
                attributes: { title: 'Toggle Display' },
              },
              {
                id: 'history',
                className: 'fa fa-history btn--style-secondary',
                command: 'undo',
                attributes: { title: 'Undo' },
              },

              {
                id: 'preview',
                context: 'preview',
                label: '\t\tPreview',
                className: 'btn--style-secondary fa fa-eye',
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
                icon: 'fa fa-check',
                attributes: { title: 'Publish' },
              },
            ],
          },
        ],
      },
    });

    setEditor(editor);

    editor.DeviceManager.select('mobilePortrait');

    editor.Commands.add('show-styles', {
      getRowEl(editor: {
        getContainer: () => {
          (): any;
          new (): any;
          closest: { (arg0: string): any; new (): any };
        };
      }) {
        return editor.getContainer().closest('.editor-row');
      },
      getStyleEl(row: { querySelector: (arg0: string) => any }) {
        return row.querySelector('.styles-container');
      },
      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
      },

      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });
    editor.Commands.add('show-blocks', {
      getRowEl(editor: {
        getContainer: () => {
          (): any;
          new (): any;
          closest: { (arg0: string): any; new (): any };
        };
      }) {
        return editor.getContainer().closest('.editor-row');
      },
      getBlocksEl(row: { querySelector: (arg0: string) => any }) {
        return row.querySelector('.blocks');
      },

      run(editor, sender) {
        const smEl = this.getBlocksEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getBlocksEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });
    editor.Commands.add('show-traits', {
      getRowEl(editor: {
        getContainer: () => {
          (): any;
          new (): any;
          closest: { (arg0: string): any; new (): any };
        };
      }) {
        return editor.getContainer().closest('.editor-row');
      },
      getTraitsEl(row: { querySelector: (arg0: string) => any }) {
        return row.querySelector('.traits-container');
      },

      run(editor, sender) {
        const smEl = this.getTraitsEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getTraitsEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });
    editor.Commands.add('show-layers', {
      getRowEl(editor: {
        getContainer: () => {
          (): any;
          new (): any;
          closest: { (arg0: string): any; new (): any };
        };
      }) {
        return editor.getContainer().closest('.editor-row');
      },
      getLayersEl(row: { querySelector: (arg0: string) => any }) {
        return row.querySelector('.layers-container');
      },
      run(editor, sender) {
        const smEl = this.getLayersEl(this.getRowEl(editor));
        smEl.style.display = '';
      },
      stop(editor, sender) {
        const smEl = this.getLayersEl(this.getRowEl(editor));
        smEl.style.display = 'none';
      },
    });
    editor.Commands.add('toggle-devices', {
      run(editor, sender) {
        const deviceManager = editor.DeviceManager;
        const device = deviceManager.getSelected();
        console.log(device);
        const devices = deviceManager.getDevices();
        const index = devices.indexOf(device);
        const next = devices[index + 1] || devices[0];
        deviceManager.select(next.id);
      },
    });

    editor.on('component:add', (component) => {
      editor.StyleManager.select(component);
      editor.runCommand('show-styles');
      editor.stopCommand('show-blocks');
      editor.stopCommand('show-layers');
      editor.stopCommand('show-traits');
    });

    editor.onReady(() => {
      editor.runCommand('show-blocks');
      editor.stopCommand('show-styles');
      editor.stopCommand('show-layers');
      editor.stopCommand('show-traits');
    });

    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'text-title',
              label: 'Title',
              placeholder: 'Enter your title ',
              className: 'custom-text',
            },
            {
              type: 'text',
              name: 'text-link',
              label: 'Link',
              placeholder: 'Paste URL or Type ',
              class: 'custom-link',
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
              label: 'Link To',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'media ', name: 'Media File' },
                { id: 'curl', name: 'Custom URL' },
              ],
            },

            {
              type: 'select',
              name: 'image-order',
              label: 'Order',
              default: 'none',
              options: [{ id: 'none', name: 'None' }],
            },
          ],
        },
      },
    });

    //Trait for Button
    editor.DomComponents.addType('button', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'btn-text',
              label: 'Button Text',
              placeholder: 'Button Label',
            },
            {
              type: 'text',
              name: 'btn-link',
              label: 'Link',
              placeholder: 'Paste URL or Type ',
            },
            {
              type: 'select',
              name: 'btn-alignment',
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
              name: 'btn-size',
              label: 'Button Size',
              default: 'default',
              options: [
                { id: 'default', name: 'Default' },
                { id: 'xs', name: 'Extra Small' },

                { id: 'small', name: 'Small' },
                { id: 'medium', name: 'Medium' },
                { id: 'large', name: 'Large' },
                { id: 'xl', name: 'Extra Large' },
              ],
            },
            {
              type: 'select',
              name: 'image-link',
              label: 'Link To',
              default: 'none',
              options: [
                { id: 'none', name: 'None' },
                { id: 'media ', name: 'Media File' },
                { id: 'curl', name: 'Custom URL' },
              ],
            },

            {
              type: 'select',
              name: 'image-order',
              label: 'Order',
              default: 'none',
              options: [{ id: 'none', name: 'None' }],
            },
          ],
        },
      },
    });

    //Trait for TextArea
    editor.DomComponents.addType('textarea', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'text-title',
              label: 'Text',
              placeholder: 'Insert Your Text Here',
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
          ],
        },
      },
    });

    //Trait for Testimonial
    editor.DomComponents.addType('testimonial', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'testimonial-size',
              label: 'Image Size',
              default: 'full',
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
              type: 'text',
              name: 'testimonial-name',
              label: 'Name',
              placeholder: 'John Doe',
            },

            {
              type: 'text',
              name: 'testimonial-title',
              label: 'Title',
              placeholder: 'Designer',
            },
            {
              type: 'text',
              name: 'testimonial-link',
              label: 'Link',
              placeholder: 'hhttps://your-link.com',
            },
            {
              type: 'select',
              name: 'testimonial-position',
              label: 'Image Position',
              default: 'aside',
              options: [
                { id: 'aside', name: 'Aside' },
                { id: 'top', name: 'Top' },
              ],
            },
            {
              type: 'select',
              name: 'testimonial-alignment',
              label: 'Alignment',
              default: 'left',
              options: [
                { id: 'left', name: 'Left' },
                { id: 'center', name: 'Center' },
                { id: 'right', name: 'Right' },
              ],
            },
          ],
        },
      },
    });

    //Trait for Header
    editor.DomComponents.addType('header', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'header-border',
              label: 'Border Type',
              default: 'none',
              options: [
                { id: 'solid', name: 'Solid' },
                { id: 'dashed', name: 'Dashed' },
                { id: 'dotted', name: 'Dotted' },
                { id: 'double', name: 'Double' },
                { id: 'groove', name: 'Groove' },
                { id: 'ridge', name: 'Ridge' },
                { id: 'inset', name: 'Inset' },
                { id: 'outset', name: 'Outset' },
              ],
            },
          ],
        },
      },
    });

    //Trait for Footer
    editor.DomComponents.addType('footer', {
      model: {
        defaults: {
          traits: [
            {
              type: 'select',
              name: 'footer-border',
              label: 'Border Type',
              default: 'none',
              options: [
                { id: 'solid', name: 'Solid' },
                { id: 'dashed', name: 'Dashed' },
                { id: 'dotted', name: 'Dotted' },
                { id: 'double', name: 'Double' },
                { id: 'groove', name: 'Groove' },
                { id: 'ridge', name: 'Ridge' },
                { id: 'inset', name: 'Inset' },
                { id: 'outset', name: 'Outset' },
              ],
            },
          ],
        },
      },
    });

    editor.DomComponents.addType('div', {
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
