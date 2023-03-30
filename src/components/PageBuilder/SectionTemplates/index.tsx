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
import { headerstyle } from '../ExperfyPlugin/style';
import backgroundPlugin from 'grapesjs-style-bg';
// import 'grapesjs/dist/css/grapes.min.css';
import 'grapick/dist/grapick.min.css';

const SectionPageBuilder: React.FC = () => {
  let [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  const { pathname } = useLocation();
  const { serverURL } = useConfig();
  const { routes } = useConfig();
  const { admin } = routes;
  const { userData } = useContext(UserContext);
  const [ccid, setccid] = useState(null);
  var isUpdating = false;
  var isTrait = false;
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
    'departments',
    'guidelines',
    'location',
    'metrics-numbers',
    'talent-cloud-candidates',
    'testimonial',
    'video',
    'department',
  ];
  let showSections = true;
  const apiEndpoint = `${serverURL}/api`;

  useEffect(() => {
    let arr = pathname.split('/');
    let str = arr[arr.length - 1];
    setStepNav([
      {
        label: 'Section Templates',
        url: '/collections/section-templates/' + str,
      },
    ]);
  }, [setStepNav]);

  let TextTrait = [
    {
      type: 'text',
      name: 'text-title',
      id: 'h1 main-number-heading',
      label: 'Title',
      placeholder: 'Enter your title ',
      className: 'custom-text',
      changeProp: 1,
    },

    {
      type: 'select',
      name: 'tagName',
      label: 'HTML Tag',
      ChangeProp: 1,
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
      changeProp: 1,
    },
    {
      type: 'select',
      name: 'class',
      label: 'Alignment',
      default: 'center',
      options: [
        { value: 'left', name: 'Left' },
        { value: 'center', name: 'Center' },
        { value: 'right', name: 'Right' },
      ],
    },
  ];

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
   <img data-gjs-type="mj-image" class="header-svg" src="data:image/svg+xml;base64,PHN2ZyBpZD0ibm91bi1sb2dvLTIxMjE0MzkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMzLjAyMSIgaGVpZ2h0PSIzOC4wNTIiIHZpZXdCb3g9IjAgMCAzMy4wMjEgMzguMDUyIj4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk3IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk3IiBkPSJNMTUyLjA5LDMxLjk1MywxNjguNiw0MS41VjYwLjQ1OUwxNTIuMDksNzBsLTE2LjUxLTkuNTQ1VjQxLjVabTAsNS40MTcsNS45MzMsMy4zNTQsNS45MzMsMy40ODNWNTcuODc5bC01LjkzMywzLjM1NC01LjkzMywzLjQ4My01LjkzMy0zLjQ4My01LjkzMy0zLjM1NFY0NC4yMDZsNS45MzMtMy40ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM1LjU4IC0zMS45NTMpIiBmaWxsPSIjNTBhZTgxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4NCiAgPHBhdGggaWQ9IlBhdGhfMTY5ODk4IiBkYXRhLW5hbWU9IlBhdGggMTY5ODk4IiBkPSJNMjIyLjA5MywxMTkuNTI2bDUuMTU5LDIuOTY3LDUuMDMsMi45NjcuMjU4LjEyOXYxMi4yNTRsLS4yNTguMTI5LTUuMDMsMi45NjctNS4xNTksMi45NjctLjEyOS4xMjktLjI1OC0uMTI5LTUuMTU5LTIuOTY3LTUuMDMtMi45NjctLjI1OC0uMTI5VjEyNS41ODhsLjI1OC0uMTI5LDUuMDMtMi45NjcsNS4xNTktMi45NjcuMjU4LS4xMjlabTQuNjQzLDMuNzQxLTQuNzcyLTIuODM4LTkuOCw1LjY3NXYxMS4yMjFsOS44LDUuNjc1LDQuNzcyLTIuODM4LDQuOS0yLjgzOFYxMjYuMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDUuNDUzIC0xMTIuNjg5KSIgZmlsbD0iIzUwYWU4MSIvPg0KPC9zdmc+DQo=" id="gjs_img_preview_logo_rtl"/>
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

  useEffect(() => {
    let arr = pathname.split('/');
    let str = arr[arr.length - 1];
    let isInclude = sections.includes(str);

    let blocks = isInclude ? [str] : sections;
    const Blocks = (editor: GrapesJS.Editor, options: any) =>
      Experfy(editor, {
        ...options,
        blocks: blocks,
        showPanelsOnLoad: true,
        themeStylePanels: true,
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
      plugins: [Blocks, backgroundPlugin],

      blockManager: {
        appendTo: '.blocks',
        blocks: [],
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
    });

    localStorage.removeItem('gjsProject');
    editor.on('load', () => {
      // console.log('defaultStyle---', userData);
      editor.loadProjectData({
        ...Object.assign(
          {},
          { ...editor.getProjectData() },
          { styles: userData.defaultStyle.filteredStyles }
        ),
      });
    });
    //This is for Single Section
    editor.onReady(() => {
      // console.log('ready');
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
        // console.log(component[0].getId());
        sectors.reset();
        sectors.add(getSectors(component[0].getId()));
        editor.runCommand('core:open-styles');
      } else {
        editor?.runCommand('core:open-blocks');
      }
    });

    editor.DomComponents.addType('numbersSection', {
      model: {
        defaults: {
          traits: TextTrait,
        },
        // changeProp: 1,
        init() {
          this.on('change:attributes:htmltag', this.handleHtmltagChange);
        },
        handleHtmltagChange() {
          this.set('tagName', this.getAttributes().htmltag);
        },
      },
    });

    //This is for all section templates Style Manager
    editor.on(`block:drag:stop`, (component, block) => {
      if (component) {
        const sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(component.ccid));
      }
    });

    // editor.on('component:drag:end', (component) => {
    //   if (component) {
    //     const sectors = editor.StyleManager.getSectors();
    //     sectors.reset();
    //     sectors.add(getSectors(component[0].getId()));
    //     // editor?.runCommand('core:open-styles');
    //   }
    // });

    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: TextTrait,
        },
        // changeProp: 1,
        init() {
          this.on('change:attributes:htmltag', this.handleHtmltagChange);
        },
        handleHtmltagChange() {
          this.set('tagName', this.getAttributes().htmltag);
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
    // editor.DomComponents.addType('ImageTextSector', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'mjchange',
    //           label: ' ',
    //           name: 'mjchange',
    //         },
    //       ],
    //     },
    //   },
    // });
    // editor.DomComponents.addType('mj-image', {
    //   isComponent: (el: any) => el.tagName === 'MJ-IMAGE',
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'class',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { value: 'left', name: 'Left' },
    //             { value: 'center', name: 'Center' },
    //             { value: 'right', name: 'Right' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    // // Image  Trait
    // editor.DomComponents.addType('mj-image', {
    //   isComponent: (el: any) => el.tagName === 'MJ-IMAGE',
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'mjchange',
    //           label: ' ',
    //           name: 'mjchange',
    //         },
    //       ],
    //     },
    //   },
    // });

    // editor.TraitManager.addType('mjchange', {
    //   noLabel: true,
    //   createInput({}) {
    //     let selectedSrc = editor.getSelected();
    //     let src = selectedSrc!.attributes.attributes!.src;
    //     // console.log('src', src);
    //     const toggleModal = () => {
    //       editor.runCommand('open-assets', {
    //         target: editor.getSelected(),
    //       });
    //     };
    //     const el = document.createElement('div');
    //     el.setAttribute('class', 'image-trait-preview');
    //     el.innerHTML = `<img src="${src}" style="width: 100%; height:auto;background:#f9f9f9;" id="gjs_img_preview_logo_rtl"/>
    //               <button type="submit"  class="btn btn-primary btn-md"  id="chg-img-trait-btn">Add Image</button>`;
    //     const inputType = el.querySelector('#chg-img-trait-btn');
    //     const imgBox = el.querySelector('#gjs_img_preview_logo_rtl');
    //     imgBox!.addEventListener('click', toggleModal);
    //     inputType!.addEventListener('click', toggleModal);
    //     return el;
    //   },
    // });
    // editor.on('modal:open', (component) => {
    //   const $ = editor.$;
    //   const am = editor.AssetManager;
    //   am.open({
    //     types: ['mj-image'],
    //     select(assets, complete) {
    //       const selected = editor.getSelected();
    //       console.log("selection",selected)
    //       selected.toHTML({
    //         attributes(component, attributes) {
    //           if (component.get('type') == 'mj-image') {
    //             $('#gjs_img_preview_logo_rtl').attr('src', assets.getSrc());
    //             component.addAttributes({ src: assets.getSrc() });
    //             complete && editor.AssetManager.close();
    //           }
    //         },
    //       });
    //     },
    //   });
    // });

    //@ts-ignore
    editor.on('style:sector:update', (props) => {
      // console.log('sector called', props);
      // Get the selected block
      !isUpdating &&
        setTimeout(() => {
          let sm = editor.StyleManager;
          var selectedBlock = editor.getSelected();
          // console.log('selectedBlock', selectedBlock);
          const { ccid } = selectedBlock;
          isUpdating = true;
          const sectors = sm.getSectors();
          // console.log('sectors', sectors);
          for (let i = 0; i < sectors.length; i++) {
            const modelId = sectors.models[i].get('id');
            if (modelId === props.id) {
              // console.log('model id', modelId);
              // console.log('props id', props.id);
              let isOpen = sectors.models[i].isOpen();
              // const wrapperCmp = editor.DomComponents.getWrapper();
              if (isOpen) {
                const wrapperCmp = editor.DomComponents.getWrapper();
               
                editor.select(wrapperCmp.find(`.${props.id}`)[0]);
                // editor.select(sectors.models[i]);
                // sectors.models[i].set({
                //   open: true,
                //   active: true,
                //   select: true,
                //   focus: true,
                // });

                // sm.select(`.${props.id}`);
              }
            } else {
              sectors.models[i].setOpen(false);
            }
          }

          setTimeout(() => {
            isUpdating = false;
          }, 3000);
        }, 100);

      const categories = editor.StyleManager.getSectors();
    });

    // editor.on('component:selected', (component) => {
    //   if (ccid !== component.ccid) {
    //     setccid(component.ccid);
    //   }

    //   // if (component.get('type') == 'text') {
    //   //   editor?.runCommand('core:open-traits');
    //   // }
    //   if (component.get('type') == 'button') {
    //     editor?.runCommand('core:open-traits');
    //   }
    //   if (component.get('type') == 'mj-image') {
    //     editor?.runCommand('core:open-traits');
    //   }
    // });

    //@ts-ignore
    // editor.on('component:update:attributes', (component) => {
    //   console.log('component:update:attributes', component);

    //   editor.Selectors.select(`.${'main-number-heading'}`);
    // });

    //@ts-ignore
    // editor.on('component:update:attributes', (component) => {
    //   console.log('component:update:attributes', component);

    //   editor.Selectors.select(`.${'main-number-heading'}`);
    // });

    editor.on('component:update', (component) => {
      // console.log('component update called', component);

      // const attrs = component.getAttributes();
      // // console.log('attrs', attrs);
      // component.set('main-number-heading', '');

      // // const isActive = event.changed.attributes['my-parent-trait'];
      // // const displayStyle = true ? 'block' : 'none';

      // // TextTrait.forEach((traitProps) => {
      // //   const trait = component.getTrait(traitProps.name);
      // //   console.log('trait', trait);
      // //   if (trait) {
      // //     trait.view.el.style.display = displayStyle;
      // //   }
      // // });

      // var selected = editor.getSelected();

      // // console.log('selectedTrait', selected);
      // // const el = selectedTrait.getEl();
      // // console.log('el', el)

      // var selectedTrait = component.getTraits();
      // // console.log('selectedTrait1', selectedTrait);
      // // const traitTitle = component.getTrait('main-number-heading');
      // // if (traitTitle) {
      // //   //   console.log('traitTitle', traitTitle);
      // //   //   traitTitle &&
      // //   //     traitTitle.set('class', 'h1 main-number-heading gjs-selected');
      // // }

      // const { ccid } = selectedTrait;
      // // console.log('ccid', ccid);

      // for (let i = 0; i < selectedTrait.length; i++) {
      //   const modelId = selectedTrait[i].get('id');
      //   const modelValue = selectedTrait[i].get('value');
      //   // console.log("model is '''''''''' ", modelId);
      //   selected.toHTML({
      //     attributes(component, attributes) {
      //       console.log('component old', component);
      //       if (attributes?.class === modelId) {
      //         console.log(
      //           'attributes?.class, modelValue',
      //           attributes?.class,
      //           modelValue
      //         );
      //         console.log('component', component);
      //         component.components(modelValue);
      //         // component.addAttributes({ value: modelValue });
      //       }
      //       // console.log("class",attributes.get('class'))

      //       // if (attributes.get('class') == modelId) {
      //       //   console.log("yes-------------------->")

      //       //   // attributes.title = 'Custom attribute';
      //       //   // attributes.value = 'Custom Value';
      //       // }
      //       // return attributes;
      //     },
      //   });

      //   // console.log('modelIdNew', modelId);
      //   // console.log('props id d d ', component.id);
      //   // const modelId = sectors.models[i].get('id');
      //   // if (modelId === component.id) {
      //   //   console.log('model id', modelId);
      //   //   console.log('component id', component.id);
      //   //   let isOpen = sectors.models[i].isOpen();
      //   //   if (isOpen) {
      //   //     editor.select(sectors.models[i]);
      //   //     sectors.models[i].set({
      //   //       open: true,
      //   //       active: true,
      //   //       select: true,
      //   //       focus: true,
      //   //     });

      //   //     sm.select(`.${ccid} .${component.id}`);
      //   //   }
      //   // } else {
      //   //   sectors.models[i].setOpen(false);
      //   // }
      // }

      // // !isTrait &&
      // // setTimeout(() => {
      // //   var selectedTrait = component.getTraits()
      // //   console.log('selectedTrait', selectedTrait);
      // //   const { ccid } = selectedTrait;
      // //   console.log("ccid",ccid)
      // //   isTrait = true;

      // //   // for (let i = 0; i < sectors.length; i++) {
      // //   //   const modelId = sectors.models[i].get('id');
      // //   //   if (modelId === props.id) {
      // //   //     console.log("model id",modelId)
      // //   //     console.log("props id",props.id)
      // //   //     let isOpen = sectors.models[i].isOpen();
      // //   //     if (isOpen) {
      // //   //       editor.select(sectors.models[i]);
      // //   //       sectors.models[i].set({
      // //   //         open: true,
      // //   //         active: true,
      // //   //         select: true,
      // //   //         focus: true,
      // //   //       });

      // //   //       sm.select(`.${ccid} .${props.id}`);

      // //   //     }
      // //   //   } else {
      // //   //     sectors.models[i].setOpen(false);
      // //   //   }
      // //   // }

      // //   setTimeout(() => {
      // //     isTrait = false;
      // //   }, 3000);
      // // }, 100);

      if (component.get('type') == 'text') {
        component.components(component.get('traits').models[0].get('value'));
        component.components(component.get('traits').models[2].get('class'));
        // component.components(component.get('traits').models[1].get('class'));
      }
      if (component.get('type') == 'button') {
        component.components(component.get('traits').models[0].get('value'));
        component.components(component.get('traits').models[1].get('class'));
        component.components(component.get('traits').models[2].get('class'));
      }
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
    addAssets();
    updateHeaderBlock();
    setEditor(editor);
  }, []);

  let newDirty = editor?.getDirtyCount();
  // console.log('newDirty', newDirty);

  const handleCount = () => {
    let dirty = editor?.getDirtyCount();
    // console.log('Dirty Count is here', dirty);
  };

  // useEffect(() => {
  //   console.log("dirty", dirty)

  // }, [dirty]);

  const saveHistoy = () => {
    axios
      .post(`${apiEndpoint}/pagehistory`, {
        PageId: '123456',
        pageHistory: JSON.stringify(editor?.getProjectData()),
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  let check = editor?.getProjectData();

  // useEffect(() => {
  //   console.log("ccid ", ccid)
  //   if (ccid) {
  //     saveHistoy();
  //   }
  // }, [ccid]);

  // useEffect(() => {

  //     console.log("check")
  // },[check]);

  return (
    <div className="main__content main__content__editor">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row fixed-toolbar">
        <div className="panel__basic-actions"></div>
        <div className="panel__left bottom-controls">
          <div className="back__panel panel-header">
            <Link className="panel-header__link" to={`${admin}/`}>
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <span>Section Template</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
          </div>
          <div className="panel-body has-bottom-controls">
            <div className="panel-body__inner">
              <div className="panel-body__content">
                <div className='panel__switcher'></div>
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
  );
};
export default SectionPageBuilder;
