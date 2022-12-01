import React, {useState} from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import UserList from "./components/UserList";

function App() {

  const [activeUserId,setActiveUserId]=useState(null);



  
  return (
  <div className="App">
    <div>
      <UserList setActiveUserId={setActiveUserId}/>
    </div>
    <div>
      {
      activeUserId&&
      <div>
        <UserDetail activeUserId={activeUserId}/>
      </div>
      }
     
    </div>
  </div>
  );
      
}

export default App;
