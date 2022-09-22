import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import './Search.css';

const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(green[500]),
    color: 'white',
    // fontWeight:'10000',
    width: '250px',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
}));
  

const Search = () => {
  return (
    <ColorButton className='Button' variant="contained" size='large'>
        検索
    </ColorButton>
  )
}

export default Search;