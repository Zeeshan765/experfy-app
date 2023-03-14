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
import { getSectors } from './ExperfyPlugin/blocks/getSectors';
import { UserContext } from '../../Providers/UserProvider';
import { canvasStyle, navStep, sections, devices } from './utils';
import SidebarBottom from './SidebarBottom';
import { getCurrentDateAndTime } from '../../utilities/dateAndTime';
// import { log } from 'console';

interface parems {
  id?: string;
}

const PageBuilder: React.FC = () => {
  // ======States start=======
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [currentPageData, setCurrentPageData] = useState<any>(null);
  const [pageHistoryArray, setPageHistoryArray] = useState<any[]>([]);
  const [changeHistory, setChangeHistory] = useState(false);
  const [addHistory, setAddHistory] = useState(true);
  var isUpdating = false;
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
  const loadHistory = (e,pageCurrentCode) => {
    e.stopPropagation()
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
        setPageHistoryArray(res.data.docs);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const dataHandler = (historyUpdate) => {
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
          history.replace('/admin/collections/page-Template');
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      if (id) {
        axios
          .patch(`${apiEndpoint}/pages/${id}`, {
            pageCode: JSON.stringify(editor.getProjectData()),
          })
          .then((res) => {
            !historyUpdate && history.replace('/admin/collections/pages');
          })
          .catch((err) => {
            console.log('err', err);
          });
      }
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
  const deleteHistory = (e,deleteId) => {
    e.stopPropagation();
    setChangeHistory(false);
    axios
      .delete(`${apiEndpoint}/pagehistory/${deleteId}`)
      .then((res) => {
        console.log('delete history res ==========', res);
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
        // console.log('res of history==========', res);
        fetchHistory(); // call to get history
      })
      .catch((err) => {
        console.log(err);
      });
    // }
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

          console.log("block********",block.set('content', content))
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      container: '.editor',
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
      ],
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
    editor.DomComponents.addType('text', {
      model: {
        defaults: {
          traits: TextTrait,
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

    editor.DomComponents.addType('mj-image', {
      isComponent: (el: any) => el.tagName === 'MJ-IMAGE',
      model: {
        defaults: {
          traits: [
            {
              type: 'mjchange',
              label: ' ',
              name: 'mjchange',
            },
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
          ],
        },
      },
    });

    editor.TraitManager.addType('mjchange', {
      noLabel: true,
      createInput({}) {
        let selectedSrc = editor.getSelected();

        let src = selectedSrc!.attributes.attributes!.src;
        const toggleModal = () => {
          editor.runCommand('open-assets', {
            target: editor.getSelected(),
          });
        };
        const el = document.createElement('div');
        el.setAttribute('class', 'image-trait-preview');
        el.innerHTML = `<img src="${src}" style="width: 100%; height:auto;background:#f9f9f9;" id="gjs_img_preview_logo_rtl"/>
                    <button type="submit"  class="btn btn-primary btn-md"  id="chg-img-trait-btn">Add Image</button>`;

        const inputType = el.querySelector('#chg-img-trait-btn');
        const imgBox = el.querySelector('#gjs_img_preview_logo_rtl');

        imgBox!.addEventListener('click', toggleModal);
        inputType!.addEventListener('click', toggleModal);

        return el;
      },
    });

    editor.on('modal:open', (component) => {
      const $ = editor.$;
      const am = editor.AssetManager;
      am.open({
        types: ['mj-image'],
        select(assets, complete) {
          const selected = editor.getSelected();
          if (selected && selected.is('mj-image')) {
            $('#gjs_img_preview_logo_rtl').attr('src', assets.getSrc());
            selected.addAttributes({ src: assets.getSrc() });

            complete && editor.AssetManager.close();
          }
        },
      });
    });
      editor.on("modal:open", (component) => {
        const $ = editor.$;
        const am = editor.AssetManager;
        am.open({
          types: ["mj-image"],
          select(assets, complete) {
            const selected = editor.getSelected();    
            if (selected && selected.is("mj-image")) {

              $("#gjs_img_preview_logo_rtl").attr("src", assets.getSrc());
              selected.addAttributes({ src: assets.getSrc() });
            
              complete && editor.AssetManager.close();
            }

            console.log("after select",selected);
          },
        });
      });
//=========Custom Image Trait end here========





    //For Traits
    editor.on('component:selected', (component) => {
      console.log("component*******", component);
      if (component) {
        let ccid = component.ccid.split('-')[0];
        console.log("ccid", ccid);
        const blocksector = editor.StyleManager.getSectors();
        console.log(
          'blocksector',
          blocksector,
        )
        blocksector.reset();
        blocksector.add(getSectors(ccid));
        console.log("blocksector", blocksector.add(getSectors(ccid)));
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
      if (component.get('type') == 'mj-image') {
        editor?.runCommand('core:open-traits');
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
      //  condation  for load when active history
      if (addHistory) {
        pageHistoryHandler();
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

  
//@ts-ignore
    editor.on('style:sector:update', (props) => {


console.log("editor.DomComponents.getWrapper().ccid",editor.DomComponents.getWrapper().ccid);

      
      // Get the selected block
      !isUpdating &&
        setTimeout(() => {
          let sm = editor.StyleManager;
          var selectedBlock = editor.getSelected();
          console.log('selectedBlock-----------------', selectedBlock);
          const { ccid } = selectedBlock;
          console.log("ccid------------->*******", ccid);
          isUpdating = true;
          const sectors = sm.getSectors();
          console.log('props', props);
          console.log('sectors', sectors);
          for (let i = 0; i < sectors.length; i++) {
            const modelId = sectors.models[i].get('id');
            if (modelId === props.id) {
              console.log("matched")
              console.log('sectors.models[i]', sectors.models[i]);
              let isOpen = sectors.models[i].isOpen();
              if (isOpen) {
             
                editor.select(sectors.models[i]);
              

                console.log(
                  'editor.select(sectors.models[i]);',
                  editor.select(sectors.models[i])
                );
                sectors.models[i].set({
                  open: true,
                  active: true,
                  select: true,
                  focus: true,

                });
              
             
                sm.select(`.${ccid} .${props.id}`);
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
  useEffect(() => {
    const updateHistory = setTimeout(() => {
      if (changeHistory) {
        saveHistoy();
        setChangeHistory(false); // reset the flag beacue again tracking updation
      }
    }, 30000);
    return () => clearTimeout(updateHistory);
  }, [changeHistory]);
  // =======Lifecycle methods end here=========
  return (
    <div className='main__content'>
      <Eyebrow />
      <div className='panel__top'></div>
      <div className='editor-row'>
        <div className='panel__basic-actions'></div>
        <div className='panel__left'>
          <div className='back__panel panel-header'>
            <Link className='panel-header__link' to={`${admin}/`}>
              <ArrowBackIosNewRoundedIcon />
            </Link>
            <span>Page Builder</span>
            <span className='panel-header__menu'>
              <AppsRoundedIcon />
            </span>
          </div>
          <div className='panel__switcher'></div>
          <SidebarBottom
            editor={editor}
            consumer='pageBuilder'
            pageHistoryArray={pageHistoryArray}
            deleteHistory={deleteHistory}
            loadHistory={loadHistory}
          />
          <div className='styles-container'></div>
          <div className='traits-container'></div>
          <div className='layers-container'></div>
        </div>
        <div className='editor-canvas'>
          <div className='editor'></div>
        </div>
      </div>
    </div>
  );
};
export default PageBuilder;
