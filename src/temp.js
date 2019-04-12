import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";


class Room extends React.Component {
    state = {
        temp: 72
    }

    //setting variable to true
    hotter = () => {
        this.setState({
            temp: 
        });
    } 
    //setting variable to false
    cooler = () => {
        this.setState({
            temp: --;
        });
    
    };
    render() {
        const temperature = this.state.temp = 72;
        return (
            <div className={`room ${temperature}`}>
            <br />
            <button onClick={this.hotter}>Increase</button>
            <button onClick={this.cooler}>Decrease</button>
            </div>
        );
    }
}
ReactDOM.render(<Room />, document.getElementById('root'));