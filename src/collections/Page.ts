import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import formatSlug from '../utilities/formatSlug';
// import { Image, Type as ImageType } from '../blocks/Image';
import { CallToAction, Type as CallToActionType } from '../blocks/CallToAction';
import { Content, Type as ContentType } from '../blocks/Content';

export type Layout = CallToActionType | ContentType 


export type Type = {
  title: string
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'image',
    //   label: 'Featured Image',
    //   type: 'upload',
    //   relationTo: 'media',
    // },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        // Image,
      ],
    },
    {
      name: 'meta',
      label: 'Page Meta',
      type: 'group',
      fields: [
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
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          formatSlug('title'),
        ],


      },
    },
  ],



  hooks:{
    beforeLogin:[(args)=> {
      console.log("brfore login called", args);
    }],
 afterLogin:[(args)=>{
  console.log("After Login Called",args)
 }],
 afterLogout:[(args)=>{
  console.log("After Logout Called",args)
 }],

 afterRefresh:[(args)=>{
  console.log("After Refresh Called",args)
 }],
 afterMe:[(args)=>{
  console.log("After Me Called",args)
 }],



  },
};

export default Page;
