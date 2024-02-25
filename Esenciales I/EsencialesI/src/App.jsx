import './App.css'
import MyFirstComponent from './MyFirstComponent'
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  setTimeout(() => {
    setValue(value + 1);
  }, 5000);

  console.log("App rendered");
  
  return (
    <>
      <h1>Vite + React</h1>
      <MyFirstComponent propOne={value} propTwo="2" propThree="3"/>
    </>
  )
}

export default App
