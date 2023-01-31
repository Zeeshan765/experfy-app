//@ts-ignore

import { ErrorMessage as DescriptionAlerts } from '@hookform/error-message';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Button } from 'payload/components/elements';
import { Form } from 'payload/components/forms';
import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FormSelect from '../../blocks/FormSelect';
import FormSwitch from '../../blocks/FormSwitch';
import FormTip from '../../blocks/FormTip';
import TextInput from '../../blocks/TextInput';
import { useStyles } from './css';
import { toast } from 'react-toastify';
const baseClass = 'custom-route';

const portal_url_tip =
  'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL';
const portal_id_tip = 'The read only filed displays the Portal ID';
const portal_name_tip = 'The go-to-market name of the career portal';
const company_name_tip =
  'The company of your career Portal. This can be a shortened version of Portal.';

const BasicPortalPage: React.FC = (props) => {
  const history = useHistory();
  const [brandSwitch, setBrandSwitch] = React.useState<boolean>(true);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [tenantID, setTenantID] = useState('');
  const [toolTipVisible, setToolTipVisible] = useState('portal_name');
  const [defaultBrands, setDefaultBrands] = useState([]);
  const [updateApi, setUpdateApi] = useState(false);
  const { setStepNav } = useStepNav();
  const [dense, setDense] = React.useState(false);
  const [id, setId] = useState('');

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
  } = useForm({
 
  });

  // const { fields, append, remove } = useFieldArray({
  //   name: 'brands',
  //   control,
  // });
  // const data = watch();

  // const handleAddRow = (value: unknown) => {
  //   console.log('handleAddRow', handleAddRow);

  //   append({});
  // };

  console.log('getValues', getValues());

  // const onClickBrandName = () => {
  //   let finalDefaultBrandsArray = getValues()?.brands.map((i) => ({
  //     value: i.name,
  //     label: i.name,
  //   }));
  //   setDefaultBrands(finalDefaultBrandsArray);
  // };

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find(
    (collection) => collection.slug === userSlug
  );

  const [touched, setTouched] = useState('');

  // const onSuccess = (data) => {
  //   setId(data.doc.id);
  //   if (brandSwitch) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //     history.push({
  //       pathname: `/admin/collections/portal-identity/${data.doc.id}`,
  //       //@ts-ignore
  //       param: data.doc.id,
  //     });
  //   }
  // };

  // const handleNavigate = () => {
  //   history.push({
  //     pathname: `/admin/collections/portal-identity/${id}`,
  //     //@ts-ignore
  //     param: id,
  //   });
  // };



const onSubmit = async (data) => {
    console.log('data', data);
    let apiEndpoint = `${serverURL}${api}/brand`
    try {
      const formData = new FormData();       
      formData.append('_payload', JSON.stringify(data));
      const res =  await axios.post(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${apiKey}`,
        },
      });
      toast.success('Portal Identitty created successfully');
    } catch (error) {
      console.error(error);
      return error;
    } 
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
                  like job listing, TalentClouds and Practice Areas that are
                  needed for recruitment Marketing and pipelining of talent.
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
                    icon="plus"
                    iconPosition="left"
                    iconStyle="without-border"
                  >
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

          {!visible && (
            <DialogContent>
              <form 
              onSubmit={handleSubmit(onSubmit)}
               
              >
                <p className="mb-4">
                  Fill in the information below and you will be on your way to
                  creating your Career portal
                </p>

                <div className="row">
                  <div className="col-md-8">
                  <Controller
                      render={({ field }) => (
                        <TextInput
                          {...field}
                          label="Career Portal Name"
                          placeholder="Company Career Portal"
                          id={'career_portal_name'}
                          setToolTipVisible={setToolTipVisible}
                        />
                      )}
                      name="career_portal_name"
                      control={control}
                     
                      reset={reset}
                      />
                  </div>

                  {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'career_portal_name' && (
                        <FormTip text={portal_name_tip} />
                      )}
                    </div>
                  </div> */}
                </div>

                <div className="row">
                  <div className="col-md-8">
                  <Controller
                      render={({ field }) => (
                        <TextInput
                          disabled={false}
                          label="Portal ID"
                          placeholder="CP-ID798998989"
                          {...field}
                          id={'portal_id'}
                          setToolTipVisible={setToolTipVisible}
                        />
                      )}
                      name="portal_id"
                      control={control}
                      reset={reset}
                    />
                  </div>

                  {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'portal_id' && (
                        <FormTip
                          text={'The read only filed displays the Portal ID'}
                        />
                      )}
                    </div>
                  </div> */}
                </div>

                <div className="row">
                  <div className="col-md-8">
                  <Controller
                      render={({ field }) => (
                        <TextInput
                          {...field}
                          label="Portal URL"
                          placeholder="www.experfydemo/career-portal-experfy.com"
                          id={'portal_url'}
                          setToolTipVisible={setToolTipVisible}
                        />
                      )}
                      name="portal_url"
                      control={control}
                      reset={reset}
                    />
                  </div>

                  
                </div>

                <div className="row">
                  <div className="col-md-8">
                  <Controller
                      render={({ field }) => (
                        <TextInput
                          disabled={false}
                          {...field}
                          label="Company Name"
                          id={'company_name'}
                          setToolTipVisible={setToolTipVisible}
                        />
                      )}
                      name="company_name"
                      control={control}
                      reset={reset}
                    />
                  </div>

                  {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'company_name' && (
                        <FormTip text={company_name_tip} />
                      )}
                    </div>
                  </div> */}
                </div>

                <div className="row">
                  <div className="col-md-8">
                  <Controller
                      render={({ field }) => {
                        return (
                          <FormSelect
                            {...field}
                            options={[{ value: 'English', label: 'English' }]}
                            label="Default Language"
                            id={'default_language'}
                            setToolTipVisible={setToolTipVisible}
                          />
                        );
                      }}
                      name="default_language"
                      control={control}
                    />
                  </div>

                  {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'default_language' && (
                        <FormTip text="Set the default language of your career portal for your visitors" />
                      )}
                    </div>
                  </div> */}
                </div>

                <div className="row">
                  <div className="col-md-8">
                  <Controller
                      render={({ field }) => (
                        <FormSelect
                          {...field}
                          options={[{ value: 'US', label: 'United States' }]}
                          label="Default Locale"
                          id={'default_locale'}
                          setToolTipVisible={setToolTipVisible}
                        />
                      )}
                      name="default_locale"
                      control={control}
                      reset={reset}
                    />
                  </div>

                  {/* <div className="col-md-4">
                    <div className="tip-wrapper">
                      {touched === 'default_locale' && (
                        <FormTip text="Set the default locale of your career portal for your visitors" />
                      )}
                    </div>
                  </div> */}
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <p>
                      If you want to create microsite for your different brands
                      within your career portal, enable branding below.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 d-flex align-items-center">
                  <FormSwitch
                  label="Branding On"
                  // handleSwitchChange={handleSwitchChange}
                  checked={brandSwitch}
                />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-hover color-9"
                >
                  Save
                </button>
              </form>
            </DialogContent>
          )}

          
        </Dialog>
      </Box>
    </DefaultTemplate>
  );
};

export default BasicPortalPage;
