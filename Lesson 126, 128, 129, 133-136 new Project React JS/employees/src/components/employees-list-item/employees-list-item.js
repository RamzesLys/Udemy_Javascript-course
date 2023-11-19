
import './employees-list-item.css';


const EmployeesListItem = (props) => {

  const {name, salary, onDelete, onToggleProp, increase, rise} = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
  classNames += ' increase'
  }

  if (rise) {
    classNames += ' like'
  }

  return (
    <li className={classNames}>
      <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
        className="btn-cookie btn-sm"
        onClick={onToggleProp}
        data-toggle="increase">
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

export default EmployeesListItem;