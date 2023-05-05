/* eslint-disable no-undef */
import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Experfy from '../ExperfyPlugin';
import { getSectors } from '../ExperfyPlugin/blocks/getSectors';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import { UserContext } from '../../../Providers/UserProvider';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import SidebarBottom from '../SidebarBottom';
import { canvasStyle, devices } from '../utils';
import backgroundPlugin from 'grapesjs-style-bg';
import Basics from 'grapesjs-blocks-basic';

import Forms from 'grapesjs-plugin-forms';

import 'grapick/dist/grapick.min.css';

import { Context } from '../../../Providers/MyProvider';
import { toast } from 'react-toastify';
import SectionModel from './SectionModel';

const SectionPageBuilder: React.FC = () => {
  let [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  const { pathname } = useLocation();
  const { serverURL } = useConfig();
  const { routes } = useConfig();
  const { admin } = routes;
  const { userData } = useContext(UserContext);
  const { setSectionBlocksArray } = useContext(Context);
  const [filtered ,  setFiltered] = useState("");
  const [modelIsOPen, setModelIsOPen] = useState(false);
  const [name,setName] = useState("");


  let sectionData = {
    isUpdate: false,
  };

 
  var isUpdating = false;
  const sections = [
    'page-builder',
    'header',
    'footer',
    'image-banner',
    'image-gallery',
    'image-and-text',
    'paragraph',
    'practice-areas',
    'benefits',
    // 'departments',
    'guidelines',
    'location',
    'metrics-numbers',
    'talent-cloud-candidates',
    'testimonial',
    'video',
    'department',
    'photo-gallery',
    'jobs',
    // 'swiper',
  ];


const basicElements=[
  'text',
  'paragraph-1',
  'button',
  'divider',
   'spacer',
   'image',
   'icon',
   'icon-list',


]














  let showSections = true;
  const apiEndpoint = `${serverURL}/api`;

  //==================methods start====================
  const convertToString = (data) => {
    return JSON.stringify(data);
  };
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
            return (linksDiv += `<a href="${href}" class="a mr-5" style="margin: 0px 20px;">${label}</a>`);
          });

          let content = `
                           <header id="headerSector" class="header-container headerSector">
   <div class="header-gym" style="padding:1.5rem 2rem; display:flex; justify-content:space-between; align-items:center;">
   
   
   <a  class="a" style="display: flex;
   justify-content: center;
   gap: 20px;
   align-items: center;">
   <img  class="header-svg" src="data:image/svg+xml;base64,PHN2ZyBpZD0ibm91bi1sb2dvLTIxMjE0MzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMzLjAyMSIgaGVpZ2h0PSIzOC4wNTIiIHZpZXdCb3g9IjAgMCAzMy4wMjEgMzguMDUyIj4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk3IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk3IiBkPSJNMTUyLjA5LDMxLjk1MywxNjguNiw0MS41VjYwLjQ1OUwxNTIuMDksNzBsLTE2LjUxLTkuNTQ1VjQxLjVabTAsNS40MTcsNS45MzMsMy4zNTQsNS45MzMsMy40ODNWNTcuODc5bC01LjkzMywzLjM1NC01LjkzMywzLjQ4My01LjkzMy0zLjQ4My01LjkzMy0zLjM1NFY0NC4yMDZsNS45MzMtMy40ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1LjU4IC0zMS45NTMpIiBmaWxsPSIjNTBhZTgxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk4IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk4IiBkPSJNMjIyLjA5MywxMTkuNTI2bDUuMTU5LDIuOTY3LDUuMDMsMi45NjcuMjU4LjEyOXYxMi4yNTRsLS4yNTguMTI5LTUuMDMsMi45NjctNS4xNTksMi45NjctLjEyOS4xMjktLjI1OC0uMTI5LTUuMTU5LTIuOTY3LTUuMDMtMi45NjctLjI1OC0uMTI5VjEyNS41ODhsLjI1OC0uMTI5LDUuMDMtMi45NjcsNS4xNTktMi45NjcuMjU4LS4xMjlabTQuNjQzLDMuNzQxLTQuNzcyLTIuODM4LTkuOCw1LjY3NXYxMS4yMjFsOS44LDUuNjc1LDQuNzcyLTIuODM4LDQuOS0yLjgzOFYxMjYuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDUuNDUzIC0xMTIuNjg5KSIgZmlsbD0iIzUwYWU4MSIvPg0KPC9zdmc+DQo=" id="gjs_img_preview_logo_rtl"/>
     <span class="header-logo-text header-bg">Logo</span>
   </a>
   <nav class="header-navabr">
   ${linksDiv}

 
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



  

  let arr = pathname.split('/');

  let str = arr[arr.length - 1];

  let isInclude = sections.includes(str);
  console.log("IsInclude",isInclude);

  let blocks = isInclude ? [str] : basicElements;

 
  //Save the Section
  const saveSectionTemplate = () => {
    if (sectionData.isUpdate) {
      axios
        .patch(`${apiEndpoint}/section-save/${sectionData?.id}`, {
          sectionTitle: str,
          sectionCode: JSON.stringify(editor.getProjectData()),
        })
        .then((res) => {
          toast.success('Section Updated Successfully');
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      axios
        .post(`${apiEndpoint}/section-save`, {
          sectionTitle: str,
          sectionCode: JSON.stringify(editor.getProjectData()),
        })
        .then((res) => {
          toast.success('Section Created Successfully');
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  };



  const handleScratchSave = ()=>{
    axios
    .post(`${apiEndpoint}/section-save`, {
      sectionTitle: name,
      sectionCode: JSON.stringify(editor.getProjectData()),
    })
    .then((res) => {
      toast.success('Section Created Successfully');
      window.location.reload(true); 
     })

    .catch((err) => {
      console.log('err', err);
    });
  }


  //Fetch Section Data from Backend
  const getData = () => {
    axios
      .get(`${apiEndpoint}/section-save`)
      .then((res) => {
        let arr = pathname.split('/');
        let str = arr[arr.length - 1];
        const filtered = res.data.docs.filter((el) => el.sectionTitle === str);
        console.log("old filtered",filtered)
        setFiltered(filtered.sectionTitle);
     
        if (filtered.length > 0) {
          sectionData = { ...filtered[0], isUpdate: true };
          const { sectionCode } = filtered[0];
          editor.loadProjectData({
            ...Object.assign({}, { ...JSON.parse(sectionCode) }),
          });
        } 
      })
      .catch((err) => {
        console.log('err', err);
      });
  };


let themeStylePanels= true;

  //Initialize the Instance
  const initializeInstance = () => {
    const Blocks = (editor: GrapesJS.Editor, options: any) =>
      Experfy(editor, {
        ...options,
        blocks: blocks,
        showPanelsOnLoad: true,
        showElements: sections.includes(str),
      });

    editor = GrapesJS.init({
      container: '#sections',
      storageManager: {
        type: 'none',
        autoload: false,
      },
      showOffsets: true,
      showDevices: false,
      showOffsetsSelected: true,
      style: canvasStyle,
      plugins: [Blocks, backgroundPlugin,
        Basics,
      
      
      
      
      
      
      
      ],
      pluginsOpts:{
        Basics:{},
        Blocks:{},
      },


  
    

      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
      commands: {
        defaults: [
          {
            id: 'save-editor',
            name: sectionData?.isUpdate ? 'Update' : 'Save',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              if(isInclude){
                saveSectionTemplate();
              }
              else{
                // prompt("Enter Section Name")
                setModelIsOPen(true);

              }
              
            },
          },
        ],
      },
      layerManager: null,
      traitManager: {
        appendTo: '.traits-container',
      },
      selectorManager: {},
      styleManager: {
        appendTo: '.styles-container',
        sectors: getSectors(blocks),
      },
      deviceManager: {
        devices,
      },
      canvas: {
        styles: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'],
        scripts: ['https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js'],
      },
    });

    localStorage.removeItem('gjsProject');
    editor.on('load', () => {
      if (sectionData.isUpdate) {
        getData();
      } else {
        editor.loadProjectData({
          ...Object.assign(
            {},
            { ...editor.getProjectData() },
            { styles: userData.defaultStyle.filteredStyles }
          ),
        }); 
      }
    });
    //This is for Single Section
    editor.onReady(() => {
      if (blocks.length === 1) {
        const sectors = editor.StyleManager.getSectors();
        const block = editor.BlockManager.get(blocks[0]);
        const component = editor.addComponents(block.get('content'));
        component[0].set('selectable', false);
        component[0].set('removable', false);
        component[0].set('stylable', true);
        component[0].set('copyable', false);
        component[0].set('layerable', false);
        component[0].set('draggable', false);
        editor.select(component[0]);
        sectors.reset();
        sectors.add(getSectors(component[0].getId()));
        //@ts-ignore
        editor.runCommand('core:open-styles');
      } else {
        //@ts-ignore
        editor?.runCommand('core:open-blocks');
      }
    });

    //This is for all section templates Style Manager
    editor.on(`block:drag:stop`, (component, block) => {
      console.log('ccid', component);
      if (component) {
        const sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(component.ccid));
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
          console.log('Text comps', comps);
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
          console.log('Old tChild', tChild);
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
      console.log('component Selection', component);
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
        console.log('target', target);
        console.log('wrapperCmp.find(target)', wrapperCmp.find(target));
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
              var swiper = new Swiper('.mySwiper', {
                spaceBetween: 30,
                centeredSlides: true,
                
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
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
              console.log('swiper :>> ', swiper);
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

    // @ts-ignore
    editor.on('style:sector:update', (props) => {
      console.log('props', props);
      !isUpdating &&
        setTimeout(() => {
          let sm = editor.StyleManager;
          var selectedBlock = editor.getSelected();
          isUpdating = true;
          const sectors = sm.getSectors();
          for (let i = 0; i < sectors.length; i++) {
            const modelId = sectors.models[i].get('id');
            if (modelId === props.id) {
              console.log('props id', props.id);
              let isOpen = sectors.models[i].isOpen();
              console.log('isOpen', isOpen);
              if (isOpen) {
                const wrapperCmp = editor.DomComponents.getWrapper();
                console.log(
                  'wrapperCmp.find(`.${props.id}`)[0]',
                  wrapperCmp.find(`.${props.id}`)[0]
                );
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

      const categories = editor.StyleManager.getSectors();
    });

    //@ts-ignore
    editor.on('style:target', (component) => {
      if (!component) return;

      !isUpdating &&
        setTimeout(() => {
          isUpdating = true;

          const selectedSector = component
            .getSelectorsString()
            .replace('.', '');
          console.log('selectedSector', selectedSector);
          console.log(
            'component.getSelectorsString()',
            component.getSelectorsString()
          );
          const sectors = editor.StyleManager.getSectors();
          console.log('sectors', sectors);
          for (let i = 0; i < sectors.length; i++) {
            if (selectedSector.includes(sectors.models[i].get('id'))) {
              sectors.models[i].setOpen(true);
            } else {
              sectors.models[i].setOpen(false);
            }
          }

          setTimeout(() => {
            isUpdating = false;
          }, 300);
        }, 100);
    });

    editor.on('component:selected', (component) => {
      if (component.get('type') == 'text') {
        //@ts-ignore
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'button') {
        //@ts-ignore
        editor?.runCommand('core:open-traits');
      }
      if (component.get('type') == 'image') {
        //@ts-ignore
        editor?.runCommand('core:open-traits');
      }
    });

    editor.on('component:update', (component) => {
      console.log('component update called', component);
    });

    // getCurrentBlock();
    addAssets();
    updateHeaderBlock();
    setEditor(editor);
  };

  useEffect(() => {
    initializeInstance();
  }, []);
  return (<>
  <SectionModel modelIsOPen={modelIsOPen} setName ={setName} handleScratchSave ={handleScratchSave} />
    <div className="main__content main__content__editor">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row fixed-toolbar">
        <div className="panel__basic-actions"></div>
        <div className="panel__left bottom-controls">
          <div className="back__panel panel-header">
            <Link
              className="panel-header__link"
              to={`${admin}/collections/templates-library`}
            >
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <span>{`${str} Module`}</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
          </div>
          <div className="panel-body has-bottom-controls">
            <div className="panel-body__inner">
              <div className="panel-body__content">
                <div className="panel__switcher"></div>
                <div className="styles-container"></div>
                <div className="traits-container"></div>
                <div className="layers-container"></div>
              </div>
              <SidebarBottom editor={editor} hasBottomToolbar={true} />{' '}
              {/*  this warning is stylable. work is in progress*/}
            </div>
          </div>
        </div>
        <div className="editor-canvas">
          <div id="sections"></div>
        </div>
      </div>
    </div>
    </>
  );
};
export default SectionPageBuilder;
