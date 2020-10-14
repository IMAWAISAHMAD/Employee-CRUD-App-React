import React from 'react'
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {convertToDefaultEvent} from '../../utils/convertToDefaultEvent'

export default function Datepicker({variant,inputVariant,name,label,value,formate,onChange}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
             variant={variant}
             inputVariant={inputVariant}
             name={name}
             label={label}
             value={value}
             onChange={date=>onChange(convertToDefaultEvent(name,date))}
             formate={formate}
            />
        </MuiPickersUtilsProvider>
    )
}
