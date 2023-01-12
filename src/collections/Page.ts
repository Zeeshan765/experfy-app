import { CollectionConfig } from "payload/types";
import PageTheme from "../components/pagebuilderTemplate";
import FaceLessModel from "../components/Model";
import PageBuilder from "../components/PageBuilder/SectionTemplates";
import Templates from "../components/Templates";
// import SelectPage from "../components/selectPageCode.tsx";
import Payload from "payload";
import SelectPage from "../components/selectPageCode";

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
  },

  access: {
    read: (): boolean => true, // Everyone can read Pages
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
    },
    {
      name: "pageType",
      label: "Page Type",
      type: "radio",
      required: true,
      defaultValue: "scratch",
      admin: {
        layout: "vertical",
        description: "Choose how you want to create this page",
      },
      options: [
        {
          label: "Create from scratch",
          value: "scratch",
        },
        {
          label: "Use a template",
          value: "template",
        },
      ],
    },
    {
      name: "template",
      type: "ui",
      label: "Template",
      admin: {
        condition: (data) => data.pageType === "template",
        components: {
          Field: Templates,
        },
      },
    },
    {
      name: "from_scratch",
      type: "ui",
      label: "Untitled",
      admin: {
        condition: (data) => data.pageType === "scratch",
        components: {
          Field: PageBuilder,
        },
      },
    },
    // {
    //   name: "selected_page",
    //   label: "Select page",
    //   type: "select",
    //   required: true,
    //   // defaultValue: "scratch",
    //   admin: {
    //     // layout: "vertical",
    //     description: "Choose how you want to create this page",
    //   },
    //   options: [
    //     {
    //       label: 'Browse Jobs',
    //       value: '1',
    //      },
    //     {
    //       value: '2',
    //       label: 'Category',
    //     },
    //     {
    //       value: '3',
    //       label: 'Error 404',
    //     },
    //     {
    //       value: '4',
    //       label: 'Home',
    //     },
    //     {
    //       value: '5',
    //        label: 'Job Overview',
    //     },
    //     {
    //       value: '6',
    //       label: 'Join',
    //     },
    //     {
    //       value: '7',
    //       label: 'TC Overview',
    //     },
    //   ],
    // },
    {
      name: "page_Id",
      type: "ui",
      admin: {
        components: {
          Field: SelectPage  ,
        },
      },
    },
  ],
};

export default Page;
