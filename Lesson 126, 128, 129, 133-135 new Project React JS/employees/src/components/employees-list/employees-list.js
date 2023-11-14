import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'


const EmployeesList = ({data, onDelete}) => {

  const elements = data.map((item) => {
    const {id, ...itemProps} = item;
    return (
      //<EmployeesListItem name={item.name} salary={item.salary} {...item}/>
      <EmployeesListItem 
      key={id} 
      {...itemProps}
      onDelete={() => onDelete(id)}/>
    )
  })
  
  return (
    <ul className="app-list list-group">
      {/* <EmployeesListItem name="John S." salary={1800}/>
      <EmployeesListItem name="Romal R." salary={4200}/>
      <EmployeesListItem name="Mary T." salary={3800}/> */}
      {elements}
    </ul> 
  )
}

export default EmployeesList;