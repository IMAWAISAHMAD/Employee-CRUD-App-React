import React from 'react';
import Sidenav from './components/SideMenue/Sidenav';
import Header from './components/Header/Header';
import Employees from './components/Pages/Employees';
import './App.css';
import { CssBaseline, makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#333996',
      light:'#3c44b126'
    },
    secondary:{
      main:'#f83245',
      light:'#f8324526'
    },
    background:{
      default:'#f4f5fd'
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translatez(0)'
      }
    }
  },
  
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',
  }
})
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Sidenav/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
