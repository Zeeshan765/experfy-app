import { CollectionConfig } from 'payload/types';
import RelationCollection, { Type as MediaType } from './IconCollection';
// import { Image, Type as ImageType } from '../blocks/Image'

export type Type = {
  title: string;
  slug: string;
  // image?: MediaType;
  featuredMedia: MediaType;

  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};
export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'keywords',
  },

  // pagination: {
  //   itemsPerPage: 10,
  // },

  upload: {
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
      },
      {
        name: 'square',
        width: 1200,
        height: 1200,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      },
    ],
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
  },
  fields: [
    {
      name: 'mediaType',
      type: 'radio',
      label: '.',
      defaultValue: 'Icon',
      options: [
        {
          label: 'Icon',
          value: 'Icon',
        },
        {
          label: 'Photo',
          value: 'Photo',
        },
        {
          label: 'Video',
          value: 'Video',
        },
      ],
    },
    {
      name: 'icon',
      label: 'Icon Title',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => {
          console.log('Icon siblingData===', siblingData?.mediaType);
          return siblingData?.mediaType === 'icon';
        },
      },
    },

    {
      name: 'photo',
      label: 'Photo Title',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => {
          console.log(
            'Photo SiblingData===',
            siblingData?.mediaType === 'Photo' ?? false
          );
          return siblingData?.mediaType === 'photo';
        },
      },
    },
    {
      name: 'video',
      label: 'Video Title',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => {
          console.log(
            'Video siblingData===',
            siblingData?.mediaType === 'Video' ?? false
          );

          return siblingData?.mediaType === 'video';
        },
      },
    },
    {
      name: 'keywords',
      label: 'Keywords',
      type: 'text',
      defaultValue: 'Media',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
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
