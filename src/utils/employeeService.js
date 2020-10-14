

const KEYS = {
    employees:'employees',
    employeeId:'employeeId'   
}

export const getDepartments = () => [
    {id:'1',title:'HR'},
    {id:'2',title:'ADMINISTRATION'},
    {id:'3',title:'FINANCE'},
    {id:'4',title:'ACCOUNTS'},
    {id:'5',title:'IT'}
]

export const insertEmployee = (data) => {
    const employees = getAllEmployees();
    console.log(employees);
    data['id'] = generateEmployeeId();
   // console.log(data);
    employees.push(data)
  //  console.log(employees);
    localStorage.setItem(KEYS.employees,JSON.stringify(employees));
   
}


export const generateEmployeeId = () => {
    if(localStorage.getItem(KEYS.employeeId)==null){
        localStorage.setItem(KEYS.employeeId,'0')
    };
    let id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId,(++id).toString());
    return id;
  }

  

export const getAllEmployees = () => {
    if(localStorage.getItem(KEYS.employees)==null){
        localStorage.setItem(KEYS.employees,JSON.stringify([]));
    };    
    let employees = JSON.parse(localStorage.getItem(KEYS.employees))   
    let deparments = getDepartments();
    return (
        employees.map(employee=>(
        {
            ...employee,
            department:deparments[employee.departmentId-1].title
        }
    )) 
    )
}

export const updateEmployee = (data) =>{
    const employees = getAllEmployees();
    const empIndex = employees.findIndex((x)=>x.id===data.id);
    employees[empIndex]={...data}
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export const deleteEmployee = (id) => {
     const employees = getAllEmployees().filter(emp=>emp.id!==id);
     localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}