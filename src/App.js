import React, { useState } from "react";
import Child from "./components/Child";
import "./styles.css";



const App = () => {
const [header, setHeader] = useState('Parent header')


  return (
    <div className="App">
        <h1 className='text-center'>Parent component</h1>
        <h1 className='text-center'>{header}</h1>
        <div className='wrap-center'>
<button onClick={()=>setHeader('Parent header')}>back parent header</button>
        </div>
        <Child setHeader={(header)=>setHeader(header)}/>
    </div>
  );
}
export default App;
