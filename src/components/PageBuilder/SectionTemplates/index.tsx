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
import { useAuth, useConfig } from 'payload/components/utilities';
import { UserContext } from '../../../Providers/UserProvider';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import SidebarBottom from '../SidebarBottom';
import { canvasStyle, devices } from '../utils';
import backgroundPlugin from 'grapesjs-style-gradient';
import Basics from 'grapesjs-blocks-basic';
import 'grapick/dist/grapick.min.css';
import { Context } from '../../../Providers/MyProvider';
import { DataContext } from '../../../Providers/DataProvider';
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
  const { fetchSectionDetail } = useContext(DataContext);
  const { setSectionBlocksArray } = useContext(Context);
  const [filtered, setFiltered] = useState('');
  const [modelIsOPen, setModelIsOPen] = useState(false);
  const [name, setName] = useState('');
  const { user } = useAuth();

  // let sectionData = {
  //   isUpdate: false,
  // };

  let shouldUpdate = false;

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

  const basicElements = [
    'text',
    'paragraph-1',
    'button',
    'divider',
    'spacer',
    'image',
    'icon',
    'icon-list',
    'link',
  ];

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
  // console.log('IsInclude', isInclude);

  let blocks = isInclude ? [str] : basicElements;
  let custom = 'Custom Modules';
  let sectcatgy = 'Section Modules';

  //Save the Section
  const saveSectionTemplate = () => {
    // console.log('sectionData', window?.sectionData);

    if (window?.sectionData?.isUpdate) {
      axios
        .patch(`${apiEndpoint}/section-save/${window?.sectionData?.id}`, {
          user: user.id,
          sectionTitle: str,
          category: sectcatgy,
          sectionCode: JSON.stringify(editor.getProjectData()),
          sectionHtml: editor.getHtml(),
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
          user: user.id,
          sectionTitle: str,
          category: sectcatgy,
          sectionCode: JSON.stringify(editor.getProjectData()),
          sectionHtml: editor.getHtml(),
        })
        .then((res) => {
          toast.success('Section Created Successfully');
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  };

  const handleScratchSave = (e) => {
    // console.log('editor.getHtml()', editor.getHtml());
    if (name) {
      axios
        .post(`${apiEndpoint}/section-save`, {
          sectionTitle: name,
          category: custom,
          media: `<svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z"></path>
        </svg>`,
          sectionCode: JSON.stringify(editor.getProjectData()),
          sectionHtml: editor.getHtml(),
          // sectionCss: editor.getCss(),
        })
        .then((res) => {
          console.log("custom response",res)
          toast.success('Section Created Successfully');
          window.location.reload(true);
        })

        .catch((err) => {
          console.log('err', err);
        });
    } else {
      toast.error('Please Enter the Section Name');
    }
  };

  let themeStylePanels = true;

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
      plugins: [Blocks, backgroundPlugin, Basics],
      pluginsOpts: {
        Basics: {},
        Blocks: {},
      },

      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
      commands: {
        defaults: [
          {
            id: 'save-editor',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              if (isInclude) {
                saveSectionTemplate();
              } else {
                setModelIsOPen(true);
              }
            },
          },
          {
            id: 'preview',
            hidden: false,
            run(editor: { store: () => GrapesJS.Editor }) {
              console.log('animation called');
            },
          },
        ],
      },
      layerManager: null,
      traitManager: {
        appendTo: '.panel__switcher',
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: getSectors(blocks.toLocaleString()),
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
      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() }
          // { styles: userData.defaultStyle.filteredStyles }
        ),
      });
    });
    //This is for Single Section
    editor.onReady(() => {
      let { data, found, filtering } = fetchSectionDetail(str);
      // console.log('data, found,filtering', data, found);
      if (found) {
        const { sectionCode, sectionTitle } = filtering;
        window.sectionData = { ...filtering, isUpdate: true };

        const blo = editor.BlockManager.getAll();
        // console.log('blo', blo);

        const filtered = blo.filter((block) => block.id === sectionTitle);
        // console.log('filtered', filtered);

        const sectors = editor.StyleManager.getSectors();
        // console.log('sectors', sectors);
        const block = editor.BlockManager.get(filtered[0]);
        // console.log('block', block);
        const component = editor.addComponents(block.get('content'));
        // console.log('component', component);
        component[0].set('selectable', false);
        component[0].set('removable', false);
        component[0].set('stylable', true);
        component[0].set('copyable', false);
        component[0].set('layerable', false);
        component[0].set('draggable', false);
        editor.select(component[0]);
        sectors.reset();
        editor.loadProjectData({
          ...Object.assign({}, { ...JSON.parse(sectionCode) }),
        });
        // console.log('component[0].getId()', component[0].getId());
        sectors.add(getSectors(component[0].getId()));
        //@ts-ignore
        editor.runCommand('core:open-styles');
      } else if (blocks.length === 1 && !found) {
        window.sectionData = { ...filtering, isUpdate: false };
        const sectors = editor.StyleManager.getSectors();
        // console.log('sectors', sectors);
        const block = editor.BlockManager.get(blocks[0]);
        // console.log('block', block);
        const component = editor.addComponents(block.get('content'));
        // console.log(' block component', component[0]?.attributes?.attributes?.sect);
        let selectedComponent = component[0]?.attributes?.attributes?.sect;
        component[0].set('selectable', false);
        component[0].set('removable', false);
        component[0].set('stylable', true);
        component[0].set('copyable', false);
        component[0].set('layerable', false);
        component[0].set('draggable', false);
        editor.select(component[0]);
        sectors.reset();

        sectors.add(getSectors(selectedComponent));
        //@ts-ignore
        userData?.defaultStyle?.filteredStyles?.forEach((el) => {
          const { selectors, style } = el;

          let element = el?.state ? `${selectors}:${el.state}` : `${selectors}`;

          editor.CssComposer.setRule(element, { ...style });

          editor.select(component[0]);
        });
        editor.runCommand('core:open-styles');
      } else {
      }
    });

    //This is for all section templates Style Manager
    // editor.on(`block:drag:stop`, (component, block) => {
    //   console.log('component', component);
    //   if (component) {
    //     console.log('drag component', component.attributes.attributes.sect);
    //     let sectId = component.attributes.attributes.sect;
    //     const sectors = editor.StyleManager.getSectors();
    //     sectors.reset();
    //     sectors.add(getSectors(sectId));

    //     const wrapperCmp = editor.DomComponents.getWrapper();

    //     editor.select(wrapperCmp.find(`#${component.ccid}`)[0]);
    //   }




      
    // });

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
        console.log('target', target);
        let found = wrapperCmp.find(target);
        console.log('found', found);
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

    editor.on('run:core:component-delete:before', (options) => {
      options.abort = true;
    });

    let TextTrait = [
      {
        name: 'text',
        label: 'Text',
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
          console.log('comps', comps);

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

    // Image  Trait
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
      if (component.ccid == 'testimonial') {
        component.append(`
      <div class="swiper-slide">
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
        },
      },
      isComponent: (el) => {
        if (el?.className && el?.className?.includes('swiper-container')) {
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
            <div style=" justify-content: center;display:flex;align-items:center;width:45px; height:45px;margin:auto" class='box-icon-div'>
             <img src='' />
            </div>
            <div style="color:#101010;font-weight:600;font-size:14px;"class='box-text-div'>
              <p>${name}</p>
            </div>
          </div>`);
        }
      } else {
        let { id } = target;
        id = id.replace('-', ' ');
        let index = component.getTraitIndex(id);
        let trait = component.getTrait(id);

        console.log('trait', trait);
        console.log('index', index);
        console.log('component.getChildAt(index)', component.getChildAt(index));
        if (index > 0) {
          component.getChildAt(index).remove();
        } else {
          component.getChildAt(0).remove();
        }
        // component.findType(defaultValue)?.remove()
      }
    };

    let dataArray = [
      {
        name: 'AI & Machine Learning',
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
        name: 'Software/Web Development',
        type: 'Software-Web-Development',
      },
      {
        name: 'QA',
        type: 'QA',
      },
      {
        name: 'UX/UI Design',
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

    // @ts-ignore
    // editor.on('style:sector:update', (props) => {
    //   console.log('style:sector:update', props);
    //   // !isUpdating &&
    //   setTimeout(() => {
    //     let sm = editor.StyleManager;
    //     isUpdating = true;
    //     const sectors = sm.getSectors();
    //     for (let i = 0; i < sectors.length; i++) {
    //       const modelId = sectors.models[i].get('id');
    //       console.log('selected modelId', modelId);
    //       const wrapperCmp = editor.DomComponents.getWrapper();
    //       if (props.id.includes(modelId)) {
    //         // console.log("yes")
    //         let isOpen = sectors.models[i].isOpen();
    //         //  console.log("isOpen",isOpen)
    //         console.log('props.id', props.id);

    //         shouldUpdate = true;
    //         setTimeout(() => {
    //           shouldUpdate &&
    //             editor.select(wrapperCmp.find(`[sectid=${props.id}]`)[0]);
    //             shouldUpdate = false
    //         }, 1000);
    //         if (isOpen) {
    //           console.log(
    //             'wrapper component',
    //             wrapperCmp.find(`${props.id}`[0])
    //           );
    //           editor.select(wrapperCmp.find(`.${props.id}`)[0]);
    //           // const wrapperCmp = editor.DomComponents.getWrapper();
    //           // console.log('wrapperCmp.find(`#${component.ccid}`)', wrapperCmp.find(`#${component.ccid}`))
    //           // editor.select(wrapperCmp.find(`#${component.ccid}`)[0]);
    //         }
    //       } else {
    //         sectors.models[i].setOpen(false);
    //       }
    //     }

    //     setTimeout(() => {
    //       isUpdating = false;
    //     }, 300);
    //   }, 100);
    // });

    // //@ts-ignore
    // editor.on('style:target', (component) => {
    //   console.log('Section target component', component);
    //   if (!component) return;

    //   !isUpdating &&
    //     setTimeout(() => {
    //       isUpdating = true;

    //       const selectedSector = component.attributes?.attributes?.sectid;
    //       console.log('selectedSector', selectedSector);
    //       const sectors = editor.StyleManager.getSectors();
    //       console.log('sectors', sectors);
    //       // for (let i = 0; i < sectors.length; i++) {
    //       //   console.log(
    //       //     'sectors.models[i].get(id)',
    //       //     sectors.models[i].get('id')
    //       //   );
    //       //   if (selectedSector.includes(sectors.models[i].get('id'))) {
    //       //     sectors.models[i].setOpen(true);
    //       //   } else {
    //       //     sectors.models[i].setOpen(false);
    //       //   }
    //       // }

    //       setTimeout(() => {
    //         isUpdating = false;
    //       }, 300);
    //     }, 100);
    // });

    editor.on('component:selected', (component) => {
      console.log('filteredStyles', userData?.defaultStyle?.filteredStyles);
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
        console.log('cmp', cmp)

        const wrapperCmp = editor.DomComponents.getWrapper();
        let target = `#${component.ccid}`;
        let found = wrapperCmp.find(target)
        console.log('found', found)
        editor.select(wrapperCmp.find(target)[0]);
      }
      console.log('section selected', component);
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
        // console.log('sectid', sectid);
        //ccid
        let sectId = component.attributes.attributes.sect;
        // console.log('selected sectId', sectId);
        let sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(sectId));
        for (let i = 0; i < sectors.length; i++) {
          // console.log('sectors.models[i].get', sectors.models[i].get('id'));
          if (sectid.includes(sectors.models[i].get('id'))) {
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
      if (component.get('type') == 'map') {
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

    // editor.on('component:selected', (component) => {
    //   console.log('component selected', component?.ccid);

    //   let ccid = component.ccid.split('-')[0];
    //   console.log('editor', editor);
    //   console.log('ccid', ccid);

    //   if (component.get('type') == 'text') {
    //     //@ts-ignore
    //     editor?.runCommand('core:open-traits');
    //   }
    //   if (component.get('type') == 'button') {
    //     //@ts-ignore
    //     editor?.runCommand('core:open-traits');
    //   }
    //   if (component.get('type') == 'image') {
    //     //@ts-ignore
    //     editor?.runCommand('core:open-traits');
    //   }

    //   if (component && ccid ) {
    //     const sectors = editor.StyleManager.getSectors();
    //     console.log("sectors",sectors)

    //     // sectors.reset();
    //     sectors.add(getSectors(component.ccid));
    //   }

    //   // [
    //   //   'general',
    //   //   'flex',
    //   //   'dimension',
    //   //   'typography',
    //   //   'decorations',
    //   //   'extra',
    //   // ].map((el) => {
    //   //   // editor.StyleManager.getSector(el).set('open', false)
    //   //   editor.StyleManager.addSector(el, {
    //   //     name: el,
    //   //     open: false,
    //   //   });
    //   // });
    // });

    // editor.on('component:selected', (component) => {
    //   console.log('section selected', component);

    //   userData?.defaultStyle?.filteredStyles?.forEach((el) => {
    //     const { selectors, style } = el;

    //     let element = el?.state ? `${selectors}:${el.state}` : `${selectors}`;

    //     editor.CssComposer.setRule(element, { ...style });
    //   })

    //   if (component) {
    //     const sectid = component.attributes?.attributes?.sectid;

    //     // let ccid = component.sectId.split('-')[0];
    //     let sectId = component.attributes.attributes.sect;
    //     console.log('sectId', sectId);
    //     console.log('blocksector compoentn', component);
    //     const blocksector = editor.StyleManager.getSectors();
    //     blocksector.reset();
    //     console.log('blocksector', blocksector);
    //     let newCcid = component?.attributes?.classes?.models?.map(
    //       (el) => el?.id
    //     );
    //     let updatedSectors = [];
    //     if (newCcid?.length > 0) {
    //       let test = newCcid.join('.');
    //       let allSectors = editor.StyleManager.getSectors();
    //       console.log('allSectors', allSectors);
    //       const allSectorsNames = allSectors.map((el) => el.name || el.id);

    //       newCcid.forEach((element) => {
    //         console.log('element', element);
    //         let sector = element.split('_');
    //         console.log('sector name', sector);
    //         if (sector.length > 1) {
    //           let name = getSectors(element.split('_')[0]);
    //           console.log('name', name);
    //           let allSelectedNames = name.map((el) => el.id);
    //           console.log('allSectorsNames', allSectorsNames);
    //           console.log('allSelectedNames', allSelectedNames);
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
    //         }
    //       });
    //     } else {
    //       updatedSectors = getSectors(sectId);
    //     }

    //     const sectors = editor.StyleManager.getSectors();
    //     console.log('sectors', sectors);
    //     for (let i = 0; i < sectors.length; i++) {
    //       console.log('sectors.models[i].get(id)', sectors.models[i].get('id'));
    //       if (sectid.includes(sectors.models[i].get('id'))) {
    //         sectors.models[i].setOpen(true);
    //       } else {
    //         sectors.models[i].setOpen(false);
    //       }
    //     }

    //     setTimeout(() => {
    //       console.log('setTimeout updatedSectors', updatedSectors);
    //       updatedSectors && updatedSectors.forEach((el) => blocksector.add(el));
    //       const wrapperCmp = editor.DomComponents.getWrapper();
    //       console.log(
    //         'wrapperCmp.find(`#${component.ccid}`)',
    //         wrapperCmp.find(`#${component.ccid}`)
    //       );

    //       editor.select(wrapperCmp.find(`#${component.ccid}`)[0]);

    //       for (let i = 0; i < sectors.length; i++) {
    //         console.log(
    //           'sectors.models[i].get(id)',
    //           sectors.models[i].get('id')
    //         );
    //         if (sectid.includes(sectors.models[i].get('id'))) {
    //           sectors.models[i].setOpen(true);
    //         } else {
    //           sectors.models[i].setOpen(false);
    //         }
    //       }
    //     }, 500);
    //   }
    //   let type = component.get('type');
    //   const { id } = component.attributes.attributes;
    //   if (component.get('type') == 'text') {
    //     editor?.runCommand('core:open-traits');
    //   }
    //   if (component.get('type') == 'button') {
    //     editor?.runCommand('core:open-traits');
    //   }
    // });

    // getCurrentBlock();
    addAssets();
    updateHeaderBlock();
    setEditor(editor);
  };

  useEffect(() => {
    initializeInstance();
  }, []);
  return (
    <>
      <SectionModel
        modelIsOPen={modelIsOPen}
        setName={setName}
        handleScratchSave={handleScratchSave}
      />
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
                <SidebarBottom editor={editor} hasBottomToolbar={false} />{' '}
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
