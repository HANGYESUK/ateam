import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import SelectMenu from './Components/SelectMenu';
import Data from './Data';

function App() {

  let data = Data

  return (
    <div className="App colum">
      <Nav/>
      <SelectMenu/>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
