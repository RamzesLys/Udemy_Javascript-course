import { Component } from 'react';
import './employees-list-item.css';


class EmployeesListItem extends Component {
constructor(props) {
  super(props);
  this.state = {
    increase: false,
    mark: false
  }
}

onIncrease = () => {
  this.setState(({increase}) => ({
    increase: !increase
  }))
}

onMark = () => {
  this.setState(({mark}) => ({
    mark: !mark
  }))
}



  render() {
    const {name, salary, onDelete} = this.props;
    const {increase, mark} = this.state

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
    classNames += ' increase'
  }

  if (mark) {
    classNames += ' like'
  }

  return (
    <li className={classNames}>
      <span onClick={this.onMark}className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
        className="btn-cookie btn-sm"
        onClick={this.onIncrease}>
          <i className="fas fa-cookie"></i>
        </button>
        
        <button type="button"
        className="btn-trash btn-sm"
        onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
          <i className="fa-regular fa-star"></i>
      </div>
    </li>
  )
  }
}

export default EmployeesListItem;