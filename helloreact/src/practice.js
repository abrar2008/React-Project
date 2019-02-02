import React, { Component } from 'react';

import './App.css';


class Practice extends Component {

    state = {
        name: "Hameed",
        age: 20,
        desig: "Web Developer",
        gender: "Male"
    }

    render() {
    return (
        <div className = "app-main">
            <h1>{this.props.heading}</h1>
            <StateLess 
                name={this.state.name} 
                age={this.state.age} 
                desig={this.state.desig}
                gender={this.state.gender}
            />
        </div>
    );
}
}

export class Practice2 extends Component {

    state = {
        name: "Faizan",
        age: 24,
        desig: "Mobile Developer",
        gender: "Male",
        newName: "",
        newAge: "",
        newDesig: "",
        newGender: ""
    }

    handleChange = (ev) => {
        
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }

    handleSubmit = (ev) => {

        ev.preventDefault();

        this.setState({
            name: this.state.newName,
            age: this.state.newAge,
            desig: this.state.newDesig,
            gender: this.state.newGender
        })

    }

    render() {
    return (
        <div className = "app-main">
            <h1>{this.props.heading}</h1>
            <StateLess 
                name={this.state.name} 
                age={this.state.age} 
                desig={this.state.desig}
                gender={this.state.gender}
            />

            <form onSubmit={this.handleSubmit}>
                <input type="text" id="newName" value={this.state.newName} onChange={this.handleChange} />
                <input type="text" id="newDesig" value={this.state.newDesig} onChange={this.handleChange} />
                <input type="text" id="newAge" value={this.state.newAge} onChange={this.handleChange} />
                <input type="text" id="newGender" value={this.state.newGender} onChange={this.handleChange} />
                
                <button type="submit">Submit</button>
            </form>

        </div>
    );
  }
}

const StateLess = (props) => {
    
    return (
        <div>
            <h1>{props.name}</h1>
            <h4>{props.desig}</h4>
            <h4>{props.age}</h4>
            <h4>{props.gender}</h4>
        </div>
    )
}


export default Practice;



<search



>
seaarch

</search>
