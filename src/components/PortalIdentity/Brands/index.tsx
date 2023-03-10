import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
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
import { makeStyles } from '@mui/styles';
// import DescriptionAlerts from '../../components/Messages';
// import FormSelect from '../../components/FormSelect';
// import FormSwitch from '../../components/FormSwitch';
// import ActionsGroup from "../../components/ActionsGroups";
import AddIcon from '@mui/icons-material/Add';
import FormSwitch from '../../../blocks/FormSwitch';
import FormSelect from '../../../blocks/FormSelect';
import { useForm, Controller, useFieldArray, set } from 'react-hook-form';
import TextInput from '../../../blocks/TextInput';
import { useState } from 'react';
import { useConfirm } from 'material-ui-confirm';

import { useEffect } from 'react';
import Brandpopup from './Brandpopup';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { useConfig } from 'payload/components/utilities';
import axios from 'axios';
import { toast } from 'react-toastify';
import TrashIcon from "../../../assets/images/icon_trash.svg";
import TrashIconActive from "../../../assets/images/icon_trash_active.svg";
import EditIcon from "../../../assets/images/icon_edit.svg";
import EditIconActive from "../../../assets/images/icon_edit_active.svg";

const useStyles = makeStyles({
  radioExample: {
    '& p': {
      fontSize: '16px',
    },
    '& span': {
      fontSize: '15px',
      backgroundColor: '#ebebed',
      padding: '4px 8px',
      borderRadius: '4px',
      display: 'inline-block',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0px',
  },
  actionButtons: {
    '& .MuiIconButton-root': {
      borderTop: '1px solid #d1dbe3',
      borderBottom: '1px solid #d1dbe3',
      borderLeft: '1px solid #d1dbe3',
      borderRadius: '0 !important',
      minWidth: '40px',
      backgroundColor: '#fff',
      '&:first-child': {
        borderTopLeftRadius: '4px !important',
        borderBottomLeftRadius: '4px !important',
      },
      '&:last-child': {
        borderTopRightRadius: '4px !important',
        borderBottomRightRadius: '4px !important',
        borderRight: '1px solid #d1dbe3'
      },
      '&:hover': {
        backgroundColor: '#4ba4da'
      }
    }
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
  const [isUpdateBrand, setIsUpdateBrand] = useState(false);
  const [brandData, setBrandData] = useState({});
  const [defaultValues, setDefaultValues] = useState({
    name: '',
    identifier: '',
    microsite_identifier: '',
    default_brand: `${defaultBrand}`,
    radioButtons: '',
  });
  const [brandOptionList, setBrandOptionList] = useState([]);
  const [isHoverRemove, setIsHoverRemove] = useState<number | null>(null);
  const [isHoverEdit, setIsHoverEdit] = useState<number | null>(null);

  const confirm = useConfirm();
  const { control, handleSubmit, reset, setValue, getValues } = useForm({
    defaultValues,
  });
  const { propsData } = props;
  const { brands } = propsData;
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const handleReset = () => {
    reset({});
  };

  const handleAddBrand = (newItem) => {
    setAddBrand(true);
    setData([...data, { ...newItem }]);
    toast.success('Brand Added successfully');
    setOpen(true);
  };

  const handleUpdateBrand = (newItem) => {
    const { index } = newItem;
    let allData = [...data];
    allData[index] = {
      ...data[index],
      ...newItem,
    };
    setIsUpdateBrand(false);
    setBrandData({});
    setData(allData);
    toast.success('Brands Updated successfully');
    handleClose();
  };

  const handleEditBrand = () => {
    setEditBrand(true);
  };

  const handleEditBrandClose = () => {
    setEditBrand(false);
  };

  const handleOpen = () => {
    setIsUpdateBrand(false);
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

  useEffect(() => {
    setValue('name', '');
    setValue('identifier', '');
    setValue('microsite_identifier', '');
  }, [open]);

  const getlist = () => {
    let updatedBrands = brands.map((i) => ({
      id: i.id,
      name: i.brand_name,
      identifier: i.brand_identifier,
      microsite_identifier: i.microsoft_identifier,
      // default_brand: i.default_brand,
    }));
    setData(updatedBrands);
  };

  useEffect(() => {
    if (brands?.length > 0) {
      getlist();
    }
  }, [brands]);

  React.useEffect(() => {
    reset({ ...propsData });
  }, [propsData]);

  const onSubmit = async (data) => {
    if (propsData.id) {
      let apiEndpoint = `${serverURL}${api}/brand/${propsData.id}`;
      try {
        const formData = new FormData();
        formData.append('_payload', JSON.stringify(data));
        const res = await axios.patch(apiEndpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        toast.success('Brands Updated successfully');
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  };

  const handleDelete = (index) => {
    let allData = [...data];
   
    allData.splice(index, 1);
    setData(allData);
  };

  const onUpdateClick = (editItem) => {
    setOpen(true);
    setIsUpdateBrand(true);
    setBrandData(editItem);
  };

  const handleSwitchChange = (checked, row, index) => {
    let allData = [...data];
    allData[index] = {
      ...data[index],
      brandSwitch: checked,
    };
    setData(allData);
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
        label: i.brand_name,
      }));
    setBrandOptionList(filteredBrands || []);
  };

  const columns = [
    { id: 'name', label: 'Brand Name', minWidth: 170, align: 'left' },
    {
      id: 'identifier',
      label: 'URL Brand Identifier',
      minWidth: 100,
      align: 'center',
    },
    {
      id: 'microsite_identifier',
      label: 'Microsite Identifier',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'Actions',
      label: 'Action',
      minWidth: 170,
      align: 'center',
      renderCell: (row, index) => {
        return (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className={classes.actions}
          >
            <FormSwitch
              onChange={(e) => handleSwitchChange(e, row, index)}
              checked={row.brandSwitch}
              label=""
            />

            <Stack direction={'row'} className={classes.actionButtons}>
              <IconButton
                disableRipple
                onMouseEnter={() => setIsHoverEdit(index)}
                onMouseLeave={() => setIsHoverEdit(null)}
                onClick={() => {
                  onUpdateClick({ ...row, index });
                }}
              >
                <img
                  src={
                    isHoverEdit === index ? EditIconActive : EditIcon
                  }
                  alt='Edit'
                />
              </IconButton>
              <IconButton
                disableRipple
                onMouseEnter={() => setIsHoverRemove(index)}
                onMouseLeave={() => setIsHoverRemove(null)}
                onClick={() => handleDelete(index)}
              >
                <img
                  src={
                    isHoverRemove === index
                      ? TrashIconActive
                      : TrashIcon
                  }
                  alt='Remove'
                />
              </IconButton>
            </Stack>
            
            {/* <DeleteIcon
              style={{ cursor: 'pointer' }}
              onClick={() => handleDelete(index)}
            />
            <EditIcon
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onUpdateClick({ ...row, index });
              }}
            /> */}
          </Stack>
        );
      },
    },
  ];

  return (
    <>
      {open && (
        <Brandpopup
          open={open}
          setOpen={setOpen}
          handleAddBrand={handleAddBrand}
          handleUpdateBrand={handleUpdateBrand}
          data={brandData}
          isUpdate={isUpdateBrand}
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
                    onFocus={onClickBrandName}
                  />
                )}
                name="default_brand"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
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
                        <Grid container alignItems="center">
                          <Grid item xs={2}>
                            <FormControlLabel
                              className="input-button"
                              value="sub_domains"
                              control={<Radio />}
                              label="Sub-domains"
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Stack
                              className={classes.radioExample}
                              direction={"row"}
                              alignItems={"center"}
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
                        </Grid>
                        <Grid container alignItems="center">  
                          <Grid item xs={2}>
                            <FormControlLabel
                              className="input-button"
                              value="sub_directories"
                              control={<Radio />}
                              label="Sub-directories"
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Stack
                              className={classes.radioExample}
                              direction={"row"}
                              alignItems={"center"}
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
                <Table 
                  aria-label="table"
                  className="table-basic">
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
                    {data.map((row, index) => {
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
                                      : column.renderCell(row, index)}
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
              <button className="btn btn--style-primary" type="submit">
                Save
              </button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
