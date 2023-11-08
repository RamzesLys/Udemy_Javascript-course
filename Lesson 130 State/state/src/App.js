import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


// function WhoAmI (props) {
//   return (
//     <div>
//       <h1>My name is {props.name}, surname - {props.surname}</h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   )
// }

//або з диструктуризацією
// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name()}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '---'
    }
  }

  nextYear = () => {
    //зміна стану елементів
    // this.setState((state) => {
    //   return {years: this.state.years+1}
    // })
//спрощений синтаксис
   this.setState(state => ({
    years: state.years+1
   }))


  }

   render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years} </h1>
        <a href={link}>My profile</a>
      </div>
    )
   }
  }

// function App() {
//   return (
//     <div className="App">
//       <WhoAmI name={{firstName: 'John'}} surname="Smith" link="https://facebook.com"/>
//       <WhoAmI name={{firstName: 'Alex'}} surname="Dovbeshko" link="https://www.instagram.com/"/>
//     </div>
//   );
// }


//пропсами також можна передавати не тільки об'кти, а й функції, які слід передавати з викликом

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Smith" link="https://facebook.com"/>
      <WhoAmI name='Vasiliy' surname="Dovbeshko" link="https://www.instagram.com/"/>
    </div>
  );
}
export default App;
