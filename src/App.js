import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
      <MyComponent name='Apple' price='15000'></MyComponent>
      <MyComponent name='Google' price='10000'></MyComponent>
      <MyComponent name='Microsoft' price='30000'></MyComponent>

    </div>
  );
}


function LoadUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }
    , [])

  return (
    <div>
      <h1>Load Users:{users.length}</h1>
      {
        users.map(user =><User name= {user.name} phone={user.phone}></User> )
      }
    </div>
  );
}

function User(props){


  return(
<div className="user">
  <h2>Name:{props.name}</h2>
  <p>Phone:{props.phone}</p>
</div>
  );
}


function MyComponent(props) {
  const [points, setPoints] = useState(1);

  const myStyle = {
    backgroundColor: 'skyblue',
    border: '3px solid blue',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px'

  }


  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>Yo yo mama! {props.name}!!!</h1>
      <h4>Asking money, price: {props.price}, I have points: {points}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: 'magenta', fontWeight: 'bold' }}>I cam write my own component</p>
    </div>
  );
}
export default App;
