import React from 'react';
import logo from './logo.svg';
import Avatar from '@mui/material/Avatar';
import profile from './static/images/profile.jpg'
import github from './static/images/github.png'
import linkedin from './static/images/linked_icon.png'
import twitter from './static/images/twitter.png'
import './App.scss';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { margin } from '@mui/system';
import { link } from 'fs';

function App() {
  return (
    <div className="App">
      <div className="Empty-Margin"/>
      <Avatar 
        alt="acblacktea"
        src={profile}
        sx={{ 
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: 'auto',
        }}
      />
      <div style={{
        "display": "flex",
        "paddingTop": "20px",
        "marginLeft": "auto",
        "marginRight": "auto",
        }} >
          <IconButton href='https://github.com/acblacktea' target="_blank">
              <Avatar alt="github" src={github} sx={{}}/>
          </IconButton>
          <IconButton href='https://linkedin.com/in/yang-liu-aa91a6247' target="_blank" sx={{marginLeft: 5, marginRight: 5}}>
              <Avatar alt="linkedin" src={linkedin}/>
          </IconButton>
          <IconButton href='https://github.com/acblacktea' target="_blank">
              <Avatar alt="twitter" src={twitter} sx={{}}/>
          </IconButton>
      </div>
      
    </div>
  );
}

export default App;
