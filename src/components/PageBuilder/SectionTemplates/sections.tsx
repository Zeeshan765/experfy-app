import GrapesJS from 'grapesjs';
import { Eyebrow } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Experfy from '../ExperfyPlugin';
import NavBar from 'grapesjs-navbar';
import { getSectors } from './getSectors';

const SectionPageBuilder: React.FC = () => {
	let [editor, setEditor] = useState<GrapesJS.Editor>();
	const { setStepNav } = useStepNav();
	const { pathname } = useLocation();

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
			editor?.runCommand('show-styles');
			editor?.runCommand('show-traits');
			editor?.stopCommand('stop-blocks');
		});
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
