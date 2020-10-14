import React from 'react'
import {TextField} from '@material-ui/core'

export default function Input({variant,name,label,value,onChange,error=null,}) {

    return (
        <TextField
        variant={variant}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        {...(error && {error:true,helperText:error})}
        />
    )
}
