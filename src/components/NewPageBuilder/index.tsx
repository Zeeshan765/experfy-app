// @ts-ignore
import GrapesJS from "grapesjs";
import React, { useEffect, useRef, useState, useContext } from "react";
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

import Experfy from "../PageBuilder/ExperfyPlugin";
import Forms from "grapesjs-plugin-forms";
import NavBar from "grapesjs-navbar";
import axios from "axios";

import { toast } from "react-toastify";
import { Context } from "../../MyProvider";
const NewPageBuilder = ({ status, handleClose }) => {
  let [editor, setEditorState] = React.useState<GrapesJS.Editor>();
  const [elementCreate, setElementCreate] = useState(false);
  // const [pagePayload, setPagePayload] = useState<any>({
  //   title: "sample",
  //   author:'',
  // });
  const { setStepNav } = useStepNav();

  const { setSelectedPageCode } = useContext(Context);
  const [headingText, setHeadingText] = React.useState<string>("abc");
  console.log("test of editor");
  const testRef = useRef();

  const clearLocalStorage = () => {
    localStorage.removeItem("page_code");
  };

  const dataHandlear = () => {
    const data = localStorage.getItem("page_code");
    if (status === "NewFromPage") {
      handleClose();
      setSelectedPageCode(data);
      clearLocalStorage();
    } else {
      axios
        .post("http://localhost:3001/api/page-Template", {
          title: "title",
          pageCode: data,
        })
        .then((res) => {
          clearLocalStorage();
          toast.success("Changes saved successfully");
        })
        .catch((err) => {
          console.log("err", err);
        });

      handleClose();
      setSelectedPageCode("12");
    }
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
              dataHandlear();
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
              name: "text-html-tag",
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
              name: "text-html-tag",
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
