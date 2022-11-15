import React from 'react';
import { NavLink } from 'react-router-dom';
import { useConfig } from 'payload/components/utilities';

// As this is the demo project, we import our dependencies from the `src` directory.
import { Chevron } from 'payload/components/icons';

import AdditionalSettingsIcon from "../../assets/images/sidebar/additional_settings.svg";
import DesignSystemsIcon from "../../assets/images/sidebar/design_system.svg";
import MediaLibraryIcon from "../../assets/images/sidebar/media_library.svg";
import MenusIcon from "../../assets/images/sidebar/menus.svg";
import PagesIcon from "../../assets/images/sidebar/pages.svg";
import PortalIdentityIcon from "../../assets/images/sidebar/portal_identity.svg";
import PortalSettingsIcon from "../../assets/images/sidebar/portal_settings.svg";
import StudioDashboardIcon from "../../assets/images/sidebar/studio_dashboard.svg";
import TemplateLibraryIcon from "../../assets/images/sidebar/template_library.svg";
import ThemeBuilderIcon from "../../assets/images/sidebar/theme_builder.svg";
import ThemesIcon from "../../assets/images/sidebar/themes.svg";
import ThemeStylesIcon from "../../assets/images/sidebar/theme_style.svg";
import { Image } from '../../blocks/Image';

// In your projects, you can import as follows:
// import { Chevron } from 'payload/components/icons';


const baseClass = 'nav-group';

const BeforeNav: React.FC = () => {
  const { routes: { admin: adminRoute } } = useConfig();

  return (
    <div className={baseClass}>
      <nav>
        <NavLink
          className="nav__link"
          activeClassName="active"
          to={`${adminRoute}/collections/basic-portal-identity`}>
          <img style={ {paddingRight:5 }} src={StudioDashboardIcon} alt="Dashboard" />
          Studio Dashboard
        </NavLink>
        <NavLink
          className="nav__link"
          activeClassName="active"
          to={`${adminRoute}/collections/portal-identity`}>
          <img style={{ paddingRight: 5 }} src={PortalSettingsIcon} alt="Portal Settings" />
          Portal Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default BeforeNav;
