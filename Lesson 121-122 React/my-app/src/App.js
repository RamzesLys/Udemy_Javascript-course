import logo from './logo.svg';
import './App.css';
import {Component, StrictMode} from 'react';

const Header = () => {
  return <h2>Hello, World!</h2>
}

// const Field = () => {
//   const holder = 'Enter Here!';
//   const styledField = {
//     width: '300px'
//   }

//   return <input 
//   placeholder={holder} 
//   type='text' 
//   style={styledField}/>
// }

class Field extends Component {
  render () {
    const holder = 'Enter Here!';
    const styledField = {
      width: '300px'
    };
    return <input 
      placeholder={holder} 
      type='text' 
      style={styledField}/>
  }
}

function Btn () {
  const text = 'Log in';
  const logged = true;
  // const res = () => {
  //   return 'Log in'
  // }

  //const p = <p>Click</p>

  return <button cursor="pointer" >{logged ? 'Enter' : text}</button>// ТІЛЬКИ ЧЕРЕЗ ТЕРНАРНІ ОПЕРАТОРИ регулярні вислови, перевіряємо чи залогінений користувач 
}

function App() {
  return (
    <div className="App">
    <StrictMode>
      <Header/>
    </StrictMode>
   <Field/>
   <Btn/>
    </div>
  );
}

export {Header}

export default App;
