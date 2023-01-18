import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Experfy from '../ExperfyPlugin';
import NavBar from 'grapesjs-navbar';
import { getSectors } from './getSectors';
import axios from 'axios';
import { useConfig } from 'payload/components/utilities';

const SectionPageBuilder: React.FC = () => {
  let [editor, setEditor] = useState<GrapesJS.Editor>();
  const { setStepNav } = useStepNav();
  const { pathname } = useLocation();
  const { serverURL } = useConfig();

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
	let showSections = true;
	// let arr = [] for Duplication--->header1: arr,header2: arr,

	useEffect(() => {
		setStepNav([
			{
				label: 'Section Templates',
				url: '/collections/global-theme-settings/section-templates',
			},
		]);
	}, [setStepNav]);

  const updateHeaderBlock = async () => {
    axios
      .get(`${serverURL}/api/mega-menu`)
      .then((response) => {
        const { docs } = response.data;
        const blockId = 'header';
        const block = editor.Blocks.get(blockId);

        const headerLinksItem = docs.filter((el) => el.section === blockId);

        if (headerLinksItem.length > 0) {
          let headerLinks = headerLinksItem[0];
          const { nav } = headerLinks;
          let linksDiv = '';

          nav.map((navItem) => {
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
			Experfy(editor, { ...options, blocks: blocks });

		editor = GrapesJS.init({
			container: '#sections',
			storageManager: false,
			showOffsets: true,
			showDevices: false,
			showOffsetsSelected: true,

			plugins: [Blocks, NavBar],
			pluginsOpts: {
				[NavBar]: {
					label: 'Header',
					block: {
						category: 'Header & Footer Elements',
					},
				},
			},
			// panels: {
			// 	defaults: [
			// 		{
			// 			id: 'panel-switcher',
			// 			el: '.panel__switcher',
			// 			buttons: [
			// 				// {
			// 				//   id: 'show-layers',
			// 				//   className: 'fa fa-bars',
			// 				//   command: 'show-layers',
			// 				//   active: false,
			// 				//   attributes: { title: 'Layers' },
			// 				// },
			// 				{
			// 					id: 'show-style',
			// 					className: 'fa fa-paint-brush',
			// 					command: 'core:open-styles',
			// 					active: false,
			// 					toggle: true,
			// 					attributes: { title: 'Styles' },
			// 				},
			// 				{
			// 					id: 'show-traits',
			// 					className: 'fa fa-cog',
			// 					command: 'core:open-traits',
			// 					active: false,
			// 					togglable: true,
			// 					attributes: { title: 'Traits' },
			// 				},
			// 				{
			// 					id: 'show-blocks',
			// 					className: 'fa fa-th-large',
			// 					command: 'core:open-blocks',
			// 					active: true,
			// 					toggle: true,
			// 					attributes: { title: 'Blocks' },
			// 				},
			// 			],
			// 		},
			// 	],
			// },

			blockManager: {
				appendTo: '.blocks',
				blocks: [],
			},
			layerManager: {
				appendTo: '.layers-container',
			},
			traitManager: {
				appendTo: '.traits-container',
			},
			selectorManager: {
				appendTo: '.styles-container',
			},
			styleManager: {
				appendTo: '.styles-container',
				sectors: getSectors(blocks),
			},
		});

		setEditor(editor);

		// editor.Panels.addPanel({
		//   id: 'actions',
		//   el: '.panel__top',
		//   buttons: [
		//     {
		//       id: 'show-styles',
		//       active: true,
		//       className: 'fa fa-paint-brush',
		//       toggle: false,
		//       command: 'show-styles',
		//       attributes: { title: 'Open Style Manager' },
		//     },
		//     {
		//       id: 'show-blocks',
		//       active: true,
		//       className: 'fa fa-th-large',
		//       toggle: false,
		//       command: 'show-blocks',
		//       attributes: { title: 'Open Blocks' },
		//     },
		//   ],
		// });
		// need to add a command to toggle preview mode

		// const openBl = editor.Panels.getButton('views', '.blocks');
		// editor.on('load', () => openBl.set('active', true));

		editor.on('load', () => {
			// if component exists, means the drop was successful

			if (blocks.length === 1 && editor) {
				editor.runCommand('core:open-styles');
				editor.stopCommand('core:open-traits');
				editor.stopCommand('core:open-blocks');
				editor.stopCommand('core:open-layers');
				const block = editor.BlockManager.get(blocks[0]);
				const component = editor.addComponents(block.get('content'));
				editor.select(component[0]);
				component[0].set('activeOnRender', true);
				component[0].set('removable', false);
				component[0].set('draggable', false);
				component[0].set('droppable', false);
				component[0].set('stylable', true);
				component[0].set('copyable', false);
				component[0].set('layerable', false);
			} else {
				editor?.runCommand('core:open-blocks');
				editor?.stopCommand('core:open-traits');
				editor?.stopCommand('core:open-styles');
			}
		});
		editor.on('component:add', (component) => {
			if (component) {
				component.set('activeOnRender', true);
				const sectors = editor?.StyleManager.getSectors();
				sectors.reset();
				sectors.add(getSectors(component.ccid));
			}
		});
		editor.on('component:selected', () =>
			editor?.Components.getWrapper()
				.getTraits()
				.forEach((trait) => {
					trait.set('disabled', false);
				})
		);

    editor.on('component:drag:end', () => {
      editor.runCommand('show-styles');
      editor.runCommand('show-traits');
      editor.stopCommand('stop-blocks');
    });

    updateHeaderBlock();

  }, [setEditor]);

	return (
		<div className="main__content">
			<Eyebrow />
			<div className="editor-row">
				<div className="panel__left">
					<div className="panel__top"></div>
					<div className="panel__basic-actions"></div>
					<div className="panel__switcher"></div>
					<div className="styles-container"></div>
					<div className="traits-container"></div>
					<div className="layers-container"></div>
					<div className="blocks"></div>
				</div>

				<div className="editor-canvas">
					<div id="sections"></div>
					{/* <h3>Start customizing your portal </h3> */}
					{/* <SectionTemplate /> */}
				</div>
			</div>
		</div>
	);
};
export default SectionPageBuilder;