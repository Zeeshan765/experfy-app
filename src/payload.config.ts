import dotenv from "dotenv";
import path from "path";
import { createProxyMiddleware } from "http-proxy-middleware";
import { buildConfig } from "payload/config";
import BasicPortalIdentityCollection from "./collections/BasicPortalIdentity";
import DesignSystemCollection from "./collections/DesignSystemCollection";
import Media from "./collections/Media";
import MenusCollection from "./collections/MenusCollection";
import NewPageBuilderCollection from "./collections/NewPageBuilder";
import PagesCollection from "./collections/Page";
import PageBuilderCollection from "./collections/PageBuilder";
import TemplatesCollection from "./collections/TemplatesCollection";
import ThemeCollection from "./collections/ThemeCollection";
import Users from "./collections/Users";
import VideoCollection from "./collections/VideoCollection";
import BasicPortalIdentityPage from "./components/BasicPortalPage";
import AfterNav from "./components/Nav/AfterNav";
import ExperfyLogo from "./components/Nav/AppLogo";
import BeforeNav from "./components/Nav/BeforeNav";
import NewPageBuilder from "./components/NewPageBuilder";
import DesignSystem from "./components/PageBuilder/DesignSystem";
import PageBuilder from "./components/PageBuilder/SectionTemplates";
// import Pages from "./components/Pages";
import PortalIdentity from "./components/PortalIdentity";
import Templates from "./components/Templates";
import MyProvider from "./MyProvider";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, "./styles/scss/index.scss"),
    // webpack: ( config ) => {
    //   output: {
    //     path: path.resolve( __dirname, 'dist' ),
    //       filename: 'grapes.min.js',
    //       publicPath: '/dist/',
    //   }

    //   }

    //   return config;
    // },
    components: {
      graphics: {
        Logo: ExperfyLogo,
        Icon: ExperfyLogo,
      },
      beforeNavLinks: [BeforeNav],
      afterNavLinks: [AfterNav],
      routes: [
        {
          path: "/collections/page-builder",
          Component: PageBuilder,
          exact: true,
        },
        {
          path: "/collections/basic-portal-identity",
          Component: BasicPortalIdentityPage,
          exact: true,
        },
        {
          path: "/collections/portal-identity",
          Component: PortalIdentity,
          exact: true,
        },
        {
          path: "/collections/portal-identity/:id",
          Component: PortalIdentity,
          exact: true,
          strict: true,
        },
        {
          path: "/collections/design-system",
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: "/collections/templates",
          Component: Templates,
        },
        {
          path: "/collections/themes",
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: "/collections/new-page-builder",
          Component: NewPageBuilder,
        },
      ],
      providers: [MyProvider],
    },
  },
  collections: [
    BasicPortalIdentityCollection,
    PageBuilderCollection,
    // TemplatesCollection,
    DesignSystemCollection,
    ThemeCollection,
    MenusCollection,
    PagesCollection,
    Media,
    Users,
    NewPageBuilderCollection,
  ],

  localization: {
    locales: ["en", "es"],
    defaultLocale: "en",
    fallback: true,
  },
  cors: "*",
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
