import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import SelectMenu from './Components/SelectMenu';
import Data from './Data';

type stateType = number[]

let stateContext = React.createContext<stateType | undefined>([]);

function App() {

  let a :string = 'kim';

  //JSX의엘리먼트 라는 타입
  let box :JSX.Element = <div></div>;

  let data = Data;
  console.log(data);

  let [state, setState] = useState([1,2,3,4,5]);



  return (
    <div className="App colum">
      <Nav/>
      <stateContext.Provider value={state}>
        <SelectMenu/>
      </stateContext.Provider>
      <h1>Hello {a}!</h1>
      <Profile name={"철수"} age={26}/>
      {box}
    </div>
  );
}

// component에도 타입 적용, props는 오브젝트 형태(type ailos활용하면 쉬움)
function Profile(props :{name :string, age :number}) :JSX.Element {
  return (
    <div>
      { props.name } 프로필 입니다.<br/>
      나이는 { props.age } 입니다. 
    </div>
  )
}

export default App;
