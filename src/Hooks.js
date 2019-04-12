import React, { useState } from 'react';
import './App.css'

function lightSwitch() {
    const [on, setOn] = useState(isLit: true);
    const [off, setOff] = useState(isLit: false);
    }

    const handleClick = () => {
      setOn(isLit: true);
      setOff(isLit: false)
    }
  
    return (
      <div>
  
      <br />
      <button onClick={handleClick.setOn}>On</button>
      <button onClick={handleClick.setOff}>Off</button>
      </div>
      ); 
  
  export default Hooks;