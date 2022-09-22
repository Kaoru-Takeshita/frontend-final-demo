import React from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import InputBasicInfo from './components/InputBasicInfo';
import UserSelect from './components/UserSelect';
import UserStatus from './components/UserStatus';

import "./App.css";
import Search from './components/Search';

const App = () => {
  return (
    <div className='App'>
      <div className='BasicInfo'>
      <InputBasicInfo />
      </div>
      <div className='User'>
      <UserSelect />
      <UserStatus />
      </div>
      <div className='Search'>
      <Search/>
      </div>
      {/* <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="法人" />
        <FormControlLabel  control={<Checkbox />} label="個人事業主" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="個人" />
      </FormGroup> */}
    </div>
    
  );
};

export default App;