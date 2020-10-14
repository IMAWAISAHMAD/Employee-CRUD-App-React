import React from 'react'
import {FormControl,FormControlLabel,Checkbox as MuiCheckbox} from '@material-ui/core'
import {convertToDefaultEvent} from '../../utils/convertToDefaultEvent';

export default function Checkbox({color,name,label,value,onChange}) {

    
    return (
        <FormControl>
            <FormControlLabel
             control={<MuiCheckbox color={color} name={name} onChange={e=> onChange(convertToDefaultEvent(name,e.target.checked))} checked={value}/>}
             label={label}
            />
        </FormControl>
    )
}
