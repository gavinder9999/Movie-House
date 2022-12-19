import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('0');
  const navigate = useNavigate();

  useEffect(() => {
    if (value === '0') {
      navigate("/");
    } else if (value === '1') {
      navigate("/movies");
    } else if (value === '2') {
      navigate("/series");
    } else if (value === '3') {
      navigate("/search");
    }
    // eslint-disable-next-line
  }, [value, navigate]);
  
  

  return (
    <BottomNavigation sx={{ width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100, }} value={value} onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels // it shows all the names of the bottom navigation options
  >
      <BottomNavigationAction
        style={{color:'white'}}
        label="Trending"
        value='0'
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{color:'white'}}
        label="Movies"
        value='1'
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{color:'white'}}
        label="TV Series"
        value='2'
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{color:'white'}}
        label="Search"
        value='3'
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}

