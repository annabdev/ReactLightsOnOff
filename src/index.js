import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"



const Hooks = () => {
    const [on, setOn] = useState(true);
    const brightness = on ? "lit" : "dark";

    return (
        <div className={`Hooks ${brightness}`}>
            <br />
            <button onClick={() => setOn(true)}>On</button>
            <button onClick={() => setOn(false)}>Off</button>
            <br />
        </div>
    )
}




    ;

ReactDOM.render(<Hooks />, document.getElementById('root'));
