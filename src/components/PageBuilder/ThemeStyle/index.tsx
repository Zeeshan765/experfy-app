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
      fromElement: true,
      avoidDefaults: true,
      showDevices: false,
      plugins: [ExperfyBlocks],
      style: userDefaultStyleString,
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
      
     editor.store({
        type: 'local',
        options: {
          storeComponents:false,
          storeStyles: false,
          storeHtml: false,
          storeCss: true,
          local: {
            key: 'theme_style',
            checkLocal: false,
          },
        },
      });
      
      
      toast.success('Global theme settings saved successfully!');
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
      const data = editor.StorageManager.load({
        key: 'theme_style',
      })
      editor.loadProjectData(data);
      const sectors = editor.StyleManager.getSectors();
      const block = editor.BlockManager.get('theme-style');
      
      const component = editor.addComponents(block.get('content'));  
      component.forEach((comp) => {
        comp.set('draggable', false);
        comp.set('droppable', false);
        comp.set('stylable', false);
        comp.set('hoverable', false);
        comp.set('selectable', false);
      });
      
      sectors.reset();
      
      sectors.add(getSectors('theme_1'));
      editor.runCommand('core:open-styles');
      editor.getWrapper().set('hoverable', false);
      editor.getWrapper().set('selectable', false);
      
    });

    editor.on('style:sector:update',(sector) => {
      if (sector.attributes.open === true){
        const wrapperCmp = editor.Pages.getSelected().getMainComponent();
        const btnCmp = wrapperCmp.find('button')[0];
        const imgCmp = wrapperCmp.find('img')[0];
        const h1 = wrapperCmp.find('h1')[0];
        const h2 = wrapperCmp.find('h2')[0];
        const h3 = wrapperCmp.find('h3')[0];
        const h4 = wrapperCmp.find('h4')[0];
        const h5 = wrapperCmp.find('h5')[0];
        const h6 = wrapperCmp.find('h6')[0];
        const link = wrapperCmp.find('a')[0];
        const span = wrapperCmp.find('span')[0];
        const input = wrapperCmp.find('input')[0];
        switch (sector.attributes.id) {
          case 'buttons':
            editor.SelectorManager.select(btnCmp);
            break;
          case 'images':
            editor.SelectorManager.select(imgCmp);
            break;
          case 'h1':
            editor.SelectorManager.select(h1);
            break;
          case 'h2':
            editor.SelectorManager.select(h2);
            break;
          case 'h3':
            editor.SelectorManager.select(h3);
            break;
          case 'h4':
            editor.SelectorManager.select(h4);
            break;
          case 'h5':
            editor.SelectorManager.select(h5);
            break;
          case 'h6':
            editor.SelectorManager.select(h6);
            break;
          case 'links':
            editor.SelectorManager.select(link);
            break;
          case 'labels':
            editor.SelectorManager.select(span);
            break;
          case 'fields':
            editor.SelectorManager.select(input);
            break;
          default:
            editor.SelectorManager.select('');
        }
      }
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
