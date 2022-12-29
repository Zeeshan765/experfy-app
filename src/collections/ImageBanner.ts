import { CollectionConfig } from 'payload/types';
import ImageBanner from '../components/PageBuilder/NewSectionTemplate/ImageBanner';

const ImageBannerCollection: CollectionConfig = {
  slug: 'image_banner',
  access: {
    read: () => true,
    create: () => false,
  },
  admin: {
    components: {
      views: {
        Edit: ImageBanner,
        List: ImageBanner,
      },
    },
  },
  fields: [],
};

export default ImageBannerCollection;
