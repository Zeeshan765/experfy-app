import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useAuth, useConfig } from 'payload/components/utilities';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Experfy from '../ExperfyPlugin';
import { getSectors } from '../ExperfyPlugin/blocks/getSectors';
import { ComponentSelection } from '../ExperfyPlugin/utilities';

const ThemeStyle: React.FC = () => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const { user } = useAuth();
  const { setStepNav } = useStepNav();
  const { routes } = useConfig();
  const { admin } = routes;
  // const { userDefaultStyleString } = useContext(StyleContext);

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
      showDevices: false,
      plugins: [ExperfyBlocks],
      layerManager: null,
      selectorManager: {
        states: [
          {
            name: 'Hover',
            label: 'Hover',
            value: ':hover',
          },
          {
            name: 'Active',
            label: 'Active',
            value: ':active',
          },
        ],
      },
      styleManager: {
        appendTo: '.styles-container',
      },
      canvasCss: localStorage.getItem('theme_style_css'),
      storageManager: {
        type: 'local',
        autosave: false,
        autoload: false,
        onStore: (data) => {
          console.log('data', data);
          let css = editor.getCss().toString();
          // we need to replace the ids with the html tags
          css = css
            .replace('#button', 'button')
            .replace('#image', 'img')
            .replace('#h1', 'h1')
            .replace('#h2', 'h2')
            .replace('#h3', 'h3')
            .replace('#h4', 'h4')
            .replace('#h5', 'h5')
            .replace('#h6', 'h6')
            .replace('#p', 'p')
            .replace('#a', 'a')
            .replace('#input', 'input')
            .replace('#label', 'label');

          localStorage.setItem('theme_style_css', css);
          toast.success('Theme Style Saved');
        },
      },
      commands: {
        defaults: [
          {
            id: 'save-editor',
            hidden: true,
            run(editor: { store: () => GrapesJS.Editor }) {
              handleSaveStyles();
              editor.store();
            },
          },
        ],
      },
    });

    editor.onReady(() => {
      const sectors = editor.StyleManager.getSectors();
      const block = editor.BlockManager.get('theme-style');
      editor.addComponents(block.get('content'));
      const themeComponent = editor.getComponents();
      console.log('themeComponent', themeComponent);
      sectors.reset();
      sectors.add(getSectors('theme_1'));
      // editor.select(themeComponent);
      editor.runCommand('core:open-styles');
    });
    editor.on('style:sector:update', (sector) => {
      console.log('sector', sector);
      ComponentSelection(sector, editor);
    });
    setEditorState(editor);
  }, [setEditorState]);

  const updateUserDefaultStyle = async () => {
    let apiEndpoint = `${serverURL}/api/users/${user.id}`;

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
