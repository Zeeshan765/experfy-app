import type GrapesJS from 'grapesjs';
import { RequiredPluginOptions } from '.';
import {
  showFrames,
  preview,
  ful,
  exportTemplate,
  cmdImport,
  clear,
  openStyles,
  openTraits,
  openLayers,
  openBlocks,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
} from './constants';

export default (editor: GrapesJS.Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor;
  const config = editor.getConfig();

  const row = editor.getContainer().closest('.editor-row');

  Panels.getPanels().reset([
    {
      id: 'panel__switcher',
      el: '.panel__switcher',
      visible: false,
      buttons: [
        {
          id: openStyles,
          label:
            '<svg width="17.029" height="16.668" xmlns="http://www.w3.org/2000/svg"><g data-name="Group 56044"><g data-name="Group 56043"><g data-name="Group 56040"><g data-name="Group 56039"><path data-name="Path 170046" d="M8.696 3.624v4.724a1.268 1.268 0 11-.362 0V3.624h-.423l-2.809 6.672 1.741 2.089a.181.181 0 01.04.146l-.388 2.325h4.041l-.393-2.325a.181.181 0 01.039-.146l1.741-2.089-2.809-6.672h-.418z" fill="currentColor"/></g></g><path data-name="Path 170047" d="M6.433 15.218l-.242 1.449h4.645l-.241-1.449H6.433z" fill="#222e43"/></g><path data-name="Path 170048" d="M14.674 2.536h2.174a.181.181 0 00.181-.181V.181A.181.181 0 0016.848 0h-2.174a.181.181 0 00-.181.181v.906h-4.71V.181A.181.181 0 009.602 0H7.428a.181.181 0 00-.181.181v.906h-4.71V.181A.181.181 0 002.356 0H.181A.181.181 0 000 .181v2.174a.181.181 0 00.181.181h2.174a.181.181 0 00.181-.181v-.906h3.678a7.443 7.443 0 00-5.019 5.8H.181A.181.181 0 000 7.43v2.174a.181.181 0 00.181.181h2.174a.181.181 0 00.181-.181V7.427a.181.181 0 00-.181-.181h-.792a7.113 7.113 0 015.683-5.684v.792a.181.181 0 00.181.181h2.174a.181.181 0 00.181-.181v-.792a7.113 7.113 0 015.683 5.683h-.792a.181.181 0 00-.181.181V9.6a.181.181 0 00.181.181h2.174a.181.181 0 00.181-.181V7.427a.181.181 0 00-.181-.181h-1.01a7.443 7.443 0 00-5.019-5.8h3.678v.906a.181.181 0 00.181.181l-.003.003z" /></g></svg> Style',
          command: 'core:open-styles',
          active: false,
          togglable: false,
          attributes: { title: 'Styles' },
        },

        {
          id: openTraits,
          label:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24.363" height="16.236"><g data-name="Group 55325"><path data-name="Path 170708" d="M10.305 8.674H.542a.542.542 0 01-.541-.541V.541A.542.542 0 01.542 0h9.763a.542.542 0 01.541.541v7.591a.542.542 0 01-.541.542z"/><path data-name="Path 170709" d="M23.822 1.111H13.176a.541.541 0 010-1.083h10.646a.541.541 0 110 1.083z"/><path data-name="Path 170710" d="M23.822 4.892H13.176a.541.541 0 010-1.083h10.646a.541.541 0 110 1.083z"/><path data-name="Path 170711" d="M23.822 8.673H13.176a.541.541 0 010-1.083h10.646a.541.541 0 110 1.083z"/><path data-name="Path 170712" d="M23.822 12.455H.541a.541.541 0 110-1.083h23.28a.541.541 0 110 1.083z"/><path data-name="Path 170713" d="M23.822 16.235H.541a.541.541 0 110-1.083h23.28a.541.541 0 110 1.083z"/></g></svg> Content',
          command: 'core:open-traits',
          active: false,
          togglable: false,
          attributes: { title: 'Traits' },
        },
        {
          id: openBlocks,
          label: 'Elements',
          command: 'core:open-blocks',
          active: true,
          togglable: false,
          attributes: { title: 'Blocks' },
        },
        {
          id: openLayers,
          label: 'Layers',
          command: 'core:open-layers',
          active: false,
          togglable: false,
          attributes: { title: 'Layers' },
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
          tag: 'button',
          attributes: { title: 'Settings' },
        },
        {
          id: 'device-desktop',
          className: 'fa fa-desktop btn--style-secondary',
          command: 'toggle-devices',
          tagName: 'button',
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
          label:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg> Preview',
          className: 'btn--style-secondary',
          command: 'preview',
          attributes: {
            title: 'Preview',
            id: 'preview',
          },
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
          className: 'btn--style-secondary',
          command: 'publish',
          label:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zM384 352c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" fill="#78c493"/></svg> Publish',
          attributes: { title: 'Publish' },
        },
      ],
    },
  ]);

  const openSmBtn = Panels.getButton('panel__switcher', openStyles);
  const openLayersBtn = Panels.getButton('panel__switcher', openLayers);
  const openBlBtn = Panels.getButton('panel__switcher', openBlocks);
  const openTraitsBtn = Panels.getButton('panel__switcher', openTraits);

  editor.on('run:preview', () => {
    editor.runCommand('fullscreen');
  });
  editor.on('stop:preview', () => {
    editor.stopCommand('fullscreen');
  });
  //on panel change show the respective panel
  editor.on('run:core:open-blocks', () => {
    openBlBtn.set('active', true);
    console.log(openBlBtn);
    getStyleEl(editor, '.blocks').style.display = '';
    getStyleEl(editor, '.styles-container').style.display = 'none';
    getStyleEl(editor, '.layers-container').style.display = 'none';
    getStyleEl(editor, '.traits-container').style.display = 'none';
  });
  editor.on('run:core:open-styles', () => {
    openSmBtn.set('active', true);
    getStyleEl(editor, '.styles-container').style.display = '';
    getStyleEl(editor, '.blocks').style.display = 'none';
    getStyleEl(editor, '.layers-container').style.display = 'none';
    getStyleEl(editor, '.traits-container').style.display = 'none';
  });
  editor.on('run:core:open-layers', () => {
    openLayersBtn.set('active', true);
    getStyleEl(editor, '.layers-container').style.display = '';
    getStyleEl(editor, '.styles-container').style.display = 'none';
    getStyleEl(editor, '.blocks').style.display = 'none';
    getStyleEl(editor, '.traits-container').style.display = 'none';
  });
  editor.on('run:core:open-traits', () => {
    openTraitsBtn.set('active', true);
    getStyleEl(editor, '.traits-container').style.display = '';
    getStyleEl(editor, '.layers-container').style.display = 'none';
    getStyleEl(editor, '.styles-container').style.display = 'none';
    getStyleEl(editor, '.blocks').style.display = 'none';
  });

  // On component change show the Style Manager
  opts.showStylesOnChange &&
    editor.on('component:selected', (component) => {
      if (component && !openLayersBtn?.get('active')) {
        editor.runCommand('core:open-styles');
      }
    });
};

function getStyleEl(editor: any, panel: string) {
  const row = editor.getContainer().closest('.editor-row');
  return row.querySelector(panel);
}
