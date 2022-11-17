import { useConfig } from 'payload/components/utilities';
import React from 'react';
import { NavLink } from 'react-router-dom';

// As this is the demo project, we import our dependencies from the `src` directory.

import PortalSettingsIcon from "../../../assets/images/sidebar/portal_settings.svg";
import StudioDashboardIcon from "../../../assets/images/sidebar/studio_dashboard.svg";

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
