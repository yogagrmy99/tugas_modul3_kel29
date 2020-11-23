import React, { Component } from "react";

class Child_2 extends Component {

    state = {
        angka: 0
    }

    componentDidMount() {
        alert('ComponentDidMount, LifeCycle Started')
    }

    minNumber = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }

    plusNumber = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }

    componentWillUnmount() {
        alert('componentWillUnmount, LifeCycle Ended')
    }

    render() {
        return ( 
            <div>
                <h3> Ini Child_2 </h3>
                <button onClick = { this.minNumber } > Decrement </button> 
                <button onClick = { this.plusNumber } > Increment </button> 
                <br/>
                <p> { this.state.angka } </p>
            </div>
            );
        }
    }

export default Child_2;