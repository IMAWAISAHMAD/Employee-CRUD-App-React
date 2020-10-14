import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core'



const useStyles = makeStyles(theme=>({
    root:{
      '& .MuiFormControl-root':{
          width:'80%',
          margin: theme.spacing(1)
      }
    }
}))

export  function useForm(initialFieldValues,validateOnChanange=false,validate) {
    const [values,setValues] = useState(initialFieldValues);
    const [errors,setErrors] = useState({});
    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChanange)
        validate({
            [name]:value
        })
        
        }
    
    const resetForm = ()=>{
        setValues(initialFieldValues);
        setErrors({});
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        resetForm
    }
}

export function Form({children,onSubmit}){
    const classes = useStyles();
    return(
        <form className={classes.root} onSubmit={onSubmit} >
            {children}
        </form>
    )

}