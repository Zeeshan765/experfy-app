import { create } from "domain";
import { getSiblingData } from "payload/components/forms";
import { CollectionConfig } from "payload/types";
import UplodField from "../components/UploadField";
export type SizeDetails = {
  filename: string;
  width: number;
  height: number;
};
export type Size = "card" | "square" | "portrait" | "feature";
export type Type = {
  filename: string;
  alt: string;
  mimeType: string;
  sizes: {
    card?: SizeDetails;
    square?: SizeDetails;
    portrait?: SizeDetails;
    feature?: SizeDetails;
  };
};
interface propsdata {
  name?: string;
}
const PhotoCollection: CollectionConfig = {
  slug: "photo-collection",
  access: {
    read: (): boolean => true,
  },
  admin: {
    group: "Media Library",
    useAsTitle: "filename",
  },
  upload: {
    adminThumbnail: "card",
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 480,
      },
      {
        name: "portrait",
        width: 768,
        height: 1024,
      },
      {
        name: "square",
        width: 1200,
        height: 1200,
      },
      {
        name: "feature",
        width: 1024,
        height: 576,
      },
    ],
    mimeTypes: ["image/png", "image/*"],
  },
  fields: [
    // {
    //   name: "Media Type",
    //   type: "text",
    //   access: {
    //     read: () => true,
    //     create: () => false,
    //     update: () => false,
    //   },
    //   defaultValue: "Photos",
    // },
    {
      name: "title",
      label: "Photo Title",
      type: "text",
      required:true
    },
    {
      name: "keywords",
      label: "Photo Keywords",
      type: "text",
      required:true
    },
    {
      name: "description",
      label: "Photo Description",
      type: "textarea",
      required:true
      //=============== Props exampe==============
      // admin:{
      //   components:{
      //     Field:_=>UplodField({text:'sohail'}) ,
      //   Cell:UplodField ,
      //   }
      // }
      //=============== condation exampe==============
      // admin: {
      //   condition: (_, siblingData) =>
      //     siblingData?.type === "Photos" ? true : false,
      // },
    },
  ],
};
export default PhotoCollection;