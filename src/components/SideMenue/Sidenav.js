import React from 'react'
import {withStyles} from '@material-ui/core'

const styles = {
    sidenav:{
        display:'flex',
        flexDirection:'column',
        width:'320px',
        height:'200%',
        left:'0px',
        position: 'absolute',
        backgroundColor:'#253053',
    }
}


 const Sidenav = (props) => {
    const {classes} = props;
    return (
        <div className={classes.sidenav}>
            
        </div>
    )
}
export default withStyles(styles)(Sidenav);