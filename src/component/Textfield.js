import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '300px',
    },
    border: '2px solid blue',
    background:'rgb(243, 239, 239)',
    width:'800px',
    marginLeft:'350px',
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Untitled Form" /><br></br>
      <TextField id="standard-basic" label="Description" />
    </form>
  );
}