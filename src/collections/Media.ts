// import { CollectionConfig } from 'payload/types';

// export type MediaType = {
//   filename: string
//   width: number
//   height: number
//   alt: string
//   sizes: {
//     card?: {
//       filename: string
//       width: number
//       height: number
//     }
//     feature?: {
//       filename: string
//       width: number
//       height: number
//     }
//   }
// }

// const Media: CollectionConfig = {
//   slug: 'media',
//   labels: {
//     singular: 'Media Library',
//     plural: 'Media Library',
//   },
//   access: {
//     read: (): boolean => true, // Everyone can
//     create: (): boolean => true,
import { CollectionConfig } from "payload/types";
import RelationCollection, { Type as MediaType } from "./IconCollection";
// import { Image, Type as ImageType } from '../blocks/Image';
import { Content, Type as ContentType } from "../blocks/Content";
import React from "react";
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
    group: "Media Library",
    useAsTitle: "title",

  },

  fields: [

    {
      name: "Media Type",

      type: "radio",
      options: ['Icon', 'Images', 'Videos'],
      label: "Media Type",
      defaultValue: 'Icon',
      required: true,
      admin: {
        layout: 'horizontal',
      }
    },
    {
      name: 'keywords',
      label: 'Keywords',
      type: 'text',
      
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    

  ],

  // upload: false,
  // {
  //   adminThumbnail: "card",


  //   imageSizes: [
  //     {
  //       name: "card",
  //       width: 640,
  //       height: 480,
  //     },
  //     {
  //       name: "portrait",
  //       width: 768,
  //       height: 1024,
  //     },
  //     {
  //       name: "square",
  //       width: 1200,
  //       height: 1200,
  //     },
  //     {
  //       name: "feature",
  //       width: 1024,
  //       height: 576,
  //     },
  //   ],
  // adminThumbnail: 'square',
  //   mimeTypes: [
  //     "image/*",'image/svg',"image/jpeg"],
  // },
  access: {
    read: (): boolean => true,
    create: (): boolean => true,

  },
  upload: {
    adminThumbnail: "image",
    // imageSizes: [
    //   {
    //     name: "icon",
    //     width: 48,
    //     height: 48,
    //   },
    //   {
    //     name: "image-square",
    //     width: 1024,
    //     height: 1024,
    //   },
    //   {
    //     name: "video-thumbnail",
    //     width: 200,
    //     height: 200,
    //   },
    //   {
    //     name: "feature",
    //     width: 1024,
    //     height: 576,
    //   },
    // ],
  },
  // fields: {
  //   title:{
  //     type: "radio",
  //     options: ['Icon','Image','Video'],
  //     defaultValue: 'Icon',
  //   },
  //   // {
  // }

  //   {
  //     type: "radio",
  //     options: [


  //           {

  //             label: "Icon",
  //             value: "icon",

  //           },
  //           {

  //             label: "Image",
  //             value: "image",

  //           },
  //           {

  //             label: "Video",
  //             value: "video",
  //           },
  //           // {
  //           //   name: "icon",
  //           //   label: "Icon Image",
  //           //   type: "upload",
  //           //   relationTo: 'media',

  //           // },
  //         ],
  //   },




  //   name: 'title',
  //   label: 'Page Title',
  //   type: 'text',
  //   required: true,
  // },
  // // {
  // //   name: 'image',
  // //   label: 'Featured Image',
  // //   type: 'upload',
  // //   relationTo: 'media',
  // // },
  // {
  //   name: 'layout',
  //   label: 'Page Layout',
  //   type: 'blocks',
  //   minRows: 1,
  //   blocks: [
  //     Content,
  //     // Image,
  //   ],
  // },
  // {
  //   name: 'meta',
  //   label: 'Page Meta',
  //   type: 'group',
  //   fields: [
  //     {
  //       name: 'title',
  //       label: 'Title',
  //       type: 'text',
  //     },
  //     {
  //       name: 'description',
  //       label: 'Description',
  //       type: 'textarea',
  //     },
  //     {
  //       name: 'keywords',
  //       label: 'Keywords',
  //       type: 'text',
  //     },
  //   ],
  // },
  // {
  //   name: 'slug',
  //   label: 'Page Slug',
  //   type: 'text',
  //   admin: {
  //     position: 'sidebar',
  //   },
  //   hooks: {
  //     beforeValidate: [
  //     ],
  //   },
  // },

  hooks: {
    // // beforeLogin: [
    // //   (args) => {
    // //     console.log("before login called", args);
    // //   },
    // // ],
    // // afterLogin: [
    // //   (args) => {
    // //     console.log("After Login Called", args);
    // //   },
    // // ],
    // // afterLogout: [
    // //   (args) => {
    // //     console.log("After Logout Called", args);
    // //   },
    // // ],
    // afterRefresh: [
    //   (args) => {
    //     console.log("After Refresh Called", args);
    //   },
    // ],
    // afterMe: [
    //   (args) => {
    //     console.log("After Me Called", args);
    //   },
    // ],
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




