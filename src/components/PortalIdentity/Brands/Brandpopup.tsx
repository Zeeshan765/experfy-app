import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller, useFieldArray, set } from 'react-hook-form';
import TextInput from '../../../blocks/TextInput';

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

const defaultData = {
  name: '',
  identifier: '',
  microsite_identifier: '',
  // default_brand: `${defaultBrand}`,
  brandSwitch: false,
  radioButtons: '',
};

const Brandpopup = ({
  open,
  setOpen,
  handleAddBrand,
  handleUpdateBrand,
  data,
  isUpdate,
}) => {
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: isUpdate ? data : defaultData,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    isUpdate ? handleUpdateBrand(data) : handleAddBrand(data);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ borderBottom: '1px solid #d1dbe3' }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h4">
              {isUpdate ? 'Update' : 'Add'} Brand
            </Typography>
            <IconButton
              onClick={() => {
                handleClose();
                // setError(false);
                // setSuccess(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3} pt={4}>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => {
                  return <TextInput {...field} label="Brand Name" />;
                }}
                name="name"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => {
                  return <TextInput {...field} label="URL Brand Identifier" />;
                }}
                name="identifier"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({ field }) => {
                  return <TextInput {...field} label="Microsite ID" />;
                }}
                name="microsite_identifier"
                control={control}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <button className="btn btn--style-primary" type="submit">
              {isUpdate ? 'Update' : 'Save'}
            </button>
          </Grid>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Brandpopup;
