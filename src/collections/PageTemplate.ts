import { CollectionConfig } from 'payload/types';
import PageTheme from '../components/PageBuilderTemplate';
import FaceLessModel from '../components/Model';
import PageTemplates from '../components/pageTemplates';
export type Type = {
  title: string;
  slug: string;
  pageType?: 'scratch' | 'template';
};

export const PageTemplateCollection: CollectionConfig = {
  slug: 'page-Template',

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "pageType", "updatedAt"],
    disableDuplicate: true,
    
    components: {
      views: {
        Edit: PageTemplates ,
      
        // List: Pages,
      },
    },
  },
  
  // upload: {
  //   adminThumbnail: 'pageThumnail',
  //   //when we upload the image in grapes this cause some issue
  //   // imageSizes: [
  //   //   {
  //   //     name: 'card',
  //   //     width: 640,
  //   //     height: 480,
  //   //   },
  //   //   {
  //   //     name: 'portrait',
  //   //     width: 768,
  //   //     height: 1024,
  //   //   },
  //   //   {
  //   //     name: 'square',
  //   //     width: 1200,
  //   //     height: 1200,
  //   //   },
  //   //   {
  //   //     name: 'feature',
  //   //     width: 1024,
  //   //     height: 576,
  //   //   },
  //   // ],
  //   // adminThumbnail: '',
  //   // mimeTypes: (_,siblingData):String=>{
  //   //         console.log("image condation",siblingData);
  //   //         return ["image/*", "image/svg", "image/jpeg"]},
  //   //   },
  //   //   admin: {

  //   //     condition:  (_, siblingData)=> {
  //   //         console.log("image========",siblingData);
  //   // //  return ["image/*", "image/svg", "image/jpeg"];
  //   //     },
  // },

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    
    {
      name: 'pageThumnail',
      label: 'Page Thumnail',
      type: 'text',
      unique: true,
      // relationTo: 'media',
    },
    {
      name: 'pageCode',
      label: 'Page Code',
      type: 'text',
    },
  ],
};

export default PageTemplateCollection;
