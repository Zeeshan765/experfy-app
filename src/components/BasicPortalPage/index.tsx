//@ts-ignore

import { ErrorMessage as DescriptionAlerts } from '@hookform/error-message';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogTitle, Grid, IconButton } from '@mui/material';
import axios from 'axios';
import { Button } from 'payload/components/elements';
import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';
import BrandForm from './Brandform';
import PortalIdentityForm from './PortalIdentityform';
const baseClass = 'custom-route';

const portal_url_tip =
  'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL';
const portal_id_tip = 'The read only filed displays the Portal ID';
const portal_name_tip = 'The go-to-market name of the career portal';
const company_name_tip =
  'The company of your career Portal. This can be a shortened version of Portal.';

const BasicPortalPage: React.FC = (props) => {
  const [brandSwitch, setBrandSwitch] = React.useState<boolean>(true);
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [tenantID, setTenantID] = useState('');
  const { setStepNav } = useStepNav();
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    setStepNav([
      {
        label: 'Portal Identity',
        url: '/basic-portal-identity',
      },
    ]);
  }, [setStepNav]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({});

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find(
    (collection) => collection.slug === userSlug
  );

  const handleSwitchChange = () => {
    setBrandSwitch(!brandSwitch);
    const handleSwitchChange = () => {
      setBrandSwitch(!brandSwitch);
    };

    const onSubmit = async (data) => {
      console.log('data', data);
      let apiEndpoint = `${serverURL}${api}/brand`;
      try {
        const formData = new FormData();
        formData.append('_payload', JSON.stringify(data));
        const res = await axios.post(apiEndpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: `Bearer ${apiKey}`,
          },
        });
        toast.success('Portal Identity created successfully');
      } catch (error) {
        console.error(error);
        return error;
      }
    };
  };
  return (
    <DefaultTemplate>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12}>
            <div className="portal-banner">
              <div className="portal-banner__inner">
                <span>Welcome to</span>
                <h1>
                  <span>Experfy</span> Studio
                </h1>
                <p>
                  Experfy Studio is a recruitment suite specifically developed
                  for talent sourcing, pipelining, and hiring. It comes with the
                  drag and drop website editor, widgets, and prebuilt modules
                  like job listing, TalentClouds and practice areas that are
                  needed for recruitment marketing and pipelining of talent.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="card-wrapper">
              <div className="card-portal">
                <div className="card-portal__content">
                  <span className="card-portal__icon card-portal--external"></span>
                  <h3 className="card-portal__title">
                    External TalentCloud Career Portal
                  </h3>
                  <ul className="card-portal__list">
                    <li>Initiate the creation and enter basic information</li>
                    <li>Configure the Portal</li>
                    <li>Configure theme(s) for your portal</li>
                    <li>
                      Add pages and create custom content through pre-configured
                      sections and elements.
                    </li>
                    <li>
                      Publish the portal to start pipelining and recruiting
                      talent from external channels.
                    </li>
                  </ul>
                </div>
                <div className="card-portal__footer">
                  <Button
                    type="button"
                    buttonStyle="primary"
                    onClick={() => handleOpen()}
                  >
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="card-wrapper">
              <div className="card-portal">
                <div className="card-portal__content">
                  <span className="card-portal__icon card-portal--internal"></span>
                  <h3 className="card-portal__title">
                    Inner Mobility through Internal TalentCloud Marketplace
                  </h3>
                  <p className="card-portal__text">
                    Mapping and discovery of internal talent through TalentCloud
                    enables Managers to easily identify the resources that are
                    needed for roles, projects and gigs. Fully brand and
                    customize your internal opportunity marketplace and provide
                    your employees a way to engage with new opportunities within
                    your organization.
                  </p>
                </div>
                <div className="card-portal__footer">
                  <Button
                    type="button"
                    buttonStyle="primary"
                    className="btn--add"
                    // icon="plus"
                    // iconPosition="left"
                    // iconStyle="without-border"
                  >
                    <span className="btn-add--icon"></span>
                    Create New
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth={true}
        >
          {error ? (
            <Grid>
              <DescriptionAlerts
                name={errorMessage}
                errors={setError}
                message={'Check below errors'}
              />
            </Grid>
          ) : (
            ``
          )}
          <DialogTitle>
            <Grid container justifyContent="space-between" alignItems="center">
              <h2 className="modal-title modal-title--lg">Portal Identity</h2>
              <IconButton onClick={() => handleClose()}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </DialogTitle>

          {visible ? (
            <BrandForm submittedData={submittedData} />
          ) : (
            <PortalIdentityForm
              handleSwitchChange={handleSwitchChange}
              setVisible={setVisible}
              brandSwitch={brandSwitch}
              setSubmittedData={setSubmittedData}
            />
          )}
        </Dialog>
      </Box>
    </DefaultTemplate>
  );
};

export default BasicPortalPage;
