import { makeStyles } from "@mui/styles";
import { useAuth, useConfig } from "payload/components/utilities";
// import { useNavigation } from "react-router-dom";
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import {
  EntityToGroup,
  EntityType,
  Group,
  groupNavItems,
} from "../../utilities/groupNavItems";
import Account from "../graphics/Account";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
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
import UsersIcon from "../../assets/images/sidebar/users.svg";
import { useEffect, useState } from "react";
import React from "react";

const useStyles = makeStyles({
  portalSidebar: {
    position: "fixed",
    top: "3.5rem",
    left: "0",
    bottom: "0",
    backgroundColor: "#fff",
    borderRight: "1px solid #d1dbe3",
    width: "15.5rem",
    "& .MuiList-root": {
      paddingTop: "0",
      paddingBottom: "0",
    },
    "& .MuiListItem-root": {
      position: "relative",
      paddingLeft: ".5rem",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "1.5rem",
    },
  },
  linkText: {
    color: "gray",
    fontSize: "1rem",
    fontWeight: "700",
    whiteSpace: "nowrap",
    marginLeft: "8px",
  },
  portalSidebarLower: {
    top: "0rem",
  },
  portalSidebarMenu: {
    paddingTop: ".5rem !important",
    paddingBottom: ".5rem !important",
    "& .MuiListItem-root": {
      padding: ".125rem .75rem",
    },
  },
  portalSidebarLinkMain: {
    "& .MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: "500",
      color: "gray",
      padding: "4px 8px",
    },
  },
  portalSidebarLink: {
    "&.MuiListItemButton-root": {
      // borderRadius: '.25rem',
      paddingTop: ".375rem",
      paddingBottom: ".375rem",
      padding: "4px 8px",
      color: "gray",
    },
    "&.MuiButton-root": {
      marginLeft: "8px",
    },
    "&.MuiListItemButton-root:hover": {
      backgroundColor: "#f1f3f5",
    },
    "& .MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: "500",
    },
  },
  portalSidebarSublink: {
    "& .MuiTypography-root": {
      fontSize: ".8375rem",
    },
  },
});

