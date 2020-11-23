import React, { Component } from "react";

class Child_1 extends Component {
    state = {
        nama: "Yoga Pratama",
        nim: "21120117140017"
    }

    componentDidMount() {
        alert(`componentDidMount, LifeCycle Started`)
    }

    changeName = () => {
            this.setState((state) => {
                if (state.nama === "Yoga Pratama" && state.nim === "21120117140017") {
                    return {
                        nama: "Heni Nurul Kholifah",
                        nim: "21120117120023"
                    }
                } else {
                    return {
                        nama: "Yoga Pratama",
                        nim: "21120117140017"
                    }
                }
            })
        }
    componentWillUnmount() {
        alert('componentDidMount, LifeCycle Ended')
    }

    render() {
        return ( 
            <div>
            <h3> Ini kelas Child_1 </h3> 
            <button onClick = { this.changeName } > Ubah nama dan nim mahasiswa! </button>
            <br/>
            <h5 > { this.state.nama } </h5> 
            <h5> { this.state.nim } </h5>
            </div >
        );
    }
}
export default Child_1;