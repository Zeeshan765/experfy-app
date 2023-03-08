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
import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../Providers/MyProvider';
import Experfy from './ExperfyPlugin';
import { getSectors } from './ExperfyPlugin/blocks/getSectors';
import { UserContext } from '../../Providers/UserProvider';
import { canvasStyle, navStep, sections, devices } from './utils';
import SidebarBottom from './SidebarBottom';
import { getCurrentDateAndTime } from '../../utilities/dateAnd Time';

interface parems {
  id?: string;
}

const PageBuilder: React.FC = () => {
  // ======States start=======
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [pageHistoryArray, setPageHistoryArray] = useState<any[]>([]);
  const [historyExact, setHistoryExact] = useState(false);
  const [changeHistory, setChangeHistory] = useState(false);
  // ======States end=======
  // ======Hooks start=======
  const { routes, serverURL } = useConfig();
  const { id }: parems = useParams();
  const { userData } = useContext(UserContext);
  const { setStepNav } = useStepNav();
  const history = useHistory();
  // ======Hooks end=======
  const { admin } = routes;
  const apiEndpoint = `${serverURL}/api`;

  //======= Methods start=======
  const addAssets = async () => {
    const assetManager = editor?.AssetManager;
    axios
      .get(`${apiEndpoint}/media`)
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
  const fetchData = () => {
    if (id) {
      axios({
        method: 'get',
        url: `${apiEndpoint}/pages/${id}`,
      })
        .then((res) => {
          const { pageCode } = res.data;
          if (pageCode) {
            // console.log("pageCode new", JSON.parse(pageCode));
            editor.loadProjectData(JSON.parse(pageCode));
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      editor.loadProjectData({ assets: [], pages: [], styles: [] });
    }
  };
  const fetchHistory = () => {
    axios({
      method: 'get',
      url: `${apiEndpoint}/pagehistory?PageId=${id}`,
    })
      .then((res) => {
        const historyArray = JSON.parse(res.data.docs[0].pageHistory);
        setHistoryExact(true);
        setPageHistoryArray(historyArray);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const dataHandler = (historyUpdate) => {
    if (id) {
      axios
        .patch(`${apiEndpoint}/pages/${id}`, {
          pageCode: JSON.stringify(editor.getProjectData()),
        })
        .then((res) => {
          !historyUpdate && history.replace('/admin/collections/pages');
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };
  const uploadMedia = async (fileItem: String) => {
    const { name, src } = fileItem;
    var file = new File([src], name);
    try {
      // Create the form data for the request
      const formData = new FormData();
      formData.append('file', file);
      let item = {
        keywords: "Media",
        mediaType: "Photo",
        description: "",
      };
      formData.append("_payload", JSON.stringify(item));
      // Make the POST request
      await axios.post(apiEndpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `Bearer ${apiKey}`,
        },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const pageHistoryHandler = () => {
    const timeStemp = getCurrentDateAndTime();
    const pageCurrentCode = JSON.stringify(editor?.getProjectData());
    setChangeHistory(true);
    setPageHistoryArray((prev) => [...prev, { timeStemp, pageCurrentCode }]);
  };
  const saveHistoy = () => {
    if (historyExact) {
      axios
        .patch(`${apiEndpoint}/pagehistory`, {
          PageId: id, //page id get from url
          pageHistory: JSON.stringify(pageHistoryArray),
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(`${apiEndpoint}/pagehistory`, {
          PageId: id, //page id get from url
          pageHistory: JSON.stringify(pageHistoryArray),
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // ======= Methods end =======

  // ========external custom Trait start here========
  let TextTrait = [
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
  ];
  let ImageTrait = [
    {
      type: 'select',
      name: 'class',
      label: 'Icon background',
      default: 'left',
      options: [{ value: 'left', name: 'Left' }],
    },
    {
      type: 'select',
      name: 'class',
      label: 'Background Shape',
      default: 'left',
      options: [{ value: 'left', name: 'Left' }],
    },
    {
      name: 'image',
      type: 'file',
      label: 'Icon',
      attributes: {
        accept: 'image/*',
        onchange: function () {
          let url = this.value;
          console.log('image value------------------------>', url);
          let img = new Image();
          img.src = url;
          img.onload = function () {
            // editor.AssetManager.add({ src: url });
            editor.getSelected().set('src', src);
            // Trigger a render of the selected component to update the canvas
            //@ts-ignore
            editor.getSelected().trigger('change:attributes');
          };
        },
      },
      onchange: function () {
        let url = this.value;
        console.log('image value------------------------>', url);
        let img = new Image();
        img.src = url;
        img.onload = function () {
          // editor.AssetManager.add({ src: url });
          editor.getSelected().set('src', src);
          // Trigger a render of the selected component to update the canvas
          //@ts-ignore
          editor.getSelected().trigger('change:attributes');
        };
      },
      // changeProp: 1,
    },
  ];
  //=========external custom Trait end here========

  //======== GrapesJs Canvas initialization start here========
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
      container: ".editor",
      fromElement: true,
      showDevices: false,
      // dragMode: 'absolute',
      style: `${canvasStyle}`,
      // canvasCss: localStorage.getItem('theme_style_css') || '',
      canvasCss: '.blocks: {display: grid;}',
      plugins: [
        ExperfyBlocks,
        (editor) =>
          NavBar(editor, {
            label: "Header",
            block: {
              category: "Header & Footer",
            },
          }),
        (editor) =>
          Basics(editor, {
            category: "Basic Elements",
            flexGrid: true,
            addBasicStyle: false,
          }),
        (editor) =>
          Forms(editor, {
            category: "Basic Elements",
          }),
      ],
      layerManager: {
        appendTo: ".layers-container",
        scrollCanvas: true,
      },
      selectorManager: {
        appendTo: ".styles-container",
      },
      styleManager: {
        appendTo: ".styles-container",
        highlightChanged: true,
      },
      deviceManager: {
        devices,
      },
      traitManager: {
        appendTo: ".traits-container",
      },
      blockManager: {
        appendTo: ".blocks",
        blocks: [],
      },
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
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              const store = editor.store();
              dataHandler();
              toast.success('Changes saved successfully');
            },
          },
        ],
      },
    });
    editor.on('load', () => {
      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() },
          { styles: userData.defaultStyle.filteredStyles }
        ),
      });
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
            //@ts-ignore
            uploadMedia({ src: file, name: component.attributes.name });
          });
        });
      } else {
        // url file handling
        let arr = src.split("/");
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
    editor.DomComponents.addType("text", {
      model: {
        defaults: {
          traits: TextTrait,
        },
      },
    });
    editor.DomComponents.addType('image', {
      model: {
        defaults: {
          traits: ImageTrait,
        },
        init() {
          console.log('************', this);
          console.log('Attributes[[[[[[[[[[[[[[[[[[[[[[[[[', this.attributes);
          console.log(
            '^^^^^^^^^^^^^^^^^^^^^',
            this.attributes.attributes.image
          );

          console.log('editorerreee', editor.getSelected());

          this.on('change:image', this.handleList1Change);
        },
        handleList1Change(e) {
          console.log('e', e);
          console.log('onChange', this.attributes.image);
          console.log('thsi', this);

          // let url = this.value;
          // console.log('image value------------------------>', url);
          // let img = new Image();
          // img.src = url;
          // img.onload = function () {
          //   // editor.AssetManager.add({ src: url });
          //   editor.getSelected().setAttributes({src:url});

          // }

          // let updated = this.component.get('traits').models[2].set('src', src);
          // console.log('updated', updated)
          // this.components(updated);
          // this.attributes.set('src', src);

          const modelComponent = editor.getSelected();
          modelComponent.setAttributes({ src: src });
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
    // editor.TraitManager.addType('image-source', {
    //   // Define the label for the trait
    //   label: 'Image Source',

    //   // Define the input type (e.g. text, select, etc.)
    //   type: 'text',

    //   // Define the function for getting the value of the trait
    //   getValue: function (el) {
    //     return el.getAttribute('src');
    //   },
    //   // Define the function for setting the value of the trait
    //   setValue: function (el, value) {
    //     el.setAttribute('src', value);
    //   }
    // });
    // editor.BlockManager.add('my-image-block', {
    //   // Define the label, content, attributes, and category as before
    //   label: 'My Image Block',
    //   content: '<img src="https://placehold.it/300x200"/>',
    //   attributes: {},
    //   category: 'My Category',

    // });

    //For Traits
    editor.on('component:selected', (component) => {
      if (component) {
        let ccid = component.ccid.split('-')[0];
        const blocksector = editor.StyleManager.getSectors();
        blocksector.reset();
        blocksector.add(getSectors(ccid));
      }
      let type = component.get('type');
      const { id } = component.attributes.attributes;
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
      }
      if (component.get('type') == 'button') {
        component.components(component.get('traits').models[0].get('value'));
        component.components(component.get('traits').models[1].get('class'));
        component.components(component.get('traits').models[2].get('class'));
      }
      if (component.get('type') == 'image') {
        // console.log("hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        // let updated = component.get('traits').models[2].set('src', src);
        // console.log('updated', updated)
        // component.components(component.get('traits').models[2].set('src', src));
      }
      pageHistoryHandler();
    });
    //This is for all section templates Style Manager
    editor.on(`block:drag:stop`, (component, block) => {
      // if component exists, means the drop was successful
      if (component) {
        let ccid = component.ccid.split("-")[0];
        const blocksector = editor.StyleManager.getSectors();
        blocksector.reset();
        blocksector.add(getSectors(ccid));
      }
    });
    localStorage.removeItem('gjsProject');
    setEditorState(editor);
    addAssets();
  };
  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/page-builder',
      },
    ]);
  }, [setStepNav]);
  // ========GrapesJS editor end here=======
  // =========Lifecycle methods start here========
  useEffect(() => {
    if (userData !== null) {
      initializeInstance();
      fetchData();
      fetchHistory();
    }
  }, []);
  useEffect(() => {
    const updateHistory = setTimeout(() => {
      if (changeHistory) {
        saveHistoy();
        setChangeHistory(false); // reset the flag beacue again tracking updation
      }
    }, 1000);
    return () => clearTimeout(updateHistory);
  }, [changeHistory]);
  // =======Lifecycle methods end here=========
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
          <SidebarBottom
            editor={editor}
            consumer="pageBuilder"
            pageHistoryArray={pageHistoryArray}
          />
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
