import GrapesJS from 'grapesjs';
// import plugin from 'grapesjs-project-manager';
// import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.css';
// import 'grapesjs/dist/css/grapes.min.css';
import { Eyebrow } from 'payload/components/elements';
import React, { useEffect, useState } from 'react';
import experfy from '../ExperfyPlugin';
import '../index.scss';


import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';

export interface GrapesjsReactProps {
    id: HTMLElement['id'];
    onInit?(editor?: GrapesJS.Editor): void;
    onDestroy?(): void;
}
const borderStyle = [
    { value: 'solid', name: 'Solid' },
    { value: 'dotted', name: 'Dotted' },
    { value: 'dashed', name: 'Dashed' },
    { value: 'double', name: 'Double' },
    { value: 'groove', name: 'Groove' },
    { value: 'ridge', name: 'Ridge' },
    { value: 'inset', name: 'Inset' },
    { value: 'outset', name: 'Outset' },
    { value: 'none', name: 'None' },
    { value: 'hidden', name: 'Hidden' },
];
const fontWeight = [
    { value: 'normal', name: 'Normal' },
    { value: 'bold', name: 'Bold' },
    { value: '100', name: '100' },
    { value: '200', name: '200' },
    { value: '300', name: '300' },
    { value: '400', name: '400' },
    { value: '500', name: '500' },
    { value: '600', name: '600' },
    { value: '700', name: '700' },
    { value: '800', name: '800' },
    { value: '900', name: '900' },
];

const fontsList = [
    { value: 'proxima-nova', name: 'Proxima Nova' },
    { value: 'Roboto', name: 'Roboto' },
    { value: 'Open Sans', name: 'Open Sans' },
    { value: 'Lato', name: 'Lato' },
    { value: 'Montserrat', name: 'Montserrat' },
    { value: 'Raleway', name: 'Raleway' },
    { value: 'Oswald', name: 'Oswald' },
    { value: 'Lora', name: 'Lora' },
    { value: 'Merriweather', name: 'Merriweather' },
    { value: 'Playfair Display', name: 'Playfair Display' },
    { value: 'Nunito', name: 'Nunito' },
    { value: 'Poppins', name: 'Poppins' },
    { value: 'Source Sans Pro', name: 'Source Sans Pro' },
    { value: 'PT Sans', name: 'PT Sans' },
    { value: 'PT Serif', name: 'PT Serif' },
    { value: 'Work Sans', name: 'Work Sans' },
    { value: 'Noto Sans', name: 'Noto Sans' },
    { value: 'Noto Serif', name: 'Noto Serif' },
    { value: 'Muli', name: 'Muli' },
    { value: 'Rubik', name: 'Rubik' },
    { value: 'Quicksand', name: 'Quicksand' },
    { value: 'Fira Sans', name: 'Fira Sans' },
    { value: 'Dosis', name: 'Dosis' },
    { value: 'Ubuntu', name: 'Ubuntu' },
    { value: 'Titillium Web', name: 'Titillium Web' },
    { value: 'Varela Round', name: 'Varela Round' },
    { value: 'Exo 2', name: 'Exo 2' },
    { value: 'Cabin', name: 'Cabin' },
    { value: 'Fjalla One', name: 'Fjalla One' },
    { value: 'Francois One', name: 'Francois One' }
];


