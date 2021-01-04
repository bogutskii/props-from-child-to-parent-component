import React, { useState } from "react";
import Child from "./components/Child";
import "./styles.css";



const App = () => {
const [header, setHeader] = useState('Parent header')
  return (
    <div className="App">
        <h1 className='text-center'>Hello</h1>
        <h1 className='text-center'>{header}</h1>

        <Child/>
    </div>
  );
}
export default App;
