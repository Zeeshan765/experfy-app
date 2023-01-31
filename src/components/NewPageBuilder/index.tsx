// @ts-ignore
import GrapesJS from "grapesjs";
import React, { useEffect, useRef, useState } from "react";
// import './grapes.min.css';
// import './CustomGrapes.css';
// import '../PageBuilder/index.scss';
import "./index.scss";
import plugin2 from "grapesjs-project-manager";
import VisibilityIcon from "@mui/icons-material/Visibility";
import plugin1 from "./vendor/plugins/grapesjs-tailwind/src/index";
import Basics from "grapesjs-blocks-basic";
import { Eyebrow } from "payload/components/elements";
import { useStepNav } from "payload/components/hooks";
import { useConfig } from "payload/components/utilities";
import StepNav from "payload/dist/admin/components/elements/StepNav";

import Experfy from "../PageBuilder/ExperfyPlugin";
import Forms from "grapesjs-plugin-forms";
import NavBar from "grapesjs-navbar";
import axios from 'axios';

import { toast } from "react-toastify";
const NewPageBuilder = () => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [elementCreate, setElementCreate] = useState(false);
  // const [pagePayload, setPagePayload] = useState<any>({
  //   title: "sample",
  //   author:'',
  // });
  const { setStepNav } = useStepNav();
  const [headingText, setHeadingText] = React.useState<string>("abc");
  // console.log('test of editor', editorState);
 
  const { serverURL } = useConfig();
