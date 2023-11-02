import logo from './logo.svg';
import './App.css';


function WhoAmI (props) {
  return (
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="https://facebook.com"/>
      <WhoAmI name="John" surname="Smith" link="https://facebook.com"/>
    </div>
  );
}

export default App;
