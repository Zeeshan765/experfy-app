import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import BasicPortalIdentityCollection from './collections/BasicPortalIdentity';
import BenefitCollection from './collections/Benefit';
import DesignSystemCollection from './collections/DesignSystemCollection';
import FooterCollection from './collections/Footer';
import GuidelineCollection from './collections/Guideline';
import HeaderCollection from './collections/Header';
import Media from './collections/Media';
import MenusCollection from './collections/MenusCollection';
import NewPageBuilderCollection from './collections/NewPageBuilder';
import NumberCollection from './collections/Number';
import PagesCollection from './collections/Page';
import PageBuilderCollection from './collections/PageBuilder';
import ParagraphCollection from './collections/Paragraph';
import TemplatesCollection from './collections/TemplatesCollection';
import TestimonialCollection from './collections/Testimonial';
import ThemeCollection from './collections/ThemeCollection';
import FormCollection from './collections/Form';
import LocationCollection from './collections/Location';
import Users from './collections/Users';
import BasicPortalIdentityPage from './components/BasicPortalPage';
import AfterNav from './components/Nav/AfterNav';
import ExperfyLogo from './components/Nav/AppLogo';
import BeforeNav from './components/Nav/BeforeNav';
import NewPageBuilder from './components/NewPageBuilder';
import DesignSystem from './components/PageBuilder/DesignSystem';
import Benefit from './components/PageBuilder/NewSectionTemplate/Benefit';
import Footer from './components/PageBuilder/NewSectionTemplate/Footer';
import Form from './components/PageBuilder/NewSectionTemplate/Form';
import Guideline from './components/PageBuilder/NewSectionTemplate/Guideline';
import Header from './components/PageBuilder/NewSectionTemplate/Header';
import Location from './components/PageBuilder/NewSectionTemplate/Location';
import Number from './components/PageBuilder/NewSectionTemplate/Number';
import Paragraph from './components/PageBuilder/NewSectionTemplate/Paragraph';
import Testimonial from './components/PageBuilder/NewSectionTemplate/Testimonial';
import PageBuilder from './components/PageBuilder/SectionTemplates';
// import Pages from "./components/Pages";
import PortalIdentity from './components/PortalIdentity';
import Templates from './components/Templates';
import MyProvider from './MyProvider';
import ImgText from './components/PageBuilder/NewSectionTemplate/ImageAndText';
import ImgTextCollection from './collections/ImageAndText';
import SectionPageBuilder from './components/PageBuilder/SectionTemplates/sections';

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
          path: '/collections/section-templates',
          Component: SectionPageBuilder,
          exact: true,
          strict: true,
        },
        {
          path: '/collections/footer',
          Component: Footer,
        },
        {
          path: '/collections/header',
          Component: Header,
        },
        {
          path: '/collections/paragraph',
          Component: Paragraph,
        },

        {
          path: '/collections/number',
          Component: Number,
        },
        {
          path: '/collections/testimonial',
          Component: Testimonial,
        },
        {
          path: '/collections/benefit',
          Component: Benefit,
        },
        {
          path: '/collections/guideline',
          Component: Guideline,
        },
        {
          path: '/collections/form',
          Component: Form,
        },
        {
          path: '/collections/location',
          Component: Location,
        },

        {
          path: '/collections/image_text',
          Component: ImgText,
        },
        {
          path: '/collections/footer',
          Component: Footer,
        },
        {
          path: '/collections/header',
          Component: Header,
        },
        {
          path: '/collections/paragraph',
          Component: Paragraph,
        },

        {
          path: '/collections/number',
          Component: Number,
        },
        {
          path: '/collections/testimonial',
          Component: Testimonial,
        },
        {
          path: '/collections/benefit',
          Component: Benefit,
        },
        {
          path: '/collections/guideline',
          Component: Guideline,
        },
        {
          path: '/collections/form',
          Component: Form,
        },
        {
          path: '/collections/location',
          Component: Location,
        },

        {
          path: '/collections/image_text',
          Component: ImgText,
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
    NewPageBuilderCollection,
    FooterCollection,
    HeaderCollection,
    ParagraphCollection,
    NumberCollection,
    TestimonialCollection,
    BenefitCollection,
    GuidelineCollection,
    FormCollection,
    LocationCollection,
    ImgTextCollection,
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
