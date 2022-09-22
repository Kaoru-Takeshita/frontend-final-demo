import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  "./InputBasicInfo.css";

const InputBasicInfo = () => {
  return (
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <div className='InputBasicInfo'>
        <TextField
          id="outlined-helperText"
          label="名前"
          placeholder="名前"
          type="name"
        //   defaultValue="Default Value"
        //   helperText="Some important text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
        <TextField
          id="outlined-helperText"
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
        //   defaultValue="Default Value"
        //   helperText="Some important text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div>
        <TextField
          id="outlined-helperText"
          label="電話番号"
          placeholder="電話番号"
          InputLabelProps={{
            shrink: true,
          }}
          type="tel"
        //   defaultValue="Default Value"
        //   helperText="Some important text"
        />
        </div>
      
    </Box>
  );
};

export default InputBasicInfo;