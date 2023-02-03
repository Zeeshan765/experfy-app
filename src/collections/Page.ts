import { CollectionConfig } from "payload/types";
import PageTheme from "../components/PageBuilderTemplate";
import PageBuilder from "../components/PageBuilder/SectionTemplates";
import Payload from "payload";
import SelectPage from "../components/selectPageCode";
import NewPageBuilder from "../components/PageBuilder";
import NewPageBuilderModel from "../components/Model/NewPageBuilder";
import PageBuildFromScratch from "../components/PageBuildFromScratch";
import Pages from "../components/Pages";

export type Type = {
  title: string;
  slug: string;
  pageType?: "scratch" | "template";
};

export const Page: CollectionConfig = {
  slug: "pages",
  versions: true,

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "pageType", "updatedAt"],
    
    components: {
      views: {
        Edit: Pages,
        List: Pages,
      },
    },
  },

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    // page title field
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
    },
    // author field
    // {
    //   name: "author",
    //   label: "Author",
    //   type: "relationship",
    //   relationTo: "users",
    //   hasMany: false,
    //   required: true,
    // },
    // select page type field
    {
      name: "pageType",
      type: "text",
      required: true,
      // access: {
      //   read: () => true,
      //   create: () => true,
      //   update: () => true,
      // },
      // admin: {
      //   layout: "vertical",
      //   description: "Choose how you want to create this page",
      //   // condition: (data) => {
      //   //   console.log("data", data);

      //   //   // if (data?.title && data?.author && data?.pageType==="scratch") {
      //   //   //   localStorage.setItem("pageAttributes", JSON.stringify(data));
      //   //   // }
      //   //   return data.title && data.author;
      //   // },
      // },
      // options: [
      //   {
      //     label: "Create from scratch",
      //     value: "scratch",
      //   },
      //   {
      //     label: "Use a template",
      //     value: "template",
      //   },
      // ],
    },
    // page build from template field
    {
      name: "template",
      type: "ui",
      admin: {
        condition: (data) => data.pageType === "template",
        components: {
          Field: PageTheme,
        },
      },
    },
    // page build from scratch field
    {
      name: "from_scratch",
      type: "ui",
      admin: {
        condition: (data) => data.pageType === "scratch",
        components: {
          Field: PageBuildFromScratch,
        },
      },
    },
    // page Id when select from template field
    {
      name: "page_Id",
      type: "text",
      // admin: {
      //   components: {
      //     Field: SelectPage,
      //   },
      //   condition: (data) => data.pageType === "template",
      // },
    },
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
