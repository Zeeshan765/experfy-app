import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { SettingsIcon } from '../../assets/images/global-theme-settings/bottom-nav/settings_active';
import { MobileIcon } from '../../assets/images/global-theme-settings/bottom-nav/mobile_active';
import { TabletIcon } from '../../assets/images/global-theme-settings/bottom-nav/tablet_active';
import { DesktopIcon } from '../../assets/images/global-theme-settings/bottom-nav/desktop_active';
import { TimerIcon } from '../../assets/images/global-theme-settings/bottom-nav/timer_active';
import { PreviewIcon } from '../../assets/images/global-theme-settings/bottom-nav/preview';
import MenuIcon from '@mui/icons-material/Menu';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import EditIcon from '@mui/icons-material/Edit';
import { procedCreatedTime } from '../../utilities/dateAndTime';

const SidebarBottom = ({ editor, consumer, pageHistoryArray, deleteHistory, loadHistory, hasBottomToolbar }) => {
  const [currentDeviceId, setCurrentDeviceId] = useState('desktop');
  const [historyDisplay, setHistoryDisplay] = useState(false);
  const [publishLinksDisplay, setPublishLinksDisplay] = useState(false);
  const [displayLinksDisplay, setDisplayLinksDisplay] = useState(false);
  console.log("consumer",consumer)

  const handleShowDisplayOptions = () => {
    
  };

  const handleShowPublishOptions = () => {
    setPublishLinksDisplay(value => !value)
  };
  
  const handlePreview = () => {
    editor.runCommand('preview');
  };

  const handleDevices = () => {
    let deviceManager = editor.DeviceManager;

    const { id } = deviceManager.getSelected();
    let updatedId = 'desktop';

    if (id === 'desktop') {
      updatedId = 'tablet';
    } else if (id === 'tablet') {
      updatedId = 'mobile';
    }
    console.log('updatedId', updatedId);

    deviceManager.select(updatedId);
    setCurrentDeviceId(updatedId);
  };

  const historyView = () => {
    console.log('historyView');
    setHistoryDisplay((pre) => !pre);
  };

  console.log('pageHistoryArray=================', pageHistoryArray);

  return (
    <div className={`${hasBottomToolbar ? "sidebar-bottom" : ""} blocks sidebar-bottom-custom`}>
      {hasBottomToolbar &&
        <div
          className='sidebar-bottom__toolbar'
          id='sidebar-bottom-device'
        >
          <div className='sidebar-bottom__toolbar__inner'>
            <div className='sidebar-bottom__toolbar__menu'>
              {displayLinksDisplay &&
                <>
                  <a className='sidebar-bottom__toolbar__menu__link'>Desktop View</a>
                  <a className='sidebar-bottom__toolbar__menu__link'>Tablet View</a>
                  <a className='sidebar-bottom__toolbar__menu__link'>Mobile View</a>
                </>
              }
              {publishLinksDisplay &&
                <>
                  <a className='sidebar-bottom__toolbar__menu__link'>Save as a Draft</a>
                  <a className='sidebar-bottom__toolbar__menu__link'>Save as a Template</a>
                </> 
              }  
            </div>  
            <div className='sidebar-bottom__toolbar__content'>
              <div className='sidebar-toolbar__actions'>
                <div id='sidebar-toolbar-settings' data-view='Desktop'>
                  <SettingsIcon />
                </div>

                <div
                  id='sidebar-toolbar-device'
                  data-view='Desktop'
                  onClick={handleDevices}
                >
                  {currentDeviceId === 'mobile' ? (
                    <MobileIcon />
                  ) : currentDeviceId === 'tablet' ? (
                    <TabletIcon />
                  ) : (
                    <DesktopIcon />
                  )}
                </div>

                {consumer === 'pageBuilder' && (
                  <button
                    onClick={historyView}
                    id='set-tablet-view'
                    data-view='Tablet'
                  >
                    <TimerIcon />
                  </button>
                )}

                <div
                  id='sidebar-toolbar-preview'
                  data-view='Mobile'
                  onClick={handlePreview}
                >
                  <PreviewIcon />
                </div>
              </div>
              <div id='sidebar-toolbar-publish' data-view='Mobile'>
                <ButtonGroup variant="contained" aria-label="split button">
                  <Button disableRipple>Publish</Button>
                  <Button
                    disableRipple
                    size="small"
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleShowPublishOptions}
                  >
                    <ArrowDropUpIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </div>  
          </div>  
        </div>
      }  
      {historyDisplay && (
        <div style={{}}>
          <div
            style={{
              backgroundColor: 'gray',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
            }}
          >
            <p
              style={{
                width: '60%',
                textAlign: 'end',
                color: '#fff',
                margin: '0px',
                fontSize: '1.25rem',
                fontWeight: '400',
              }}
            >
              History
            </p>
            <p
              style={{
                width: '40%',
                textAlign: 'end',
                color: '#fff',
                margin: '0px',
              }}
            >
              <AppsRoundedIcon style={{ fontSize: '2rem' }} />
            </p>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid gray' }}>
            <button
              className='action-btn'
              style={{
                width: '50%',
                backgroundColor: '#fff',
                border: '1px solid #fff',
                padding: '8px',
              }}
            >
              Actions
            </button>
            <button
              className='revision-btn'
              style={{
                width: '50%',
                backgroundColor: '#fff',
                border: '1px solid #fff',
                padding: '8px',
              }}
            >
              <EditIcon
                style={{ fontSize: '1rem', verticalAlign: 'baseline' }}
              />{' '}
              Revision
            </button>
          </div>

          <div
            style={{
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {pageHistoryArray.length > 0 &&
              pageHistoryArray?.map((historyObj) => {
                console.log("historyObj.createdAt======",historyObj.createdAt);
                return (
                  <button className='his-btn'
 onClick={(e)=>loadHistory(e,historyObj.pageHistory)}
                  >
                    <span>
                      <AccountCircleIcon style={{ fontSize: '2rem' }} />
                      &nbsp;{procedCreatedTime( historyObj.createdAt)}
                    </span>
                    {true ? <CloseIcon onClick={(e)=>{deleteHistory(e,historyObj.id)}} /> : <CheckIcon />}
                  </button>
                );
              })}
            {pageHistoryArray.length === 0 && <p>No History</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarBottom;
