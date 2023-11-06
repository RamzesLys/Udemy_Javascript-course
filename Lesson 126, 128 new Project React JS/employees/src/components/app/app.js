import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Valentin S.', salary: 5200},
    {name: 'Sergiy M.', salary: 3100},
    {name: 'Maryna H.', salary: 5400},
  ];
  
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
       
      </div>
    <EmployeesList data={data}/>
    <EmployeesAddForm/>
    </div>
  )
}

export default App;