//@ts-ignore

import { ErrorMessage as DescriptionAlerts } from '@hookform/error-message';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import {
  DialogContent,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  FormControl,
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
import TextInput from '../../blocks/TextInput';
import { useStyles } from './css';
import { toast } from 'react-toastify';

const Brandform: React.FC = (props: any) => {
  const history = useHistory();
  const classes = useStyles();

  const [defaultBrands, setDefaultBrands] = useState([]);
  const { setStepNav } = useStepNav();

  const { submittedData } = props;

  useEffect(() => {
    setStepNav([
      {
        label: 'Portal Identity',
        url: '/basic-portal-identity',
      },
    ]);
  }, [setStepNav]);

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

  const onSubmit = async (data) => {
    const { brands, microsite_setting } = data;

    let filteredBrands = brands.filter(
      (brand) => brand?.brand_name?.length > 0
    );

    let apiEndpoint = `${serverURL}${api}/brand/${submittedData.id}`;
    try {
      const formData = new FormData();
      formData.append(
        '_payload',
        JSON.stringify({ brands: filteredBrands, microsite_setting })
      );
      const res = await axios.patch(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { doc } = res.data;
      toast.success('Portal Identitty Updated successfully');
      history.push({
        pathname: `/admin/collections/portal-identity/${doc.id}`,
        state: { doc },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const { fields, append, remove } = useFieldArray({
    name: 'brands',
    control,
  });

  const handleAddRow = (value: unknown) => {
    append({});
  };

  const onClickBrandName = () => {
    updateDefaultBrands();
  };

  const updateDefaultBrands = () => {
    let brands = getValues()?.brands || [];

    let filteredBrands = brands
      .filter((brand) => brand.brand_name?.length > 0)
      .map((i) => ({
        value: i.brand_name,
        lable: i.brand_name,
      }));
    setDefaultBrands(filteredBrands || []);
  };

  return (
    <DialogContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <FormSelect
                  {...field}
                  options={defaultBrands}
                  name="defaultBrand"
                  label="Default Brand"
                  onFocus={onClickBrandName}
                />
              )}
              name="default_brand"
              control={control}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" mb={2} mt={4}>
          Please choose whether you would like your microsites in your career
          portal network to use subdomains or sub-directories.
        </Typography>

        <FormControl fullWidth>
          <Controller
            control={control}
            name="microsite_setting"
            render={({ field }) => {
              return (
                <RadioGroup
                  aria-labelledby="radio-buttons"
                  defaultValue="microsites"
                  name="radio-buttons-group"
                  {...field}
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={2}>
                      <FormControlLabel
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
              );
            }}
          />
        </FormControl>

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
                      <Controller
                        render={({ field }) => <TextInput {...field} />}
                        name={`brands.${index}.brand_name`}
                        control={control}
                      />
                    </TableCell>
                    <TableCell>
                      <Controller
                        render={({ field }) => <TextInput {...field} />}
                        name={`brands.${index}.brand_identifier`}
                        control={control}
                      />
                    </TableCell>
                    <TableCell>
                      <Controller
                        render={({ field }) => <TextInput {...field} />}
                        name={`brands.${index}.microsoft_identifier`}
                        control={control}
                      />
                    </TableCell>
                    <TableCell>
                      {/* <Button
                        type="button"
                      icon={<DeleteIcon />}
                        onClick={() => remove(index)}
                      >
                      </Button> */}
                      <DeleteIcon style={{cursor:'pointer'}} onClick={() => remove(index)} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <button type="submit">Save</button>
      </form>
    </DialogContent>
  );
};

export default Brandform;
