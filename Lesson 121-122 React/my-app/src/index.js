import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Привіт, Світ!'
// const elem = <h2>Hello, World!</h2>;
//const elem = React.createElement('h2', {className: 'greetings'}, 'Hello, World')//1 аргумент - тег, другий аргумент - клас, третій аргумент - зміст

//якщо кілька строк коду, то елемент Реакт поміщується у дужки
const elem = (
  <div>
    <h2 className='text'>Текст: {text} {2+2} </h2>
    <input type="text"/>
    <button tabIndex="0">Click Me</button>

  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  elem
);

