import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
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

const SidebarBottom = ({ editor, consumer, pageHistoryArray }) => {
  const [currentDeviceId, setCurrentDeviceId] = useState('desktop');
  const [historyDispaly, setHistoryDispaly] = useState(false);
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
    setHistoryDispaly((pre) => !pre);
  };

  return (
    <div className="blocks sidebar-bottom-custom">
      <div
        id="sidebar-bottom-device"
        style={{
          gridRow: 2,
          backgroundColor: '#3a4152',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75px',
        }}
      >
        <div id="set-desktop-view" className="btn set-view" data-view="Desktop">
          <SettingsIcon />
        </div>

        <div
          id="set-desktop-view"
          className="btn set-view"
          data-view="Desktop"
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
            id="set-tablet-view"
            className="btn set-view"
            data-view="Tablet"
          >
            <TimerIcon />
          </button>
        )}

        <div
          id="set-mobile-view"
          className="btn set-view"
          data-view="Mobile"
          onClick={handlePreview}
        >
          <PreviewIcon />
        </div>

        <div id="set-mobile-view" className="btn set-view" data-view="Mobile">
          <Button
            variant="contained"
            endIcon={
              <div
                style={{
                  borderLeft: '1px solid white',
                }}
              >
                <ArrowDropUpIcon
                  style={{
                    verticalAlign: 'text-top',
                  }}
                />
              </div>
            }
            style={{
              backgroundColor: '#48a3d7',
              padding: '0px 16px',
            }}
          >
            Publish
          </Button>
        </div>
      </div>
      {historyDispaly && (
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
              className="action-btn"
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
              className="revision-btn"
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
              pageHistoryArray.map((historyObj) => (
                <button className="his-btn">
                  <span>
                    <AccountCircleIcon style={{ fontSize: '2rem' }} />
                    &nbsp;{historyObj?.timeStemp}
                  </span>
                  {true ? <CloseIcon /> : <CheckIcon />}
                </button>
              ))}
            {pageHistoryArray.length === 0 && <p>No History</p>}
            {/* <button className='his-btn'>
              <span>
                <AccountCircleIcon style={{ fontSize: '2rem' }} />
                &nbsp; 5 min ago{' '}
              </span>
              {true ? <CloseIcon /> : <CheckIcon />}
            </button>
            <button className='his-btn'>
              <span>
                <AccountCircleIcon style={{ fontSize: '2rem' }} />
                &nbsp; 5 min ago{' '}
              </span>
              {true ? <CloseIcon /> : <CheckIcon />}
            </button>
            <button className='his-btn'>
              <span>
                <AccountCircleIcon style={{ fontSize: '2rem' }} />
                &nbsp; 5 min ago
              </span>
              {true ? <CloseIcon /> : <CheckIcon />}
            </button>
            <button className='his-btn'>
              <span>
                <AccountCircleIcon style={{ fontSize: '2rem' }} />
                &nbsp; 5 min ago{' '}
              </span>
              {true ? <CloseIcon /> : <CheckIcon />}
            </button>
            <button className='his-btn'>
              <span>
                <AccountCircleIcon style={{ fontSize: '2rem' }} />
                &nbsp; 5 min ago{' '}
              </span>
              {true ? <CloseIcon /> : <CheckIcon />}
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarBottom;
