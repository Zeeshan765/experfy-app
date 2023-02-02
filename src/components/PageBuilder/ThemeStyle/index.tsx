import GrapesJS from 'grapesjs';
import React, { useEffect, useState } from 'react';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';

import Experfy from '../ExperfyPlugin';
import { useConfig } from 'payload/components/utilities';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getSectors } from '../ExperfyPlugin/blocks/getSectors';
const ThemeStyle: React.FC = () => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();

  const { setStepNav } = useStepNav();
  const {
    routes: { admin },
  } = useConfig();
  const { serverURL } = useConfig();
  useEffect(() => {
    setStepNav([
      {
        label: 'Theme Style',
        url: '/collections/themes-style',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    const sections = ['theme-style'];
    const ExperfyBlocks = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      Experfy(editor, {
        ...options,
        blocks: sections,
        showPanelsOnLoad: false,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      showDevices: false,
      plugins: [ExperfyBlocks],

      storageManager: {
        type: 'local',
        autoload: false,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,

          local: {
            key: 'page_code',
          },
        },
      },

      layerManager: {
        appendTo: '.layers-container',
        scrollCanvas: true,
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        highlightChanged: true,
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
    });

    //Theme Style Sector
    editor.on(`block:drag:stop`, (component, block) => {
      if (component) {
        console.log('theme component', component);
        let ccid = component.ccid.split('-')[0];
        const themesector = editor.StyleManager.getSectors();
        themesector.reset();
        themesector.add(getSectors(ccid));
      }
    });

    editor.onReady(() => {
        const sectors = editor.StyleManager.getSectors();
        const block = editor.BlockManager.get("theme-style");
        const component = editor.addComponents(block.get('content'));
        component[0].set('selectable', true);
        component[0].set('removable', false);
        component[0].set('stylable', true);
        component[0].set('copyable', false);
        component[0].set('layerable', false);
        component[0].set('draggable', false);
        editor.select(component[0]);
        console.log(component[0].getId());
        sectors.reset();
        sectors.add(getSectors(component[0].getId()));
        editor.runCommand('core:open-styles');
    });


  }, [setEditorState]);

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row">
        <div className="panel__basic-actions"></div>
        <div className="panel__left">
          <div className="panel__switcher">
            <Link className="back__panel" to={`${admin}/`}>
              <span>&#10094;</span>
              <span>Theme Style</span>
              <span>&#9783;</span>
            </Link>
          </div>
          <div className="blocks"></div>
          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="layers-container"></div>
        </div>
        <div className="editor-canvas">
          <div className="editor"></div>
        </div>
      </div>

   


    </div>
  );
};
export default ThemeStyle;
