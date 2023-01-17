import { CollectionConfig } from "payload/types";
import PageTheme from "../components/PageBuilderTemplate";
import FaceLessModel from "../components/Model";
// import PageBuilder from '../components/PageBuilder/SectionTemplates';
// import PageTheme from '../components/PageBuilderTemplate';
export type Type = {
  title: string;
  slug: string;
  pageType?: "scratch" | "template";
};

export const PageTemplateCollection: CollectionConfig = {
  slug: "page-Template",

  //   admin: {
  //     useAsTitle: "title",
  //     defaultColumns: ["title", "pageType", "updatedAt"],
  //   },

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
      name: "pageAssets",
      label: "Page Assets",
      type: "text",
    },
  ],
};

export default PageTemplateCollection;
