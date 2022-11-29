import { ErrorMessage as DescriptionAlerts } from '@hookform/error-message';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
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
import { Button, Eyebrow } from 'payload/components/elements';
import { Form, SelectInput } from 'payload/components/forms';
import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';
import {
  useAuth,
  useConfig,
  useDocumentInfo,
} from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import FormSelect from '../../blocks/FormSelect';
import FormSwitch from '../../blocks/FormSwitch';
import FormTip from '../../blocks/FormTip';
import TextInput from '../../blocks/TextInput';
import { useHistory } from 'react-router-dom';
import { useStyles } from './css';
const baseClass = 'custom-route';

const portal_url_tip =
  'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL';
const portal_id_tip = 'The read only filed displays the Portal ID';
const portal_name_tip = 'The go-to-market name of the career portal';
const company_name_tip =
  'The company of your career Portal. This can be a shortened version of Portal.';

const BasicPortalPage: React.FC = (props) => {
  const history = useHistory();
  const { publishedDoc } = useDocumentInfo();

  // console.log('publish', publishedDoc);

  const [brandSwitch, setBrandSwitch] = React.useState<boolean>(true);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const { control, getValues, register, watch } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: 'brands',
    control,
  });
  const data = watch();

  const handleAddRow = (value: unknown) => {
    append(value);
  };

  // console.log('brand', brandSwitch);

  const onClickBrandName = () => {
    let finalDefaultBrandsArray = getValues()?.brands.map((i) => ({
      value: i.name,
      label: i.name,
    }));
    setDefaultBrands(finalDefaultBrandsArray);
  };

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

  const onSuccess = (data) => {
    setId(data.doc.id);
    if (brandSwitch) {
      setVisible(true);
    } else {
      setVisible(false);
      history.push({
        pathname: `/admin/collections/portal-identity/${data.doc.id}`,
        param: data.doc.id,
      });
    }
  };

  const handlenaviagte = () => {
    history.push({
      pathname: `/admin/collections/portal-identity/${id}`,
      param: id,
    });
  };

  return (
    <DefaultTemplate>
      <div className="main__content">
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12}>
              <Card className={classes.portalBanner}>
                <CardContent>
                  <Typography component="span">Welcome to</Typography>
                  <Typography component="h1" variant="h1">
                    <Typography component="span">Experfy</Typography> Studio
                  </Typography>
                  <Typography>
                    Experfy Studio is a recruitment suite specifically developed
                    for talent sourcing, pipelining, and hiring. It comes with
                    the drag and drop website editor, widgets, and prebuilt
                    modules like job listing, TalentClouds and Practice Areas
                    that are needed for recruitment Marketing and pipelining of
                    talent.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <div className="portals-identity">
            <div className="row">
              <div className="col-md-6 col">
                <div className="card card--style">
                  <div
                    className={`${classes.portalCardContent} ${classes.portalCardIconOne}`}
                  >
                    <div>
                      <h3>External TalentCloud Career Portal</h3>
                      <ul>
                        <li>
                          Initiate the creation and enter basic information
                        </li>
                        <li>Configure the Portal</li>
                        <li>Configure theme(s) for your portal</li>
                        <li>
                          Add pages and create custom content through
                          pre-configured sections and elements.
                        </li>
                        <li>
                          Publish the portal to start pipelining and recruiting
                          talent from external channels.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <button
                        className="btn--style-primary btn-margin-style"
                        onClick={() => handleOpen()}
                      >
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col">
                <div className="card card--style">
                  <div
                    className={`${classes.portalCardContent} ${classes.portalCardIconTwo}`}
                  >
                    <div>
                      <h3>
                        Inner Mobility through Internal TalentCloud Marketplace
                      </h3>
                      <p>
                        Mapping and discovery of internal talent through
                        TalentCloud enables Managers to easily identify the
                        resources that are needed for roles, projects and gigs.
                        Fully brand and customize your internal opportunity
                        marketplace and provide your employees a way to engage
                        with new opportunities within your organization.
                      </p>
                    </div>
                    <div>
                      <button className="btn--style-primary btn-margin-style">
                        Create New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <h2>Portal Identity</h2>

                <IconButton onClick={() => handleClose()}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </DialogTitle>

            {!visible && (
              <DialogContent>
                <Form
                  method="post"
                  onSuccess={onSuccess}
                  action={`${serverURL}${api}/basic-portal-identity`}
                  validationOperation="create"
                >
                  <h3>
                    Fill in the information below and you will be on your way to
                    creating your Career portal
                  </h3>

                  <div className="row">
                    <div className="col-md-8">
                      <TextInput
                        label={'Portal Name'}
                        path={'career_portal_name'}
                        required={true}
                        placeHolder="Company Career Portal"
                        setTouched={setTouched}
                      />
                    </div>

                    <div className="col-md-4">
                      {touched === 'career_portal_name' && (
                        <FormTip text={portal_name_tip} />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <TextInput
                        path={'portal_id'}
                        label={'Portal ID'}
                        placeHolder={'CP-ID798998989'}
                        setTouched={setTouched}
                      />
                    </div>

                    <div className="col-md-4">
                      {touched === 'portal_id' && (
                        <FormTip
                          text={'The read only filed displays the Portal ID'}
                        />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <TextInput
                        path={'portal_url'}
                        label="Portal URL"
                        required={true}
                        placeHolder="https://www.experfy.com/career-portal"
                        setTouched={setTouched}
                      />
                    </div>

                    <div className="col-md-4">
                      {touched === 'portal_url' && (
                        <FormTip text={portal_url_tip} />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <TextInput
                        path={'company_name'}
                        label="Company Name"
                        placeHolder="Company Name"
                        setTouched={setTouched}
                      />
                    </div>

                    <div className="col-md-4">
                      {touched === 'company_name' && (
                        <FormTip text={company_name_tip} />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <FormSelect
                        type={'select'}
                        options={['English', 'Spanish']}
                        label="Default Language"
                        name={'default_language'}
                        path={'default_language'}
                        defaultValue="English"
                        setTouched={setTouched}
                      />
                    </div>

                    <div className="col-md-4">
                      {touched === 'default_language' && (
                        <FormTip text="Set the default language of your career portal for your visitors" />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8">
                      <FormSelect
                        options={['US', 'ES']}
                        label="Default Locale"
                        name={'default_locale'}
                        path={'default_locale'}
                        defaultValue="US"
                        type={'select'}
                        setTouched={setTouched}
                      />
                    </div>

                    <div className="col-md-4">
                      {touched === 'default_locale' && (
                        <FormTip text="Set the default locale of your career portal for your visitors" />
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        If you want to create microsite for your different
                        brands within your career portal, enable branding below.
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <FormSwitch
                        label="Branding On"
                        checked={brandSwitch}
                        setBrandSwitch={setBrandSwitch}
                        // handleSwitchChange={handleSwitchChange}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn--style-primary">
                    Save
                  </button>
                </Form>
              </DialogContent>
            )}

            {visible && (
              <DialogContent>
                <Form
                  method={id ? 'patch' : 'post'}
                  action={`${serverURL}${api}/basic-portal-identity/${
                    id ?? ''
                  }`}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                      <FormSelect
                        type={'select'}
                        options={[]}
                        label="Default Brand"
                        name={'default_brand'}
                        path={'default_brand'}
                      />
                    </Grid>
                  </Grid>

                  <Typography variant="h5" mb={2} mt={4}>
                    Please choose whether you would like your microsites in your
                    career portal network to use subdomains or sub-directories.
                  </Typography>

                  <RadioGroup
                    aria-labelledby="radio-buttons"
                    defaultValue="micro-sites"
                    name="radio-buttons-group"
                  >
                    <Grid container spacing={1} alignItems="center">
                      <Grid item xs={2}>
                        <FormControlLabel
                          name={'sub_domain'}
                          value="sub_domain"
                          control={<Radio />}
                          label="Sub-domains"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Stack
                          className={classes.radioExample}
                          direction="row"
                          spacing={2}
                        >
                          <Typography>Example</Typography>
                          <Typography variant="span">
                            microsite1/companyname/careers.experfy.com
                          </Typography>
                          <Typography variant="span">
                            microsite2/companyname/careers.experfy.com
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControlLabel
                          name={'sub_directories'}
                          value="sub_directories"
                          control={<Radio />}
                          label="Sub-directories"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Stack
                          className={classes.radioExample}
                          direction="row"
                          spacing={2}
                        >
                          <Typography>Example</Typography>
                          <Typography variant="span">
                            companyname/careers.experfy.com/microsite1
                          </Typography>
                          <Typography variant="span">
                            companyname/careers.experfy.com/microsite2
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </RadioGroup>

                  <Grid container justifyContent="flex-end" my={2}>
                    <Button
                      icon={<AddIcon />}
                      buttonStyle="primary"
                      onClick={handleAddRow}
                    >
                      Add Brand
                    </Button>
                  </Grid>
                  <TableContainer>
                    <Table aria-label="table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Brand Name</TableCell>
                          <TableCell>URL Brand Identifier</TableCell>
                          <TableCell>Microsite Identifier</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fields.map((item, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell>
                                {/* <input {...register(`brands.${index}.brand_name`)}
              placeholder="Brand Name" />
*/}
                                <TextInput
                                  // label={'Portal Name'}
                                  path={`brand_name`}
                                  required={false}
                                  index={index}
                                  brand="brands"
                                  placeHolder="Brand Name"
                                  // setTouched={setTouched}
                                />
                              </TableCell>
                              <TableCell>
                                {/* <input {...register(`brands.${index}.brand_identifier`)}
              placeholder="Brand Identifier"/> */}

                                <TextInput
                                  // name="Portal Name"
                                  path={`brand_identifier`}
                                  required={false}
                                  index={index}
                                  brand="brands"
                                  placeHolder="Brand Identifier"
                                  // setTouched={setTouched}
                                />
                              </TableCell>
                              <TableCell>
                                {/* <input {...register(`brands.${index}.microsoft_identifier`)}
          placeholder="Microsoft Identifier"/> */}

                                <TextInput
                                  // path={`brands.${index}.microsite_identifier`}
                                  path={`microsoft_identifier`}
                                  index={index}
                                  brand="brands"
                                  required={false}
                                  placeHolder="Microsoft Identifier"
                                  // setTouched={setTouched}
                                />
                              </TableCell>
                              <TableCell>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  Delete
                                </button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Button
                    type="submit"
                    className="primary-btn-style"
                    // onClick={handlenaviagte}
                  >
                    Save{' '}
                  </Button>
                </Form>
              </DialogContent>
            )}
          </Dialog>
        </Box>
      </div>
    </DefaultTemplate>
  );
};

export default BasicPortalPage;
