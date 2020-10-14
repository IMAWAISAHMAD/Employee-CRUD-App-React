import React,{useState} from 'react';
import {Paper,makeStyles,TableBody,TableRow,TableCell} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EmployeeForm from './EmployeeForm';
import {Button,Popup} from '../Controls'
import PageHeader from '../PageHeader/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import useTable from '../../components/Table/useTable';
import {getAllEmployees,insertEmployee, updateEmployee,deleteEmployee} from '../../utils/employeeService';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Notification from '../Controls/Notification';
import ConfirmDialog from '../Controls/ConfirmDialog';


const useStyles = makeStyles(theme=>({
    pageContent:{
         margin:theme.spacing(5),
         padding: theme.spacing(3)
    }
}))

const headCells = [
    {id:'fullName',label:'Employee Name'},
    {id:'department',label:'Department'},
    {id:'city',label:'City Name'},
    {id:'email',label:'Email Address'},
    {id:'mobile',label:'Mobile Number'},
    {id:'actions',label:'Actions'},
]

export default function Employees() {
    const classes = useStyles();
    const [records,setRecords] = useState(getAllEmployees());
    const [isOpen,setIsOpen] = useState(false);
    const [editRecord,setEditRecord] = useState(null);
    const [notify,setNotify] = useState({isOpen:false,type:'',title:'',message:''});
    const [confirmDialog,setConfirmDialog]= useState({isOpen:false,title:'',subTitle:''});
   // console.log(records);
    const {TblContainer,TblHeader,TblPagination, recordsAfterPagingAndSorting} = useTable(records,headCells);
    const addOrEdit = (employee,resetForm) => {
        if(employee.id === 0)
        {
            insertEmployee(employee);
            setNotify({
               isOpen:true,
               type:'success',
               title:'Employee',
               message:'Record Inserted Successfully' 
            });
        }    
        else
        {  
            updateEmployee(employee) 
            setNotify({
                isOpen:true,
                type:'warning',
                title:'Employee',
                message:'Record Updated Successfully' 
             }); 
        }    
        resetForm();
        setEditRecord(null);
        setIsOpen(false);
        setRecords(getAllEmployees());
    }

    const handleDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen:false
        })
        deleteEmployee(id);
        setRecords(getAllEmployees());
        setNotify({
            isOpen:true,
            type:'error',
            title:'Employee',
            message:'Record Deleted Successfully' 
         }); 
    }
    const recordForEdit = (record) => {
        setEditRecord(record);
        setIsOpen(true);
    }
    return (
        <div>
            <PageHeader
            title='Employees Page'
            subtitle='Enter Employee Details'
            icon={<PeopleIcon fontSize='large'/>}
            />
            <Paper className={classes.pageContent}>
            {/*  <EmployeeForm />  */}
                <Button
                variant='outlined'
                startIcon={<AddIcon/>}
                text='Add Employee'
                onClick={()=>setIsOpen(true)}
                />
                <TblContainer>
                    <TblHeader/>
                    <TableBody>
                        { recordsAfterPagingAndSorting().map(record=>(
                            <TableRow key={record.id}>
                                <TableCell>{record.fullName}</TableCell>
                                <TableCell>{record.department}</TableCell>
                                <TableCell>{record.city}</TableCell>
                                <TableCell>{record.email}</TableCell>
                                <TableCell>{record.mobile}</TableCell>
                                <TableCell>
                                    <Button
                                    color='primary'
                                    variant='outlined'
                                    startIcon={<EditIcon/>}
                                    onClick={()=>recordForEdit(record)}
                                    />
                                    <Button
                                    color='secondary'
                                    variant='outlined'
                                    startIcon={<DeleteIcon/>}
                                    onClick={
                                        ()=>setConfirmDialog({
                                            isOpen:true,
                                            title:'Are You Sure You Want To Delete This Record',
                                            subTitle:'This can not be Undo',
                                            onConfirm:()=> handleDelete(record.id)})}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
               </TblContainer>
               <TblPagination/>
            </Paper>
            <Popup 
              isOpen={isOpen}
              title='Employee Entry Form'
              setIsOpen={setIsOpen}
            >
              <EmployeeForm
               addOrEdit = {addOrEdit}
               editRecord={editRecord}
              />
            </Popup>
            <Notification notify={notify} setNotify={setNotify}/>
            <ConfirmDialog
               confirmDialog={confirmDialog}
               setConfirmDialog={setConfirmDialog}
            />
        </div>
    )
}
