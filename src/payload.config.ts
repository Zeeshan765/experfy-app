import { Page } from "./payload-types";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";
import BasicPortalIdentityCollection from "./collections/BasicPortalIdentity";
import DesignSystemCollection from "./collections/DesignSystemCollection";
import IconCollection from "./collections/IconCollection";
import Media from "./collections/Media";
import MenusCollection from "./collections/MenusCollection";
import NewPageBuilderCollection from "./collections/NewPageBuilder";
import PageBuilderCollection from "./collections/PageBuilder";
import PagesCollection from "./collections/Page";
import PhotoCollection from "./collections/PhotoCollection";
import TemplatesCollection from "./collections/TemplatesCollection";
import ThemeCollection from "./collections/ThemeCollection";
import Users from "./collections/Users";
import BasicPortalIdentityPage from "./components/BasicPortalPage";
import Menus from "./components/Menus";
import AfterNav from "./components/Nav/AfterNav";
import ExperfyLogo from "./components/Nav/AppLogo";
import BeforeNav from "./components/Nav/BeforeNav";
import DesignSystem from "./components/PageBuilder/DesignSystem";
import PageBuilder from "./components/PageBuilder/SectionTemplates";
import PortalIdentity from "./components/PortalIdentity";
import TemplatesLibrary from "./components/TemplateLibrary";
import Themes from "./components/Themes";
import MyProvider from "./MyProvider";
import TemplateLibraryCollection from "./collections/TemplateLibaryCollection";
import NewPageBuilder from "./components/PageBuilder/SectionTemplates";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    // user: Users.slug,
    css: path.resolve(__dirname, './styles/scss/index.scss'),
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
          path: '/collections/page-builder',
          Component: PageBuilder,
          exact: true,
        },
        {
          path: '/collections/basic-portal-identity',
          Component: BasicPortalIdentityPage,
          exact: true,
        },
        {
          path: '/collections/portal-identity',
          Component: PortalIdentity,
          exact: true,
        },
        {
          path: '/collections/portal-identity/:id',
          Component: PortalIdentity,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/design-system',
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/templates',
          Component: TemplatesLibrary,
        },
        {
          path: '/collections/themes-style',
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/new-page-builder',
          Component: NewPageBuilder ,
          exact: true,
          strict: true,
        },
        {
          path:'/collections/templates-library',
          Component:TemplatesLibrary,
        }
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
    NewPageBuilderCollection,
    // TemplateLibraryCollection
  ],
  i18n: {
    supportedLngs: ['en', 'es'],
    saveMissing: true,
    fallbackLng: 'en',
  },
  debug: true,
  cors: '*',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
