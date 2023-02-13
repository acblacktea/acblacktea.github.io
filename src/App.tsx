import React from 'react';
import logo from './logo.svg';
import Avatar from '@mui/material/Avatar';
import profile from './static/images/profile.avif'
import github from './static/images/github.png'
import linkedin from './static/images/LinkedInIcon.webp'
import twitter from './static/images/twitter.png'
import background from './static/images/background.jpg'
import chinaFlag from './static/images/chinaFlag.jpeg'
import './App.scss';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { margin } from '@mui/system';
import { link } from 'fs';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

function App() {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `1px solid ${theme.palette.background.paper}`,
  }));


  return (
    <div className="App">
      <div className="Empty-Margin"/>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={chinaFlag} sx={{ 
            width: 40,
            height: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 'auto',
          }}/>
        }
        sx={{ 
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: 'auto',
        }}
      >
        <Avatar 
        alt="acblacktea"
        src={profile}
        sx={{ 
          width: 200,
          height: 200,
        }}
      />
      </Badge>
      <p style={{"marginLeft": "auto", "marginRight": "auto", "fontFamily": "cursive", "color": "cornsilk", "fontSize": "x-large"}}>{"Yang Liu (acblacktea)"}</p>
      <p style={{"marginLeft": "auto", "marginRight": "auto", "fontFamily": "cursive", "color": "aquamarine", "fontSize": "x-large", "marginTop": "1px", "marginBottom":"1px"}}>{"Backend Engineer & Full Stack Engineer"}</p>
      <p style={{"marginLeft": "auto", "marginRight": "auto", "fontFamily": "cursive", "color": "chartreuse", "fontSize": "x-large", "marginTop": "1px", "marginBottom":"1px"}}>{"acblacktea@outlook.com"}</p>
      <div style={{
        "display": "flex",
        "paddingTop": "20px",
        "marginLeft": "auto",
        "marginRight": "auto",
        }} >
          <IconButton href='https://github.com/acblacktea' target="_blank">
              <Avatar alt="github" src={github} sx={{backgroundColor:"white"}}/>
          </IconButton>
          <IconButton href='https://linkedin.com/in/yang-liu-aa91a6247' target="_blank" sx={{marginLeft: 5, marginRight: 5}}>
              <Avatar alt="linkedin" src={linkedin}/>
          </IconButton>
          <IconButton href='https://github.com/acblacktea' target="_blank">
              <Avatar alt="twitter" src={twitter} sx={{}}/>
          </IconButton>
      </div>
      <p className="description">{"Working at Tiktok Singapore, Enjoying the beautiful world"}</p>
      
    </div>
  );
}

export default App;
