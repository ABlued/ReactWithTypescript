import React from 'react';
import './App.css';
import Greetings from './Greetings';
// React.FC에 FC는 FunctionComponent이다.
const App:React.FC<{name:string, age:number}> = ({name, age}) => {

  return (
    <div className="App">
      <Greetings name="mark" optional="optional"/>
    </div>
  );
}

export default App;
