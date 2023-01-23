import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import DesignSystemCollection from './collections/DesignSystemCollection';
import Media from './collections/Media';
import MenusCollection from './collections/MenusCollection';
import NewPageBuilderCollection from './collections/NewPageBuilder';
import PagesCollection from './collections/Page';
import PageBuilderCollection from './collections/PageBuilder';
import PageTemplateCollection from './collections/PageTemplate';
import SectionTemplateCollection from './collections/SectionTemplatesCollection';
// import selectPageCollection from './collections/selectPageCollection';
import TemplatesCollection from './collections/TemplatesCollection';
import ThemeCollection from './collections/ThemeCollection';
import Users from './collections/UsersCollection';
import BasicPortalIdentityPage from './components/BasicPortalPage';
import AfterNav from './components/Nav/AfterNav';
import ExperfyLogo from './components/Nav/AppLogo';
import BeforeNav from './components/Nav/BeforeNav';
import NewPageBuilder from './components/NewPageBuilder';
import PageBuilder from './components/PageBuilder';
import DesignSystem from './components/PageBuilder/DesignSystem';
import Form from './components/PageBuilder/NewSectionTemplate/Form';
import ImgText from './components/PageBuilder/NewSectionTemplate/ImageAndText';
import SectionPageBuilder from './components/PageBuilder/SectionTemplates/sections';
import PortalIdentity from './components/PortalIdentity';
import selectPageCode from './components/selectPageCode.tsx';
import TemplatesLibrary from './components/TemplateLibrary';
import Templates from './components/Templates';
import MyProvider from './MyProvider';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,

    css: path.resolve(__dirname, './styles/scss/index.scss'),
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
          Component: Templates,
        },
        {
          path: '/collections/themes-style',
          Component: DesignSystem,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/new-page-builder',
          Component: NewPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/templates-library',
          Component: TemplatesLibrary,
        },
        {
          path: '/collections/section-templates',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/header',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/footer',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/benefits',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/practice-areas',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/video',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/guidelines',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/location',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/paragraph',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/metrics-numbers',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/image-banner',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/image-and-text',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/section-templates/talent-cloud-candidates',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/section-templates/testimonial',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },

        {
          path: '/collections/form',
          Component: Form,
        },
        // {
        //   path: '/collections/location',
        //   Component: Location,
        // },
        {
          path: '/collections/image_and_text',
          Component: ImgText,
        },
        // {
        //   path: '/collections/practice_area',
        //   Component: PracticeArea,
        // },
        // {
        //   path: '/collections/footer',
        //   Component: Footer,
        // },
        // {
        //   path: '/collections/header',
        //   Component: Header,
        // },
        // {
        //   path: '/collections/paragraph',
        //   Component: Paragraph ,
        // },
        {
          path:'collections/pages/create',
          Component:selectPageCode,
        }
      ],
      providers: [MyProvider]
    },
  },
  collections: [
    BasicPortalIdentityCollection,
    TemplatesCollection,
    DesignSystemCollection,
    ThemeCollection,
    MenusCollection,
    PagesCollection,
    PageTemplateCollection , 
    Media,
    NewPageBuilderCollection,
    Users,
    // selectPageCollection,
    SectionTemplateCollection,
  ],
  i18n: {
    supportedLngs: ['en', 'es'],
    saveMissing: true,
    fallbackLng: 'en',
  },

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
