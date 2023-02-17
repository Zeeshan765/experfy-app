import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import axios from 'axios';
import GrapesJS from 'grapesjs';
import Basics from 'grapesjs-blocks-basic';
import NavBar from 'grapesjs-navbar';
import Forms from 'grapesjs-plugin-forms';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { useConfig } from 'payload/components/utilities';
import React, { useContext, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../Providers/MyProvider';
import { apiEndPoint } from '../../services';
import {
  deleteDataFromLocalStorage,
  getDataFromStorage,
  parseDataFromString,
} from '../../utilities/localStorage';
import Experfy from './ExperfyPlugin';
import { getSectors } from './ExperfyPlugin/blocks/getSectors';

import { StyleContext } from '../../Providers/StyleProvider';
import { navStep, sections } from './utils';

const PageBuilder: React.FC = () => {
  const pageCreate = useLocation();
  let { search } = pageCreate;
  const history = useHistory();

  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  const { selectedPageCode, setPageCreateFromScratch } = useContext(Context);
  const { userDefaultStyleString, getStyle, defaultStyles } =
    useContext(StyleContext);
  const { setSelectedPageCode } = useContext(Context);

  const { routes, serverURL } = useConfig();
  const { admin } = routes;

  const apiEndpoint = `${serverURL}/api/media?locale=en&depth=0&fallback-locale=null`;

  useEffect(() => {
    setStepNav(navStep);
    initializeInstance();
  }, []);

  const dataHandler = () => {
    const pageCode = getDataFromStorage('page_code');
    const attributes = parseDataFromString(
      getDataFromStorage('pageAttributes')
    );

    if (search.split('=')[1] === 'scratch') {
      // debugger;
      // // ?locale=en&depth=0&fallback-locale=null
      axios
        .post(`${apiEndPoint}/pages?locale=en&depth=0&fallback-locale=null`, {
          ...attributes,
          pageCode: pageCode,
        })
        .then((res) => {
          console.log('res======>', res);
          toast.success(res.data.message);
          deleteDataFromLocalStorage('pageAttributes');
          deleteDataFromLocalStorage('page_code');
          history.replace('/admin/collections/pages');
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
    if (pageCreateFromScratch?.pageType && pageCreateFromScratch?.id) {
      axios
        .patch(`${apiEndPoint}/pages/${pageCreateFromScratch?.id}`, {
          pageCode: pageCode,
        })
        .then((res) => {
          toast.success('Page create successfully ');
          deleteDataFromLocalStorage('page_code');
          setPageCreateFromScratch('');
          history.replace('/admin/collections/pages');
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
    // else {
    //   axios
    //     .post(`${apiEndPoint}/page-Template`, {
    //       title: "TalentCloud Overview Page",
    //       pageCode,
    //     })
    //     .then((res) => {
    //       clearLocalStorage();
    //       toast.success("Changes saved successfully");
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     });
    // }
  };
  const uploadMedia = async (fileItem: String) => {
    const { name, src } = fileItem;
    var file = new File([src], name);
    try {
      // Create the form data for the request
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('name', file.name);
      let item = {
        keywords: 'Media',
        mediaType: 'Photo',
        description: '',
      };
      formData.append('_payload', JSON.stringify(item));
      // Make the POST request
      await axios.post(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${apiKey}`,
        },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const initializeInstance = () => {
    const ExperfyBlocks = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      Experfy(editor, {
        ...options,
        blocks: sections,
        showPanelsOnLoad: true,
        showGlobalStyles: false,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      showDevices: false,
      // dragMode: 'absolute',
      canvasCss: localStorage.getItem('theme_style_css') || '',
      plugins: [
        ExperfyBlocks,
        (editor) =>
          NavBar(editor, {
            label: 'Header',
            block: {
              category: 'Header & Footer',
            },
          }),
        (editor) =>
          Basics(editor, {
            category: 'Basic Elements',
            flexGrid: true,
            addBasicStyle: false,
          }),
        (editor) =>
          Forms(editor, {
            category: 'Basic Elements',
          }),
        ,
      ],

      storageManager: {
        type: 'local',
        autoload: true,
        options: {
          local: {
            key: 'theme_style',
          },
        },
      },

      // canvasCss: localStorage.getItem('theme_style') || '',

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

      commands: {
        defaults: [
          // {
          //   id: 'preview-fullscreen',
          //   run() {
          //     editor.runCommand('preview');
          //     editor.runCommand('fullscreen');
          //   },
          //   stop() {
          //     editor.stopCommand('fullscreen');
          //     editor.stopCommand('preview');
          //   },
          // },
          {
            id: 'save-editor',
            hidden: true,
            run(editor: { store: () => GrapesJS.Editor }) {
              const store = editor.store();
              dataHandler();
              toast.success('Changes saved successfully');
            },
          },
        ],
      },
    });

    const addAssets = async () => {
      const assetManager = editor?.AssetManager;
      axios
        .get(`${serverURL}/api/media`)
        .then((response) => {
          const { docs } = response.data;
          docs.forEach(({ url }) => {
            assetManager?.add([
              {
                src: url,
              },
            ]);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // editor.onReady(clb => {
    //   console.log('editor is ready'+defaultStyles);
    //   clb.loadProjectData('theme_style');

    // });
    // editor.onReady(clb => {
    //   console.log('editor is ready'+defaultStyles);
    //   clb.loadProjectData('theme_style');
    // });
    // editor.on('load', async () => {
    //   editor.loadProjectData('theme_style');
    // });

    // editor.StorageManager.load(options)

    editor.on('asset:add', (component) => {
      if (component.attributes.src.includes(serverURL)) {
        return;
      }
      const { src, width } = component.attributes;
      if (width > 0) {
        // binary file handling
        fetch(src).then((response) => {
          response.blob().then((fileBlob) => {
            let file = new File([fileBlob], component.attributes.name);
            //@ts-ignore
            uploadMedia({ src: file, name: component.attributes.name });
          });
        });
      } else {
        // url file handling
        let arr = src.split('/');
        let filename = arr[arr.length - 1];
        fetch(src).then((response) => {
          response.blob().then((fileBlob) => {
            let file = new File([fileBlob], filename);
            //@ts-ignore
            uploadMedia({ src: file, name: filename });
          });
        });
      }
    });
    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'text-title',
              label: 'Title',
              placeholder: 'Enter your title ',
              className: 'custom-text',
            },
            {
              type: 'select',
              name: 'class',
              label: 'HTML Tag',
              default: 'h1',
              options: [
                { id: 'h1', name: 'H1' },
                { id: 'h2', name: 'H2' },
                { id: 'h3', name: 'H3' },
                { id: 'h4', name: 'H4' },
                { id: 'h5', name: 'H5' },
                { id: 'h6', name: 'H6' },
                { id: 'div', name: 'div' },
                { id: 'span', name: 'span' },
                { id: 'p', name: 'p' },
              ],
            },
            {
              type: 'select',
              name: 'class',
              label: 'Alignment',
              default: 'left',
              options: [
                { value: 'left', name: 'Left' },
                { value: 'center', name: 'Center' },
                { value: 'right', name: 'Right' },
              ],
            },
          ],
        },
      },
    });

    editor.DomComponents.addType('button', {
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'button-title',
              label: 'Button Text',
              placeholder: 'Buttton ',
            },
            {
              type: 'select',
              name: 'class',
              label: 'Button Size',
              default: 'small',
              options: [
                { value: 'btn-extrasmall', name: 'Extra Small' },

                { value: 'btn-small', name: 'small' },
                { value: 'btn-medium', name: 'Medium' },
                { value: 'btn-large', name: 'Large' },
                { value: 'btn-extralarge', name: 'Extra Large' },
              ],
            },

            {
              type: 'select',
              name: 'class',
              label: 'Button Alignment',
              default: 'btn-start',
              options: [
                { value: 'btn-start', name: 'Left' },
                { value: 'btn-center', name: 'Center' },
                { value: 'btn-right', name: 'Right' },
              ],
            },
          ],
        },
      },
    });
    //For Traits
    editor.on('component:selected', (component) => {
      console.log('component:selected', component);
      const { id } = component.attributes.attributes;
      console.log('id', id);
      console.log('type', component.get('content'));
      if (component.get('type') == 'text') {
        editor?.runCommand('core:open-traits');
        if (component.get('traits').models[0].get('value'))
          component.components(component.get('traits').models[0].get('value'));
      }

      if (component.get('type') == 'button') {
        editor?.runCommand('core:open-traits');
        if (component.get('traits').models[0].get('value'))
          component.components(component.get('traits').models[0].get('value'));
      }
    });
    editor.on('component:update', (component) => {
      if (component.get('type') == 'text') {
        component.components(component.get('traits').models[0].get('value'));
        component.components(component.get('traits').models[1].get('class'));
        // const block = editor.getSelected();
        // console.log('block', block)
        // block.setAttributes({ class: 'main_heading h3' });
      }
      if (component.get('type') == 'button') {
        component.components(component.get('traits').models[0].get('value'));
        component.components(component.get('traits').models[1].get('class'));
        component.components(component.get('traits').models[2].get('class'));

        // const block = editor.getSelected();
        // console.log('block', block)
        // block.setAttributes({ class: 'main_heading h3' });
      }
    });
    //This is for all section templates Style Manager
    editor.on(`block:drag:stop`, (component, block) => {
      // if component exists, means the drop was successful
      if (component) {
        let ccid = component.ccid.split('-')[0];
        const blocksector = editor.StyleManager.getSectors();
        blocksector.reset();
        blocksector.add(getSectors(ccid));
      }
    });
    setEditorState(editor);
    addAssets();
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
            <span>Page Builder</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
          </div>
          <div className="panel__switcher"></div>
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
export default PageBuilder;
