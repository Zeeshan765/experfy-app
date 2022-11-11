
import { CollectionConfig } from "payload/types";
// import { AddToBrand } from "../blocks/portaliden/index";
// import { SaveButton } from "../blocks/MyCustomButton";

// import {SaveButton} from "../blocks/MyCustomButton"

type Data = Record<string, unknown>;

export type Type = {
}

const PortalIdentityDetail: CollectionConfig = {
  slug: "portal-identity-detail",


  access: {
    read: () => true,
    create: () => true,
  },

  admin: {
    useAsTitle: "career_portal_name",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Basic Information",
          fields: [
            {
              type: "text",
              name: "career_portal_name",
              label: "Career Portal Name",
              required: true,
            },
            {
              type: "text",
              name: "portal_id",
              label: "Portal ID",
            },
            {
              type: "text",
              name: "portal_url",
              label: "Portal URL",
              required: true,
            },
            {
              type: "text",
              name: "company_name",
              label: "Company Name",
              required: true,
            },
            {
              name: "language",
              label: "Default Language",
              type: "select",
              required: true,
              options: [
                {
                  label: "English",
                  value: "English",
                },
              ],
            },
            {
              name: "united_states",
              label: "United States",
              type: "select",
              required: true,
              options: [
                {
                  label: "US",
                  value: "US",
                },
              ],
            },
            {
              type: "text",
              name: "google_id",
              label: "Google Tag Manager ID",
            },
            {
              type: "text",
              name: "google_analytics",
              label: "Google Analytics ID",
            },
            {
              type: "text",
              name: "google_webmaster",
              label: "Google Webmaster ID",
            },
            {
              type: "text",
              name: "bing_webmaster",
              label: "Bing Webmaster ID",
            },
            {
              type: "text",
              name: "tracking_pixel",
              label: "Tracking Pixel",
            },
          ],
        },
        {
          label: "SEO Settings",
          fields: [
            {
              type: "text",
              name: "page_title",
              label: "Page Title",
            },
            {
              type: "text",
              name: "meta_keywords",
              label: "Meta Keywords",
            },
            {
              type: "text",
              name: "meta_description",
              label: "Meta Description",
            },
          ],
        },
        {
          label: "Brands",
          fields: [
            {
              name: "default_brand",
              label: "Default Brand",
              type: "select",
              required: true,
              admin: {},
              options: [
                {
                  label: "Pepsi",
                  value: "Pepsi",
                },
              ],
            },
            {
              type: "row",
              fields: [
                {
                  name: "dom",
                  type: "radio",
                  admin: {
                    layout: "horizontal",
                  },
                  options: [
                    {
                      label: "Sub-domains",
                      value: "Sub-domains",
                    },
                    {
                      label: "Sub-directories",
                      value: "Sub-directories",
                    },
                  ],
                },
              ],
            },
            // {
            //   name: "Brands",
            //   label: "Add Brand",
            //   type: "blocks",
            //   minRows: 1,
            //   blocks: [AddToBrand],
            // },
          ],
        },
        {
          label: "Site Locales",
          fields: [],
        },
      ],
    },
    // {
    //   name: "save_btn",
    //   type: "ui",
    //   admin: {
    //     components: {
    //       Field: SaveButton,
    //     },
    //   },
    // },
  ],
};
export default PortalIdentityDetail;