import React from 'react'
import {Dialog,DialogTitle,DialogContent,Divider,Typography} from '@material-ui/core'
import {Button} from '../Controls'

export default function Popup({title,children,isOpen,setIsOpen}) {
    return (
        <Dialog open={isOpen} maxWidth='md'>
            <DialogTitle>
                <div style={{display:'flex'}}>
                    <Typography variant='h6' component='div' style={{flexGrow:1}}>
                        {title}
                    </Typography>   
                    <Button
                    variant='outlined'
                    color='secondary'
                    text='X'
                    onClick={()=>setIsOpen(false)}
                    /> 
                </div>
               
                <Divider/>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
