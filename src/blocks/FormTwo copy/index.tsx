import React from "react";


import {
    Card,
    Box,
    CardContent,
    CardActions,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
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
    CircularProgress,
  } from "@mui/material";
  
import FormSelect from "../FormSelect";







const FormTwo: React.FC<any> = ()=>{



    return (

<>
<DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  
                      <FormSelect
                        // options={defaultBrands}
                        name="defaultBrand"
                        label="Default Brand"
                        // onFocus={onClickBrandName}
                      />
                    
                </Grid>
              </Grid>
              </DialogContent>





</>





    )
}




export default FormTwo;