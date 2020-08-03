import React from 'react'
import dataHargaBuah from './DataHargaBuah'
import Style11 from "./Style11.module.css"

class Nama extends React.Component {
    render() { return <tr>{this.props.nama}</tr> }
}

class Harga extends React.Component {
    render() { return <p>{this.props.harga}</p> }
}

class Berat extends React.Component {
    render() { return <p>{this.props.berat / 1000} kg</p> }
}

class Tugas11 extends React.Component {
    render() {
        const tbody = {
            cellSpacing: "0px",
            borderSpacing: "5px",
            backgroundColor: "#ff6600",
            textAlign: "left"
        };
        return dataHargaBuah.map( x => {
            return (
                <div>
                <table className="tbody" style={tbody}>
                    <tr>
                        <td><Nama nama={x.nama}/></td>
                        <td><Harga harga={x.harga}/></td>
                        <td><Berat berat={x.berat}/></td>
                    </tr>
                </table>
                </div>
            )
        }
        )
    }
}

export default Tugas11