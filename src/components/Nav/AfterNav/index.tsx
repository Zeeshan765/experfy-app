import { useConfig } from 'payload/components/utilities';
import React from 'react';
import { NavLink } from 'react-router-dom';
  
const baseClass = 'nav-group';

const AfterNav: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  return (
    <div className={baseClass}>
      <nav>
        <NavLink
          className="nav-link nav-pages"
          activeClassName="active"
          to={`${adminRoute}/collections/pages`}
        >
          {/* <img 
            style={{ paddingRight: 8 }} 
            src={PagesIcon} 
            alt="Pages" /> */}
          Pages
        </NavLink>

        <NavLink
          className="nav-link nav-menus"
          activeClassName="active"
          to={`${adminRoute}/collections/mega-menu`}
        >
          {/* <img style={{ paddingRight: 8 }} src={MenusIcon} alt="Menus" /> */}
          Menus
        </NavLink>
        <NavLink
          className="nav-link nav-media"
          activeClassName="active"
          to={`${adminRoute}/collections/media`}
        >
          {/* <img style={{ paddingRight: 8 }} src={MediaLibraryIcon} alt="Media" /> */}
          Media Library
        </NavLink>
        <NavLink
          className="nav-link nav-templates"
          activeClassName="active"
          to={`${adminRoute}/collections/templates-library`}
        >
          Template Library
        </NavLink>
        <NavLink
          className="nav-link nav-themes"
          activeClassName="active"
          to={`${adminRoute}/collections/themes`}
        >
          {/* <img style={{ paddingRight: 8 }} src={ThemesIcon} alt="Themes" /> */}
          Themes
        </NavLink>
        <NavLink
          className="nav-link nav-users"
          activeClassName="active"
          to={`${adminRoute}/collections/users`}
        >
          {/* <img style={{ paddingRight: 8 }} src={UsersIcon} alt="Users" /> */}
          Users
        </NavLink>

        <NavLink
          className="nav-link nav-identities"
          activeClassName="active"
          to={`${adminRoute}/collections/portal-identity`}
        >
          {/* <img
            style={{ paddingRight: 8 }}
            src={PortalIdentityIcon}
            alt="Portal Identity"
          /> */}
          Portal Identity
        </NavLink>
      </nav>
    </div>
  );
};

export default AfterNav;
