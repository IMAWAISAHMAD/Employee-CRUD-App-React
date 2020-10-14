import React,{useState} from 'react'
import {Table,TableHead,TableRow,TableCell,TablePagination,makeStyles,} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    table:{
        marginTop:theme.spacing(3),
        '& thead th':{
            fontWeignt: '600',
            color:theme.palette.primary.main,
            background:theme.palette.primary.light,
        },
        '& tbody td':{
            fontWeight:'300'
        },
        '& tbody tr:hover':{
            backgroundColor:'#C8C5C5',
            pointer:'cursor'
        }
    }
}));

export default function useTable(records,headCells) {
    const classes = useStyles();

    const pages = [5,10,25];
    const[page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage]= useState(pages[page]);


    const TblContainer = ({children}) =>(
            <Table className={classes.table}>
                {children}
            </Table>
        )

    const TblHeader = (props) => {

        return(
            <TableHead>
                <TableRow>
                {
                    headCells.map(headCell=>(  
                        <TableCell key={headCell.id}>{headCell.label}</TableCell>
                    ))
                }
                </TableRow>
            </TableHead>  
        )
    } 
    const TblPagination = ()=>{
        const handleChangePage =(e,newPage)=>{
            setPage(newPage);
        }

        const handleRowsPerPage = (e) => {
            setRowsPerPage(parseInt(e.target.value,10));
            setPage(0);
        }
        return(
            <TablePagination
                component='div'
                page={page}
                rowsPerPageOptions={pages}
                rowsPerPage={rowsPerPage}
                count={records.length}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleRowsPerPage}
            />
            
        )
    }
    const recordsAfterPagingAndSorting = () => {
        return records.slice(page*rowsPerPage,(page+1)*rowsPerPage);
    }
    return {
        TblContainer,
        TblHeader,
        TblPagination,
        recordsAfterPagingAndSorting,
    }
}
