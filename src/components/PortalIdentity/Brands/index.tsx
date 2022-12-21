import { makeStyles } from '@mui/styles';
import { useConfirm } from 'material-ui-confirm';
import React, { useEffect, useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Form } from 'payload/components/forms';
import { Button, Eyebrow } from 'payload/components/elements';
import TextInput from '../../../blocks/TextInput';
import FormSelect from '../../../blocks/FormSelect';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Grid,
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
import { useConfig } from 'payload/components/utilities';
import { useFieldArray, useForm } from 'react-hook-form';


const useStyles = makeStyles({
  radioExample: {
    '& p': {
      fontSize: '1.0625rem',
    },
    '& span': {
      fontSize: '.9375rem',
      backgroundColor: '#ebebed',
      padding: '.25rem .5rem',
      borderRadius: '.25rem',
      display: 'inline-block',
    },
  },
});

export default function Brands(props) {
  const [brandSwitch, setBrandSwitch] = React.useState(true);
  // const { adminPortal, setAdminPortal, brands, setBrands } = props;
  const [adminPortal, setAdminPortal] = useState({});
  const [brands, setBrands] = useState([]);
  const [seo_setting, setSeo_Setting] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addBrand, setAddBrand] = useState(false);
  const [brandList, setBrandList] = useState([]);
  const [brandDeleted, setBrandDeleted] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editBrand, setEditBrand] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [saveEditRecord, setSaveEditRecord] = useState('');
  const [activeRow, setActiveRow] = useState(false);
  const [defaultBrand, setDefaultBrand] = useState('');
  const [microSite, setMicroSite] = useState('');
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    identifier: '',
    microsite_identifier: '',
    default_brand: `${defaultBrand}`,
    radioButtons: '',
  });
  





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

  const handleAddRow = (value: unknown) => {
    append(value);
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















  // useEffect(() => {
  //   setValue('name', saveEditRecord.name);
  //   setValue('identifier', saveEditRecord.identifier);
  //   setValue('microsite_identifier', saveEditRecord.microsite_identifier);
  // }, [saveEditRecord]);
  // useEffect(() => {
  //   setValue('name', '');
  //   setValue('identifier', '');
  //   setValue('microsite_identifier', '');
  // }, [open]);

  // useEffect(() => {
  //   showBrandsAPI(setBrandList, props.adminPortal);
  // }, [brandDeleted]);

  const list = brandList.map((i) => ({
    id: i.id,
    name: i.name,
    identifier: i.identifier,
    microsite_identifier: i.microsite_identifier,
    default_brand: i.default_brand,
  }));
  const updatedBrandsOption = () => {
    const array = [];
    brandList.map((i) => {
      if (i) {
        array.push({ value: i.name, label: i.name });
      }
    });
    return array;
  };

  return (
    <Box sx={{ p: 1 }}>
      <Form
        // method={id ? 'patch' : 'post'}
        // action={`${serverURL}${api}/basic-portal-identity/${id ?? ''}`}
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
          Please choose whether you would like your microsites in your career
          portal network to use subdomains or sub-directories.
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
                      <Button
                        type="button"
                        buttonStyle="icon-label"
                        icon={'x'}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          type="submit"
          buttonStyle="primary"
          // onClick={handlenaviagte}
        >
          Save
        </Button>
      </Form>
    </Box>
  );
}
