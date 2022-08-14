
import './App.css';
import io from 'socket.io-client';
import {useState} from 'react';

const socket = io.connect("http://localhost:3001");




function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");


  const joinRooms = () => {
    if (username !== "" && room !== "") {
      
      
    }
  };

  return (
    <div className="App">
      <h3>JOIN A CHAT</h3>
      <input type="text"
      placeholder = " John..."
      onChange = {(event) => {
        setUsername(event.target.value);
      }}
      >
      </input>
      
      <input
      type="text"
      placeholder = " Room ID ..."
      onChange = {(event) => {
        setRoom(event.target.value);>
      </input>
    </div>
  );
}

export default App;
