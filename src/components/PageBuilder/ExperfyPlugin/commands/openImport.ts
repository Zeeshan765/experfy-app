import type grapesjs from 'grapesjs';
import { RequiredPluginOptions } from '..';

import { cmdImport } from '../constants';

type CommandInterface = Parameters<grapesjs.Commands["add"]>[1];

export default (editor: grapesjs.Editor, config: RequiredPluginOptions): CommandInterface => {
  const pfx = editor.getConfig('stylePrefix');
  const modal = editor.Modal;
  const container = document.createElement('div');
  const importLabel = config.modalImportLabel;
  const importCnt = config.modalImportContent;
  // @ts-ignore
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  let viewerEditor = codeViewer.editor;

  // Init import button
  const btnImp = document.createElement('button');
  btnImp.type = 'button';
  btnImp.innerHTML = config.modalImportButton;
  btnImp.className = `${pfx}btn-prim ${pfx}btn-import`;
  btnImp.onclick = e => {
    editor.Css.clear();
    editor.setComponents(viewerEditor.getValue().trim(), undefined);
    modal.close();
  };

  // Init code viewer
  codeViewer.set({ ...{
    codeName: 'htmlmixed',
    theme: 'hopscotch',
    readOnly: 0
  }, ...config.importViewerOptions});

  return {
    //@ts-ignore
    run(editor: grapesjs.Editor) {
      if (!viewerEditor) {
        const textarea = document.createElement('textarea');

        if (importLabel) {
          const labelEl = document.createElement('div');
          labelEl.className = `${pfx}import-label`;
          labelEl.innerHTML = importLabel;
          container.appendChild(labelEl);
        }

        container.appendChild(textarea);
        container.appendChild(btnImp);
        codeViewer.init(textarea);
        viewerEditor = codeViewer.editor;
      }

      modal.setTitle(config.modalImportTitle);
      modal.setContent(container);
      const cnt = typeof importCnt == 'function' ? importCnt(editor) : importCnt;
      codeViewer.setContent(cnt || '');
      modal.open().onceClose(() => editor.stopCommand(cmdImport, undefined))
      viewerEditor.refresh();
    },

    stop() {
      modal.close();
    }
  };
};
