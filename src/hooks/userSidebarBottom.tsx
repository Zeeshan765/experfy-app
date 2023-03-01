import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { SettingsIcon } from '../assets/images/global-theme-settings/bottom-nav/settings_active';
import { DesktopIcon } from '../assets/images/global-theme-settings/bottom-nav/desktop_active';
import { TimerIcon } from '../assets/images/global-theme-settings/bottom-nav/timer_active';
import { PreviewIcon } from '../assets/images/global-theme-settings/bottom-nav/preview';
import { MobileIcon } from '../assets/images/global-theme-settings/bottom-nav/mobile_active';
import { TabletIcon } from '../assets/images/global-theme-settings/bottom-nav/tablet_active';

const canvasStyle = `
    #sidebar-bottom-buttons {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 500px;
      width: 300px;
      margin: 0;
      padding: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      background: #fff;
      border-top: 1px solid #dbdbdb;
      border-right: 2px solid #dfe0e1;
    }
    #sidebar-bottom-buttons button, #sidebar-bottom-buttons a {
      float: right;
      height: 100%;
      width: 33.33%;
      border-left: 1px solid #dfe0e1;
      border-radius: 0;
      color: #888;
      font-size: 15px;
      padding: 8px 0;
    }
    #sidebar-bottom-buttons button:hover, #sidebar-bottom-buttons a:hover {
      background: #16b8ec;
      color: #fff;
    }
    #sidebar-bottom-buttons button:last-child, #sidebar-bottom-buttons a:last-child {
      border-left: none;
    }
    #sidebar-bottom-buttons button.waiting {
      background: #16b8ec;
      color: #fff !important;
    }
    #sidebar-bottom-buttons button.waiting i.fa {
      display: none;
    }
    #sidebar-bottom-buttons a#go-back:hover {
      background: #dc3545;
    }
    #sidebar-bottom-device {
    display: flex;
    justify-content: center;
    gap: 20px;
    gridRow: 2,
    backgroundColor: '#3a4152',
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
    alignItems: 'center',
    height: '100px',
    }
    .blocks {
      display: grid !important;
    }
`;

const devices = [
  {
    name: 'Desktop',
    width: '',
    height: '',
    widthMedia: '',
    priority: 0,
    id: 'desktop',
  },
  {
    name: 'Tablet',
    width: '768px',
    height: '',
    widthMedia: '992px',
    priority: 992,
    id: 'tablet',
  },
  // {
  //   name: 'Mobile landscape',
  //   width: '568px',
  //   height: '',
  //   widthMedia: '768px',
  //   priority: 768,
  //   id: 'mobileLandscape',
  // },
  {
    name: 'Mobile portrait',
    width: '360px',
    height: '',
    widthMedia: '768px',
    priority: 768,
    id: 'mobile', // mobilePortrait
  },
];

const UseSidebarBottom = (editor) => {
  const [currentDeviceId, setCurrentDeviceId] = useState('desktop');
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

  const BlockJSX = () => (
    <div
      className="blocks .sidebar-bottom-custom"
      // style={{
      //   display: 'grid',
      //   gridTemplateRows: 'auto auto',
      //   height: '100%',
      // }}
    >
      <div
        id="sidebar-bottom-device"
        style={{
          gridRow: 2,
          backgroundColor: '#3a4152',
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          alignItems: 'center',
          height: '100px',
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
        <div id="set-tablet-view" className="btn set-view" data-view="Tablet">
          <TimerIcon />
        </div>

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
    </div>
  );

  return { BlockJSX, canvasStyle, devices };
};

export default UseSidebarBottom;


