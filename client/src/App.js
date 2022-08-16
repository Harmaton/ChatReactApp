
import './App.css';
import io from 'socket.io-client';
import {useState} from 'react';
import './Chat' from ;

const socket = io.connect("http://localhost:3001");




function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");


  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      console.log(`user with id: ${socket.id} joined room:`);
      
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
        setRoom(event.target.value);}}
        >
      </input>

      <div className ="joinbutn">
     <button onClick={joinRoom} > JOIN A room</button> 
     <Chat socket={socket} username={username} room={room}/>
    </div>

    </div>
    
    
  );
}

export default App;
