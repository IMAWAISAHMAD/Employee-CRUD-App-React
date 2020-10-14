import React from 'react'
import {FormControl,InputLabel,MenuItem,FormHelperText,Select as MuiSelect} from '@material-ui/core'


export default function Select({variant,name,label,value,onChange,options,error=null}) {
    return (
        <FormControl variant={variant}  {...(error && {error:true})} >
            <InputLabel>{label}</InputLabel>
                <MuiSelect
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}>
                    <MenuItem value=''>None</MenuItem>
                    {
                        options.map(option=>(
                        <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem >
                        ))

                    }       
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
