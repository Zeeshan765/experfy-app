// import React, { useContext } from "react";
import { CollectionConfig } from "payload/types";
import PageTheme from "../components/PageBuilderTemplate";
import PageBuilder from "../components/PageBuilder/SectionTemplates";
import Payload from "payload";
import SelectPage from "../components/selectPageCode";
import NewPageBuilder from "../components/NewPageBuilder";
import { Context } from "../MyProvider";
import NewPageBuilderModel from "../components/Model/NewPageBuilder";
import { json } from "stream/consumers";

export type Type = {
  title: string;
  slug: string;
  pageType?: "scratch" | "template";
};
// const {setPageAttributes }=useContext(Context);

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
      // hooks: {
      //   beforeValidate: [(args) => console.log("title before validate", args)],
      //   beforeChange: [(args) => console.log("title before change", args)],
      //   afterChange: [(args) => console.log("title after change", args)],
      //   afterRead: [(args) => console.log("title after read", args)],
      // },
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
      // hooks: {
      //   beforeValidate: [(args) => console.log("author before  validate", args)],
      //   beforeChange: [(args) => console.log("author before change", args)],
      //   afterChange: [(args) => console.log("author after change", args)],
      //   afterRead: [(args) => console.log("author after read", args)],

      // },
    },
    {
      name: "pageType",
      label: "Page Type",
      type: "radio",
      required: true,
      access: {
        read: () => true,
        create: () => true,
        update: () => true,
      },
      admin: {
        layout: "vertical",
        description: "Choose how you want to create this page",
        condition: (data) => {
          // setPageAttributes({title:data.title,author:data.author});
          if(data.title && data.author){
          // @ts-ignore
          localStorage.setItem("pageAttribute", JSON.stringify( data));
          }
          return data.title && data.author;
        },
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
          Field: PageTheme,
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
          Field: NewPageBuilderModel,
        },
      },
    },
    {
      name: "page_Id",
      type: "ui",
      admin: {
        components: {
          Field: SelectPage,
        },
      },
    },
  ],
};

export default Page;
