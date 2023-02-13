import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useAuth, useConfig } from 'payload/components/utilities';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { StyleContext } from '../../../Providers/StyleProvider';
import Experfy from '../ExperfyPlugin';
import { getSectors } from '../ExperfyPlugin/blocks/getSectors';

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
        themeStylePanels: true,
        showPanelsOnLoad: true,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      showDevices: false,
      plugins: [ExperfyBlocks],
      style: userDefaultStyleString,
      storageManager: {
        type: 'local',
        autoload: false,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,

          local: {
            key: 'theme_style',
          },
        },
      },

      layerManager: null,
      selectorManager: null,
      styleManager: {
        appendTo: '.styles-container',
      },
      traitManager: null,
      blockManager: null,
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
            // run(editor: { store: () => GrapesJS.Editor }) {
            //   const store = editor.store();
            //   console.log('editor', store.getCss({ json: true }));
            //   // const elements = store.DomComponents.getComponents();
            //   // console.log('elements', elements);
            //   // const cssArray = elements.map((element) => element.getStyle());
            //   // console.log('cssArray', cssArray);
            //   onSave();
            // },
            run(editor: GrapesJS.Editor) {
              // const store = editor.store();
              let cssJson = editor.getCss({ json: true, onlyMatched: true });
              handleSaveStyles();
              onSave();
            },
          },
        ],
      },
    });

    const onSave = () => {
      console.log('.......................saved.................');
    };

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
      const sectors = editor.StyleManager.getSectors();
      const block = editor.BlockManager.get('theme-style');
      const component = editor.addComponents(block.get('content'));
      component[0].set('selectable', true);
      component[0].set('removable', false);
      component[0].set('stylable', true);
      component[0].set('copyable', false);
      component[0].set('layerable', false);
      component[0].set('draggable', false);
      editor.select(component[0]);
      // console.log(component[0].getId());
      sectors.reset();
      sectors.add(getSectors(component[0].getId()));
      editor.runCommand('core:open-styles');
      editor.getWrapper().set('hoverable', false);
      editor.getWrapper().set('selectable', false);
    });

    const handleSaveStyles = () => {
      let { styles } = JSON.parse(localStorage.getItem('theme_style'));
      let arr = [
        'button',
        'img',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'a',
        'input',
        'textarea',
      ];

      let styleObj = {};
      styles.forEach((el) => {
        const { selectors, style } = el;
        if (arr.includes(selectors[0])) {
          styleObj[selectors[0]] = style;
        }
      });
      const mergedObject = Object.assign({}, defaultStyles, styleObj);
      updateUserDefaultStyle(styleObj);
    };
  }, [setEditorState]);

  const updateUserDefaultStyle = async (defaultStyle) => {
    let apiEndpoint = `${serverURL}/api/users/${user.id}`;
    try {
      const formData = new FormData();
      formData.append('_payload', JSON.stringify({ defaultStyle }));
      const res = await axios.patch(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { doc } = res.data;
      // toast.success('User style Updated successfully');
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
