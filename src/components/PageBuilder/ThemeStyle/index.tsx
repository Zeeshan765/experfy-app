import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useAuth, useConfig } from 'payload/components/utilities';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Providers/UserProvider';
import Experfy from '../ExperfyPlugin';
import { getSectors } from '../ExperfyPlugin/blocks/getSectors';
import { toast } from 'react-toastify';
import {
  CloseAllSectors,
  ComponentSelection,
} from '../ExperfyPlugin/utilities';
import { Property } from '../../../utilities/types';

const ThemeStyle: React.FC = () => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const { user } = useAuth();
  const { setStepNav } = useStepNav();
  const { routes } = useConfig();
  const { admin } = routes;
  const { userData, setUserData } = useContext(UserContext);

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
    if (userData !== null && !editor) {
      initializeInstance();
    }
  }, [userData]);

  const initializeInstance = () => {
    editor?.destroy();
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
      storageManager: {
        autoload: false,
        type: 'none',
      },
      styleManager: {
        appendTo: '.styles-container',
      },
      selectorManager: {
        selectors: ['Normal', 'Hover'],
      },

      // canvasCss:
      //   localStorage.getItem('theme_style_css') || userDefaultStyleString,
      // storageManager: {
      //   type: 'local',
      //   autosave: false,
      //   autoload: false,
      //   onStore: (data) => {
      //     console.log('data', data);
      //     let css = editor.getCss().toString();
      //     // we need to replace the ids with the html tags
      //     css = css
      //       .replace('#button', 'button')
      //       .replace('#image', 'img')
      //       .replace('#h1', 'h1')
      //       .replace('#h2', 'h2')
      //       .replace('#h3', 'h3')
      //       .replace('#h4', 'h4')
      //       .replace('#h5', 'h5')
      //       .replace('#h6', 'h6')
      //       .replace('#p', 'p')
      //       .replace('#a', 'a')
      //       .replace('#input', 'input')
      //       .replace('#label', 'label');
      //     localStorage.setItem('theme_style_css', css);
      //     toast.success('Theme Style Saved');
      //     return {
      //       css: css,
      //     };
      //   },
      // },
      commands: {
        defaults: [
          {
            id: 'save-editor',
            hidden: true,
            run(editor: { store: () => GrapesJS.Editor }) {
              updateUserDefaultStyle();
            },
          },
        ],
      },

      traitManager: null,
      blockManager: null,
    });
    localStorage.removeItem('gjsProject');

    editor.on(`block:drag:stop`, (component, block) => {
      if (component) {
        let ccid = component.ccid.split('-')[0];
        const themeSector = editor.StyleManager.getSectors();
        themeSector.reset();
        themeSector.add(getSectors(ccid));
      }
    });
    // editor.Panels.addPanel({
    //   id: 'views-container',
    //   el: '.gjs-views-container',
    //   visible: true,
    // });
    // const sectors = editor.getComponents().filter(component => component.get('type') === 'sector');

    // let selectedSector = null;
    


    // sectorcontainer.get('buttons').add([
    //   {
    //     id: 'close-all-sectors',
    //     className: 'fa fa-times',
    //     command: 'close-all-sectors',
    //     attributes: { title: 'Close All Sectors' },
    //   },
    // ]);

    // editor.Commands.add('close-all-sectors', (editor) => {
    //   CloseAllSectors(editor);
    // });

    // editor.on('component:selected', (component) => {
    //   ComponentSelection(editor, component);
    // });

    // editor.on('component:deselected', (component) => {
    //   ComponentSelection(editor, component);
    // });

    // //CLose Single Sector
    // editor.on('sector:close', (sector) => {
     











    editor.onReady(() => {
      // const data = editor.StorageManager.load({
      //   key: 'theme_style',
      // });
      // editor.loadProjectData(data);
      const sectors = editor.StyleManager.getSectors();
      const block = editor.BlockManager.get('theme-style');

      const component = editor.addComponents(block.get('content'), {
        avoidUpdateStyle: true,
      });

      component[0].set('draggable', false);
      component[0].set('removable', false);

      // component.forEach((comp) => {
      //   comp.set('draggable', false);
      //   comp.set('droppable', false);
      //   comp.set('stylable', false);
      //   comp.set('hoverable', false);
      //   comp.set('selectable', false);
      // });

      sectors.reset();

      sectors.add(getSectors('theme_1'));
      editor.runCommand('core:open-styles', { open: true });
      editor.getWrapper().set('hoverable', false);
      editor.getWrapper().set('selectable', false);
      editor.getWrapper().set('deletable', false);
    });
    editor.on('load', () => {
      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() },
          userData.defaultStyle.pageData
        ),
      });
    });

    //@ts-ignore
    editor.on('style:sector:update', (sector) => {
      ComponentSelection(sector, editor);
    });

    //@ts-ignore
    editor.on('style:property:update', (sector) => {
      const name = sector.property.attributes.name;

      // property.name;

      if (name === 'State') {
        editor.SelectorManager.setState(sector.property.attributes.value);
      }
    });

    //@ts-ignore
    editor.on('style:target', (component) => {
      // const selectedSector = component.getSelectorsString().replace('.', '');
      // const sectors = editor.StyleManager.getSectors();
      // console.log('selected', selectedSector);
      // for (let i = 0; i < sectors.length; i++) {
      //   if (selectedSector.includes(sectors.models[i].get('id'))) {
      //     sectors.models[i].setOpen(true);
      //   } else {
      //     sectors.models[i].setOpen(false);
      //   }
      // }
      // editor.StyleManager.getSelected().set('open', true);
      // editor.StyleManager.getSectors().setOpen(false);
    });

    setEditorState(editor);
  };

  const updateUserDefaultStyle = async () => {
    let apiEndpoint = `${serverURL}/api/users/${user.id}`;
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

    let filteredStyles = editor
      .getProjectData()
      .styles.filter((el) => arr.includes(el.selectors[0]));
    console.log('filteredStyles', filteredStyles);
    try {
      const formData = new FormData();
      formData.append(
        '_payload',
        JSON.stringify({
          defaultStyle: { filteredStyles, pageData: editor.getProjectData() },
        })
      );
      const res = await axios.patch(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Theme Style Saved');
      const { doc } = res.data;
      setUserData({ ...userData, ...doc });
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // extend trait file

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
