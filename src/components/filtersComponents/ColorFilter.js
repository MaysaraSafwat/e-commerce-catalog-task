import { Checkbox, FormControl, InputLabel, 
         ListItemIcon, ListItemText, makeStyles, MenuItem,
        Select } from '@material-ui/core';
import React from 'react';
import Button from './Button';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
 const MenuProps = {
  PaperProps: {
   style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
     width: 250,
    },
   },
 };



export default function ColorFilter ({onColorFilterChange, products , handleClearColorFilter}){

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: 200
    },
    indeterminateColor: {
      color: "#f50057"
    },
    selectAllText: {
      fontWeight: 500
    },
    selectedAll: {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
      }
    }
  }));

  const names = [];
  products.map(product => names.indexOf(product.color) === -1  ? names.push(product.color) : names)
  

  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  const isAllSelected =
    names.length > 0 && selected.length === names.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === names.length ? [] : names);
      return;
     }
    setSelected(value);
    onColorFilterChange(value);

  };
   const clearFilter = ()=>{
    handleClearColorFilter();
   }
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">Select Color</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join()}
        MenuProps={MenuProps}
      >
        <MenuItem
          value="all"
          classes={{
            root: isAllSelected ? classes.selectedAll : ""
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: classes.indeterminateColor }}
              checked={isAllSelected}
              indeterminate={
                selected.length > 0 && selected.length < names.length
              }
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {names.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
      
      <Button clearFilter={clearFilter}/>
      
    </FormControl>
  );
}
