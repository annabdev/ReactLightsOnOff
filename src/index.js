import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

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
ReactDOM.render(<Room />, document.getElementById('root'));