const baseClass = "nav";
const CustomDefaultNav: React.FC = () => {
  const { permissions } = useAuth();
  const [menuActive, setMenuActive] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const history = useHistory();
  // const navigation = useNavigation();
  const {
    collections,
    globals,
    routes: { admin },
    admin: {
      components: { beforeNavLinks, afterNavLinks },
    },
  } = useConfig();

  useEffect(
    () =>
      history.push(() => {
        setMenuActive(false);
      }),
    [history]
  );

  const payloadclasses = [baseClass, menuActive && `${baseClass}--menu-active`]
    .filter(Boolean)
    .join(" ");

  // const classes = [
  //   baseClass,
  //   menuActive && `${baseClass}--menu-active`,
  // ].filter(Boolean)
  //   .join(' ');

  useEffect(() => {
    setGroups(
      groupNavItems(
        [
          ...collections.map((collection) => {
            const entityToGroup: EntityToGroup = {
              type: EntityType.collection,
              entity: collection,
            };

            return entityToGroup;
          }),
          ...globals.map((global) => {
            const entityToGroup: EntityToGroup = {
              type: EntityType.global,
              entity: global,
            };
            return entityToGroup;
          }),
          ...globals.map((global) => {
            const entityToGroup: EntityToGroup = {
              type: EntityType.global,
              entity: global,
            };

            return entityToGroup;
          }),
        ],
        //@ts-ignore
        permissions
      )
    );
  }, [collections, globals, permissions]);
  //       return entityToGroup;
  //     }),
  //   ], permissions));
  // }, [collections, globals, permissions]);

  // Ammar Design========= Start======

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  // const isBrandCreated = props.isBrandCreated;
  const isBrandCreated = true;
  const hasHeader = true; // {props.hasHeader } replace with this variable
  // Ammar Deign =========End==========

 

  
  //   return (
  //     <aside className={classes}>
  //       <div className={`${baseClass}__scroll`}>
  //         <header>
  //           <Link to={admin} className={`${baseClass}__brand`}>
  //             <Icon />
  //           </Link>
  //           <button
  //             type="button"
  //             className={`${baseClass}__mobile-menu-btn`}
  //             onClick={() => setMenuActive(!menuActive)}
  //           >
  //             {menuActive &&
  //               // <CloseMenu />
  //               "CloseMenu"}
  //             {!menuActive &&
  //               // <Menu />
  //               "menu"}
  //           </button>
  //         </header>
  //         <nav className={`${baseClass}__wrap`}>
  //           {Array.isArray(beforeNavLinks) &&
  //             beforeNavLinks.map((Component, i) => <Component key={i} />)}
  //           {groups.map(({ label, entities }, key) => {
  //             return (
  //               // <NavGroup {...{ key, label }}>
  //               <div {...{ key, label }}>
  //                 {entities.map(({ entity, type }, i) => {
  //                   let entityLabel: string;
  //                   let href: string;
  //                   let id: string;

  //                   if (type === EntityType.collection) {
  //                     href = `${admin}/collections/${entity.slug}`;
  //                     entityLabel = entity.labels.plural;
  //                     id = `nav-${entity.slug}`;
  //                   }

  //                   if (type === EntityType.global) {
  //                     href = `${admin}/globals/${entity.slug}`;
  //                     entityLabel = entity.label;
  //                     id = `nav-global-${entity.slug}`;
  //                   }

  //                   return (
  //                     <NavLink
  //                       id={id}

  //                       className={classes.portalSidebarLink}
  //                       // activeClassName="active"
  //                       key={i}
  //                       to={href}
  //                     >
  //                       <ChevronLeft />
  //                       {entityLabel}
  //                     </NavLink>
  //                   );
  //                 })}
  //               </div>
  //               // </NavGroup >
  //             );
  //           })}
  //           {Array.isArray(afterNavLinks) &&
  //             afterNavLinks.map((Component, i) => <Component key={i} />)}
  //           <div className={`${baseClass}__controls`}>
  //             {/* <Localizer  > */}
  //             Localizer
  //             <Link to={`${admin}/account`} className={`${baseClass}__account`}>
  //               Account
  //             </Link>
  //             <Link to={`${admin}/logout`} className={`${baseClass}__log-out`}>
  //               {/* <LogOut /> */}logout
  //             </Link>
  //           </div>
  //         </nav>
  //       </div>
  //     </aside>
  //   );
  // }

  return (
    <div className="main-nav-sidebar-section">
      <div className={payloadclasses}>
        <Box
          className={
            hasHeader
              ? `${classes.portalSidebar} ${classes.portalSidebarLower}`
              : classes.portalSidebar
          }
        >
          <Box>
            <nav>
              <List>
                <Link
                  to="/admin/collections/basic-portal-identity"
                  className={classes.portalSidebarLinkMain}
                >
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <img src={StudioDashboardIcon} alt="Studio Dashboard" />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.linkText}
                      primary="Studio Dashboard"
                    />
                  </ListItem>
                </Link>
              </List>
            </nav>
            <Divider />
            {isBrandCreated && (
              <>
                <nav>
                  <List>
                    <ListItem disablePadding>
                      <Link
                        // to="/portal-settings"
                        variant="text"
                        className={classes.portalSidebarLinkMain}
                      >
                        <ListItemIcon>
                          <img src={PortalSettingsIcon} alt="Portal Settings" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Portal Settings"
                        />
                      </Link>
                    </ListItem>
                  </List>
                </nav>
                <Divider />
                <nav>
                  <List>
                    <ListItem disablePadding>
                      <Link onClick={handleClick}>
                        <ListItemText
                          className={classes.portalSidebarLinkMain}
                          primary="Global Theme Settings"
                        />
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </Link>
                    </ListItem>
                    <Divider />
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List
                        component="div"
                        className={classes.portalSidebarMenu}
                      >
                        <ListItem disablePadding>
                          <Link className={classes.portalSidebarLink}>
                            <ListItemIcon>
                              <img
                                src={DesignSystemsIcon}
                                alt="Design System"
                              />
                            </ListItemIcon>
                            <ListItemText
                              className={classes.linkText}
                              primary="Design System"
                            />
                          </Link>
                        </ListItem>
                        <ListItem disablePadding>
                          <Link className={classes.portalSidebarLink}>
                            <ListItemIcon>
                              <img src={ThemeStylesIcon} alt="Theme Style" />
                            </ListItemIcon>
                            <ListItemText
                              className={classes.linkText}
                              primary="Theme Style"
                            />
                          </Link>
                        </ListItem>
                        <ListItem disablePadding>
                          <Link
                            to="/admin/collections/page-builder"
                            className={classes.portalSidebarLink}
                          >
                            <ListItemIcon style={{ marginLeft: "4px" }}>
                              <img src={ThemeBuilderIcon} alt="Theme Builder" />
                            </ListItemIcon>
                            <ListItemText
                              className={classes.linkText}
                              primary="Theme Builder"
                            />
                          </Link>
                        </ListItem>
                        <ListItem disablePadding>
                          <List component="div" disablePadding>
                            <Link
                              className={classes.portalSidebarSublink}
                              sx={{ pl: 4 }}
                            >
                              <ListItemIcon></ListItemIcon>
                              <ListItemText
                                className={classes.linkText}
                                primary="Section Templates"
                              />
                            </Link>
                            <Link
                              className={classes.portalSidebarSublink}
                              sx={{ pl: 4 }}
                            >
                              <ListItemIcon></ListItemIcon>
                              <ListItemText
                                className={classes.linkText}
                                primary="Page Templates"
                              />
                            </Link>
                          </List>
                        </ListItem>
                        <ListItem disablePadding>
                          <Link className={classes.portalSidebarLink}>
                            <ListItemIcon>
                              <img
                                src={AdditionalSettingsIcon}
                                alt="Additional Settings"
                              />
                            </ListItemIcon>
                            <ListItemText
                              className={classes.linkText}
                              primary="Additional Settings"
                            />
                          </Link>
                        </ListItem>
                      </List>
                      <Divider />
                    </Collapse>
                  </List>
                </nav>
                <nav>
                  <List className={classes.portalSidebarMenu}>
                    <ListItem disablePadding>
                      <Link
                        className={classes.portalSidebarLink}
                      // to="/pages"
                      >
                        <ListItemIcon>
                          <img src={PagesIcon} alt="Pages" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Pages"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        className={classes.portalSidebarLink}
                      // to="/menus"
                      >
                        <ListItemIcon>
                          <img src={MenusIcon} alt="Menus" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Menus"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        className={classes.portalSidebarLink}
                        to="/admin/collections/media"
                      >
                        <ListItemIcon>
                          <img src={MediaLibraryIcon} alt="Media Library" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Media Library"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        className={classes.portalSidebarLink}
                        to="/admin/collections/page-builder"
                      >
                        <ListItemIcon>
                          <img
                            src={TemplateLibraryIcon}
                            alt="Template Library"
                          />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Template Library"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton className={classes.portalSidebarLink}>
                        <ListItemIcon>
                          <img src={ThemesIcon} alt="Themes" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Themes"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        to="/admin/collections/users"
                        className={classes.portalSidebarLink}
                      >
                        <ListItemIcon>
                          <img src={UsersIcon} alt="Users" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Users"
                        />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        className={classes.portalSidebarLink}
                        to="/admin/collections/portal-identity"
                      >
                        <ListItemIcon>
                          <img src={PortalIdentityIcon} alt="Portal Identity" />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.linkText}
                          primary="Portal Identity"
                        />
                      </Link>
                    </ListItem>
                  </List>
                </nav>
              </>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
};

// const Nav: React.FC = () => {
//   const {
//     admin: {
//       components: {
//         Nav: CustomNav,
//       } = {
//         Nav: undefined,
//       },
//     } = {},
//   } = useConfig();

//   return (
//     <RenderCustomComponent
//       CustomComponent={CustomNav}
//       DefaultComponent={DefaultNav}
//     />
// );

export default CustomDefaultNav;
