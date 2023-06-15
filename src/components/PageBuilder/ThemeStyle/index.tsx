import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useAuth, useConfig } from 'payload/components/utilities';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../../Providers/UserProvider';
import Experfy from '../ExperfyPlugin';
import { getSectors } from '../ExperfyPlugin/blocks/getSectors';
import { ComponentSelection } from '../ExperfyPlugin/utilities';

const ThemeStyle: React.FC = () => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const { user } = useAuth();
  const { setStepNav } = useStepNav();
  const { routes } = useConfig();
  const { admin } = routes;
  const { userData, setUserData } = useContext(UserContext);
  const { serverURL } = useConfig();
  const [hello,setHello] = React.useState();

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
        textNoElement: 'No element selected',
      },
      selectorManager: {
        appendTo: '.styles-container',
        states: [
          {
            name: 'hover',
            label: 'Hover',
            // class: 'button'
            icon: 'hover',
          },
          {
            name: 'active',
            label: 'Click',
            icon: 'active',

          },{
            name: 'focus',
            label: 'Focus',
            icon: 'active',

          }

        ]
           
      },

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


    editor.onReady(() => {
      const sectors = editor.StyleManager.getSectors();
      const block = editor.BlockManager.get('theme-style');

      editor.addComponents(block.get('content'), {
        avoidUpdateStyle: false,
      });

      sectors.reset();

      sectors.add(getSectors('theme_1', editor));
      editor.runCommand('core:open-styles', { open: true });
      editor.getWrapper().set('hoverable', false);
      editor.getWrapper().set('selectable', false);
      editor.getWrapper().set('deletable', false);
    });


 
  
    editor.on('load', () => {
      console.log("editor.getProjectData()",editor.getProjectData())
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
    editor.on('style:target', (component) => {
      console.log("Target Component",component);
      if (!component) return;

      const selectedSector = component.getSelectorsString().replace('.', '');
      const sectors = editor.StyleManager.getSectors();
      console.log('selected', selectedSector);
      console.log("sectors",sectors)
      for (let i = 0; i < sectors.length; i++) {
        if (selectedSector.includes(sectors.models[i].get('id'))) {
          sectors.models[i].setOpen(true);
        } else {
          sectors.models[i].setOpen(false);
        }
      }
    });
    //@ts-ignore
    editor.on('selector:state', (state) => {
      console.log('state', state);
    });

    setEditorState(editor);
  };

  const updateUserDefaultStyle = async () => {
    let apiEndpoint = `${serverURL}/api/users/${user.id}`;
    let arr = [
      'button',
      'image',
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
console.log("editor.getProjectData().styles",editor.getProjectData().styles)










    let filteredStyles = editor
      .getProjectData()
      .styles.filter((el) => arr.includes(el.selectors[0]));
      console.log("")
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
      setUserData({ ...userData, ...doc, user: user.id  });
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

          <div className="styles-container">
            <div className="selector-container">
              <div className="sectors"></div>
            </div>
          </div>
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
