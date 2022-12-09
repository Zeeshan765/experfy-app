/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-theme-settings".
 */
export interface GlobalThemeSettings {
  id: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "basic-portal-identity".
 */
export interface BasicPortalIdentity {
  id: string;
  user_portal?: string | User;
  career_portal_name?: string;
  portal_url?: string;
  portal_id?: string;
  default_locale?: 'US' | 'ES';
  default_language?: 'English' | 'Spanish';
  company_name?: string;
  page_title?: string;
  meta_keywords?: string;
  meta_description?: string;
  tracking_pixel?: string;
  bing_webmaster?: string;
  google_webmaster?: string;
  google_analytics?: string;
  google_id?: string;
  brands: {
    brand_name?: string;
    brand_identifier?: string;
    microsoft_identifier?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "page-builder".
 */
export interface PageBuilder {
  id: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "templates".
 */
export interface Template {
  id: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "design-system".
 */
export interface DesignSystem {
  id: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "themes".
 */
export interface ThemeStyle {
  id: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "mega-menu".
 */
export interface Menu {
  id: string;
  nav: {
    link: {
      type?: 'page' | 'custom';
      label: string;
      page: string | Page;
      url: string;
    };
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  pageType: 'scratch' | 'template';
  slug?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  mediaType?: 'Icon' | 'Photo' | 'Video';
  'Icon Title': string;
  'Photo Title': string;
  'Video Title': string;
  keywords: string;
  description: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icon-collection".
 */
export interface IconCollection {
  id: string;
  title: string;
  keywords: string;
  description: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "photo-collection".
 */
export interface PhotoCollection {
  id: string;
  title: string;
  keywords: string;
  description: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "video-collection".
 */
export interface VideoCollection {
  id: string;
  title: string;
  keywords: string;
  description: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    portrait: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    square: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    feature: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "new-page-builder".
 */
export interface NewPageBuilder {
  id: string;
  createdAt: string;
  updatedAt: string;
}
