import { CollectionConfig } from "payload/types";
import RelationCollection, { Type as MediaType } from "./IconCollection";
// import { Image, Type as ImageType } from '../blocks/Image';
import { Content, Type as ContentType } from "../blocks/Content";
export type Layout = ContentType;
export type Type = {
  title: string;
  slug: string;
  // image?: MediaType;
  featuredMedia: MediaType;
  layout: Layout[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};
export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "title",
  },
  upload: {
    adminThumbnail: "card",
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 480,
      },
      {
        name: "portrait",
        width: 768,
        height: 1024,
      },
      {
        name: "square",
        width: 1200,
        height: 1200,
      },
      {
        name: "feature",
        width: 1024,
        height: 576,
      },
    ],
    mimeTypes: ["image/*", "image/svg","video/*", "image/png"],
    // adminThumbnail: '',
    // mimeTypes: (_,siblingData):String=>{
    //         console.log("image condation",siblingData);
    //         return ["image/*", "image/svg", "image/jpeg"]},
    //   },
    //   admin: {

    //     condition:  (_, siblingData)=> {
    //         console.log("image========",siblingData);
    // //  return ["image/*", "image/svg", "image/jpeg"];
    //     },
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
    update: () => true,
    create: () => true,
    delete: () => true,
  },

  fields: [

    {
      name: "mediaType",
      type: "radio",
      label: ".",
      defaultValue: "Icon",
      options: [
        {
          label: "Icon",
          value: "Icon",
        },
        {
          label: "Photo",
          value: "Photo",
        },
        {
          label: "Video",
          value: "Video",
        },
      ],
    },
    {
      name: "Icon Title",
      label: "Icon Title",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingData) => {
          console.log("Icon siblingData===", siblingData?.mediaType);
          return siblingData?.mediaType === "Icon";
        },
      },
    },

    {
      name: "Photo Title",
      label: "Photo Title",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingData) => {
          console.log(
            "Photo SiblingData===",
            siblingData?.mediaType === "Photo" ?? false
          );
          return siblingData?.mediaType === "Photo";
        },
      },
    },
    {
      name: "Video Title",
      label: "Video Title",
      type: "text",
      required: true,
      admin: {
        condition: (_, siblingData) => {
          console.log(
            "Video siblingData===",
            siblingData?.mediaType === "Video" ?? false
          );

          return siblingData?.mediaType === "Video";
        },
      },
    },
    {
      name: "keywords",
      label: "Keywords",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      
    },
  
    

  ],
  hooks: {
    //     beforeLogin: [
    //       (args) => {
    //         console.log("brfore login called", args);
    //       },
    //     ],
    //     afterLogin: [
    //       (args) => {
    //         console.log("After Login Called", args);
    //       },
    //     ],
    //     afterLogout: [
    //       (args) => {
    //         console.log("After Logout Called", args);
    //       },
    //     ],
    //     afterRefresh: [
    //       (args) => {
    //         console.log("After Refresh Called", args);
    //       },
    //     ],
    //     afterMe: [
    //       (args) => {
    //         console.log("After Me Called", args);
    //       },
    //     ],
  },
};
export default Media;
// import path from "path";
// import { CollectionConfig } from "payload/types";
// import testTab from "../globals/MenueTest";
// export type MediaType = {
//   filename: string;
//   width: number;
//   height: number;
//   alt: string;
//   sizes: {
//     card?: {
//       filename: string;
//       width: number;
//       height: number;
//     };
//     feature?: {
//       filename: string;
//       width: number;
//       height: number;
//     };
//   };
// };
// const TestCollection: CollectionConfig = {
//   slug: "testcollection",
//   labels: {
//     singular: "Test Collection",
//     plural: "Test Collections",
//   },
//   access: {
//     read: (): boolean => true, // Everyone can
//     create: (): boolean => true,
//     update: (): boolean => true,
//     delete: (): boolean => true,
//   },
//   admin: {
//     useAsTitle: "Test Collection",
//   },
//   upload: {
//     adminThumbnail: "card",
//     imageSizes: [
//       {
//         name: "card",
//         width: 640,
//         height: 480,
//       },
//       {
//         name: "feature",
//         width: 1024,
//         height: 576,
//       },
//     ],
//   },
//   fields: [
//     {
//       name: "Icon Title",
//       label: "Icon Title",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "Icon keywords",
//       type: "text",
//       label: "Icon Keywords",
//       required: true,
//     },
//     {
//       name: "Meta Description",
//       type: "richText",
//       required: true,
//     },
//   ],
// };
// export default TestCollection;









//     delete: (): boolean => true,
//   },
//   upload: {
//     adminThumbnail: 'card',
//     imageSizes: [
//       {
//         name: 'card',
//         width: 640,
//         height: 480,
//       },
//       {
//         name: 'feature',
//         width: 1024,
//         height: 576,
//       },
//     ],
//   },
//   fields: [
//     {
//       name: 'alt',
//       label: 'Alt Text',
//       type: 'text',
//       required: true,
//     },
//   ],
// };

// export default Media;




