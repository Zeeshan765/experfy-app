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
import { canvasStyle,devices } from '../utils';

const SectionPageBuilder: React.FC = () => {
  let [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  const { pathname } = useLocation();
  const { serverURL } = useConfig();
  const { routes } = useConfig();
  const { admin } = routes;
  const { userData } = useContext(UserContext);
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
        console.log("selection***************",headerLinksItem)
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
      style: canvasStyle ,
      plugins: [Blocks],

      blockManager: {
        appendTo: '.blocks',
        blocks: [],
      },
      layerManager: null,
      traitManager: null,
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
      console.log('defaultStyle---', userData);
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
      console.log('ready');
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
        console.log(component[0].getId());
        sectors.reset();
        sectors.add(getSectors(component[0].getId()));
        editor.runCommand('core:open-styles');
      } else {
        editor?.runCommand('core:open-blocks');
      }
    });

    //This is for all section templates Style Manager
    editor.on(`block:drag:stop`, (component, block) => {
      // if component exists, means the drop was successful
      if (component) {
        const sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(component.ccid));
      }
    });

    editor.on('component:drag:end', (component) => {
      if (component) {
        const sectors = editor.StyleManager.getSectors();
        sectors.reset();
        sectors.add(getSectors(component[0].getId()));
        editor?.runCommand('core:open-styles');
      }
    });

    editor.on('style:sector:update', (props) => {
      
      // Get the selected block
      !isUpdating &&
        setTimeout(() => {
          let sm = editor.StyleManager;
          var selectedBlock = editor.getSelected();
          console.log('selectedBlock', selectedBlock);
          const { ccid } = selectedBlock;
          isUpdating = true;
          const sectors = sm.getSectors();
          console.log('props', props);
          for (let i = 0; i < sectors.length; i++) {
            const modelId = sectors.models[i].get('id');
            if (modelId === props.id) {
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
            <span>Theme Builder</span>
            <span className="panel-header__menu">
              <AppsRoundedIcon />
            </span>
          </div>

          <SidebarBottom editor={editor}  /> {/*  this warning is stylable. work is in progress*/}

          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="layers-container"></div>
        </div>
        <div className="editor-canvas">
          <div id="sections"></div>
        </div>
      </div>
    </div>
  );
};
export default SectionPageBuilder;
