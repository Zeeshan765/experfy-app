import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import { Options } from 'http-proxy-middleware';
import payload from 'payload';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useAuth, useConfig } from 'payload/components/utilities';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyleContext } from '../../../Providers/StyleProvider';
import Experfy from '../ExperfyPlugin';
import { getSectors } from '../ExperfyPlugin/blocks/getSectors';
import {
  CloseAllSectors,
  ComponentSelection,
} from '../ExperfyPlugin/utilities';

const ThemeStyle: React.FC = () => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const { user } = useAuth();
  const { setStepNav } = useStepNav();
  const { routes } = useConfig();
  const { admin } = routes;
  const { userDefaultStyleString, getStyle, defaultStyles } =
    useContext(StyleContext);

  const { serverURL } = useConfig();

  useEffect(() => {
    setStepNav([
      {
        label: 'Global Theme Settings',
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
        themeStylePanels: true,
        showPanelsOnLoad: true,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: false,
      avoidDefaults: true,
      showDevices: false,
      plugins: [ExperfyBlocks],
      layerManager: null,
      selectorManager: {},
      styleManager: {
        appendTo: '.styles-container',
      },
      canvasCss:
        localStorage.getItem('theme_style_css') || userDefaultStyleString,
      storageManager: {
        type: 'local',
        autosave: false,
        autoload: false,
        onStore: (data) => {
          console.log('data', data);
          let css = editor.getCss().toString();
          // we need to replace the ids with the html tags
          css = css.replaceAll('#', ' ');

          localStorage.setItem('theme_style_css', css);
          toast.success('Theme Style Saved');
          return {
            css: css,
          };
        },
      },
      commands: {
        defaults: [
          {
            id: 'save-editor',
            hidden: true,
            run(editor: { store: () => GrapesJS.Editor }) {
              editor.store();
            },
          },
        ],
      },

      traitManager: null,
      blockManager: null,
    });

    //Theme Style Sector
    editor.on(`block:drag:stop`, (component, block) => {
      if (component) {
        // console.log('theme component', component);
        let ccid = component.ccid.split('-')[0];
        const themeSector = editor.StyleManager.getSectors();
        themeSector.reset();
        themeSector.add(getSectors(ccid));
      }
    });

    editor.onReady(() => {
      // const data = editor.StorageManager.load({
      //   key: 'theme_style',
      // });
      // editor.loadProjectData(data);
      const sectors = editor.StyleManager.getSectors();
      const block = editor.BlockManager.get('theme-style');

      const component = editor.addComponents(block.get('content'));
      // component.forEach((comp) => {
      //   comp.set('draggable', false);
      //   comp.set('droppable', false);
      //   comp.set('stylable', false);
      //   comp.set('hoverable', false);
      //   comp.set('selectable', false);
      // });

      sectors.reset();

      sectors.add(getSectors('theme_1'));
      editor.runCommand('core:open-styles');
      editor.getWrapper().set('hoverable', false);
      editor.getWrapper().set('selectable', false);
    });

    editor.on('style:sector:update', (sector) => {
      ComponentSelection(sector, editor);
    });
    const handleSaveStyles = () => {
      // console.log(editor.getProjectData());

      // let { styles } = JSON.parse(localStorage.getItem('theme_style'));
      // let arr = [
      //   'button',
      //   'img',
      //   'h1',
      //   'h2',
      //   'h3',
      //   'h4',
      //   'h5',
      //   'h6',
      //   'a',
      //   'input',
      //   'textarea',
      // ];

      // let styleObj = {};
      // styles.forEach((el) => {
      //   const { selectors, style } = el;
      //   if (arr.includes(selectors[0])) {
      //     styleObj[selectors[0]] = style;
      //   }
      // });
      // const mergedObject = Object.assign({}, defaultStyles, styleObj);
      // updateUserDefaultStyle(styleObj);
      updateUserDefaultStyle();
    };
    setEditorState(editor);
  }, [setEditorState]);

  const updateUserDefaultStyle = async () => {
    let apiEndpoint = `${serverURL}/api/users/${user.id}`;
    // console.log(editor.getProjectData());

    // let arr = [
    //   'button',
    //   'img',
    //   'h1',
    //   'h2',
    //   'h3',
    //   'h4',
    //   'h5',
    //   'h6',
    //   'a',
    //   'input',
    //   'textarea',
    // ];

    // let filteredStyles = editor
    //   .getProjectData()
    //   .styles.filter((el) => arr.includes(el.selectors[0]));
    // console.log(filteredStyles);
    try {
      const formData = new FormData();
      formData.append('_payload', JSON.stringify(editor.getCss()));
      const res = await axios.patch(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { doc } = res.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return (
    <div className="main__content">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row">
        <div className="panel__basic-actions"></div>
        <div className="panel__left">
          <div className="back__panel panel-header">
            <Link className="panel-header__link" to={`${admin}/`}>
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <span>Global Theme Settings</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
          </div>
          <div className="blocks"></div>
          <div className="selector-container"></div>
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
