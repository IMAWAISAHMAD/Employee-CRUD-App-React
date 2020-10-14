import React,{useEffect} from 'react'
import {useForm,Form} from  '../Form/useForm'
import {Input,RadioGroup,Select,Checkbox,DatePicker,Button} from '../Controls'
import {getDepartments} from '../../utils/employeeService'
import {Grid} from '@material-ui/core'





const radioItems =[
    {id:'male',label:'Male'},
    {id:'female',label:'Female'},
    {id:'other',label:'Other'},
]

const initialFieldValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false,

}


export default function EmployeeForm({addOrEdit,editRecord}) {
    const validate = (fieldValues=values) => {
        const temp={...errors};
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ?'':'Full Name minimum 3-characters Required';
        if('email' in fieldValues)    
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?'':'Valid Email is Required';
        if('mobile' in fieldValues)    
            temp.mobile = fieldValues.mobile.length>9 ?'':'Minimum 10 numbers Required';
        if('city' in fieldValues)     
            temp.city = fieldValues.city ?'':'City Name is Required';
        if('departmentId' in fieldValues)             
        temp.departmentId = fieldValues.departmentId.length !== 0?'':'Department is Required';
        setErrors({
            ...temp
        })

        if(fieldValues===values)
        return Object.values(temp).every(x => x === "");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            addOrEdit(values,resetForm)
            
        }; 
    }
   
   const {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    resetForm
   }=useForm(initialFieldValues,true,validate);
   
   useEffect(()=>{
        if(editRecord!=null){
            setValues({
                ...editRecord
            });
        }
    },[editRecord, setValues])

    return (
        <Form onSubmit={handleSubmit}>   
            <Grid container>
                <Grid item xs={6}>
                    <Input
                     variant='outlined'
                     name='fullName'
                     value={values.fullName}
                     label='Full Name'
                     onChange={handleChange}
                     error={errors.fullName}
                    />
                    <Input
                     variant='outlined'
                     name='email'
                     value={values.email}
                     label='Email'
                     onChange={handleChange}
                     error={errors.email}
                    />
                    <Input
                     variant='outlined'
                     name='mobile'
                     value={values.mobile}
                     label='Mobile#'
                     onChange={handleChange}
                     error={errors.mobile}
                     
                    />
                     <Input
                     variant='outlined'
                     name='city'
                     value={values.city}
                     label='City'
                     onChange={handleChange}
                     error={errors.city}
                    />
                    
                </Grid>
                <Grid item xs={6}>
                    <RadioGroup
                        name='gender'
                        value={values.gender}
                        onChange={handleChange}
                        items={radioItems}
                    />
                    <Select
                        variant='outlined'
                        name='departmentId'
                        value={values.departmentId}
                        label='Department'
                        onChange={handleChange}
                        options={getDepartments()}
                        error={errors.departmentId}
                    />
                    <Checkbox
                        color='primary'
                        name='isPermanent'
                        label='Is Permanent'
                        value={values.isPermanent}
                        onChange={handleChange}
                    />
                    <DatePicker
                     variant='inline'
                     inputVariant='outlined'
                     name='hireDate'
                     label='Hire Date'
                     value={values.hireDate}
                     onChange={handleChange}
                     formate='MMM/DD/YYYY'   
                    />
                    <div>
                        <Button
                        variant='contained'
                        size='large'
                        type='submit'
                        text='Submit'
                        />

                        <Button
                        color='default'
                        size='large'
                        text='Reset'
                        onClick={resetForm}
                        />
                        
                           
                    </div>
                </Grid>
            </Grid>
        </Form>    
    )
}
