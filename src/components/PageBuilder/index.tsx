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
import Experfy from './ExperfyPlugin';
// import gjsScroll from './ScrollPlugin';
import { getSectors } from './ExperfyPlugin/blocks/getSectors';
import { UserContext } from '../../Providers/UserProvider';
import { DataContext } from '../../Providers/DataProvider';
import { canvasStyle, navStep, sections, devices,mediaSvg } from './utils';
import SidebarBottom from './SidebarBottom';
import { getCurrentDateAndTime } from '../../utilities/dateAndTime';
import StyleFilter from 'grapesjs-style-filter';
import 'grapick/dist/grapick.min.css';
import BackgroundPlugin from 'grapesjs-style-bg';
// import Bac
interface parems {
  id?: string;
}
let ln = 0;

const PageBuilder: React.FC = () => {
  // ======States start=======
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [currentPageData, setCurrentPageData] = useState<any>(null);
  // const [pageTitle,setPageTitle] = useState<string>('');
  const [pageHistoryArray, setPageHistoryArray] = useState<any[]>([]);
  const [changeHistory, setChangeHistory] = useState(false);
  const [addHistory, setAddHistory] = useState(true);
  const [newstateDirty, setnewstateDirty] = useState(null);
  var isUpdating = false;
  let isChanged = false;
  let isSave = false;

 

  let pageTitle = '';

  // ======States end=======
  // ======Hooks start=======
  const { routes, serverURL } = useConfig();
  const { id }: parems = useParams();
  const { userData } = useContext(UserContext);
  const { sectionData, fetchSectionDetail } = useContext(DataContext);
  const { setStepNav } = useStepNav();
  const history = useHistory();
  const SectorsArray = ['benefitSector', 'paragraphSector'];
  console.log('sectionData', sectionData);
  console.log('userData', userData);
  let custom = 'Custom Modules';

  //Filter Custom Modules
  let Filtered = sectionData
    .filter((el) => el.category === custom)
    .map((section) => section); // sectionTitle.replace(' ', '-')
  console.log('Custom Modules', Filtered);

  //Filter Section Modules
  let sectionModule = 'Section Modules';
  let SectionFiltered = sectionData
    .filter((el) => el.category === sectionModule)
    .map((section) => section); // sectionTitle.replace(' ', '-')
  console.log('Section Module', SectionFiltered);

  // ======Hooks end=======
  const { admin } = routes;
  const apiEndpoint = `${serverURL}/api`;
  console.log('admin', admin, apiEndpoint);

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
      // debugger;
      if (userData.role === 'admin' || userData.role === 'superAdmin') {
        axios({
          method: 'get',
          url: `${apiEndpoint}/page-Template/${id}`,
        })
          .then((res) => {
            console.log('admin', res.data);
            const { pageCode, title } = res.data;
            setCurrentPageData(res.data);
            pageTitle = title;
            if (pageCode) {
              editor.loadProjectData(JSON.parse(pageCode));
            }
          })
          .catch((err) => {
            console.log('err', err);
          });
      } else {
        axios({
          method: 'get',
          url: `${apiEndpoint}/pages/${id}`,
        })
          .then((res) => {
            // debugger;
            console.log('response data', res.data);
            const { pageCode, title } = res.data;
            setCurrentPageData(res.data);
            // setPageTitle(title
            pageTitle = title;
            if (pageCode) {
              editor.loadProjectData(JSON.parse(pageCode));
            }
          })
          .catch((err) => {
            console.log('err', err);
          });
      }
    } else {
      editor.loadProjectData({ assets: [], pages: [], styles: [] });
    }
  };
  const loadHistory = (e, pageCurrentCode) => {
    e.stopPropagation();
    setChangeHistory(false); // to stop the history update on load because this action is previous history button
    editor.loadProjectData(JSON.parse(pageCurrentCode));
    goToTop();
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const fetchHistory = () => {
    axios({
      method: 'get',
      url: `${apiEndpoint}/pagehistory?PageId=${id}`,
    })
      .then((res) => {
        console.log('fetching data', res.data.docs);
        const historyfiltered = res.data.docs.filter((el) => el.PageId === id);
        console.log('historyfiltered', historyfiltered);
        setPageHistoryArray(historyfiltered);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const dataHandler = () => {
    // debugger;
    if (userData.role === 'admin' || userData.role === 'superAdmin') {
      const updation = {
        currentPageData,
        pageCode: JSON.stringify(editor.getProjectData()),
      };
      axios
        .patch(`${apiEndpoint}/page-Template/${id}`, {
          ...updation,
        })
        .then((res) => {
          console.log('response', res);
          toast.success(res.data.message);
          isSave = true;
          console.log('isSave', isSave);
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      // if (id) {
      axios
        .patch(`${apiEndpoint}/pages/${id}`, {
          pageCode: JSON.stringify(editor.getProjectData()),
        })
        .then((res) => {
          toast.success(res.data.message);
          isSave = true;
          console.log('isSave', isSave);
        })
        .catch((err) => {
          console.log('err', err);
        });
      // }
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
  const pageHistoryHandler = () => {
    setChangeHistory(true);
  };
  const deleteHistory = (e, deleteId) => {
    e.stopPropagation();
    setChangeHistory(false);
    axios
      .delete(`${apiEndpoint}/pagehistory/${deleteId}`)
      .then((res) => {
        // console.log('delete history res ==========', res);
        fetchHistory();
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const saveHistoy = () => {
    axios
      .post(`${apiEndpoint}/pagehistory`, {
        PageId: id, //page id get from url
        pageHistory: JSON.stringify(editor?.getProjectData()),
      })
      .then((res) => {
        fetchHistory(); // call to get history
        console.log('res', res);
        isChanged = false;
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  //For Publish the page
  const handlePublish = () => {
    const newEndPoint = `${serverURL}`;
    const url = `${newEndPoint}${admin}/publish/${pageTitle}`;
    console.log('publish url', url);
    window.open(url, '_blank');
  };

  // ======= Methods end =======

  const updateHeaderBlock = async () => {
    axios
      .get(`${serverURL}/api/mega-menu`)
      .then((response) => {
        const { docs } = response.data;
        const blockId = 'header';
        const block = editor?.Blocks.get(blockId);
        const headerLinksItem = docs.filter(
          (el: { menu_section: string }) => el.menu_section === blockId
        );
        if (headerLinksItem.length > 0) {
          let headerLinks = headerLinksItem[0];
          const { nav } = headerLinks;
          let linksDiv = '';

          nav.map((navItem: { link: { label: any; url: any; type: any } }) => {
            const { label, url, type } = navItem.link;

            console.log('navItem', navItem);
            let href = '';
            if (type == 'custom') {
              href = `https://${url}`;
              console.log('custom href', href);
              return (linksDiv += `<a href="${href}" sect="headerSector" sectid="check-link" class="mr-5 hover:text-gray-900" style="font-size: 22px; margin: 0px 20px;">${label}</a>`);
            }
            if (type == 'page') {
              href = `${serverURL}${admin}/publish/${label}`;
              console.log('Page href', href);
              return (linksDiv += `<a href="${href}" sect="headerSector" sectid="check-link" class="mr-5 hover:text-gray-900" style="font-size: 22px; margin: 0px 20px;">${label}</a>`);
            }
          });

          let content = `
                           <header sect="headerSector">
   
   <div sect="headerSector" sectid = "header-main" style=" margin-left: auto;margin-right: auto;padding: 1.25rem;display: flex;justify-content: space-between;align-items: center;">
   

                          <div sect="headerSector" class="header-gym" style="padding:1.5rem 2rem; display:flex; justify-content:space-between; align-items:center;">
   
   
   <a sect="headerSector"  class="a" style="display: flex;
   justify-content: center;
   gap: 20px;
   align-items: center;">
   <img sect="headerSector" sectid="header-svg" src="data:image/svg+xml;base64,PHN2ZyBpZD0ibm91bi1sb2dvLTIxMjE0MzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMzLjAyMSIgaGVpZ2h0PSIzOC4wNTIiIHZpZXdCb3g9IjAgMCAzMy4wMjEgMzguMDUyIj4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk3IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk3IiBkPSJNMTUyLjA5LDMxLjk1MywxNjguNiw0MS41VjYwLjQ1OUwxNTIuMDksNzBsLTE2LjUxLTkuNTQ1VjQxLjVabTAsNS40MTcsNS45MzMsMy4zNTQsNS45MzMsMy40ODNWNTcuODc5bC01LjkzMywzLjM1NC01LjkzMywzLjQ4My01LjkzMy0zLjQ4My01LjkzMy0zLjM1NFY0NC4yMDZsNS45MzMtMy40ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1LjU4IC0zMS45NTMpIiBmaWxsPSIjNTBhZTgxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk4IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk4IiBkPSJNMjIyLjA5MywxMTkuNTI2bDUuMTU5LDIuOTY3LDUuMDMsMi45NjcuMjU4LjEyOXYxMi4yNTRsLS4yNTguMTI5LTUuMDMsMi45NjctNS4xNTksMi45NjctLjEyOS4xMjktLjI1OC0uMTI5LTUuMTU5LTIuOTY3LTUuMDMtMi45NjctLjI1OC0uMTI5VjEyNS41ODhsLjI1OC0uMTI5LDUuMDMtMi45NjcsNS4xNTktMi45NjcuMjU4LS4xMjlabTQuNjQzLDMuNzQxLTQuNzcyLTIuODM4LTkuOCw1LjY3NXYxMS4yMjFsOS44LDUuNjc1LDQuNzcyLTIuODM4LDQuOS0yLjgzOFYxMjYuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDUuNDUzIC0xMTIuNjg5KSIgZmlsbD0iIzUwYWU4MSIvPg0KPC9zdmc+DQo=" id="gjs_img_preview_logo_rtl"/>
     <span sect="headerSector" sectid="header-logo-text">Logo</span>
   </a>
   <nav sect="headerSector" class="header-navabr">
   ${linksDiv}

 
   </div>
   </div>
                 
                   </header>
                
                   `;

          block.set('content', content);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //======== GrapesJs Canvas initialization start here========
  const initializeInstance = () => {
    let blocks = [...sections];
    console.log('blocks', blocks);
    const ExperfyBlocks = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      Experfy(editor, {
        ...options,
        blocks,
        showPanelsOnLoad: true,
        showGlobalStyles: false,
      });

    // const ScrollPlugin = (
    //   editor: GrapesJS.Editor,
    //   options: GrapesJS.EditorConfig
    // ) =>
    //   gjsScroll(editor, {
    //     ...options,
    //     blocks,
    //     showPanelsOnLoad: true,
    //     showGlobalStyles: false,
    //   });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      showDevices: false,
      height: '100%',
      style: `${canvasStyle}`,
      // canvasCss: localStorage.getItem('theme_style_css') || '',
      canvasCss: '.blocks: {display: grid;}',
      plugins: [
        ExperfyBlocks,
        BackgroundPlugin,
        Basics,
        // ScrollPlugin,
        StyleFilter,
      ],
      pluginsOpts: {
        ExperfyBlocks: {},
        Basics: {},
        BackgroundPlugin: {},
        ScrollPlugin: {},
        Filtered: {},
        StyleFilter: {},
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
      deviceManager: {
        devices,
      },
      traitManager: {
        appendTo: '.traits-container',
      },
      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
      canvas: {
        styles: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'],
        scripts: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js'],
      },
      commands: {
        defaults: [
          {
            id: 'preview',
            hidden: false,

            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('clicked');
              // showanimation();
              // editor.runCommand('preview');
              // editor.runCommand('fullscreen');
            },
            // stop() {
            //   editor.stopCommand('fullscreen');
            //   editor.stopCommand('preview');
            // },
          },
          {
            id: 'save-editor',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('before changed', isChanged);
              console.log('isChanged', isChanged);
              saveHistoy();
              const store = editor.store();
              dataHandler();
            },
          },
          {
            id: 'publish-editor',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('published called');
              handlePublish();
            },
          },
        ],
      },
    });

    function isObjEmpty(obj) {
      if (obj === undefined) {
        return true;
      }
      let len = Object.keys(obj).length;
      let isEmpty = len === 0;
      if (len === 1) {
        let objValue = Object.values(obj)[0];
        let valueType = typeof objValue;
        let isChanged =
          valueType === 'boolean' ||
          (valueType === 'string' && objValue.length > 0);
        return isEmpty && !isChanged;
      }
      return isEmpty;
    }
    editor.on('component:update', (component) => {
      const { changed } = component;
      const { attributes } = changed;
      if (!isObjEmpty(attributes)) {
        isChanged = true;
      }
    });
    let TextTrait = [
      {
        name: 'text',

        label: 'Title',

        changeProp: 1,
      },

      {
        type: 'select',
        name: 'tagName',
        label: 'HTML Tag',
        ChangeProp: 1,

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
        changeProp: 1,
      },
    ];
    let ButtonTrait = [
      {
        name: 'text',
        label: 'Button Text',
        changeProp: 1,
      },
    ];
    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: TextTrait,
        },
        init() {
          const comps = this.components();
          // console.log('Text comps', comps);
          const tChild = comps.length === 1 && comps.models[0];
          const chCnt =
            (tChild && tChild.is('textnode') && tChild.get('content')) || '';
          const text = chCnt || this.get('text');
          this.set('text', text);
          //@ts-ignore
          this.on('change:text', this.__onTextChange);
          //@ts-ignore
          text !== chCnt && this.__onTextChange();
          //@ts-ignore
          this.on('change:attributes:htmltag', this.handleHtmltagChange);
        },
        __onTextChange() {
          this.components(this.get('text'));
        },
        handleHtmltagChange() {
          this.set('tagName', this.getAttributes().htmltag);
        },
      },
    });

    editor.DomComponents.addType('button', {
      isComponent: (el) => el.tagName == 'BUTTON',
      model: {
        defaults: {
          traits: ButtonTrait,
        },
        init() {
          const comps = this.components();

          const tChild = comps.length === 1 && comps.models[0];
          // console.log('Old tChild', tChild);
          const chCnt =
            (tChild && tChild.is('textnode') && tChild.get('content')) || '';
          const text = chCnt || this.get('text');
          this.set('text', text);
          this.on('change:text', this.__onTextChange);
          text !== chCnt && this.__onTextChange();
        },

        __onTextChange() {
          this.components(this.get('text'));
        },
      },
    });

    // // Image  Trait
    editor.DomComponents.addType('image', {
      model: {
        defaults: {
          traits: [
            {
              type: 'myimg',
              label: ' ',
              name: 'myimg',
            },
          ],
        },
      },
    });

    editor.TraitManager.addType('myimg', {
      noLabel: true,
      createInput({}) {
        const toggleModal = () => {
          editor.runCommand('open-assets', {
            target: editor.getSelected(),
          });
        };
        const el = document.createElement('div');
        el.setAttribute('class', 'image-trait-preview');
        el.innerHTML = `

<div style="border:1px dashed #48a3d7; padding:15px 10px; border-radius:5px;text-align:center;" id="chg-img-trait-btn">
<p style="margin-bottom:5px"> <i class="fa fa-upload " style="color:#48a3d7;font-size:30px;"></i></p>
<span style="font-size:13px;">Drop ﬁle here or <span style="color:#48a3d7; font-size:13px;">Browse</span> to <br>
add your attachment</span>
</div> `;
        const inputType = el.querySelector('#chg-img-trait-btn');
        inputType!.addEventListener('click', toggleModal);
        return el;
      },
    });

    editor.DomComponents.addType('btn', {
      model: {
        defaults: {
          traits: [
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    //Add Trait on click
    const toggleBtn = () => {
      const component = editor.getSelected();
      console.log('component Selection Toggle', component);
      //@ts-ignore
      if (component.ccid == 'GuidelineDiv') {
        component.append(`<div sect= "guidelineSector" style=" padding: 0.75rem; margin: 0.75rem;">
   
        <h3 sect= "guidelineSector"  sectid="guideline-bullet" style="height: 35px;border: 2px solid black; display: flex; width: 40px; justify-content: center;align-items: center;margin-right: 10px;border-radius: 80%;">1</h3>
        <h1 sect= "guidelineSector" sectid="bullet-heading" style="text-align:left;">Add Step Title</h1>
      
      <h6 sect= "guidelineSector" sectid="bullet-sub-heading" style="text-align:left;padding: 10px; margin-top: 5px;">Add information in steps in
       order to explain what the user
       should do next
      </h6>
      </div>`);
      }
      //@ts-ignore
      if (component.ccid == 'Departmentdiv') {
        component.append(`
        <div  sect= "departmentSector" style=" padding: 0.75rem; margin: 0.75rem;">
        <img sect= "departmentSector" sectid="image-department" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>
      
           <h1 sect= "departmentSector" sectid="icon-department-heading" style="text-align:center;margin-top: 1.25rem;margin-bottom: 1.25rem;">Department 1</h1>
           <h6 sect= "departmentSector" sectid="icon-department-sub-heading" style="  text-align:left;">Lorem ipsum dolor sit amet. Est
              porro distinctio eum eius odit ea
              facere consequuntur.
           </h6>
        </div>
`);
      }
      //@ts-ignore
      if (component.attributes?.type == 'testimonial') {
        component.append(`
        <div class="swiper-slide swiper-slide-next" role="group"   style="margin: 1.5rem">
                  <div class="slider-content-main-div">
                    <div class="left-container">
                        <div class="img-container">
                          <img class="image testimonial-image testimonialSector_image" alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-center" style="">
                        </div>
                        <h2 class="h2 main-testimonial-name testimonialSector_h2">Daniel Samarov</h2>
                        <span class="user-details">
                          <h5 class="h5 main-testimonial-content testimonialSector_h5">Chief Data Scientist, DS Box</h5>
                          <h5 class="h5 main-testimonial-content testimonialSector_h5">PhD, Statistics University of North</h5></span>
                    </div>
                    <div class="divider"></div>
                    <div class="slider-text-div">
                        <h6 class="h6 main-testimonial-content testimonialSector_h6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</h6>
                    </div>
                  </div>
              </div>
`);
      }

      // component.addTrait(
      //   {
      //     name: 'mysection',
      //     label: ' ',
      //     type: 'mysection',
      //     changeProp: 1,
      //   },
      //   { at: 0 }
      // );
    };
    //Close Trait on click
    const CloseTrait = () => {
      const component = editor.getSelected();
      component.removeTrait('mysection') && component.getChildAt(0).remove();
    };
    editor.TraitManager.addType('mysection', {
      noLabel: true,
      createInput({}) {
        const el = document.createElement('div');
        el.setAttribute('class', 'section-trait-preview');
        el.innerHTML = `

    <label style="color:#222;font-weight:400;margin-bottom:5px">Item</label>
    <div style=" border: 1px solid #CED4DA; borderRadius: 0.25rem;"}}>
      <div style="display:flex">
        <input id="first-id" type="text" placeholder="Guideline Text" style=" display:block;  padding:0.375rem 0.75rem;fontSize:1rem; lineHeight:1.5; border:1px solid #CED4DA; borderRadius:0.25rem 0px 0px 0px; "/>
      <button type="button" style="backgroundColor:#fff;borderRadius:0px 0.25rem 0px 0px; border:1px solid #CED4DA;" id="close-btn-trait-btn">X</button>
      </div>
      <div style="padding:15px 10px;">
      <label style="color:#222;font-weight:400;margin-bottom:5px">Number</label>
      <input type="text" placeholder="Guidline Step" style=" display:block; padding:0.375rem 0.75rem;fontSize:1rem;lineHeight:1.5;border:1px solid #CED4DA;borderRadius:0.25rem; "/>
      <br />
      <label style="color:#222;font-weight:400;margin-bottom:5px">Description Text</label>
      <textarea  rows="4" placeholder="Text" style="display:block;padding:0.375rem 0.75rem;fontSize:1rem;lineHeight:1.5;border:1px solid #CED4DA;borderRadius:0.25rem;"></textarea>
      </div>
    </div>
 
 
 `;
        const inputType = el.querySelector('#close-btn-trait-btn');
        inputType!.addEventListener('click', CloseTrait);
        return el;
      },

      onUpdate({ elInput, component }) {
        const wrapperCmp = editor.DomComponents.getWrapper();
        let target = `.guidline-option`;

        editor.select(wrapperCmp.find(target)[0]);
      },
    });

    editor.TraitManager.addType('mybtn', {
      noLabel: true,
      createInput({}) {
        const el = document.createElement('div');
        el.innerHTML = `<button type="submit"  class="btn btn-primary btn-md"  id="chg-btn-trait-btn">Add Step</button>`;
        const inputType = el.querySelector('#chg-btn-trait-btn');
        inputType!.addEventListener('click', toggleBtn);
        return el;
      },
    });

    // let opts="Swiper"
    /* eslint-disable no-undef */
    const defaultType = editor.DomComponents.getType('default');
    const defaultView = defaultType.view;
    editor.DomComponents.addType('testimonial', {
      model: {
        defaults: {
          script: function () {
            // const dynamicProgress = "{[ dynamicProgress ]}";
            // const progressType = "{[ progressType ]}";

            const initLib = function () {
              //@ts-ignore
              var swiper = new Swiper('.mySwiper', {
                spaceBetween: 30,
                centeredSlides: true,

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });

              // const swiper = new Swiper(".mySwiper"
              // , {
              //   // spaceBetween: 30,
              //   // centeredSlides: true,
              //   // autoplay: {
              //   //   delay: 2500,
              //   //   disableOnInteraction: false,
              //   // },
              //   // // pagination: {
              //   // //   el: ".swiper-pagination",
              //   // //   clickable: true,
              //   // //   // dynamicBullets: !!dynamicProgress,
              //   // //   // type: progr essType,
              //   // // },
              //   // navigation: {
              //   //   nextEl: ".swiper-button-next",
              //   //   prevEl: ".swiper-button-prev",
              //   // },
              // });
              // console.log('swiper :>> ', swiper);
            };
            initLib();

            //  if (typeof Swiper == "undefined") {
            //           const script = document.createElement("script");
            //           script.onload = initLib;
            //           script.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";
            //           document.body.appendChild(script);
            //         } else {
            //           initLib();
            //         }

            // const initLib = function () {
            //   const swiper = new Swiper(".mySwiper", {
            //     spaceBetween: 30,
            //     centeredSlides: true,
            //     autoplay: {
            //       delay: 2500,
            //       disableOnInteraction: false,
            //     },
            //     // pagination: {
            //     //   el: ".swiper-pagination",
            //     //   clickable: true,
            //     //   // dynamicBullets: !!dynamicProgress,
            //     //   // type: progressType,
            //     // },
            //     navigation: {
            //       nextEl: ".swiper-button-next",
            //       prevEl: ".swiper-button-prev",
            //     },
            //   });
            //   console.log("swiper :>> ", swiper);
            // };
            // initLib();

            // if (typeof Swiper == "undefined") {
            //   const script = document.createElement("script");
            //   script.onload = initLib;
            //   script.src = "https://unpkg.com/swiper@7/swiper-bundle.min.js";
            //   document.body.appendChild(script);
            // } else {
            //   initLib();
            // }
          },

          traits: [
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
      isComponent: (el) => {
        let cond1 = el?.className !== undefined;
        let cond2 = typeof el?.className?.baseVal !== 'string';

        if (cond1 && cond2) {
          if (el?.className?.includes('swiper-container')) {
            return {
              type: 'testimonial',
            };
          }
        }
      },
    });

    const CheckedBox = (props) => {
      console.log('props', props);
      const { target } = props;
      console.log('target', target);
      const { checked, name, defaultValue } = target;
      const component = editor.getSelected();
      console.log('checked', component);
      //@ts-ignore
      if (checked) {
        if (component.attributes?.type == 'PracticeDiv') {
          component.append(`
          <div data-gjs-type=${name} style=" height:130px;width:130px;margin: auto;padding: 15px;text-align: center;border-radius: 0.25rem;border: 1px solid #D1DBE3;background-color: #fff;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" class='box-icon-text-holder'>
            <div style=" justify-content: center;display:flex;align-items:center; height:65px;margin:auto" class='box-icon-div'>
             <img src='' />
            </div>
            <div style="color:#101010;font-weight:600;font-size:14px;"class='box-text-div'>
              <p>${name}</p>
            </div>
          </div>`);
        }
      } else {
        var wrapper = editor.DomComponents.getWrapper();
        console.log('wrapper', wrapper);
        let { id } = target;
        // id = id.replace('-', ' ');
        let index = component.getTraitIndex(id);
        let trait = component.getTrait(id.replace('-', ' '));
        let cmp = wrapper.find(`[data-gjs-type=${id}]`);
        console.log('cmp', cmp);
        if (cmp.length > 0) {
          let removed = cmp[0]?.remove();
          console.log('removed', removed);
        }
        // wrapper.set('style', { 'background-color': 'red' });
        // wrapper.set('attributes', { title: 'Hello!' });

        console.log('trait', trait);
        console.log('index', index);
        console.log('component.getChildAt(index)', component.getChildAt(index));
        if (index > 0) {
          component.getChildAt(index + 1).remove();
        }
      }
    };

    let dataArray = [
      {
        name: 'AI ML',
        type: 'AI-ML',
      },
      {
        name: 'Big Data',
        type: 'Big-Data',
      },
      {
        name: 'Cloud Computing',
        type: 'Cloud-Computing',
      },
      {
        name: 'DevOps',
        type: 'DevOps',
      },
      {
        name: 'Business Intelligence',
        type: 'Business-Intelligence',
      },
      {
        name: 'Software Web Development',
        type: 'Software-Web-Development',
      },
      {
        name: 'QA',
        type: 'QA',
      },
      {
        name: 'UX UI Design',
        type: 'UX-UI-Design',
      },
      {
        name: 'Mobile',
        type: 'Mobile',
      },
      {
        name: 'Marketing',
        type: 'Marketing',
      },
      {
        name: 'Internet of Things',
        type: 'Internet-of-Things',
      },
      {
        name: 'BlockChain',
        type: 'BlockChain',
      },
      {
        name: 'Robotics Process Automation',
        type: 'Robotics-Process-Automation',
      },
      {
        name: 'Cyber Security',
        type: 'Cyber-Security',
      },
    ];

    dataArray.forEach((item, i) => {
      const { name, type } = item;
      return editor.TraitManager.addType(type, {
        noLabel: true,
        createInput({}) {
          const el = document.createElement('div');
          el.className = 'custom-checkbox';
          el.innerHTML = `<input type="checkbox" id="${type}" name="${type}" value="${type}">
          <label for="${type}"> ${name}</label>`;
          const inputType = el.querySelector(`#${type}`);
          inputType!.addEventListener('change', CheckedBox);
          return el;
        },
      });
    });
    //Practi ce Area Div Trait
    editor.DomComponents.addType('PracticeDiv', {
      model: {
        defaults: {
          traits: dataArray,
        },
      },
    });

    //Guideline Div Trait
    editor.DomComponents.addType('testimonialadd', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    editor.DomComponents.addType('GuidelineDiv', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    // Department Div Trait
    editor.DomComponents.addType('Departmentdiv', {
      model: {
        defaults: {
          traits: [
            // {
            //   name: 'mysection',
            //   label: ' ',
            //   type: 'mysection',
            //   changeProp: 1,
            // },
            {
              type: 'mybtn',
              label: ' ',
              name: 'mybtn',
            },
          ],
        },
      },
    });

    // editor.DomComponents.addType('Checkdiv', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           name: 'text',

    //           label: 'Icon Heading',

    //           changeProp: 1,
    //         },
    //         {
    //           name: 'textarea',

    //           label: 'Main Heading',

    //           changeProp: 1,
    //         },
    //         {
    //           name: 'text',

    //           label: 'Sub Heading',

    //           changeProp: 1,
    //         },

    //       ],
    //     },
    //     init() {
    //       const comps = this.components();
    //       console.log('Text comps', comps);
    //       console.log("comps model",comps.models[0])
    //       let check = '';
    //       comps.models.map(el=>{
    //        const newval = el.attributes.text;
    //      const text=  this.components(this.get('text'));
    //        this.set('text', text);
    //       //  console.log("el",this.get("text"))

    //       })
    //       console.log("check",check)
    //       const tChild = comps.length >0 && check;
    //       //@ts-ignore
    //       // const chCnt =(tChild && tChild.is('textnode') && tChild.get('content')) || '';
    //       // console.log("chCnt",chCnt)
    //       // const text = chCnt || this.get('text');
    //       console.log("text",this.attributes.components)
    //       // this.set('text', text);
    //       //@ts-ignore
    //       this.on('change:text', this.__onTextChange);
    //       //@ts-ignore
    //       // text !== chCnt && this.__onTextChange();
    //     },
    //     __onTextChange() {
    //       this.components(this.get('text'));
    //     },
    //     // handleHtmltagChange() {
    //     //   this.set('tagName', this.getAttributes().htmltag);
    //     // },
    //   },
    // });

    //@ts-ignore
    editor.on('style:property:update', (component) => {
      isChanged = true;
    });

    editor.on('load', () => {
      let styleFound = [];
      Filtered.forEach((element) => {
        console.log('Filtered element', element);
        const {
          category,
          id,
          sectionCode,
          sectionTitle,
          media,
          sectionHtml,
          sectionCss,
        } = element;
        console.log('element', element);

        editor.BlockManager.add(sectionTitle.replace(' ', '-'), {
          label: sectionTitle,
          category,
          media,
          content: sectionHtml,
        });
        const { styles } = JSON.parse(sectionCode);
        styleFound = [...styleFound, ...styles];
      });

      if (SectionFiltered.length > 0) {
        let sectionId = '';

        SectionFiltered.forEach((element) => {
          const {
            category,
            id,
            sectionCode,
            sectionTitle,
            media,
            sectionHtml,
            sectionCss,
          } = element;
          //Remove Block that is not updated
          //@ts-ignore
          editor.BlockManager.remove(sectionTitle);

          //Then Add Block that is updated
          editor.BlockManager.add(sectionTitle.replace(' ', '-'), {
            label: sectionTitle,
            category,
            media: mediaSvg[sectionTitle.replace('-', '_')],
            content: sectionHtml,
          });
          const { styles } = JSON.parse(sectionCode);
          console.log('section styles', styles);

          styleFound = [...styleFound, ...styles];

          sectionId = sectionTitle;
        });
      }
      userData?.defaultStyle?.filteredStyles?.forEach((el) => {
        const { selectors, style } = el;

        let element = el?.state ? `${selectors}:${el.state}` : `${selectors}`;

        editor.CssComposer.setRule(element, { ...style });
      });
      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() },
          {
            styles:
              [...userData.defaultStyle.filteredStyles, ...styleFound] ?? null,
          }
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

    editor.on('component:selected', (component) => {
      console.log('page selected', component);

      let stylesArray = userData?.defaultStyle?.filteredStyles || [];
      const { attributes } = component;
      let isFound = stylesArray.filter((el) => {
        console.log('el', el);
        const { selectors } = el;
        let tag = attributes?.tagName || '';
        console.log('tag', tag);
        return selectors.includes(tag);
      });
      console.log('isFound', isFound);
      if (isFound.length > 0) {
        const { style } = isFound[0];
        // editor.DomComponents.

        var wrapper = editor.DomComponents.getWrapper();
        console.log('wrapper', wrapper);
        let cmp = wrapper.find(`[id=${component.ccid}]`)[0].setStyle(style);
        console.log('cmp', cmp);

        const wrapperCmp = editor.DomComponents.getWrapper();
        let target = `#${component.ccid}`;
        let found = wrapperCmp.find(target);
        console.log('found', found);
        editor.select(wrapperCmp.find(target)[0]);
      }

      //Styles from theme style
      // userData?.defaultStyle?.filteredStyles?.forEach((el) => {
      //   const { selectors, style } = el;

      //   let element = el?.state ? `${selectors}:${el.state}` : `${selectors}`;

      //   editor.CssComposer.setRule(element, { ...style });
      // });

      //For Section Sector and Style
      if (component) {
        //single sector
        let sectid = component.attributes?.attributes?.sectid;
        let sectId = component.attributes.attributes.sect;
        let sectors = editor.StyleManager.getSectors();
        console.log('sectors selected', sectors);
        sectors.reset();
        sectors.add(getSectors(sectId));
        for (let i = 0; i < sectors.length; i++) {
          if (sectid?.includes(sectors.models[i].get('id'))) {
            sectors.models[i].setOpen(true);
          } else {
            sectors.models[i].setOpen(false);
          }
        }
      }

      if (component.get('type') == 'text') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'button') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'image') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'GuidelineDiv') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'Departmentdiv') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'PracticeDiv') {
        editor?.runCommand('core:open-traits');
      }
    });

    //This is for all section templates Style Manager

    editor.on(`block:drag:stop`, (component, block) => {
      console.log('Component Dropped', component);
      let stylesArray = userData?.defaultStyle?.filteredStyles || [];

      let styleObj = {};
      stylesArray.forEach((el) => {
        const { selectors, style } = el;
        styleObj[selectors[0]] = style;
      });

      const { attributes } = component;
      console.log('stylesArray', stylesArray);
      let isFound = stylesArray.filter((el) => {
        console.log('el', el);
        const { selectors } = el;
        let tag = attributes?.tagName || '';
        console.log('tag', tag);
        return selectors.includes(tag);
      });
      console.log('isFound', isFound);
      if (isFound.length > 0) {
        const { style } = isFound[0];
        // editor.DomComponents.

        var wrapper = editor.DomComponents.getWrapper();
        console.log('wrapper', wrapper);
        let cmp = wrapper.find(`[id=${component.ccid}]`)[0].setStyle(style);
        console.log('cmp', cmp);

        const wrapperCmp = editor.DomComponents.getWrapper();
        let target = `#${component.ccid}`;
        let found = wrapperCmp.find(target);
        console.log('found', found);
        editor.select(wrapperCmp.find(target)[0]);
      }

      let sectors = editor.StyleManager.getSectors();
      console.log(' drop sectors selected', sectors);
      // console.log("onload drop",editor.StyleManager.getBuiltInAll())

      let { data, found, filtering } = fetchSectionDetail(block.id);
      // console.log('found', found, filtering);
      // let ccid = component.ccid.split('-')[0];
      // console.log(' ccid', ccid);
      if (component && found) {
        const { sectionCode, category, sectionHtml } = filtering;
        let content = JSON.parse(sectionCode);

        const sectorId =
          content.pages[0].frames[0].component.components[0].attributes.id;
        console.log('sectorIsd', sectorId);
        const blocksector = editor.StyleManager.getSectors();
        // blocksector.reset();
        blocksector.add(getSectors(sectorId));
      }
      if (!found) {
        let sectId = component.attributes.attributes.sect;
        const sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(sectId));

        const wrapperCmp = editor.DomComponents.getWrapper();

        editor.select(wrapperCmp.find(`#${component.ccid}`)[0]);
      }

      const wrapperCmp = editor.DomComponents.getWrapper();

      let sectorsxyz = editor.StyleManager.getSectors();
      console.log('sectorsxyz', sectorsxyz);
      const { models } = sectorsxyz;
      models.forEach((model) => {
        console.log('model', model);
        const { id } = model;

        let target = `[sectid=${id}]`;
        // console.log('target', target);
        let found = wrapperCmp.find(target);
        // console.log('found', found);
        // console.log('styleObj', styleObj);
        if (found.length === 1 && found[0]?.attributes?.tagName) {
          let tagName = found[0]?.attributes?.tagName;
          let valid = [  
          'buttons',
          'images',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'links',
          'labels',
          'fields'
        ];
          let isFound = wrapperCmp.find(target);
          if (isFound.length > 0 && valid.includes(tagName)) {
            let cmp = isFound[0].setStyle(
              styleObj[found[0]?.attributes?.tagName]
            );
          }
        }
      });
    });

    //@ts-ignore

    // @ts-ignore
    editor.on('style:sector:update', (props) => {
      !isUpdating &&
        setTimeout(() => {
          const sectors = editor.StyleManager.getSectors();
          var selectedBlock = editor.getSelected();
          isUpdating = true;
          for (let i = 0; i < sectors.length; i++) {
            const modelId = sectors.models[i].get('id');

            if (modelId == props.id) {
              let isOpen = sectors.models[i].isOpen();

              if (isOpen) {
                // const wrapperCmp = editor.DomComponents.getWrapper();
                // editor.select(wrapperCmp.find(`.${props.id}`)[0]);
              }
            } else {
              sectors.models[i].setOpen(false);
            }
          }

          setTimeout(() => {
            isUpdating = false;
          }, 300);
        }, 100);
    });
    // @ts-ignore
    // editor.on('style:target', (component) => {
    //   console.log('style sector called', component);
    //   const sectors = editor.StyleManager.getSectors();

    //   if (!component) return;

    //   !isUpdating &&
    //     setTimeout(() => {
    //       isUpdating = true;

    //       const selectedSector = component
    //         .getSelectorsString()
    //         .replace('.', '');

    //       for (let i = 0; i < sectors.length; i++) {
    //        ;
    //         if (selectedSector.includes(sectors.models[i].get('id'))) {
    //           console.log('mateched successfully');
    //           sectors.models[i].setOpen(true);
    //         } else {
    //           sectors.models[i].setOpen(false);
    //         }
    //       }

    //       setTimeout(() => {
    //         isUpdating = false;
    //       }, 300);
    //     }, 500);
    // });
    localStorage.removeItem('gjsProject');
    updateHeaderBlock();
    setEditorState(editor);
    addAssets();
  };
  // ========GrapesJS editor end here=======

  // =========Lifecycle methods start here=========
  useEffect(() => {
    setStepNav([
      {
        label: 'Page Builder',
        url: '/collections/page-builder',
      },
    ]);
  }, [setStepNav]);

  useEffect(() => {
    if (userData !== null) {
      initializeInstance();
      fetchData();
      fetchHistory();
    }
  }, []);

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
          <div className="panel-body has-bottom-controls">
            <div className="panel-body__inner">
              <div className="panel-body__content">
                <div className="panel__switcher"></div>
                <SidebarBottom
                  editor={editor}
                  consumer="pageBuilder"
                  pageHistoryArray={pageHistoryArray}
                  deleteHistory={deleteHistory}
                  loadHistory={loadHistory}
                  hasBottomToolbar={true}
                />
                <div className="styles-container"></div>
                <div className="traits-container"></div>
                <div className="layers-container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="editor-canvas">
          <div className="editor"></div>
        </div>
      </div>
    </div>
  );
};
export default PageBuilder;
