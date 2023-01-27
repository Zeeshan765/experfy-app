import GrapesJS from 'grapesjs';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Basics from 'grapesjs-blocks-basic';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import axios from 'axios';
import NavBar from 'grapesjs-navbar';
import Forms from 'grapesjs-plugin-forms';
import Experfy from './ExperfyPlugin';
import { useConfig } from 'payload/components/utilities';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../MyProvider';
import { getSectors } from './ExperfyPlugin/blocks/getSectors';
const NewPageBuilder: React.FC = ({ status, handleClose }) => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [elementCreate, setElementCreate] = useState(false);
  // const [pagePayload, setPagePayload] = useState<any>({
  //   title: "sample",
  //   author:'',
  // });
  const { setStepNav } = useStepNav();
  const {
    routes: { admin },
  } = useConfig();
  const { setSelectedPageCode } = useContext(Context);
  const [headingText, setHeadingText] = React.useState<string>('abc');
  const { serverURL } = useConfig();
  const apiEndpoint = `${serverURL}/api/media?locale=en&depth=0&fallback-locale=null`;
  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/page-builder',
      },
    ]);
  }, [setStepNav]);

  const clearLocalStorage = () => {
    localStorage.removeItem('page_code');
  };

  const dataHandler = () => {
    const data = localStorage.getItem('page_code');
    if (status === 'NewFromPage') {
      handleClose();
      setSelectedPageCode(data);
      clearLocalStorage();
    } else {
      axios
        .post('http://localhost:3001/api/page-Template', {
          title: 'title',
          pageCode: data,
        })
        .then((res) => {
          clearLocalStorage();
          toast.success('Changes saved successfully');
        })
        .catch((err) => {
          console.log('err', err);
        });

      handleClose();
      setSelectedPageCode('12');
    }
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

  const addAssets = async () => {
    const assetManager = editor?.AssetManager;
    axios
      .get(`${serverURL}/api/media`)
      .then((response) => {
        const { docs } = response.data;
        docs.forEach(({ url }) => {
          assetManager?.add([{ src: url, type: 'image' }]);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const sections = [
      'header',
      'footer',
      'image-banner',
      'image-gallery',
      'image-and-text',
      'paragraph',
      'practice-areas',
      'benefits',
      'departments',
      'guidelines',
      'location',
      'metrics-numbers',
      'talent-cloud-candidates',
      'testimonial',
      'video',
    ];
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
            addBasicStyle: true,
          }),
        (editor) =>
          Forms(editor, {
            category: 'Basic Elements',
          }),
        ,
      ],

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
    });
    editor.on('component:update', (component) => {
      console.log('component:update', component);
      console.log('type', component.get('type'));
      console.log('hello world', component.get('traits'));
      if (component.get('type') == 'text') {
        component.components(component.get('traits').models[0].get('value'));
        component.components(component.get('traits').models[1].get('class'));

      // const block = editor.getSelected();
      // console.log('block', block)
      // block.setAttributes({ class: 'main_heading h3' });
      }
    });

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
                { value:'left', name: 'Left' },
                {  value:'center', name: 'Center' },
                {  value:'right', name: 'Right' },
              ],
            },
            {
              type: 'select',
              name: 'class',
              label: 'Button Alignment',
              default: 'left',
              options: [
                { value:'left', name: 'Left' },
                {  value:'center', name: 'Center' },
                {  value:'right', name: 'Right' },
              ],
            },
            {
              type: 'text',
              name: 'button-title',
              label: 'Button',
              placeholder: 'Enter your title ',
              className: 'custom-text',
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
              label: 'Button Alignment',
              default: 'start',
              options: [
                { value:'btn-start', name: 'Left' },
                {  value:'btn-center', name: 'Center' },
                {  value:'btn-right', name: 'Right' },
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
      // console.log('component:update', component);
      // console.log('type', component.get('type'));
      // console.log('hello world', component.get('traits'));
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
              <span>Page Builder</span>
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
export default NewPageBuilder;
