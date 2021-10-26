import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// React.FC에 FC는 FunctionComponent이다.
const App:React.FC<{name:string, age:number}> = ({name, age}) => {
  const [myName, setMyName] = useState('ablue');
  const [myNumber, setmyNumber] = useState(1);

  return (
    <div className="App">
      hi, {name} {age}
      my name {myName}
      {myNumber}
    </div>
  );
}

export default App;
