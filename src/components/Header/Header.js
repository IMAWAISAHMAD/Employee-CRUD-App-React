import React from 'react'
import {AppBar,Toolbar,Grid,InputBase,IconButton,Badge,makeStyles} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:'white',
    },
    searchBox:{
        opacity:'0.6px',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1)
        },
    },
    
}))

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase className={classes.searchBox}
                         placeholder='Search Here'
                         startAdornment={<SearchIcon fontSize='small'/>}
                        />
                    </Grid>
                    <Grid item sm={true}></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsIcon fontSize='small'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ChatIcon fontSize='small'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize='small'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
