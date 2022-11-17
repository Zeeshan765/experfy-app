import { ErrorMessage as DescriptionAlerts } from '@hookform/error-message';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box, Card, CardActions, CardContent, CircularProgress, Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem, RadioGroup, Stack, Table, TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Button, Eyebrow } from 'payload/components/elements';
import { Form, reduceFieldsToValues } from 'payload/components/forms';
import { useStepNav } from 'payload/components/hooks';
import { DefaultTemplate } from 'payload/components/templates';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import FormSelect from '../../blocks/FormSelect';
import FormSwitch from '../../blocks/FormSwitch';
import FormTip from '../../blocks/FormTip';
import TextInput from '../../blocks/TextInput';
import '../../styles/customAdmin.scss';
import { useStyles } from './css';


const baseClass = 'custom-route';



const LandingPage: React.FC = (props) => {


  const { routes: { admin: adminRoute } } = useConfig();
  const [brandSwitch, setBrandSwitch] = React.useState();
  const classes = useStyles();
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [tenantID, setTenantID] = useState('');
  const [toolTipVisible, setToolTipVisible] = useState('portal_name');
  const [defaultBrands, setDefaultBrands] = useState([]);
  const [updateApi, setUpdateApi] = useState(false);
  const { setStepNav } = useStepNav();


  useEffect(() => {
    // apiHome.getToolTipApi(setToolTip, setLoading);
  }, []);





  useEffect(() => {
    setStepNav([
      {
        label: 'Dashboard',
        url: '/landing-page',
      },
    ]);
  }, [setStepNav]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRow = () => {
    // append(any){
    //   name: 'brand',
    //     control,
    //   };
  };




  const handleSwitchChange = () => {
    if (brandSwitch) {
      // setBrandSwitch(false);
    } else {
      // setBrandSwitch(true);
    }
  };

  const {
    admin: { user: userSlug }, collections, serverURL, routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find((collection) => collection.slug === userSlug);
  console.log('asda8127938****', collections);
  console.log("8988885656475464756", userConfig);




  // const { value, setValue } = useField({path: 'career_portal_name' })
  // const field = useField<string>({
  //   path: 'career_portal_name',
  //   // validate: memoizedValidate,
  // });


  // const {
  //   'career_portal_name': {
  //     value: portal_name,
  //   } = {} as any,
  //   'portal_id': {
  //     value: portal_id,
  //   } = {} as Field,
  // } = fields;

  // const field: Fields{

  // }



  // const processing = useFormProcessing();
  // const [toolTip, setToolTip] = useState(defaultValues);
  // const [fields, dispatchFields] = useAllFormFields();
  // Pass in fields, and indicate if you'd like to "unflatten" field data.
  // The result below will reflect the data stored in the form at the given time
  // const formData = reduceFieldsToValues(fields, true);




  //     portalIdentityScreenOne(
  //       data,
  //       setVisible,
  //       setErrorMessage,
  //       setError,
  //       brandSwitch,
  //       setLoading,
  //     );
  //   } else {
  //     const deleteProps = [
  //       'portal_name',
  //       'portal_id',
  //       'portal_url',
  //       'company_name',
  //       'default_language',
  //       'default_locale',
  //     ].forEach((element) => delete data[element]);

  //     // portalIdentityScreenTwo(
  //     //   data,
  //     //   props.adminPortal,
  //     //   props.setAdminPortal,
  //     //   props.setBrands,
  //     //   navigate,
  //     //   setErrorMessage,
  //     //   setError,
  //     //   setLoading,
  //     //   getCompanyPortalData
  //     // );
  //   }
  // };

  return (
    <DefaultTemplate>
      <div className='main__content'>
        <Eyebrow />
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4} alignItems='stretch'>
            <Grid item xs={12}>
              <Card className={classes.portalBanner}>
                <CardContent>
                  <Typography component='span'>Welcome to</Typography>
                  <Typography component='h1' variant='h1'>
                    <Typography component='span'>Experfy</Typography> Studio
                  </Typography>
                  <Typography>
                    Experfy Studio is a recruitment suite specifically developed
                    for talent sourcing, pipelining, and hiring. It comes with the
                    drag and drop website editor, widgets, and prebuilt modules
                    like job listing, TalentClouds and Practice Areas that are
                    needed for recruitment Marketing and pipelining of talent.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.portalCard}>
                <CardContent
                  className={`${classes.portalCardContent} ${classes.portalCardIconOne}`}
                >
                  <Typography component='h3' variant='h3'>
                    External TalentCloud Career Portal
                  </Typography>
                  <List sx={{ color: '#4a5162' }}>
                    <ListItem disableGutters>
                      Initiate the creation and enter basic information
                    </ListItem>
                    <ListItem disableGutters>Configure the Portal</ListItem>
                    <ListItem disableGutters>
                      Configure theme(s) for your portal
                    </ListItem>
                    <ListItem disableGutters>
                      Add pages and create custom content through pre-configured
                      sections and elements.
                    </ListItem>
                    <ListItem disableGutters>
                      Publish the portal to start pipelining and recruiting talent
                      from external channels.
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleOpen()}>
                    Configure
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.portalCard}>
                <CardContent
                  className={`${classes.portalCardContent} ${classes.portalCardIconTwo}`}
                >
                  <Typography component='h3' variant='h3'>
                    Inner Mobility through Internal TalentCloud Marketplace
                  </Typography>
                  <Typography variant='body1'>
                    Mapping and discovery of internal talent through TalentCloud
                    enables Managers to easily identify the resources that are
                    needed for roles, projects and gigs. Fully brand and customize
                    your internal opportunity marketplace and provide your
                    employees a way to engage with new opportunities within your
                    organization.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button type='button' buttonStyle='primary' icon={<AddIcon />}>
                    Create New
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth='lg'
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
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h2'>Portal Identity</Typography>
                <IconButton onClick={() => handleClose()}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </DialogTitle>

            {!visible && (
              <DialogContent>
                <Typography variant='h5' mb={2}>
                  Fill in the information below and you will be on your way to
                  creating your Career portal
                </Typography>
                <Grid >
                  <Form method="post" action={`${serverURL}${api}/landing`}  >
                    <Grid item xs={8}>
                      <TextInput
                        label="Portal Name"
                        name='career_portal_name'
                        path={'career_portal_name'}
                        required={true}
                        defaultValue='Company Career Portal'
                      // onChange={e => { setValue((e) => { e.target.value }); console.log("test onChange", e.target.value) }}
                      />

                    </Grid>

                    <Grid item xs={8}>
                      <TextInput
                        path={'portal_id'}
                        name={'portal_id'}
                        label='Portal ID'
                        required={true}
                        defaultValue='CP-ID798998989'

                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextInput
                        name={'portal_url'}
                        path={'portal_url'}
                        label='Portal URL'
                        required={true}
                        defaultValue='www.experfy.com/career-portal'
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextInput
                        path={'company_name'}
                        name={'company_name'}
                        label='Company Name'
                        required={true}
                      />
                    </Grid>
                    <Button type='submit'> Submit </Button>
                  </Form>
                  <Grid item xs={8}>
                    <FormSelect
                      options={[{ value: 'English', label: 'English' }]}
                      label='Default Language'
                      id={'default_language'}
                      setToolTipVisible={setToolTipVisible}
                    />
                  </Grid>
                  {toolTipVisible == 'default_language' && (
                    <Grid item xs={4}>
                      <FormTip text="Lorem Ipsum" />
                    </Grid>
                  )}
                  <Grid item xs={8}>

                    <FormSelect
                      options={[{ value: 'US', label: 'United States' }]}
                      label='Default Locale'
                      id={'default_locale'}
                      setToolTipVisible={setToolTipVisible}
                    />

                  </Grid>
                  {toolTipVisible == 'default_locale' && (
                    <Grid item xs={4}>
                      <FormTip text='Lorem Ipsum' />
                    </Grid>
                  )}
                </Grid>
                <Typography variant='h5' mb={2} mt={4}>
                  If you want to create microsites for your different brands
                  within your career portal, enable branding below.
                </Typography>

                <FormSwitch
                  label='Branding On'
                  checked={brandSwitch}
                />
                <button
                  type="submit"
                >

                </button>
              </DialogContent>
            )}

            {visible && (
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={8}>

                    <FormSelect
                      options={defaultBrands}
                      // name={defaultBrand}
                      label='Default Brand'
                    // onFocus={onClickBrandName}
                    />

                  </Grid>
                </Grid>
                <Typography variant='h5' mb={2} mt={4}>
                  Please Choose whether you would like your microsites in your
                  career portal network ti use subdomains or sub-directories.
                </Typography>

                <RadioGroup
                  aria-labelledby='radio-buttons'
                  defaultValue='microsites'
                  name='radio-buttons-group'
                >
                  <Grid container spacing={1} alignItems='center'>
                    <Grid item xs={2}>
                      {/* <FormControlLabel
                                  value='sub_domain'
                                  control={<Radio />}
                                  label='Sub-domains' /> */}
                    </Grid>
                    <Grid item xs={10}>
                      <Stack
                        className={classes.radioExample}
                        direction='row'
                        spacing={2}
                      >
                        <Typography>Example</Typography>
                        <Typography variant='span'>
                          microsite1/companyname/careers.experfy.com
                        </Typography>
                        <Typography variant='span'>
                          microsite2/companyname/careers.experfy.com
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={2}>
                      {/* <FormControlLabel
                                  value='sub_directories'
                                  control={<Radio />}
                                  label='Sub-directories' /> */}
                    </Grid>
                    <Grid item xs={10}>
                      <Stack
                        className={classes.radioExample}
                        direction='row'
                        spacing={2}
                      >
                        <Typography>Example</Typography>
                        <Typography variant='span'>
                          companyname/careers.experfy.com/microsite1
                        </Typography>
                        <Typography variant='span'>
                          companyname/careers.experfy.com/microsite2
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </RadioGroup>

                <Grid container justifyContent='flex-end' my={2}>
                  <Button
                    icon={<AddIcon />}
                    buttonStyle='primary'
                    onClick={handleAddRow}
                  >
                    Add Brand
                  </Button>
                </Grid>
                <TableContainer>
                  <Table aria-label='table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Brand Name</TableCell>
                        <TableCell>URL Brand Identifier</TableCell>
                        <TableCell>Microsite Identifier</TableCell>
                      </TableRow>
                    </TableHead>
                    {/* <TableBody>
                      {' '}
                      {fields.map((item, index) => {
                        return (
                          <TableRow>
                            <TableCell>
                              <Controller
                                render={({ field }) => <TextInput {...field} />}
                                name={`brands.${index}.name`}
                                control={control}
                              />
                            </TableCell>
                            <TableCell>
                              <Controller
                                render={({ field }) => <TextInput {...field} />}
                                name={`brands.${index}.identifier`}
                                control={control}
                              />
                            </TableCell>
                            <TableCell>
                              <Controller
                                render={({ field }) => <TextInput {...field} />}
                                name={`brands.${index}.microsite_identifier`}
                                control={control}
                              />
                            </TableCell>
                          </TableRow>
                          //
                        );
                      })}
                    </TableBody> */}
                  </Table>
                </TableContainer>
              </DialogContent>
            )}
            <DialogActions>
              {loading == true ? (
                <CircularProgress />
              ) : (
                !visible && (
                  <Grid container>
                    <Button

                      icon={<ChevronRightIcon />}
                      iconPosition='right'
                      type='submit'
                    >
                      Create
                    </Button>
                  </Grid>
                )
              )}
              {visible && (
                <Grid container>
                  <Button
                    buttonStyle='secondary'
                    icon={<ChevronLeftIcon />}
                    iconPosition='left'
                    onClick={() => {
                      setVisible(false);
                      setUpdateApi(true);
                    }}
                  >
                    Back
                  </Button>
                  <Button buttonStyle='primary' type='submit'>
                    Save
                  </Button>
                </Grid>
              )}
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </DefaultTemplate >
  );
};

export default LandingPage;


