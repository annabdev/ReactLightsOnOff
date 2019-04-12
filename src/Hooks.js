import React from 'react';
import './App.css'

const LightSwitch = ({ lightStatus, ...rest }) => {

  
    return (
      <div {...rest}>
      <button onClick={() => lightStatus(true)}>On</button>
      <button onClick={() => lightStatus(false)}>Off</button>
      </div>
      ); 
    }

  export default LightSwitch;