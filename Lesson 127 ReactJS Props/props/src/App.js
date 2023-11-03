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
function WhoAmI({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
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
      <WhoAmI name={() => { return 'John'}} surname="Smith" link="https://facebook.com"/>
      <WhoAmI name={() => { return 'Vasiliy'}} surname="Dovbeshko" link="https://www.instagram.com/"/>
    </div>
  );
}
export default App;
