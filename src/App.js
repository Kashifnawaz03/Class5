import React , {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from'./Parent.js';
import ValueContext from'./ValueContext';

function App() {
  //let [number, setNumber] = useState(45);
  //let value = 78;
  let value = useState(48);
  return (
    <ValueContext.Provider value = {value}>
      <div>Hello world
      <Parent></Parent>
    </div>
    </ValueContext.Provider>
  
    
  );
}

export default App;
