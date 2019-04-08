import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

class Room extends React.Component {
    state = {
        isLit: true
    }
    flipLight = () => {
        this.setState({
            isLit: !this.state.isLit
        });
    };
    render() {
        const brightness = this.state.isLit ? "lit" : "dark";
        return (
            <div className={`room ${brightness}`}>
            <br />
            <button onClick={this.flipLight}>flip</button>
            </div>
        );
    }
}
ReactDOM.render(<Room />, document.getElementById('root'));