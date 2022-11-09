import React from "react";
import { Box, ButtonGroup, IconButton, Link, Popover } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { ChromePicker } from "react-color";
import {useStyles} from "./css"




interface ActionsGroup {
  
}



const ActionsGroup=(props)=> {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleOpen = (event, data) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <ButtonGroup className={classes.actionGroup} aria-label="actions group">
        {props.hasRestore && (
          <Link>
            <SettingsBackupRestoreIcon />
          </Link>
        )}  
        {props.hasLanguage && (
          <IconButton
            color="primary"
            style={
              props.selectedIndex != null
                ? { color: '#fff', backgroundColor: '#4ba4da' }
                : null
            }
            onClick={(event) => {
              props.handleFontsOpen(event, props.record);
            }}
            aria-label="language"
          >
            <LanguageIcon />
          </IconButton>
        )}
        {props.hasColor && (
          <IconButton
            style={
              props.globalColorLanguageIcon != null
                ? { color: '#fff', backgroundColor: '#4ba4da' }
                : null
            }
            onClick={(event) => props.handleColorOpen(event, props.record)}
            aria-label="language"
          >
            <LanguageIcon />
          </IconButton>
        )}
        {props.hasColorButtonBGNormal && (
          <IconButton
            style={
              props.globalColorLanguageIcon1 != null
                ? { color: '#fff', backgroundColor: '#4ba4da' }
                : null
            }
            onClick={(event) => props.handleColorOpen(event, props.record)}
            aria-label="language"
          >
            <LanguageIcon />
          </IconButton>
        )}
  
        {props.hasColorButtonTextHover && (
          <IconButton
            style={
              props.globalColorLanguageIcon2 != null
                ? { color: '#fff', backgroundColor: '#4ba4da' }
                : null
            }
            onClick={(event) => props.handleColorOpen(event, props.record)}
            aria-label="language"
          >
            <LanguageIcon />
          </IconButton>
        )}
        {props.hasColorButtonBGHover && (
          <IconButton
            style={
              props.globalColorLanguageIcon3 != null
                ? { color: '#fff', backgroundColor: '#4ba4da' }
                : null
            }
            onClick={(event) => props.handleColorOpcoloren(event, props.record)}
            aria-label="language"
          >
            <LanguageIcon />
          </IconButton>
        )}
  
        {props.hasDelete && (
          <IconButton
            onClick={(event) => props.handleDelete(event, props.record)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        )}
        {props.hasEdit && (
          <IconButton
            onClick={(event) => props.handleEditOpen(event, props.record)}
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        )}
  
        {props.hasColorPicker && (
          <>
            <IconButton
              aria-label="delete"
              onClick={(event) =>
                handleOpen(event, {
                  record: props.record,
                  state: props.setGlobalColorLanguageIcon,
                  primary: props.setPrimaryNormalT,
                  secondary: props.setSecondaryNormalT,
                  text: props.setTextNormalT,
                  accent: props.setAccentNormalT,
                  index: props.setSelectedIndex1,
                })
              }
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.buttonNormalTextColor}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.buttonNormalTextColor}
                onChange={(color) => {
                  props.setButtonNormalTextColor(color.hex);
                  props.handleChangeColorPickerManually('button_text_normal');
                  props.setGlobalColorLanguageIcon(null);
                  props.setSelectedIndex1(null);
                  props.setSelectedIndexCustom(null);
                }}
              />
            </Popover>
          </>
        )}
  
        {/*  */}
  
        {props.hasColorPicker_Background && (
          <>
            <IconButton
              aria-label="delete"
              onClick={(event) =>
                handleOpen(event, {
                  record: props.record,
                  state: props.setGlobalColorLanguageIcon1,
                  primary: props.setPrimaryNormalBG,
                  secondary: props.setSecondaryNormalBG,
                  text: props.setTextNormalBG,
                  accent: props.setAccentNormalBG,
                  index: props.setSelectedIndex2,
                })
              }
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.buttonNormalBC}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.buttonNormalBC}
                onChange={(color) => {
                  props.setButtonNormalBC(color.hex);
                  props.handleChangeColorPickerManually(
                    'button_background_normal'
                  );
                  props.setGlobalColorLanguageIcon1(null);
                  props.setSelectedIndex2(null);
                  props.setSelectedIndexCustomBGN(null);
                }}
              />
            </Popover>
          </>
        )}
  
        {/* Hover Text */}
  
        {props.hasColorPicker_Hover_Text && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.buttonHoverTextColor}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.buttonHoverTextColor}
                onChange={(color) => {
                  props.setButtonHoverTextColor(color.hex);
                  props.handleChangeColorPickerManually('button_text_hover');
                  props.setGlobalColorLanguageIcon2(null);
                  props.setSelectedIndex3(null);
                  props.setSelectedIndexCustomTH(null);
                }}
              />
            </Popover>
          </>
        )}
  
        {/* Hover BC */}
  
        {props.hasColorPicker_Hover_BC && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.buttonHoverBC}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.buttonHoverBC}
                onChange={(color) => {
                  props.setButtonHoverBC(color.hex);
                  props.handleChangeColorPickerManually(
                    'button_background_hover'
                  );
                  props.setGlobalColorLanguageIcon3(null);
                  props.setSelectedIndex4(null);
                  props.setSelectedIndexCustomBGH(null);
                }}
              />
            </Popover>
          </>
        )}
  
        {/* GCC-Primary */}
  
        {props.hasColorPicker_GCC_Primary && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.gccPrimary}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.gccPrimary}
                onChange={(color) => props.setGCCPrimary(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* GCC-Secondary */}
  
        {props.hasColorPicker_GCC_Secondary && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.gccSecondary}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.gccSecondary}
                onChange={(color) => props.setGCCSecondary(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* GCC-Text */}
        {props.hasColorPicker_GCC_Text && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.gccText}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.gccText}
                onChange={(color) => props.setGCCText(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* GCC-Accent */}
        {props.hasColorPicker_GCC_Accent && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.gccAccent}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.gccAccent}
                onChange={(color) => props.setGCCAccent(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Image_normal_boxshadow */}
  
        {props.hasColorPicker_Image_BoxShadow_Normal && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.boxShadowColorPicker_Normal}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.boxShadowColorPicker_Normal}
                onChange={(color) =>
                  props.setBoxShadowColorPicker_Normal(color.hex)
                }
              />
            </Popover>
          </>
        )}
  
        {/* Image_hover_boxshadow */}
        {props.hasColorPicker_Image_BoxShadow_Hover && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.boxShadowColorPicker_Hover}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.boxShadowColorPicker_Hover}
                onChange={(color) =>
                  props.setBoxShadowColorPicker_Hover(color.hex)
                }
              />
            </Popover>
          </>
        )}
  
        {/* Body Color Picker */}
        {props.hasColorPicker_Body && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.bodyTextColor}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.bodyTextColor}
                onChange={(color) => {
                  props.setBodyTextColor(color.hex);
                  props.handleChangeColorPickerManually('body_text_color');
                }}
              />
            </Popover>
          </>
        )}
        {/* Heading_H1 */}
        {props.hasColorPicker_H1 && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.h1}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.h1}
                onChange={(color) => props.setH1(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Heading_H2 */}
        {props.hasColorPicker_H2 && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.h2}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.h2}
                onChange={(color) => props.setH2(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Heading_H3 */}
        {props.hasColorPicker_H3 && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.h3}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.h3}
                onChange={(color) => props.setH3(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Heading_H4 */}
        {props.hasColorPicker_H4 && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.h4}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.h4}
                onChange={(color) => props.setH4(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Heading_H5 */}
        {props.hasColorPicker_H5 && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.h5}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.h5}
                onChange={(color) => props.setH5(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Heading_H6 */}
        {props.hasColorPicker_H6 && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.h6}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.h6}
                onChange={(color) => props.setH6(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Link_Normal_text */}
        {props.hasColorPicker_link_normal_text && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.link_normal_text_color}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.link_normal_text_color}
                onChange={(color) => props.setLinkNormalTextColor(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Link_Hover_text */}
        {props.hasColorPicker_link_hover_text && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.link_hover_text_color}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.link_hover_text_color}
                onChange={(color) => props.setLinkHoverTextColor(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Link_normal_background */}
        {props.hasColorPicker_link_normal_background && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.link_normal_BC_color}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.link_normal_BC_color}
                onChange={(color) => props.setLinkNormalBCColor(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Link_hover_background */}
        {props.hasColorPicker_link_hover_background && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.link_hover_BC_color}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.link_hover_BC_color}
                onChange={(color) => props.setLinkHoverBCColor(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/*Field_Label_text_color */}
        {props.hasColorPicker_text_label && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.fieldLabelTextColor}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.fieldLabelTextColor}
                onChange={(color) => props.setFieldLabelTextColor(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Field_text_color */}
        {props.hasColorPicker_text_field && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.fieldTextColor}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.fieldTextColor}
                onChange={(color) => props.setFieldTextcolor(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Field -BC -color */}
        {props.hasColorPicker_BC_field && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.fieldBCColor}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.fieldBCColor}
                onChange={(color) => props.setFieldBCColor(color.hex)}
              />
            </Popover>
          </>
        )}
        {/* Field -tetx-color-focus */}
        {props.hasColorPicker_text_field_focus && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.fieldTextColor_Focus}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.fieldTextColor_Focus}
                onChange={(color) => props.setFieldTextcolor_Focus(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Field -BC-color-focus */}
        {props.hasColorPicker_BC_field_Focus && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.fieldBCColor_Focus}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.fieldBCColor_Focus}
                onChange={(color) => props.setFieldBCColor_Focus(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Add custom */}
        {props.hasColorPicker_Add_Color && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.test1}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.test1}
                onChange={(color) =>
                  props.setTest1((prev) =>
                    prev.map((i) => ({ name: props.name, color: color.hex }))
                  )
                }
              />
            </Popover>
          </>
        )}
  
        {props.hasColorPickerHeaderBackground && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.backgroundColor}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <ChromePicker
                color={props.backgroundColor}
                onChange={(color) => props.setBackgroundColor(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {props.hasColorPickerHeaderStyleText && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.headerStyleTextColor}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.headerStyleTextColor}
                onChange={(color) => props.setHeaderStyleTextColor(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Footer - Style-TExt-text color */}
  
        {props.hasFooterColorPicker_Text && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.footerstyleTexttextColor}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.footerstyleTexttextColor}
                // onChange={(color) => props?.setStyleimageTextColor({"footer-style-image-text-color" : color.hex})}
                onChange={(color) =>
                  props?.setFooterstyleTexttextColor(color.hex)
                }
              />
            </Popover>
          </>
        )}
  
        {/* Footer- Image Gallery- Text Color */}
        {props.hasFooterColorPicker_Img && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box sx={{ backgroundColor: `${props.styleimageTextColor}` }}></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.styleimageTextColor}
                // onChange={(color) => props?.setStyleimageTextColor({"footer-style-image-text-color" : color.hex})}
                onChange={(color) => props?.setStyleimageTextColor(color.hex)}
              />
            </Popover>
          </>
        )}
  
        {/* Footer-Style-GalleryCaption-Text Color*/}
  
        {/* Footer- Image Gallery- Text Color */}
        {props.hasFooterColorPicker_Gallery && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.footerstylegallerytextColor}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.footerstylegallerytextColor}
                // onChange={(color) => props?.setStyleimageTextColor({"footer-style-image-text-color" : color.hex})}
                onChange={(color) =>
                  props?.setFooterstylegallerytextColor(color.hex)
                }
              />
            </Popover>
          </>
        )}
  
        {/* Footer- Style-Button Border- Border Color */}
        {props.hasFooterColorPicker_Border && (
          <>
            <IconButton
              aria-label="delete"
              onClick={handleOpen}
              className={classes.colorPickerButton}
            >
              <Box
                sx={{ backgroundColor: `${props.footerstylebrdrbtntextColor}` }}
              ></Box>
            </IconButton>
            <Popover
              className={classes.colorPickerPopover}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <ChromePicker
                color={props.footerstylebrdrbtntextColor}
                // onChange={(color) => props?.setStyleimageTextColor({"footer-style-image-text-color" : color.hex})}
                onChange={(color) =>
                  props?.setFooterstylebrdrbtntextColor(color.hex)
                }
              />
            </Popover>
          </>
        )}
      </ButtonGroup>
    );
  }
  
  export default ActionsGroup;
  