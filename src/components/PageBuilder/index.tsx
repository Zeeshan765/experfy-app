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
import gjsScroll from './ScrollPlugin';
import { getSectors } from './ExperfyPlugin/blocks/getSectors';
import { UserContext } from '../../Providers/UserProvider';
import { DataContext } from '../../Providers/DataProvider';
import { canvasStyle, navStep, sections, devices } from './utils';
import SidebarBottom from './SidebarBottom';
import { getCurrentDateAndTime } from '../../utilities/dateAndTime';
import backgroundPlugin from 'grapesjs-style-bg';
// import gjsScroll from 'grapesjs-plugin-scroll';
interface parems {
  id?: string;
}
let ln = 0;

const PageBuilder: React.FC = () => {
  // ======States start=======
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [currentPageData, setCurrentPageData] = useState<any>(null);
  const [pageHistoryArray, setPageHistoryArray] = useState<any[]>([]);
  const [changeHistory, setChangeHistory] = useState(false);
  const [addHistory, setAddHistory] = useState(true);
  const [newstateDirty, setnewstateDirty] = useState(null);
  var isUpdating = false;
  let isChanged = false;
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

  let custom = 'Custom Module';
  let Filtered = sectionData
    .filter((el) => el.category === custom)
    .map((section) => section); // sectionTitle.replace(' ', '-')
  console.log('Custom Module', Filtered);

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
      // debugger;
      if (userData.role === 'admin' || userData.role === 'superAdmin') {
        axios({
          method: 'get',
          url: `${apiEndpoint}/page-Template/${id}`,
        })
          .then((res) => {
            const { pageCode } = res.data;
            setCurrentPageData(res.data);
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

            const { pageCode } = res.data;
            setCurrentPageData(res.data);
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
          toast.success(res.data.message);
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

          nav.map((navItem: { link: { label: any; url: any } }) => {
            const { label, url } = navItem.link;
            let href = `${url}`;
            return (linksDiv += `<a href="${href}" class="mr-5 hover:text-gray-900" style="font-size: 22px; margin: 0px 20px; color:#ffffff;">${label}</a>`);
          });

          let content = `
                    <header id=header_1 class="text-gray-600 body-font flex" style="background-color:#2f3d55; color:#ffffff; height:100px;">
                      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                          <svg id="noun-logo-2121439" xmlns="http://www.w3.org/2000/svg" width="33.021" height="38.052" viewBox="0 0 33.021 38.052">
                            <path id="Path_169897" data-name="Path 169897" d="M152.09,31.953,168.6,41.5V60.459L152.09,70l-16.51-9.545V41.5Zm0,5.417,5.933,3.354,5.933,3.483V57.879l-5.933,3.354-5.933,3.483-5.933-3.483-5.933-3.354V44.206l5.933-3.483Z" transform="translate(-135.58 -31.953)" fill="#50ae81" fill-rule="evenodd"/>
                            <path id="Path_169898" data-name="Path 169898" d="M222.093,119.526l5.159,2.967,5.03,2.967.258.129v12.254l-.258.129-5.03,2.967-5.159,2.967-.129.129-.258-.129-5.159-2.967-5.03-2.967-.258-.129V125.588l.258-.129,5.03-2.967,5.159-2.967.258-.129Zm4.643,3.741-4.772-2.838-9.8,5.675v11.221l9.8,5.675,4.772-2.838,4.9-2.838V126.1Z" transform="translate(-205.453 -112.689)" fill="#50ae81"/>
                          </svg>
                          <span class="ml-3 text-xl" style="color:#ffffff; font-weight:700; font-size:28px;">Logo</span>
                        </a>
                        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        ${linksDiv}
                      </div>
                    </header>`;

          block.set('content', content);

          // console.log('block********', block.set('content', content));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //<! ----------Animation Function -------- !>
  //   const showanimation = async () =>{
  //     console.log("show animation called----->")
  //     const boxes = document.querySelectorAll('.boxes');
  //     // console.log("boxes",boxes)
  //     window.addEventListener('scroll',getboxes)

  // function getboxes (){
  //   const triggerBottom = window.innerHeight / 5 * 4;
  //   console.log("trggerBottom",triggerBottom)
  //   boxes?.forEach(box =>{
  //     const boxTop = box.getBoundingClientRect().top;
  //     console.log("boxTop",boxTop)
  //     if(boxTop < triggerBottom){
  //       box.classList.add('show');
  //     }else{
  //       box.classList.remove('show');
  //     }
  //   })
  // }

  //   }

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

    const ScrollPlugin = (
      editor: GrapesJS.Editor,
      options: GrapesJS.EditorConfig
    ) =>
      gjsScroll(editor, {
        ...options,
        blocks,
        showPanelsOnLoad: true,
        showGlobalStyles: false,
      });

    editor = GrapesJS.init({
      container: '.editor',
      fromElement: true,
      showDevices: false,
      // dragMode: 'absolute',
      style: `${canvasStyle}`,
      // canvasCss: localStorage.getItem('theme_style_css') || '',
      canvasCss: '.blocks: {display: grid;}',
      plugins: [ExperfyBlocks, backgroundPlugin, Basics, ScrollPlugin],
      pluginsOpts: {
        ExperfyBlocks: {},
        Basics: {},
        ScrollPlugin: {},
        Filtered: {},
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
      // {
      //   type: 'select',
      //   name: 'class',
      //   label: 'Button Size',
      //   // default: 'small',
      //   options: [
      //     { value: 'btn-extrasmall', name: 'Extra Small' },

      //     { value: 'btn-small', name: 'small' },
      //     { value: 'btn-medium', name: 'Medium' },
      //     { value: 'btn-large', name: 'Large' },
      //     { value: 'btn-extralarge', name: 'Extra Large' },
      //   ],
      // },
      // {
      //   type: 'select',
      //   name: 'class',
      //   label: 'Button Alignment',
      //   // default: 'btn-start',
      //   options: [
      //     { value: 'btn-start', name: 'Left' },
      //     { value: 'btn-center', name: 'Center' },
      //     { value: 'btn-right', name: 'Right' },
      //   ],
      // },
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
      // console.log('component Selection', component);
      //@ts-ignore
      if (component.ccid == 'GuidelineDiv') {
        component.append(`<div style=" padding: 0.75rem; margin: 0.75rem;">
   
  <h3 class="h3 guideline-bullet" style="height: 35px;border: 2px solid black; display: flex; width: 40px; justify-content: center;align-items: center;margin-right: 10px;border-radius: 80%;">1</h3>
  <h1 class="h1 bullet-heading" style="text-align:left;">Add Step Title</h1>

<h6 class="h6 bullet-sub-heading" style="text-align:left;padding: 10px; margin-top: 5px;">Add information in steps in
 order to explain what the user
 should do next
</h6>
</div>`);
      }
      //@ts-ignore
      if (component.ccid == 'Departmentdiv') {
        component.append(`
<div class="department-holder" style="padding: 0.75rem;margin: 0.75rem; ">
  <img class="image-department" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OC41NzYiIGhlaWdodD0iNzQuODg1IiB2aWV3Qm94PSIwIDAgNzguNTc2IDc0Ljg4NSI+DQogIDxnIGlkPSJaSkUyN0IudGlmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUuMjExIC0xMzQ2LjU2NikiPg0KICAgIDxnIGlkPSJHcm91cF81NDg1OCIgZGF0YS1uYW1lPSJHcm91cCA1NDg1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzNS4yMTEgMTM0Ni41NjYpIj4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzE3MDE4MyIgZGF0YS1uYW1lPSJQYXRoIDE3MDE4MyIgZD0iTS00OTYuMDI4LDEzNDYuNTY2YTIuODQsMi44NCwwLDAsMSwyLjc5NCwxLjc3NWMzLjM0Miw2LjgxNyw2LjcyMSwxMy42MTYsMTAuMDYzLDIwLjQzM2ExLjM4MywxLjM4MywwLDAsMCwxLjIuODg0YzcuNDM1LDEuMDU0LDE0Ljg2NSwyLjE1MSwyMi4zLDMuMjI0LDIuMTQ4LjMxLDMuMywxLjQ0MiwyLjk4NywzLjJhMy44LDMuOCwwLDAsMS0xLjA2MiwxLjg5MnEtOC4xNTEsOC4wMzgtMTYuMzgsMTZhMS4yNDIsMS4yNDIsMCwwLDAtLjQxOSwxLjI3MmMxLjMyNCw3LjU5NSwyLjYwOCwxNS4yLDMuOTEzLDIyLjhhMi43MTEsMi43MTEsMCwwLDEtMS4xLDIuODg2LDIuNzUzLDIuNzUzLDAsMCwxLTMuMDkyLjA5NXEtMTAuMTUzLTUuMzQ5LTIwLjMxMS0xMC42OTFhMS40LDEuNCwwLDAsMC0xLjUtLjAyMXEtMTAuMDY3LDUuMzI5LTIwLjE1OCwxMC42MTJhMy4wODQsMy4wODQsMCwwLDEtMi42NDIuMzUyLDIuNzE3LDIuNzE3LDAsMCwxLTEuNzU5LTMuMXExLjctMTAuMDQxLDMuNDI4LTIwLjA3NmMuMTYtLjkzNi4yNjMtMS44ODUuNDg4LTIuOGExLjI0NCwxLjI0NCwwLDAsMC0uNDI4LTEuMzVjLTUuMzU1LTUuMTkzLTEwLjY4My0xMC40MTQtMTYuMDQ0LTE1LjYtMS4wMTMtLjk4LTEuOC0yLTEuMzExLTMuNDc4LjUtMS41MywxLjgtMS44MiwzLjIwOS0yLjAyLDcuMzUtMS4wNCwxNC42OTMtMi4xMzYsMjIuMDQyLTMuMTgzYTEuMzIzLDEuMzIzLDAsMCwwLDEuMTQxLS44NDRjMy4zNTgtNi44NDEsNi43NDYtMTMuNjY4LDEwLjEtMjAuNTFBMi43NDcsMi43NDcsMCwwLDEtNDk2LjAyOCwxMzQ2LjU2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNS4yMTEgLTEzNDYuNTY2KSIgZmlsbD0iIzE1OTU3NiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo='/>

     <h1 class="h1 icon-department-heading" style="margin-top: 1.25rem; margin-bottom: 1.25rem; ">Department 1</h1>
     <h6 class="h6 icon-department-sub-heading">Lorem ipsum dolor sit amet. Est
        porro distinctio eum eius odit ea
        facere consequuntur.
     </h6>
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
            const initLib = function () {
              var swiper = new Swiper('.mySwiper', {
                spaceBetween: 30,
                centeredSlides: true,

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
            };
            initLib();
          },
        },
      },
      isComponent: (el) => {
        if (el.className && el.className.includes('swiper-container')) {
          return {
            type: 'testimonial',
          };
        }
      },
      // view: defaultView.extend({
      //   init({ model }) {
      //     this.listenTo(model, "change:dynamicProgress", this.updateScript);
      //     this.listenTo(model, "change:progressType", this.updateScript);
      //   },
      // }),
    });

    //Guideline Div Trait
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

    //@ts-ignore
    editor.on('style:property:update', (component) => {
      isChanged = true;
    });

    editor.on('load', () => {
      // showanimation();
      Filtered.forEach((element) => {
        console.log('Filtered element', element);
        const { category, id, sectionCode, sectionTitle } = element;

        editor.BlockManager.add(sectionTitle.replace(' ', '-'), {
          label: sectionTitle,
          category,
          // media:
          content: { ...JSON.parse(sectionCode) },
        });
      });

      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() },
          { styles: userData.defaultStyle.filteredStyles ?? null }
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

    //For Traits
    // editor.on('component:selected', (component) => {
    //   if (component) {
    //     console.log('component*******', component);
    //     let ccid = component.ccid.split('-')[0];
    //     console.log('ccidcxcxcccxcxc', ccid);
    //     const blocksector = editor.StyleManager.getSectors();
    //     // blocksector.reset();
    //     // blocksector.add(getSectors(''));
    //     console.log('blocksector$$$$$$$$$$$$$', blocksector);
    //     // blocksector.forEach((sector) => {
    //     //   // console.log('sector', sector);
    //     //   // sector?.id && editor.StyleManager.removeSector(sector.id);
    //     // });

    //     let newCcid = component?.attributes?.classes?.models?.map(
    //       (el) => el?.id
    //     );
    //     console.log('newCcid', newCcid);
    //     let updatedSectors = [];
    //     if (newCcid?.length > 0) {
    //       let test = newCcid.join('.');
    //       let allSectors = editor.StyleManager.getSectors();
    //       console.log('allSectors', allSectors);
    //       const allSectorsNames = allSectors.map((el) => el.name || el.id);
    //       // console.log('allSectorsNames', allSectorsNames);
    //       // console.log('test', test);
    //       newCcid.forEach((element) => {
    //         console.log('element', element);
    //         let sector = element.split('_');
    //         // console.log('sector name', sector);
    //         if (sector.length > 1) {
    //           // setTimeout(() => {
    //           let name = getSectors(element.split('_')[0]);

    //           console.log('name', name);
    //           let allSelectedNames = name.map((el) => el.id);
    //           console.log('allSectorsNames', allSectorsNames);
    //           console.log('allSelectedNames', allSelectedNames);
    //           // allSectors.forEach(el=> console.log("el",el.id))
    //           allSectors.forEach((sect, i) => {
    //             if (sect) {
    //               console.log('sect', sect?.id);
    //               const isInclude = allSelectedNames.includes(sect?.id);
    //               console.log('isInclude', isInclude);

    //               if (!isInclude) {
    //                 console.log('yesss');
    //                 let timers = (i + 1) * 30;
    //                 console.log('yesss');
    //                 sect.id &&
    //                   setTimeout(() => {
    //                     editor.StyleManager.removeSector(sect.id);
    //                   }, timers);

    //               }

    //             }
    //           });
    //           updatedSectors.push(name);
    //           // }, 100);
    //         }
    //       });
    //     } else {
    //       updatedSectors = getSectors(ccid);
    //       console.log('else', updatedSectors);
    //     }
    //     console.log('updatedSectors', updatedSectors);

    //     setTimeout(() => {
    //       console.log('setTimeout updatedSectors', updatedSectors);

    //       updatedSectors && updatedSectors.forEach((el) => blocksector.add(el));
    //     }, 50);

    //     // setTimeout(() => {
    //     //   let sm = editor.StyleManager;
    //     //   var selectedBlock = editor.getSelected();
    //     //   console.log('selectedBlock', selectedBlock);
    //     //   isUpdating = true;
    //     //   const sectors = sm.getSectors();
    //     //   for (let i = 0; i < sectors.length; i++) {
    //     //     const modelId = sectors.models[i].get('id');
    //     //     if (modelId === newCcid[1]) {
    //     //       let isOpen = sectors.models[i].isOpen();

    //     //       if (isOpen) {

    //     // setTimeout(() => {
    //     //   const wrapperCmp = editor.DomComponents.getWrapper();
    //     //   let found2 = wrapperCmp.find(`${newCcid[1]}`);

    //     //   console.log('found2', found2);
    //     //   editor.select(found2[0]);
    //     // }, 5000);
    //     //     }
    //     //   } else {
    //     //     sectors.models[i].setOpen(false);
    //     //   }
    //     // }

    //     // setTimeout(() => {
    //     //   isUpdating = false;
    //     // }, 300);
    //     // }, 3000);

    //     // !isUpdating &&
    //     // setTimeout(() => {
    //     //   let sm = editor.StyleManager;
    //     //   var selectedBlock = editor.getSelected();
    //     //   console.log('selectedBlock', selectedBlock);
    //     //   isUpdating = true;
    //     //   const sectors = sm.getSectors();
    //     //   for (let i = 0; i < sectors.length; i++) {
    //     //     const modelId = sectors.models[i].get('id');
    //     //     if (modelId === props.id) {
    //     //       let isOpen = sectors.models[i].isOpen();

    //     //       if (isOpen) {
    //     //         const wrapperCmp = editor.DomComponents.getWrapper();

    //     //         editor.select(wrapperCmp.find(`.${props.id}`)[0]);
    //     //       }
    //     //     } else {
    //     //       sectors.models[i].setOpen(false);
    //     //     }
    //     //   }

    //     //   setTimeout(() => {
    //     //     isUpdating = false;
    //     //   }, 300);
    //     // }, 100);

    //     // console.log('blocksector new', blocksector.add(getSectors(ccid)));
    //   }
    //   let type = component.get('type');
    //   const { id } = component.attributes.attributes;
    //   if (component.get('type') == 'text') {
    //     editor?.runCommand('core:open-traits');
    //   }
    //   if (component.get('type') == 'button') {
    //     editor?.runCommand('core:open-traits');
    //   }

    //   // if (isChanged) {
    //   //   saveHistoy();
    //   // }
    // });

    editor.on('component:selected', (component) => {
      if (component) {
        // console.log('component*******', component);
        let ccid = component.ccid.split('-')[0];
        // console.log('ccidcxcxcccxcxc', ccid);
        const blocksector = editor.StyleManager.getSectors();
        console.log('blocksector', blocksector);
        // blocksector.reset();
        // blocksector.add(getSectors(''));
        // console.log('blocksector$$$$$$$$$$$$$', blocksector);
        // blocksector.forEach((sector) => {
        //   // console.log('sector', sector);
        //   // sector?.id && editor.StyleManager.removeSector(sector.id);
        // });
        let newCcid = component?.attributes?.classes?.models?.map(
          (el) => el?.id
        );
        // console.log('newCcid', newCcid);
        let updatedSectors = [];
        if (newCcid?.length > 0) {
          let test = newCcid.join('.');
          let allSectors = editor.StyleManager.getSectors();
          console.log('allSectors', allSectors);
          const allSectorsNames = allSectors.map((el) => el.name || el.id);
          // console.log('allSectorsNames', allSectorsNames);
          // console.log('test', test);
          newCcid.forEach((element) => {
            console.log('element', element);
            let sector = element.split('_');
            console.log('sector name', sector);
            if (sector.length > 1) {
              // setTimeout(() => {
              let name = getSectors(element.split('_')[0]);
              console.log('name', name);
              let allSelectedNames = name.map((el) => el.id);
              console.log('allSectorsNames', allSectorsNames);
              console.log('allSelectedNames', allSelectedNames);
              // allSectors.forEach(el=> console.log("el",el.id))
              allSectors.forEach((sect, i) => {
                if (sect) {
                  console.log('sect', sect?.id);
                  const isInclude = allSelectedNames.includes(sect?.id);
                  console.log('isInclude', isInclude);
                  if (!isInclude) {
                    console.log('yesss');
                    let timers = (i + 1) * 30;
                    console.log('yesss');
                    sect.id &&
                      setTimeout(() => {
                        editor.StyleManager.removeSector(sect.id);
                      }, timers);
                  }
                }
              });
              updatedSectors.push(name);
              // }, 100);
            }
          });
        } else {
          // blocksector.add(getSectors(ccid));
          updatedSectors = getSectors(ccid);
          // console.log('else', updatedSectors);
        }
        // console.log('updatedSectors', updatedSectors);
        setTimeout(() => {
          console.log('setTimeout updatedSectors', updatedSectors);
          updatedSectors && updatedSectors.forEach((el) => blocksector.add(el));
        }, 500);
      }
      let type = component.get('type');
      const { id } = component.attributes.attributes;
      if (component.get('type') == 'text') {
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'button') {
        editor?.runCommand('core:open-traits');
      }
      // if (isChanged) {
      //   saveHistoy();
      // }
    });

    //This is for all section templates Style Manager

    editor.on(`block:drag:stop`, (component, block) => {
      let { data, found, filtering } = fetchSectionDetail(block.id);
      // console.log('found', found, filtering, data);
      const { sectionCode, category } = filtering;

      //Updated
      if (component && found) {
        let content = JSON.parse(sectionCode);
        editor.loadProjectData({
          ...Object.assign({ ...editor.getProjectData() }, { ...content }),
        });

        const sectorId =
          content.pages[0].frames[0].component.components[0].attributes.id;
        // console.log('sectorIsd', sectorId);
        const blocksector = editor.StyleManager.getSectors();
        blocksector.reset();
        blocksector.add(getSectors(sectorId));
      }
      if (component && !found) {
        console.log('editor.getProjectData', editor.getProjectData());
        let ccid = component.ccid.split('-')[0];
        // console.log('ccid', ccid);
        const blocksector = editor.StyleManager.getSectors();

        blocksector.reset();

        blocksector.add(getSectors(ccid));
      }
      //Custom
      // if (component === null) {
      //   const blocksector = editor.StyleManager.getSectors();
      //   const { content } = block.attributes;
      //   editor.loadProjectData({ ...content });
      //   console.log("  editor.loadProjectData({ ...content });",  editor.loadProjectData({ ...content }))
      //   console.log('content.pages[0]', content.pages[0]);
      //   const sectorId =
      //     content.pages[0].frames[0].component.components[0].attributes.id;
      //   console.log('sectorId', sectorId);
      //   blocksector.reset();
      //   blocksector.add(getSectors(sectorId));
      // }
    });

    //@ts-ignore

    // @ts-ignore
    editor.on('style:sector:update', (props) => {
      // console.log('props', props);
      // console.log("props.id",props.id)
      !isUpdating &&
        setTimeout(() => {
          // console.log("Isupading in Timeout", isUpdating)
          const sectors = editor.StyleManager.getSectors();
          var selectedBlock = editor.getSelected();
          // console.log('selectedBlock', selectedBlock);
          isUpdating = true;
          for (let i = 0; i < sectors.length; i++) {
            const modelId = sectors.models[i].get('id');
            // console.log("MOdel ID",modelId)

            if (modelId == props.id) {
              let isOpen = sectors.models[i].isOpen();

              if (isOpen) {
                const wrapperCmp = editor.DomComponents.getWrapper();

                editor.select(wrapperCmp.find(`.${props.id}`)[0]);
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
    editor.on('style:target', (component) => {
      console.log('style sector called');
      const sectors = editor.StyleManager.getSectors();
      // console.log('target sector************8', sectors);
      let newCcid = component?.attributes?.selectors?.models?.map(
        (el) => el?.id
      );
      if (!component) return;

      !isUpdating &&
        setTimeout(() => {
          isUpdating = true;

          const selectedSector = component
            .getSelectorsString()
            .replace('.', '');
          // console.log('selectedSector', selectedSector);

          for (let i = 0; i < sectors.length; i++) {
            // console.log(
            //   "sectors.models[i].get('id')",
            //   sectors.models[i].get('id')
            // );
            if (selectedSector.includes(sectors.models[i].get('id'))) {
              console.log('mateched successfully');
              sectors.models[i].setOpen(true);
            } else {
              sectors.models[i].setOpen(false);
            }
          }

          setTimeout(() => {
            isUpdating = false;
          }, 300);
        }, 500);
    });
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
  // useEffect(() => {
  //   const updateHistory = setTimeout(() => {
  //     if (changeHistory) {
  //       // saveHistoy();
  //       setChangeHistory(false); // reset the flag beacue again tracking updation
  //     }
  //   }, 30000);
  //   return () => clearTimeout(updateHistory);
  // }, [changeHistory]);

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
