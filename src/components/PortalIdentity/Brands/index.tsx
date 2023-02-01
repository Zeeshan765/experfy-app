import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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
import { makeStyles } from '@mui/styles';
// import DescriptionAlerts from '../../components/Messages';
// import FormSelect from '../../components/FormSelect';
// import FormSwitch from '../../components/FormSwitch';
// import ActionsGroup from '../../components/ActionsGroups';
import AddIcon from '@mui/icons-material/Add';
import FormSwitch from '../../../blocks/FormSwitch';
import FormSelect from '../../../blocks/FormSelect';
import { useForm, Controller, useFieldArray, set } from 'react-hook-form';
import TextInput from '../../../blocks/TextInput';
import { useState } from 'react';
import { useConfirm } from 'material-ui-confirm';

import { useEffect } from 'react';
import Brandpopup from './Brandpopup';

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
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [addBrand, setAddBrand] = useState(false);
  const [brandDeleted, setBrandDeleted] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editBrand, setEditBrand] = useState(false);
  const [saveEditRecord, setSaveEditRecord] = useState('');
  const [activeRow, setActiveRow] = useState(false);
  const [defaultBrand, setDefaultBrand] = useState('');
  const [data, setData] = useState([]);
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    identifier: '',
    microsite_identifier: '',
    default_brand: `${defaultBrand}`,
    radioButtons: '',
  });
  const [brandOptionList, setBrandOptionList] = useState([]);

  const confirm = useConfirm();
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues,
  });
  const { brands } = props.propsdata;

  // useEffect(() => {
  //   setMicroSite(props.adminPortal.microsite_setting);
  //   setValue('radioButtons', microSite);
  // }, [props]);

  const handleReset = () => {
    reset({});
  };

  const handleAddBrand = (newItem) => {
    setAddBrand(true);
    setData([...data, { ...newItem }]);
    setOpen(true);
  };
  const handleEditBrand = () => {
    setEditBrand(true);
  };
  const handleEditBrandClose = () => {
    setEditBrand(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = (event, data) => {
    setSaveEditRecord(data);
    setOpenEdit(true);
  };
  const handleEditClose = (data) => {
    setOpenEdit(false);
  };

  // useEffect(() => {
  //   setValue('name', saveEditRecord.name);
  //   setValue('identifier', saveEditRecord.identifier);
  //   setValue('microsite_identifier', saveEditRecord.microsite_identifier);
  // }, [saveEditRecord]);
  useEffect(() => {
    setValue('name', '');
    setValue('identifier', '');
    setValue('microsite_identifier', '');
  }, [open]);

  // useEffect(() => {
  //   showBrandsAPI(props.setBrandList, props.adminPortal);
  // }, [brandDeleted]);

  const getlist = () => {
    console.log('brands', brands);
    let updatedBrands = brands.map((i) => ({
      id: i.id,
      name: i.brand_name,
      identifier: i.brand_identifier,
      microsite_identifier: i.microsoft_identifier,
      // default_brand: i.default_brand,
    }));
    console.log('updatedBrands', updatedBrands);
    setData(updatedBrands);
  };

  useEffect(() => {
    if (brands?.length > 0) {
      getlist();
    }
  }, [brands]);

  // const updatedBrandsOption = () => {
  //   const array = [];
  //   props.brandList.map((i) => {
  //     if (i) {
  //       array.push({ value: i.name, label: i.name });
  //     }
  //   });
  //   return array;
  // };
  // useEffect(() => {
  //   setBrandOptionList(updatedBrandsOption);
  //   setValue('radioButtons', microSite);
  // }, [props.brandList]);

  // useEffect(() => {
  //   let defaultBrandValue = props.brandList.map((i) =>
  //     i.default_brand == true ? i.name : null
  //   );
  //   const filterDefaultBrandValue = defaultBrandValue.filter((i) => i != null);
  //   setValue('default_brand', filterDefaultBrandValue[0]);
  //   setDefaultBrand(filterDefaultBrandValue[0]);
  // }, [props.brandList]);
  // const handleDelete = (event, data) => {
  //   confirm({
  //     title: 'Delete?',
  //     description: `Are you sure you want to delete ${data.name}.`,
  //   })
  //     .then(() => deleteBrandApi(data, adminPortal, setBrandDeleted))
  //     .catch(() => console.log('Deletion cancelled.'));
  // };

  const onSubmit = (data) => {
    console.log(data);
  };

  const columns = [
    { id: 'name', label: 'Brand Name', minWidth: 170 },
    { id: 'identifier', label: 'URL Brand Identifier', minWidth: 100 },
    {
      id: 'microsite_identifier',
      label: 'Microsite Identifier',
      minWidth: 170,
    },
    {
      id: 'Actions',
      label: 'Action',
      minWidth: 170,
      align: 'center',
      label: 'Action',
      renderCell: (row, handleDelete, handleSwitchChange) => {
        return (
          <Stack direction="row" alignItems="center" spacing={1}>
            <FormSwitch handleSwitchChange={handleSwitchChange} record={row} />
            {/* <ActionsGroup
              record={row}
              handleDelete={handleDelete}
              handleEditOpen={handleEditOpen}
              hasEdit={true}
              hasDelete={true}
            /> */}
          </Stack>
        );
      },
    },
  ];
  const handleDelete = (event, data) => {};
  console.log('data', data);
  return (
    <>
      {open && (
        <Brandpopup
          open={open}
          setOpen={setOpen}
          handleAddBrand={handleAddBrand}
        />
      )}
      <Box sx={{ p: 1 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Controller
                render={({ field }) => (
                  <FormSelect
                    {...field}
                    options={brandOptionList}
                    name="defaultBrand"
                    label="Default Brand"
                  />
                )}
                name="default_brand"
                control={control}
              />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h5" mb={2}>
                Please Choose whether you would like your microsites in your
                career portal network ti use subdomains or sub-directories.
              </Typography>
              <FormControl fullWidth>
                <Controller
                  control={control}
                  name="radioButtons"
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
                              value="sub_domains"
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
            </Grid>
            <Grid item xs={10}>
              <Grid container justifyContent="flex-end">
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  color="primary"
                  onClick={() => handleOpen()}
                >
                  Add Brand
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <TableContainer>
                <Table aria-label="table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ top: 57, minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => {
                      return (
                        <TableRow key={`${row?.identifier + row?.name}`}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <>
                                {!activeRow ? (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {value
                                      ? column.format &&
                                        typeof value === 'number'
                                        ? column.format(value)
                                        : value
                                      : column.renderCell(row, handleDelete)}
                                  </TableCell>
                                ) : (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    <Controller
                                      render={({ field }) => (
                                        <TextInput {...field} />
                                      )}
                                      name="name"
                                      control={control}
                                    />
                                  </TableCell>
                                )}
                              </>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              {/* <Button variant="contained" color="primary" type="submit">
              Save
            </Button> */}
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}

// {/* <Dialog
//   open={openEdit}
//   onClose={handleEditClose}
//   maxWidth="md"
//   fullWidth={true}
// >
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <DialogTitle sx={{ borderBottom: '1px solid #d1dbe3' }}>
//       <Grid container justifyContent="space-between" alignItems="center">
//         <Typography variant="h4">Edit Brand</Typography>
//         <IconButton
//           onClick={() => {
//             handleEditClose();
//             handleEditBrandClose();
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </Grid>
//     </DialogTitle>
//     <DialogContent>
//       <Grid container spacing={3} pt={4}>
//         <Grid item xs={12}>
//           <Controller
//             render={({ field }) => {
//               return <TextInput {...field} label="Brand Name" />;
//             }}
//             name="name"
//             control={control}
//             reset={reset}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Controller
//             render={({ field }) => {
//               return (
//                 <TextInput {...field} label="URL Brand Identifier" />
//               );
//             }}
//             name="identifier"
//             control={control}
//             reset={reset}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Controller
//             render={({ field }) => {
//               return <TextInput {...field} label="Microsite ID" />;
//             }}
//             name="microsite_identifier"
//             control={control}
//             reset={reset}
//           />
//         </Grid>
//       </Grid>
//     </DialogContent>
//     <DialogActions>
//       <Grid container>
//         <Button
//           type="submit"
//           variant="contained"
//           onClick={() => {
//             handleEditBrand();
//           }}
//         >
//           Save
//         </Button>
//       </Grid>
//     </DialogActions>
//   </form>
// </Dialog> */}
