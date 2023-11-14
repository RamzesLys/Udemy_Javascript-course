import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Valentin S.', salary: 5200, increase: false, id: 1},
        {name: 'Sergiy M.', salary: 3100, increase: true, id: 2},
        {name: 'Maryna H.', salary: 5400, increase: false, id: 3},
      ]
    }
  }
  
  deleteItem = (id) => {
    this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id == id);
    data.splice(index, 1);
    return{
      data: data
    }    
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
         
        </div>
      <EmployeesList 
      data={this.state.data}
      onDelete={this.deleteItem}/>
      <EmployeesAddForm/>
      </div>
    )
  }
}

export default App;