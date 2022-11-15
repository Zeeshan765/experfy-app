import { Placeholder } from "./../../node_modules/@babel/types/lib/index-legacy.d";
import { width } from "./../../node_modules/@material-ui/system/index.d";

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
              admin: {
                width: "70%",
              }
            },
            {
              type: "text",
              name: "portal_id",
              label: "Portal ID",
              admin: {
                width: "70%",
              }
            },
            {
              type: "text",
              name: "portal_url",
              label: "Portal URL",
              
              required: true,
              admin: {
                
                width: "70%",
                placeholder: "https://www.example.com",
              }

            },
            {
              type: "text",
              name: "company_name",
              label: "Company Name",
              required: true,
              admin: {
                width: "70%",
              }

            },
            {
              name: "language",
              label: "Default Language",
              type: "select",
              required: true,
              defaultValue: "English",
              admin: {
                width: "70%",
              },
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
              admin: {
                width: "70%",
              },
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
              admin: {
                width: "70%",
              }

            },
            {
              type: "text",
              name: "google_analytics",
              label: "Google Analytics ID",
              admin: {
                width: "70%",
              }

            },
            {
              type: "text",
              name: "google_webmaster",
              label: "Google Webmaster ID",
              admin: {
                width: "70%",
              }

            },
            {
              type: "text",
              name: "bing_webmaster",
              label: "Bing Webmaster ID",
              admin: {
                width: "70%",
              }

            },
            {
              type: "text",
              name: "tracking_pixel",
              label: "Tracking Pixel",
              admin: {
                width: "70%",
              }

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
              admin: {
                width: "70%",
              }

            },
            {
              type: "text",
              name: "meta_keywords",
              label: "Meta Keywords",
              admin: {
                width: "70%",
              }

            },
            {
              type: "text",
              name: "meta_description",
              label: "Meta Description",
              admin: {
                width: "70%",
              }

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
                      width: "70%",

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