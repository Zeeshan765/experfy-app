//@ts-nocheck
import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '..';

import openImport from './openImport';
import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  clear,
} from '../constants';

export default (editor: grapesjs.Editor, config: RequiredPluginOptions) => {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;

  Commands.add(cmdImport, openImport(editor, config));
  Commands.add(cmdDeviceDesktop, {
    run: (ed) => ed.setDevice('Desktop'),
    stop: () => {},
  });
  Commands.add(cmdDeviceTablet, {
    run: (ed) => ed.setDevice('Tablet'),
    stop: () => {},
  });
  Commands.add(cmdDeviceMobile, {
    run: (ed) => ed.setDevice('Mobile portrait'),
    stop: () => {},
  });
  Commands.add(
    clear,
    (e) => confirm(txtConfirm) && e.runCommand('core:canvas-clear', undefined)
  );

  
  Commands.add('toggle-devices', {
    run(editor, sender) {
      const deviceManager = editor.DeviceManager;
      const device = deviceManager.getSelected();
      const devices = deviceManager.getDevices();
      const index = devices.indexOf(device);
      const next = devices[index + 1] || devices[0];
      deviceManager.select(next.id);
    },
  });
  // Commands.add('show-styles', {
  //   // active panel button when the command is run
  //   active(editor) {
  //     const sm = editor.StyleManager;
  //     return sm && sm.getContainer().style.display !== 'none';
  //   },
  //   getRowEl(editor: grapesjs.Editor) {
  //     return editor.getContainer().closest('.editor-row');
  //   },
  //   getStyleEl(row: HTMLElement) {
  //     return row.querySelector('.styles-container');
  //   },
  //   run(editor: grapesjs.Editor, sender) {
      
  //     const smEl = this.getStyleEl(this.getRowEl(editor));
  //     smEl.style.display = '';
  //   },
  //   stop(editor, sender) {
  //     const smEl = this.getStyleEl(this.getRowEl(editor));
  //     smEl.style.display = 'none';
  //   },
  // });
  // Commands.add('hide-styles', {
  //   getRowEl(editor) {
  //     return editor.getContainer().closest('.editor-row');
  //   },
  //   getStyleEl(row) {
  //     return row.querySelector('.styles-container');
  //   },
  //   run(editor) {
  //     this.getStyleEl(this.getRowEl(editor)).style.display = 'none';
  //   },
  //   stop(editor, sender) {
  //     const smEl = this.getStyleEl(this.getRowEl(editor));
  //     smEl.style.display = '';
  //   },
  // });
  // Commands.add('show-blocks', {
  //   getRowEl(editor) {
  //     return editor.getContainer().closest('.editor-row');
  //   },
  //   getBlocksEl(row) {
  //     return row.querySelector('.blocks');
  //   },

  //   run(editor, sender) {
  //     const smEl = this.getBlocksEl(this.getRowEl(editor));
  //     smEl.style.display = '';
  //   },

  //   stop(editor, sender) {
  //     const smEl = this.getBlocksEl(this.getRowEl(editor));
  //     smEl.style.display = 'none';
  //   },
  // });
  // Commands.add('hide-blocks', {
  //   getRowEl(editor) {
  //     return editor.getContainer().closest('.editor-row');
  //   },
  //   getBlocksEl(row) {
  //     return row.querySelector('.blocks');
  //   },

  //   run(editor, sender) {
  //     const smEl = this.getBlocksEl(this.getRowEl(editor));
  //     smEl.style.display = 'none';
  //   },
  //   stop(editor, sender) {
  //     const smEl = this.getBlocksEl(this.getRowEl(editor));
  //     smEl.style.display = '';
  //   },
  // });
  // Commands.add('show-traits', {
  //   getRowEl(_editor) {
  //     return _editor.getContainer().closest('.editor-row');
  //   },
  //   getTraitsEl(row) {
  //     return row.querySelector('.traits-container');
  //   },

  //   run(_editor, sender) {
  //     const smEl = this.getTraitsEl(this.getRowEl(_editor));
  //     smEl.style.display = '';
  //   },
  //   stop(_editor, sender) {
  //     const smEl = this.getTraitsEl(this.getRowEl(_editor));
  //     smEl.style.display = 'none';
  //   },
  // });
  // Commands.add('hide-traits', {
  //   getRowEl(_editor) {
  //     return _editor.getContainer().closest('.editor-row');
  //   },
  //   getTraitsEl(row) {
  //     return row.querySelector('.traits-container');
  //   },
  //   run(_editor, sender) {
  //     const smEl = this.getTraitsEl(this.getRowEl(_editor));
  //     smEl.style.display = 'none';
  //   },
  //   stop(_editor, sender) {
  //     const smEl = this.getTraitsEl(this.getRowEl(_editor));
  //     smEl.style.display = '';
  //   },
  // });
  // Commands.add('show-layers', {
  //   getRowEl(editor) {
  //     return editor.getContainer().closest('.editor-row');
  //   },
  //   getLayersEl(row) {
  //     return row.querySelector('.layers-container');
  //   },
  //   run(editor, sender) {
  //     const smEl = this.getLayersEl(this.getRowEl(editor));
  //     smEl.style.display = '';
  //   },
  //   stop(editor, sender) {
  //     const smEl = this.getLayersEl(this.getRowEl(editor));
  //     smEl.style.display = 'none';
  //   },
  // });
  // Commands.add('hide-layers', {
  //   getRowEl(editor) {
  //     return editor.getContainer().closest('.editor-row');
  //   },
  //   getLayersEl(row) {
  //     return row.querySelector('.layers-container');
  //   },

  //   run(editor, sender) {
  //     const smEl = this.getLayersEl(this.getRowEl(editor));
  //     smEl.style.display = 'none';
  //   },
  // });

};
