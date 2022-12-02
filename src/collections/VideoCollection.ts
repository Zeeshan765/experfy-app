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
const VideoCollection: CollectionConfig = {
  slug: "video-collection",
  access: {
    read: (): boolean => true,
  },
  admin: {
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
    mimeTypes:['video/*']
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
    //   defaultValue: "Videos",
    // },
    {
      name: "title",
      label: "Video Title",
      type: "text",
      required:true
    },
    {
      name: "keywords",
      label: "Video Keywords",
      type: "text",
      required:true
    },
    {
      name: "description",
      label: "Video Description",
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
export default VideoCollection;