const GlobalThemeSettings: React.FC = (props: GrapesjsReactProps) => {

    const [editor, setEditor] = useState<GrapesJS.Editor>();
    const { setStepNav } = useStepNav();

    useEffect(() => {
        setStepNav([
            {
                label: 'Global Theme Settings',
                url: '/collections/global-theme-settings',
            },
        ]);
    }, [setStepNav]);

    useEffect(() => {
        const editor = GrapesJS.init({
            container: '#gjs',
            height: '100%',
            

            storageManager: {
                type: 'local',
                autosave: true,
                autoload: true,
                stepsBeforeSave: 1,
                options: {
                    storeComponents: true,
                    storeStyles: true,
                    storeHtml: true,
                    storeCss: true,
                    local: {
                        key: '-global-theme-settings',
                    }
                },
            },

            panels: {
                defaults: [
                    {
                        id: 'style-manager',
                        el: '.panel__left',
                        active: true,
                        label: "Global Color Collection",
                        command: 'show-styles',
                        toggle: false,
                    }
                ],
            },
           
            styleManager: {
                appendTo: '.styles-container',
                sectors: [
                    {
                        name: 'Global Color Collection',
                        open: true,
                        buildProps: ['background-color', 'color'],
                        properties: [
                            {
                                type: 'color',
                                name: 'Primary',
                                property: 'color',
                                defaults: '#4aa4da',
                                attributes: {
                                    'data-type': 'primary',
                                },
                            },
                            {
                                type: 'color',
                                name: 'Secondary',
                                property: 'color',
                                defaults: '#212e44',
                                attributes: {
                                    'data-type': 'secondary',
                                },
                            },
                            {
                                type: 'color',
                                name: 'Text',
                                property: 'color',
                                defaults: '#4a5161',
                                attributes: {
                                    'data-type': 'text-color',
                                },
                            },
                            {
                                type: 'color',
                                name: 'Background',
                                property: 'background-color',
                                defaults: '#d1dbe3',
                                attributes: {
                                    'data-type': 'background-color',
                                },
                            },
                        ]
                    },
                    {
                        name: 'Global Fonts Collection',
                        open: false,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'line-height', 'text-align', 'text-decoration', 'text-shadow', 'text-transform'],
                        properties: [
                            {
                                type: 'select',
                                name: 'Font Family',
                                property: 'font-family',
                                defaults: 'Roboto',
                                list: fontsList,
                            },
                            {
                                type: 'integer',
                                name: 'Font Size',
                                property: 'font-size',
                                defaults: '16',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'integer',
                                name: 'Font Weight',
                                property: 'font-weight',
                                defaults: '400',
                                min: 0,
                                max: 1000,
                            },
                            {
                                type: 'integer',
                                name: 'Letter Spacing',
                                property: 'letter-spacing',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'integer',
                                name: 'Line Height',
                                property: 'line-height',
                                defaults: '1',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'select',
                                name: 'Text Align',
                                property: 'text-align',
                                defaults: 'left',
                                list: [
                                    { value: 'left', name: 'Left' },
                                    { value: 'center', name: 'Center' },
                                    { value: 'right', name: 'Right' },
                                    { value: 'justify', name: 'Justify' },
                                ],
                            },
                            {
                                type: 'select',
                                name: 'Text Decoration',
                                property: 'text-decoration',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'underline', name: 'Underline' },
                                    { value: 'line-through', name: 'Line Through' },
                                ],
                            },
                            {
                                type: 'checkbox',
                                name: 'Text Shadow',
                                property: 'text-shadow',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                                    { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                                    { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                                ],
                            },
                            {
                                type: 'select',
                                name: 'Text Transform',
                                property: 'text-transform',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'uppercase', name: 'Uppercase' },
                                    { value: 'lowercase', name: 'Lowercase' },
                                    { value: 'capitalize', name: 'Capitalize' },
                                ],
                            },
                        ]

                    },
                    {
                        name: 'Global Border Collection',
                        open: false,
                        buildProps: ['border-radius', 'border', 'box-shadow'],
                        properties: [
                            {
                                type: 'integer',
                                name: 'Border Radius',
                                property: 'border-radius',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'integer',
                                name: 'Border Width',
                                property: 'border-width',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'select',
                                name: 'Border Style',
                                property: 'border-style',
                                defaults: 'solid',
                                list: borderStyle,
                            },
                            {
                                type: 'color',
                                name: 'Border Color',
                                property: 'border-color',
                                defaults: '#212e44',
                                attributes: {
                                    'data-type': 'border-color',
                                },
                            },
                            {
                                type: 'checkbox',
                                name: 'Box Shadow',
                                property: 'box-shadow',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                                    { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                                    { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                                ],
                            },
                        ]
                    },
                    {
                        name: 'Buttons',
                        open: false,
                        buildProps: ['background-color', 'border-radius', 'border', 'box-shadow', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'line-height', 'text-align', 'text-decoration', 'text-shadow', 'text-transform'],
                        properties: [
                            {
                                type: 'select',
                                name: 'Font Family',
                                property: 'font-family',
                                defaults: 'Proxima Nova',
                                list: fontsList,
                            },
                            {
                                type: 'integer',
                                name: 'Font Size',
                                property: 'font-size',
                                defaults: '16',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'integer',
                                name: 'Font Weight',
                                property: 'font-weight',
                                defaults: '400',
                                min: 0,
                                max: 1000,
                            },
                            {
                                type: 'integer',
                                name: 'Letter Spacing',
                                property: 'letter-spacing',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'integer',
                                name: 'Line Height',
                                property: 'line-height',
                                defaults: '1',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'select',
                                name: 'Text Align',
                                property: 'text-align',
                                defaults: 'left',
                                list: [
                                    { value: 'left', name: 'Left' },
                                    { value: 'center', name: 'Center' },
                                    { value: 'right', name: 'Right' },
                                    { value: 'justify', name: 'Justify' },
                                ],
                            },
                            {
                                type: 'select',
                                name: 'Text Decoration',
                                property: 'text-decoration',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'underline', name: 'Underline' },
                                    { value: 'line-through', name: 'Line Through' },
                                ],
                            },
                            {
                                type: 'checkbox',
                                name: 'Text Shadow',
                                property: 'text-shadow',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                                    { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                                    { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                                ],
                            },
                            {
                                type: 'select',
                                name: 'Text Transform',
                                property: 'text-transform',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'uppercase', name: 'Uppercase' },
                                    { value: 'lowercase', name: 'Lowercase' },
                                    { value: 'capitalize', name: 'Capitalize' },
                                ],
                            },

                        ]
                    },
                    {
                        name: 'Images',
                        open: false,
                        buildProps: ['border-radius', 'border', 'box-shadow', 'opacity', 'background-position'],
                        properties: [
                            {
                                type: 'integer',
                                name: 'Border Radius',
                                property: 'border-radius',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'integer',
                                name: 'Border Width',
                                property: 'border-width',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'select',
                                name: 'Border Style',
                                property: 'border-style',
                                defaults: 'solid',
                                list: borderStyle,
                            },
                            {
                                type: 'color',
                                name: 'Border Color',
                                property: 'border-color',
                                defaults: 'transparent',
                            },
                            {
                                type: 'checkbox',
                                name: 'Border Shadow',
                                property: 'box-shadow',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: '0 1px 1px rgba(0, 0, 0, 0.3)', name: 'Small' },
                                    { value: '0 2px 2px rgba(0, 0, 0, 0.3)', name: 'Medium' },
                                    { value: '0 3px 3px rgba(0, 0, 0, 0.3)', name: 'Big' },
                                ],
                            },
                            {
                                type: 'integer',
                                name: 'Opacity',
                                property: 'opacity',
                                defaults: '1',
                                min: 0,
                                max: 1,
                                step: 0.01,
                            },
                            {
                                type: 'integer',
                                name: 'Background Position',
                                property: 'background-position',
                                defaults: '0 0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                        ]
                    },
                    {
                        name: 'Body Text',
                        open: false,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'line-height', 'text-align', 'text-decoration'],
                        properties: [
                            {
                                type: 'select',
                                name: 'Font',
                                property: 'font-family',
                                defaults: 'Arial',
                                list: fontsList,
                            },
                            {
                                type: 'integer',
                                name: 'Font Size',
                                property: 'font-size',
                                defaults: '14',
                                units: ['px', 'em', 'rem'],
                                min: 1,
                                max: 72,
                                step: 1,
                            },
                            {
                                type: 'select',
                                name: 'Weight',
                                property: 'font-weight',
                                defaults: 'normal',
                                list: fontWeight,
                            },
                            {
                                type: 'integer',
                                name: 'Letter Spacing',
                                property: 'letter-spacing',
                                defaults: '0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 10,
                                step: 1,
                            },
                            {
                                type: 'integer',
                                name: 'Line Height',
                                property: 'line-height',
                                defaults: '1',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 10,
                                step: 1,
                            },
                            {
                                type: 'select',
                                name: 'Text Align',
                                property: 'text-align',
                                defaults: 'left',
                                list: [
                                    { value: 'left', name: 'Left' },
                                    { value: 'center', name: 'Center' },
                                    { value: 'right', name: 'Right' },
                                    { value: 'justify', name: 'Justify' },
                                ],
                            },
                            {
                                type: 'select',
                                name: 'Text Decoration',
                                property: 'text-decoration',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'underline', name: 'Underline' },
                                    { value: 'line-through', name: 'Line Through' },
                                ],
                            },
                        ]
                    },
                    {
                        name: 'Links',
                        open: false,
                        buildProps: ['color', 'font-weight', 'text-decoration'],
                        properties: [
                            {
                                type: 'color',
                                name: 'Color',
                                property: 'color',
                                defaults: 'rgba(0, 0, 0, 1)',
                            },
                            {
                                type: 'select',
                                name: 'Font Weight',
                                property: 'font-weight',
                                defaults: 'normal',
                                list: fontWeight,
                            },
                            {
                                type: 'select',
                                name: 'Text Decoration',
                                property: 'text-decoration',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'underline', name: 'Underline' },
                                    { value: 'line-through', name: 'Line Through' },
                                ],
                            },
                        ]
                    },
                    {
                        name: 'Input Fields',
                        open: false,
                        buildProps: ['color', 'font-weight', 'text-decoration'],
                        properties: [
                            {
                                type: 'color',
                                name: 'Color',
                                property: 'color',
                                defaults: 'rgba(0, 0, 0, 1)',
                            },
                            {
                                type: 'select',
                                name: 'Font Weight',
                                property: 'font-weight',
                                defaults: 'normal',
                                list: fontWeight,
                            },
                            {
                                type: 'select',
                                name: 'Text Decoration',
                                property: 'text-decoration',
                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'underline', name: 'Underline' },
                                    { value: 'line-through', name: 'Line Through' },
                                ],
                            },
                        ]
                    },
                    {
                        name: 'Background',
                        open: false,
                        buildProps: ['background-color', 'background-image', 'background-repeat', 'background-position', 'background-attachment', 'background-size'],
                        properties: [

                            {
                                type: 'color',
                                name: 'Background Color',
                                property: 'background-color',
                                defaults: 'transparent',
                            },
                            {
                                type: 'image',
                                name: 'Background Image',
                                property: 'background-image',
                                defaults: 'none',
                            },
                            {
                                type: 'select',
                                name: 'Background Repeat',
                                property: 'background-repeat',
                                defaults: 'no-repeat',
                                list: [
                                    { value: 'no-repeat', name: 'No Repeat' },
                                    { value: 'repeat', name: 'Repeat' },
                                    { value: 'repeat-x', name: 'Repeat X' },
                                    { value: 'repeat-y', name: 'Repeat Y' },
                                ],
                            },
                            {
                                type: 'integer',
                                name: 'Background Position',
                                property: 'background-position',
                                defaults: '0 0',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                            {
                                type: 'select',
                                name: 'Background Attachment',
                                property: 'background-attachment',
                                defaults: 'scroll',
                                list: [
                                    { value: 'scroll', name: 'Scroll' },
                                    { value: 'fixed', name: 'Fixed' },
                                ],
                            },
                            {
                                type: 'integer',
                                name: 'Background Size',
                                property: 'background-size',
                                defaults: 'cover',
                                units: ['px', 'em', 'rem'],
                                min: 0,
                                max: 100,
                            },
                        ]
                    },
                    {
                        name: 'Extra',
                        open: false,
                        buildProps: ['transition', 'perspective', 'transform'],
                        properties: [
                            {
                                type: 'integer',
                                name: 'Transition',
                                property: 'transition',
                                units: ['ms'],
                                defaults: '0',
                                min: 0,
                                max: 1000,
                            },
                            {
                                type: 'integer',
                                name: 'Perspective',
                                property: 'perspective',
                                units: ['px'],
                                defaults: '0',
                                min: 0,
                                max: 1000,
                            },
                            {
                                type: 'select',
                                name: 'Transform',
                                property: 'transform',

                                defaults: 'none',
                                list: [
                                    { value: 'none', name: 'None' },
                                    { value: 'rotateX(180deg)', name: 'Flip Vertically' },
                                    { value: 'rotateY(180deg)', name: 'Flip Horizontally' },
                                    { value: 'scale(1.1)', name: 'Scale 110%' },
                                    { value: 'scale(0.9)', name: 'Scale 90%' },
                                ],
                            },
                        ]
                    },
                    {
                        name: 'Container',
                        open: false,
                        buildProps: ['width', 'flex-direction'],
                        properties: [
                            {
                                type: 'integer',
                                name: 'Width',
                                property: 'width',
                                units: ['px', '%'],
                                defaults: 'auto',
                                min: 0,
                                max: 100,
                                step: 10,
                            },
                            {
                                type: 'select',
                                name: 'Flex Direction',
                                property: 'flex-direction',
                                defaults: 'row',
                                list: [
                                    { value: 'row', name: 'Row' },
                                    { value: 'row-reverse', name: 'Row Reverse' },
                                    { value: 'column', name: 'Column' },
                                    { value: 'column-reverse', name: 'Column Reverse' },
                                ],
                            },
                        ]
                    },
                    {
                        name: 'Layout',
                        open: false,
                        buildProps: ['display', 'position', 'top', 'right', 'left', 'bottom'],
                        properties: [
                            {
                                type: 'select',
                                name: 'Display',
                                property: 'display',
                                defaults: 'block',
                                list: [
                                    { value: 'block', name: 'Block' },
                                    { value: 'inline', name: 'Inline' },
                                    { value: 'inline-block', name: 'Inline Block' },
                                    { value: 'flex', name: 'Flex' },
                                    { value: 'inline-flex', name: 'Inline Flex' },
                                    { value: 'table', name: 'Table' },
                                    { value: 'table-row', name: 'Table Row' },
                                    { value: 'table-cell', name: 'Table Cell' },
                                    { value: 'none', name: 'None' },
                                ],
                            },
                            {
                                type: 'select',
                                name: 'Position',
                                property: 'position',
                                defaults: 'static',
                                list: [
                                    { value: 'static', name: 'Static' },
                                    { value: 'relative', name: 'Relative' },
                                    { value: 'absolute', name: 'Absolute' },
                                    { value: 'fixed', name: 'Fixed' },
                                    { value: 'sticky', name: 'Sticky' },
                                ],
                            },
                            {
                                type: 'integer',
                                name: 'Top',
                                property: 'top',
                                units: ['px', 'rem'],
                                defaults: 'auto',
                                min: 0,
                                max: 100,
                                step: 5,
                            },
                            {
                                type: 'integer',
                                name: 'Right',
                                property: 'right',
                                units: ['px', 'rem'],
                                defaults: 'auto',
                                min: 0,
                                max: 100,
                                step: 5,
                            },
                            {
                                type: 'integer',
                                name: 'Left',
                                property: 'left',
                                units: ['px', 'rem'],
                                defaults: 'auto',
                                min: 0,
                                max: 100,
                                step: 5,
                            },
                            {
                                type: 'integer',
                                name: 'Bottom',
                                property: 'bottom',
                                units: ['px', 'rem'],
                                defaults: 'auto',
                                min: 0,
                                max: 100,
                                step: 5,
                            },
                        ]
                    }
                ]
            },

        });

        setEditor(editor);

    }, [setEditor]);

    return (
        <div>
            <Eyebrow />
            <div className="editor-canvas" >
                <div id="gjs"></div>
            </div>
            <div className="panel__left" >
                <div className="nav styles-container"></div>
            </div>
                
        </div>
    );
}

export default GlobalThemeSettings;

