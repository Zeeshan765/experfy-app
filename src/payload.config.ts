import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import Media from './collections/Media';
import PageBuilderCollection from './collections/PageBuilder';
import PortalIdentityDetail from './collections/PortalIdentityDetail';
import Users from './collections/Users';
import BasicPortalIdentityPage from './components/BasicPortalPage';
import AfterNav from './components/Nav/AfterNav';
import ExperfyLogo from './components/Nav/AppLogo';
import BeforeNav from './components/Nav/BeforeNav';
import PageBuilder from './components/PageBuilder/SectionTemplates';
import GlobalThemeSettings from './components/PageBuilder/GlobalThemeSettings';
import GlobalThemeCollection from './collections/GlobalThemeSettings';
import PortalIdentity from './components/PortalIdentity';
import MyProvider from './MyProvider';
import TemplatesCollection from './collections/TemplatesCollection';
import Templates from './components/Templates';
import Themes from './components/Themes';
import ThemeCollection from './collections/ThemeCollection';
import Menus from './components/Menus';
import MenusCollection from './collections/MenusCollection';
import Pages from './components/Pages';
import PagesCollection from './collections/PagesCollection';

dotenv.config();

export default buildConfig( {
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    css: path.resolve( __dirname, './styles/scss/index.scss' ),
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

      afterNavLinks: [ AfterNav ],
      beforeNavLinks: [ BeforeNav ],
      routes: [
        {
          path: '/collections/page-builder',
          Component: PageBuilder,
        },
        {
          path: '/collections/basic-portal-identity',
          Component: BasicPortalIdentityPage,
        },
        {
          path: '/collections/portal-identity',
          Component: PortalIdentity,
          exact: true,
        },
        {
          path: '/collections/portal-identity/:id',
          Component: PortalIdentity,
        },
        {
          path: '/collections/global-theme-settings',
          Component: GlobalThemeSettings,
        },
        {
          path: '/collections/templates',
          Component: Templates,
        },
        {
          path: '/collections/themes',
          Component: Themes,
        },

        {
          path: '/collections/menus',
          Component: Menus,
        },
        {
          path: '/collections/pages',
          Component: Pages,
        },
        
      ],
      providers: [ MyProvider ],
    },
  },
  collections: [
    BasicPortalIdentityCollection,
    PageBuilderCollection,
    // PortalIdentityDetail,
    TemplatesCollection,
    ThemeCollection,
    MenusCollection,
    PagesCollection,
    Media,
    Users,
  ],
  globals: [ GlobalThemeCollection ],
  localization: {
    locales: [ 'en', 'es' ],
    defaultLocale: 'en',
    fallback: true,
  },
  cors: '*',

  typescript: {
    outputFile: path.resolve( __dirname, 'payload-types.ts' ),
  },
} );
