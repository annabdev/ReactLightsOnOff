import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import LightSwitch from './Hooks'

//Nates code

const Room = () => {

    const [lightswitch, setLightswitch] = useState(true); //This is just a simple boolean. true === on, false === off
    const bgClass = lightswitch ? 'lit' : 'dark'
    const textColor = lightswitch ? 'white' : 'red'

    return (
        <div className={`container ${bgClass}`}>
            <LightSwitch className={'lightSwitch'} lightStatus={setLightswitch} />
            <div style={{color: textColor}} className={`hiddenText`}>Can you see in the dark?</div>
        </div>
    )
}

/*** Anna's code
class Room extends React.Component {
    state = {
        isLit: true
    }

    //setting variable to true
    flipLight = () => {
        this.setState({
            isLit: true
        });
    } 
    //setting variable to false
    turnOff = () => {
        this.setState({
            isLit: false
        });
    
    };
    render() {
        const brightness = this.state.isLit ? "lit" : "dark";
        return (
            <div className={`room ${brightness}`}>
            <br />
            <button onClick={this.flipLight}>On</button>
            <button onClick={this.turnOff}>Off</button>
            </div>
        );
    }
}
***/
ReactDOM.render(<Room />, document.getElementById('root'));