import { CollectionConfig } from 'payload/types';
import PageTheme from '../components/PageBuilderTemplate';
import PageBuilder from '../components/PageBuilder/SectionTemplates';
import Payload from 'payload';
import SelectPage from '../components/selectPageCode';
import NewPageBuilder from '../components/PageBuilder';
import NewPageBuilderModel from '../components/Model/NewPageBuilder';
import PageBuildFromScratch from '../components/PageBuildFromScratch';
import Pages from '../components/Pages';

// export type Type = {
//   title: string;
//   slug: string;
//   pageType?: "scratch" | "template";
// };

import { Access } from 'payload/config';
// const canDeleteCustomer: Access = async ({ req, id }) => {
//   // if (!id) {
//   //   // allow the admin UI to show controls to delete since it is indeterminate without the id
//   //   return true;
//   // }
//   const { user } = req;
//   console.log('user', user)
//   // query another collection using the id
//   const result = await req.payload.find({
//     collection: 'pages',
//     limit: 0,
//     depth: 0,
//     where: {
//       user: { equals: user.id },
//     },
//   });
//   console.log('result', result);
//   return result;
// };

export const Page: CollectionConfig = {
  slug: 'pages',
  versions: true,

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pageType', 'updatedAt'],

    components: {
      views: {
        Edit: Pages,

        // List: Pages,
      },
    },
  },
  endpoints: [
    {
      path: "/",
      method: "get",
      handler: async (req, res, next) => {
        const { user } = req;
        const result = await req.payload.find({
          collection: "pages",
          limit: 0,
          depth: 0,
          where: {
            user: { equals: user.id },
          },
        });
        res.send(result);
      }
    }
  ],

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    // page title field

    {
      name: 'user',
      type: 'text',
    },
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    // select page type field
    {
      name: 'pageType',
      type: 'text',
      required: true,
    },
    // page Id when select from template field
    // {
    //   name: "pageId",
    //   type: "text",
    // },
    { name: 'pageCode', type: 'text' },
  ],
  // hooks: {
  //   afterChange: [({doc, // full document data
  //   req, // full express request
  //   previousDoc, // document data before updating the collection
  //   operation,}) => {
  //     req.res.redirect('/adimn/');
  //   }],
  // },
};

export default Page;
