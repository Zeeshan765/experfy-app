import { CollectionConfig } from "payload/types";
import PageBuilder from "../components/PageBuilder";
import PageTheme from "../components/PageBuilderTemplate";
import PageBuildFromScratch from "../components/PageBuildFromScratch";
import SelectPage from "../components/selectPageCode";
import { setDataToLocalstorage } from "../utilities/localStorage";

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
    // condition:
    //  (data) => {
    //   console.log("data", data);
    //   return true;
    // },
    components: {
      views: {
        Edit: PageBuilder,
      },
      // Field: PageBuildFromScratch,
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
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
    },
    // select page type field
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
        // condition: (data) => {
        //   console.log("data", data);

        //   // if (data?.title && data?.author && data?.pageType==="scratch") {
        //   //   localStorage.setItem("pageAttributes", JSON.stringify(data));
        //   // }
        //   return data.title && data.author;
        // },
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
      type: "ui",
      admin: {
        components: {
          Field: SelectPage,
        },
        condition: (data) => data.pageType === "template",
      },
    },
  ],
};

export default Page;