const apiEndpoint = `${serverURL}/api/media?locale=en&depth=0&fallback-locale=null`;
const clearLocalStorage=()=>{
  localStorage.removeItem('page_code');
}

  const checkData = () => {
    const data = localStorage.getItem("page_code");
    console.log("test data********=======", typeof data);
    axios
      .post("http://localhost:3001/api/page-Template", {
        title: "title",
        pageCode: data,
      })
      .then((res) => {
        console.log("res", res);
        clearLocalStorage();
        toast.success("Changes saved successfully");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  const uploadMedia = async (fileItem) => {
    const {name, src} = fileItem
    var file = new File([src], name);
    try {
      // Create the form data for the request
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('name', file.name);
      let item = {
        keywords: 'Media',
        mediaType: 'Photo',
        description: 'test description',
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


  const addAssets = async () => {
    const assetManager = editor.AssetManager;
    axios
      .get(`${serverURL}/api/media`)
      .then((response) => {
        const { docs } = response.data;
        docs.forEach(({ url }) => {
          assetManager.add([
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
  useEffect(() => {
    setStepNav([
      {
        label: "Page Builder",
        url: "/collections/new-page-builder",
      },
    ]);
  }, [setStepNav]);
  React.useEffect(() => {
    const sections = [
      "header",
      "footer",
      "image-banner",
      "image-gallery",
      "image-and-text",
      "paragraph",
      "practice-areas",
      "benefits",
      "departments",
      "guidelines",
      "location",
      "metrics-numbers",
      "talent-cloud-candidates",
      "testimonial",
      "video",
    ];
    const ExperfyBlocks = (editor, options) =>
      Experfy(editor, {
        ...options,
        blocks: sections,
        showPanelsOnLoad: false,
      });

    editor = GrapesJS.init({
      container: ".editor",
      plugins: [
        ExperfyBlocks,
        (editor) =>
          NavBar(editor, {
            label: "Header",
            block: {
              category: "Header & Footer Elements",
            },
          }),
        (editor) =>
          Basics(editor, {
            blocks: ["text", "link", "image", "video", "map"],
            category: "Basic Elements",
            flexGrid: true,
            addBasicStyle: true,
            rowHeight: 75,
          }),
        (editor) =>
          Forms(editor, {
            blocks: ["input", "textarea", "select", "button", "checkbox"],
            category: "Basic Elements",
          }),
        ,
      ],

      storageManager: {
        type: "local",
        autoload: true,
        options: {
          storeComponents: true,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,

          local: {
            key: "page_code",
          },
        },
      },
      canvas: {
        styles: ["../index.scss"],
      },
      fromElement: true,
      layerManager: {
        appendTo: ".layers-container",
      },
      styleManager: {
        appendTo: ".styles-container",
        showComputed: true,
        highlightComputed: true,
        highlightChanged: true,
      },
      blockManager: {
        appendTo: ".blocks",
        blocks: [],
      },

      selectorManager: {
        // componentFirst: true,
        appendTo: ".styles-container",
      },
      traitManager: {
        appendTo: ".traits-container",
      },
      showOffsets: true,
      multipleSelection: true,
      showToolbar: false,

      domComponents: {
        stylePrefix: "gjs-",
        wrapper: {
          removable: false,
          traits: [
            {
              type: "text",
              name: "text_content",
              label: "Content",
            },
          ],
        },
        components: [
          {
            type: "text",
            content: "Text",
            style: {
              padding: "10px",
            },
            removable: false,
          },
        ],
      },

      commands: {
        defaults: [
          {
            id: "preview-fullscreen",
            run() {
              editor.runCommand("preview");
              editor.runCommand("fullscreen");
            },
            stop() {
              editor.stopCommand("fullscreen");
              editor.stopCommand("preview");
            },
          },
          {
            id: "save-editor",
            run(editor: { store: () => GrapesJS.Editor }) {
              const store = editor.store();
              checkData();
            },
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: "panel__switcher",
            el: ".panel__switcher",
            buttons: [
              {
                id: "show-blocks",
                className: "fa fa-th-large",
                command: "show-blocks",
                active: false,

                attributes: { title: "Blocks" },
              },
              {
                id: "show-layers",
                className: "fa fa-bars",
                command: "show-layers",
                active: false,
                attributes: { title: "Layers" },
              },
              {
                id: "show-style",
                className: "fa fa-paint-brush",
                command: "show-styles",
                active: false,
                attributes: { title: "Styles" },
              },

              {
                id: "show-traits",
                className: "fa fa-cog",
                label: " Traits",
                command: "show-traits",
                visible: false,
                active: false,
                attributes: { title: "Traits" },
              },
            ],
          },
          {
            id: "panel-top",
            el: ".panel__top",
            buttons: [
              {
                id: "settings",
                className: "fa fa-cog btn--style-secondary",
                command: "sw-visibility",
                active: true,
                attributes: { title: "Settings" },
              },
              {
                id: "device-desktop",
                className: "fa fa-desktop btn--style-secondary",
                command: "toggle-devices",
                attributes: { title: "Toggle Display" },
              },
              {
                id: "history",
                className: "fa fa-history btn--style-secondary",
                command: "undo",
                togglable: true,
                attributes: { title: "Undo" },
              },

              {
                id: "preview",
                context: "preview",
                label: "\t\tPreview",
                className: "fa fa-eye btn--style-secondary",
                command: "preview-fullscreen",

                attributes: { title: "Preview" },
              },
              {
                id: "save",
                className: "btn--style-primary",
                command: "save-editor",
                label: "Save",
                attributes: { title: "Save" },
              },
              {
                id: "publish",
                className: "radio btn--style-secondary fa fa-check",
                command: "publish",
                label: " Publish",
                togglable: false,
                icon: "fa fa-check",
                attributes: { title: "Publish" },
              },
            ],
          },
        ],
      },
    });

    // setEditor(editor);

    // const openBl = editor.Panels.getButton('panel__switcher', 'show-blocks');
    // editor.on('load', () => openBl?.set('active', true));
    editor.onReady(() => {
      editor.runCommand("hide-styles");
      editor.runCommand("hide-traits");
      editor.runCommand("hide-layers");
    });


    editor.on('asset:add', (component) => {
      if (component.attributes.src.includes(serverURL)) {
        return;
      }
      
      const {src, width} = component.attributes;

      if (width > 0) {
        // binary file handling
          fetch(src).then((response) => {
            response.blob().then((fileBlob) => {
              let file = new File([fileBlob], component.attributes.name);
              uploadMedia({src:file, name: component.attributes.name});
            });
          });
      } else {
        // url file handling
        let arr = src.split('/');
        let filename = arr[arr.length - 1];
        fetch(src).then((response) => {
          response.blob().then((fileBlob) => {
            let file = new File([fileBlob], filename);
            uploadMedia({src:file, name: filename});
          });
        });
      }
      
    });



    editor.on("component:add", (component) => {
      editor.StyleManager.select(component);
      editor.runCommand("show-styles");
    });

    // editor.DomComponents.addType('text', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'text-title',
    //           label: 'Title',
    //           placeholder: 'Enter your title ',
    //           className: 'custom-text',
    //         },
    //         {
    //           type: 'text',
    //           name: 'text-link',
    //           label: 'Link',
    //           placeholder: 'Paste URL or Type ',
    //           class: 'custom-link',
    //         },
    //         {
    //           type: 'select',
    //           name: 'text-size',
    //           label: 'Size',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'small', name: 'Small' },
    //             { id: 'medium', name: 'Medium' },
    //             { id: 'large', name: 'Large' },
    //             { id: 'xl', name: 'XL' },
    //             { id: 'xxl', name: 'XXL' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'text-html-tag',
    //           label: 'HTML Tag',
    //           default: 'h1',
    //           options: [
    //             { id: 'h1', name: 'H1' },
    //             { id: 'h2', name: 'H2' },
    //             { id: 'h3', name: 'H3' },
    //             { id: 'h4', name: 'H4' },
    //             { id: 'h5', name: 'H5' },
    //             { id: 'h6', name: 'H6' },
    //             { id: 'div', name: 'div' },
    //             { id: 'span', name: 'span' },
    //             { id: 'p', name: 'p' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'text-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //             { id: 'justified', name: 'Justified' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    // //Trait for Map
    // editor.DomComponents.addType('map', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'map-location',
    //           label: 'Location',
    //           placeholder: 'Enter your location ',
    //         },
    //       ],
    //     },
    //   },
    // });

    // //Trait for Image
    // editor.DomComponents.addType('image', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'image-size',
    //           label: 'Size',
    //           default: 'large',
    //           options: [
    //             { id: 'thumbnail', name: 'Thumbnail- 150 x 150' },
    //             { id: 'medium', name: 'Medium- 300 x 300' },
    //             { id: 'medium-large', name: 'Medium Large-  768 x 0' },
    //             { id: 'large', name: 'Large- 1024 x 1024 ' },
    //             { id: 'custom', name: 'Custom' },
    //             { id: 'full', name: 'Full' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'image-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'image-caption',
    //           label: 'Caption',
    //           default: 'none',
    //           options: [
    //             { id: 'none', name: 'None' },
    //             { id: 'attachment', name: 'Attachment Caption' },
    //             { id: 'custom', name: 'Custom Caption' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'image-link',
    //           label: 'Link To',
    //           default: 'none',
    //           options: [
    //             { id: 'none', name: 'None' },
    //             { id: 'media ', name: 'Media File' },
    //             { id: 'curl', name: 'Custom URL' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'image-order',
    //           label: 'Order',
    //           default: 'none',
    //           options: [{ id: 'none', name: 'None' }],
    //         },
    //       ],
    //     },
    //   },
    // });

    editor.DomComponents.addType("text", {
      model: {
        defaults: {
          traits: [
            {
              type: "text",
              name: "text-title",
              label: "Title",
              placeholder: "Enter your title ",
              className: "custom-text",
            },
            {
              type: "text",
              name: "text-link",
              label: "Link",
              placeholder: "Paste URL or Type ",
              class: "custom-link",
            },
            {
              type: "select",
              name: "text-size",
              label: "Size",
              default: "default",
              options: [
                { id: "default", name: "Default" },
                { id: "small", name: "Small" },
                { id: "medium", name: "Medium" },
                { id: "large", name: "Large" },
                { id: "xl", name: "XL" },
                { id: "xxl", name: "XXL" },
              ],
            },

            {
              type: "select",
              name: "class",
              label: "HTML Tag",
              default: "h1",
              options: [
                { id: "h1", name: "H1" },
                { id: "h2", name: "H2" },
                { id: "h3", name: "H3" },
                { id: "h4", name: "H4" },
                { id: "h5", name: "H5" },
                { id: "h6", name: "H6" },
                { id: "div", name: "div" },
                { id: "span", name: "span" },
                { id: "p", name: "p" },
              ],
            },
            {
              type: "select",
              name: "text-alignment",
              label: "Alignment",
              default: "left",
              options: [
                { id: "left", name: "Left" },
                { id: "center", name: "Center" },
                { id: "right", name: "Right" },
                { id: "justified", name: "Justified" },
              ],
            },
          ],
        },
      },
    });

    //Trait for Map
    editor.DomComponents.addType("map", {
      model: {
        defaults: {
          traits: [
            {
              type: "text",
              name: "map-location",
              label: "Location",
              placeholder: "Enter your location ",
            },
          ],
        },
      },
    });

    //Trait for Image
    editor.DomComponents.addType("image", {
      model: {
        defaults: {
          traits: [
            {
              type: "select",
              name: "image-size",
              label: "Size",
              default: "large",
              options: [
                { id: "thumbnail", name: "Thumbnail- 150 x 150" },
                { id: "medium", name: "Medium- 300 x 300" },
                { id: "medium-large", name: "Medium Large-  768 x 0" },
                { id: "large", name: "Large- 1024 x 1024 " },
                { id: "custom", name: "Custom" },
                { id: "full", name: "Full" },
              ],
            },
            {
              type: "select",
              name: "image-alignment",
              label: "Alignment",
              default: "left",
              options: [
                { id: "left", name: "Left" },
                { id: "center", name: "Center" },
                { id: "right", name: "Right" },
              ],
            },
            {
              type: "select",
              name: "image-caption",
              label: "Caption",
              default: "none",
              options: [
                { id: "none", name: "None" },
                { id: "attachment", name: "Attachment Caption" },
                { id: "custom", name: "Custom Caption" },
              ],
            },
            {
              type: "select",
              name: "image-link",
              label: "Link To",
              default: "none",
              options: [
                { id: "none", name: "None" },
                { id: "media ", name: "Media File" },
                { id: "curl", name: "Custom URL" },
              ],
            },

            {
              type: "select",
              name: "image-order",
              label: "Order",
              default: "none",
              options: [{ id: "none", name: "None" }],
            },
          ],
        },
      },
    });

    //Trait for Button
    editor.DomComponents.addType("button", {
      model: {
        defaults: {
          traits: [
            {
              type: "text",
              name: "btn-text",
              label: "Button Text",
              placeholder: "Button Label",
            },
            {
              type: "text",
              name: "btn-link",
              label: "Link",
              placeholder: "Paste URL or Type ",
            },
            {
              type: "select",
              name: "btn-alignment",
              label: "Alignment",
              default: "left",
              options: [
                { id: "left", name: "Left" },
                { id: "center", name: "Center" },
                { id: "right", name: "Right" },
              ],
            },
            {
              type: "select",
              name: "btn-size",
              label: "Button Size",
              default: "default",
              options: [
                { id: "default", name: "Default" },
                { id: "xs", name: "Extra Small" },

                { id: "small", name: "Small" },
                { id: "medium", name: "Medium" },
                { id: "large", name: "Large" },
                { id: "xl", name: "Extra Large" },
              ],
            },
            {
              type: "select",
              name: "image-link",
              label: "Link To",
              default: "none",
              options: [
                { id: "none", name: "None" },
                { id: "media ", name: "Media File" },
                { id: "curl", name: "Custom URL" },
              ],
            },

            {
              type: "select",
              name: "image-order",
              label: "Order",
              default: "none",
              options: [{ id: "none", name: "None" }],
            },
          ],
        },
      },
    });

    //Trait for TextArea
    editor.DomComponents.addType("textarea", {
      model: {
        defaults: {
          traits: [
            {
              type: "text",
              name: "text-title",
              label: "Text",
              placeholder: "Insert Your Text Here",
            },

            {
              type: "select",
              name: "text-size",
              label: "Size",
              default: "default",
              options: [
                { id: "default", name: "Default" },
                { id: "small", name: "Small" },
                { id: "medium", name: "Medium" },
                { id: "large", name: "Large" },
                { id: "xl", name: "XL" },
                { id: "xxl", name: "XXL" },
              ],
            },

            {
              type: "select",
              name: "class",
              label: "HTML Tag",
              default: "h1",
              options: [
                { id: "h1", name: "H1" },
                { id: "h2", name: "H2" },
                { id: "h3", name: "H3" },
                { id: "h4", name: "H4" },
                { id: "h5", name: "H5" },
                { id: "h6", name: "H6" },
                { id: "div", name: "div" },
                { id: "span", name: "span" },
                { id: "p", name: "p" },
              ],
            },
          ],
        },
      },
    });

    // editor.DomComponents.addType('button', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'btn-text',
    //           label: 'Button Text',
    //           placeholder: 'Button Label',
    //         },
    //         {
    //           type: 'text',
    //           name: 'btn-link',
    //           label: 'Link',
    //           placeholder: 'Paste URL or Type ',
    //         },
    //         {
    //           type: 'select',
    //           name: 'btn-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'btn-size',
    //           label: 'Button Size',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'xs', name: 'Extra Small' },

    //             { id: 'small', name: 'Small' },
    //             { id: 'medium', name: 'Medium' },
    //             { id: 'large', name: 'Large' },
    //             { id: 'xl', name: 'Extra Large' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'image-link',
    //           label: 'Link To',
    //           default: 'none',
    //           options: [
    //             { id: 'none', name: 'None' },
    //             { id: 'media ', name: 'Media File' },
    //             { id: 'curl', name: 'Custom URL' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'image-order',
    //           label: 'Order',
    //           default: 'none',
    //           options: [{ id: 'none', name: 'None' }],
    //         },
    //       ],
    //     },
    //   },
    // });

    // //Trait for TextArea
    // editor.DomComponents.addType('textarea', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'text',
    //           name: 'text-title',
    //           label: 'Text',
    //           placeholder: 'Insert Your Text Here',
    //         },

    //         {
    //           type: 'select',
    //           name: 'text-size',
    //           label: 'Size',
    //           default: 'default',
    //           options: [
    //             { id: 'default', name: 'Default' },
    //             { id: 'small', name: 'Small' },
    //             { id: 'medium', name: 'Medium' },
    //             { id: 'large', name: 'Large' },
    //             { id: 'xl', name: 'XL' },
    //             { id: 'xxl', name: 'XXL' },
    //           ],
    //         },

    //         {
    //           type: 'select',
    //           name: 'text-html-tag',
    //           label: 'HTML Tag',
    //           default: 'h1',
    //           options: [
    //             { id: 'h1', name: 'H1' },
    //             { id: 'h2', name: 'H2' },
    //             { id: 'h3', name: 'H3' },
    //             { id: 'h4', name: 'H4' },
    //             { id: 'h5', name: 'H5' },
    //             { id: 'h6', name: 'H6' },
    //             { id: 'div', name: 'div' },
    //             { id: 'span', name: 'span' },
    //             { id: 'p', name: 'p' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    // //Trait for Testimonial
    // editor.DomComponents.addType('testimonial', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'testimonial-size',
    //           label: 'Image Size',
    //           default: 'full',
    //           options: [
    //             { id: 'thumbnail', name: 'Thumbnail- 150 x 150' },
    //             { id: 'medium', name: 'Medium- 300 x 300' },
    //             { id: 'medium-large', name: 'Medium Large-  768 x 0' },
    //             { id: 'large', name: 'Large- 1024 x 1024 ' },
    //             { id: 'custom', name: 'Custom' },
    //             { id: 'full', name: 'Full' },
    //           ],
    //         },
    //         {
    //           type: 'text',
    //           name: 'testimonial-name',
    //           label: 'Name',
    //           placeholder: 'John Doe',
    //         },

    //         {
    //           type: 'text',
    //           name: 'testimonial-title',
    //           label: 'Title',
    //           placeholder: 'Designer',
    //         },
    //         {
    //           type: 'text',
    //           name: 'testimonial-link',
    //           label: 'Link',
    //           placeholder: 'hhttps://your-link.com',
    //         },
    //         {
    //           type: 'select',
    //           name: 'testimonial-position',
    //           label: 'Image Position',
    //           default: 'aside',
    //           options: [
    //             { id: 'aside', name: 'Aside' },
    //             { id: 'top', name: 'Top' },
    //           ],
    //         },
    //         {
    //           type: 'select',
    //           name: 'testimonial-alignment',
    //           label: 'Alignment',
    //           default: 'left',
    //           options: [
    //             { id: 'left', name: 'Left' },
    //             { id: 'center', name: 'Center' },
    //             { id: 'right', name: 'Right' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    //Trait for Testimonial
    editor.DomComponents.addType("testimonial", {
      model: {
        defaults: {
          traits: [
            {
              type: "select",
              name: "testimonial-size",
              label: "Image Size",
              default: "full",
              options: [
                { id: "thumbnail", name: "Thumbnail- 150 x 150" },
                { id: "medium", name: "Medium- 300 x 300" },
                { id: "medium-large", name: "Medium Large-  768 x 0" },
                { id: "large", name: "Large- 1024 x 1024 " },
                { id: "custom", name: "Custom" },
                { id: "full", name: "Full" },
              ],
            },
            {
              type: "text",
              name: "testimonial-name",
              label: "Name",
              placeholder: "John Doe",
            },

            {
              type: "text",
              name: "testimonial-title",
              label: "Title",
              placeholder: "Designer",
            },
            {
              type: "text",
              name: "testimonial-link",
              label: "Link",
              placeholder: "hhttps://your-link.com",
            },
            {
              type: "select",
              name: "testimonial-position",
              label: "Image Position",
              default: "aside",
              options: [
                { id: "aside", name: "Aside" },
                { id: "top", name: "Top" },
              ],
            },
            {
              type: "select",
              name: "testimonial-alignment",
              label: "Alignment",
              default: "left",
              options: [
                { id: "left", name: "Left" },
                { id: "center", name: "Center" },
                { id: "right", name: "Right" },
              ],
            },
          ],
        },
      },
    });

    //Trait for Header
    editor.DomComponents.addType("header", {
      model: {
        defaults: {
          traits: [
            {
              type: "select",
              name: "header-border",
              label: "Border Type",
              default: "none",
              options: [
                { id: "none", name: "None" },
                { id: "solid", name: "Solid" },
                { id: "dashed", name: "Dashed" },
                { id: "dotted", name: "Dotted" },
                { id: "double", name: "Double" },
                { id: "groove", name: "Groove" },
                { id: "ridge", name: "Ridge" },
                { id: "inset", name: "Inset" },
                { id: "outset", name: "Outset" },
              ],
            },
          ],
        },
      },
    });

    //Trait for Footer
    editor.DomComponents.addType("footer", {
      model: {
        defaults: {
          traits: [
            {
              type: "select",
              name: "footer-border",
              label: "Border Type",
              default: "none",
              options: [
                { id: "none", name: "None" },
                { id: "solid", name: "Solid" },
                { id: "dashed", name: "Dashed" },
                { id: "dotted", name: "Dotted" },
                { id: "double", name: "Double" },
                { id: "groove", name: "Groove" },
                { id: "ridge", name: "Ridge" },
                { id: "inset", name: "Inset" },
                { id: "outset", name: "Outset" },
              ],
            },
          ],
        },
      },
    });

    // // Trait for Inner Section
    // editor.DomComponents.addType('inner-section', {
    //   model: {
    //     defaults: {
    //       traits: [
    //         {
    //           type: 'select',
    //           name: 'header-border',
    //           label: 'Border Type',
    //           default: 'none',
    //           options: [
    //             { id: 'solid', name: 'Solid' },
    //             { id: 'dashed', name: 'Dashed' },
    //             { id: 'dotted', name: 'Dotted' },
    //             { id: 'double', name: 'Double' },
    //             { id: 'groove', name: 'Groove' },
    //             { id: 'ridge', name: 'Ridge' },
    //             { id: 'inset', name: 'Inset' },
    //             { id: 'outset', name: 'Outset' },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // });

    editor.DomComponents.addType("div", {
      model: {
        defaults: {
          traits: [
            {
              type: "text",
              name: "map-location",
              label: "Location",
              placeholder: "Enter your location ",
            },
          ],
        },
      },
    });

    editor.on("component:selected", (component) => {
      if (component.get("type") == "text") {
        editor.runCommand("show-traits");
        component.components(component.get("traits").models[1].get("value"));
      }
    });
  addAssets();
  
  }, [setEditorState]);


  return (
    <div className="main__content">
      <Eyebrow />
      <div className="panel__top"></div>
      <div className="editor-row">
        <div className="panel__basic-actions"></div>
        <div className="panel__left">
          <div className="panel__switcher"></div>
          <div className="styles-container"></div>
          <div className="traits-container"></div>
          <div className="layers-container"></div>
          <div className="blocks"></div>
        </div>
        <div className="editor-canvas">
          <div className="editor"></div>
        </div>
      </div>
    </div>
  );
};
export default NewPageBuilder;













/*

//@ts-ignore

import { ErrorMessage as DescriptionAlerts } from '@hookform/error-message';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Button } from 'payload/components/elements';
import { Form } from 'payload/components/forms';
import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FormSelect from '../../blocks/FormSelect';
import FormSwitch from '../../blocks/FormSwitch';
import FormTip from '../../blocks/FormTip';
import TextInput from '../../blocks/TextInput';
import { useStyles } from './css';
const baseClass = 'custom-route';

const portal_url_tip =
  'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL';
const portal_id_tip = 'The read only filed displays the Portal ID';
const portal_name_tip = 'The go-to-market name of the career portal';
const company_name_tip =
  'The company of your career Portal. This can be a shortened version of Portal.';

const BasicPortalPage: React.FC = (props) => {
  const history = useHistory();
  const [brandSwitch, setBrandSwitch] = React.useState<boolean>(true);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [tenantID, setTenantID] = useState('');
  const [toolTipVisible, setToolTipVisible] = useState('portal_name');
  const [defaultBrands, setDefaultBrands] = useState([]);
  const [updateApi, setUpdateApi] = useState(false);
  const { setStepNav } = useStepNav();
  const [dense, setDense] = React.useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    setStepNav([
      {
        label: 'Portal Identity',
        url: '/basic-portal-identity',
      },
    ]);
  }, [setStepNav]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { control, getValues, register, watch } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: 'brands',
    control,
  });
  const data = watch();

  const handleAddRow = (value: unknown) => {
    console.log('handleAddRow', handleAddRow);

    append(value);
  };

  console.log('getValues', getValues());

  const onClickBrandName = () => {
    let finalDefaultBrandsArray = getValues()?.brands.map((i) => ({
      value: i.name,
      label: i.name,
    }));
    setDefaultBrands(finalDefaultBrandsArray);
  };

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find(
    (collection) => collection.slug === userSlug
  );

  const [touched, setTouched] = useState('');

  const onSuccess = (data) => {
    setId(data.doc.id);
    if (brandSwitch) {
      setVisible(true);
    } else {
      setVisible(false);
      history.push({
        pathname: `/admin/collections/portal-identity/${data.doc.id}`,
        //@ts-ignore
        param: data.doc.id,
      });
    }
  };

  const handleNavigate = () => {
    history.push({
      pathname: `/admin/collections/portal-identity/${id}`,
      //@ts-ignore
      param: id,
    });
  };

  return (
    <DefaultTemplate>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12}>
            <div className="portal-banner">
              <div className="portal-banner__inner">
                <span>Welcome to</span>
                <h1>
                  <span>Experfy</span> Studio
                </h1>
                <p>
                  Experfy Studio is a recruitment suite specifically developed
                  for talent sourcing, pipelining, and hiring. It comes with the
                  drag and drop website editor, widgets, and prebuilt modules
                  like job listing, TalentClouds and Practice Areas that are
                  needed for recruitment Marketing and pipelining of talent.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="card-wrapper">
              <div className="card-portal">
                <div className="card-portal__content">
                  <span className="card-portal__icon card-portal--external"></span>
                  <h3 className="card-portal__title">
                    External TalentCloud Career Portal
                  </h3>
                  <ul className="card-portal__list">
                    <li>Initiate the creation and enter basic information</li>
                    <li>Configure the Portal</li>
                    <li>Configure theme(s) for your portal</li>
                    <li>
                      Add pages and create custom content through pre-configured
                      sections and elements.
                    </li>
                    <li>
                      Publish the portal to start pipelining and recruiting
                      talent from external channels.
                    </li>
                  </ul>
                </div>
                <div className="card-portal__footer">
                  <Button
                    type="button"
                    buttonStyle="primary"
                    onClick={() => handleOpen()}
                  >
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="card-wrapper">
              <div className="card-portal">
                <div className="card-portal__content">
                  <span className="card-portal__icon card-portal--internal"></span>
                  <h3 className="card-portal__title">
                    Inner Mobility through Internal TalentCloud Marketplace
                  </h3>
                  <p className="card-portal__text">
                    Mapping and discovery of internal talent through TalentCloud
                    enables Managers to easily identify the resources that are
                    needed for roles, projects and gigs. Fully brand and
                    customize your internal opportunity marketplace and provide
                    your employees a way to engage with new opportunities within
                    your organization.
                  </p>
                </div>
                <div className="card-portal__footer">
                  <Button
                    type="button"
                    buttonStyle="primary"
                    icon="plus"
                    iconPosition="left"
                    iconStyle="without-border"
                  >
                    Create New
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth={true}
        >
          {error ? (
            <Grid>
              <DescriptionAlerts
                name={errorMessage}
                errors={setError}
                message={'Check below errors'}
              />
            </Grid>
          ) : (
            ``
          )}
          <DialogTitle>
            <Grid container justifyContent="space-between" alignItems="center">
              <h2 className="modal-title modal-title--lg">Portal Identity</h2>

              <IconButton onClick={() => handleClose()}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </DialogTitle>

          {!visible && (
            <DialogContent>
              <Form
                method="post"
                onSuccess={onSuccess}
                action={`${serverURL}${api}/basic-portal-identity`}
                validationOperation="create"
              >
                <p className="mb-4">
                  Fill in the information below and you will be on your way to
                  creating your Career portal
                </p>

                <div className="row">
                  <div className="col-md-8">
                    <TextInput
                      label={'Portal Name'}
                      path={'career_portal_name'}
                      required={true}
                      placeHolder="Company Career Portal"
                      setTouched={setTouched}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'career_portal_name' && (
                        <FormTip text={portal_name_tip} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <TextInput
                      path={'portal_id'}
                      label={'Portal ID'}
                      placeHolder={'CP-ID798998989'}
                      setTouched={setTouched}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'portal_id' && (
                        <FormTip
                          text={'The read only filed displays the Portal ID'}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <TextInput
                      path={'portal_url'}
                      label="Portal URL"
                      required={true}
                      placeHolder="https://www.experfy.com/career-portal"
                      setTouched={setTouched}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'portal_url' && (
                        <FormTip text={portal_url_tip} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <TextInput
                      path={'company_name'}
                      label="Company Name"
                      placeHolder="Company Name"
                      setTouched={setTouched}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'company_name' && (
                        <FormTip text={company_name_tip} />
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <FormSelect
                      type={'select'}
                      options={['English', 'Spanish']}
                      label="Default Language"
                      name={'default_language'}
                      path={'default_language'}
                      defaultValue="English"
                      setTouched={setTouched}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'default_language' && (
                        <FormTip text="Set the default language of your career portal for your visitors" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <FormSelect
                      options={['US', 'ES']}
                      label="Default Locale"
                      name={'default_locale'}
                      path={'default_locale'}
                      defaultValue="US"
                      type={'select'}
                      setTouched={setTouched}
                    />
                  </div>

                  <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'default_locale' && (
                        <FormTip text="Set the default locale of your career portal for your visitors" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <p>
                      If you want to create microsite for your different brands
                      within your career portal, enable branding below.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 d-flex align-items-center">
                    <FormSwitch
                      label="Branding On"
                      checked={brandSwitch}
                      setBrandSwitch={setBrandSwitch}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  buttonStyle="primary"
                  className="btn-hover color-9"
                >
                  Save
                </Button>
              </Form>
            </DialogContent>
          )}

          {visible && (
            <DialogContent>
              <Form
                method={id ? 'patch' : 'post'}
                action={`${serverURL}${api}/basic-portal-identity/${id ?? ''}`}
              >
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <FormSelect
                      type={'select'}
                      options={[]}
                      label="Default Brand"
                      name={'default_brand'}
                      path={'default_brand'}
                    />
                  </Grid>
                </Grid>

                <Typography variant="h5" mb={2} mt={4}>
                  Please choose whether you would like your microsites in your
                  career portal network to use subdomains or sub-directories.
                </Typography>

                <RadioGroup
                  aria-labelledby="radio-buttons"
                  defaultValue="micro-sites"
                  name="radio-buttons-group"
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={2}>
                      <FormControlLabel
                        name={'sub_domain'}
                        value="sub_domain"
                        control={<Radio />}
                        label="Sub-domains"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Stack
                        className={classes.radioExample}
                        direction="row"
                        spacing={2}
                      >
                        <Typography>Example</Typography>
                        <Typography>
                          microsite1/companyname/careers.experfy.com
                        </Typography>
                        <Typography>
                          microsite2/companyname/careers.experfy.com
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControlLabel
                        name={'sub_directories'}
                        value="sub_directories"
                        control={<Radio />}
                        label="Sub-directories"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Stack
                        className={classes.radioExample}
                        direction="row"
                        spacing={2}
                      >
                        <Typography>Example</Typography>
                        <Typography>
                          companyname/careers.experfy.com/microsite1
                        </Typography>
                        <Typography>
                          companyname/careers.experfy.com/microsite2
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </RadioGroup>

                <Grid container justifyContent="flex-end" my={2}>
                  <Button
                    icon={<AddIcon />}
                    buttonStyle="primary"
                    onClick={handleAddRow}
                  >
                    Add Brand
                  </Button>
                </Grid>
                <TableContainer>
                  <Table aria-label="table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Brand Name</TableCell>
                        <TableCell>URL Brand Identifier</TableCell>
                        <TableCell>Microsite Identifier</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fields.map((item, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell>
                              {/* <input {...register(`brands.${index}.brand_name`)}
          placeholder="Brand Name" />
*/}
<TextInput
// label={'Portal Name'}
path={`brand_name`}
required={false}
index={index}
brand="brands"
placeHolder="Brand Name"
// setTouched={setTouched}
/>
</TableCell>
<TableCell>
{/* <input {...register(`brands.${index}.brand_identifier`)}
placeholder="Brand Identifier"/> */}

<TextInput
// name="Portal Name"
path={`brand_identifier`}
required={false}
index={index}
brand="brands"
placeHolder="Brand Identifier"
// setTouched={setTouched}
/>
</TableCell>
<TableCell>
{/* <input {...register(`brands.${index}.microsoft_identifier`)}
placeholder="Microsoft Identifier"/> */}

<TextInput
// path={`brands.${index}.microsite_identifier`}
path={`microsoft_identifier`}
index={index}
brand="brands"
required={false}
placeHolder="Microsoft Identifier"
// setTouched={setTouched}
/>
</TableCell>
<TableCell>
<Button
type="button"
buttonStyle="icon-label"
icon={'x'}
onClick={() => remove(index)}
>
Delete
</Button>
</TableCell>
</TableRow>
);
})}
</TableBody>
</Table>
</TableContainer>

<Button
type="submit"
buttonStyle="primary"
// onClick={handlenaviagte}
>
Save
</Button>
</Form>
</DialogContent>
)}
</Dialog>
</Box>
</DefaultTemplate>
);
};

export default BasicPortalPage;

*/