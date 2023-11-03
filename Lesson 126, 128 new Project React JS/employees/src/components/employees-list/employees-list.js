import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'


const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="John S." salary={1800}/>
      <EmployeesListItem name="Romal R." salary={4200}/>
      <EmployeesListItem name="Mary T." salary={3800}/>
    </ul> 
  )
}

export default EmployeesList;