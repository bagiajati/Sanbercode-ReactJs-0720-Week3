import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tugas11 from './tugas11/Tugas11'
import Style11 from "./tugas11/Style11.module.css"


// Tugas 11
function App() {
  const thead = {
    cellSpacing: "0px",
    border: "1 px solid #000000",
    borderSpacing: "5px",
    backgroundColor: "#808080",
    textAlign: "center",
    padding: "2px"
  };

  return (
    <div>
      <h1 style={{textAlign: "center", fontFamily: "Times New Roman"}}>Tabel Harga Buah</h1>
      <table className="thead" style={thead}>
      <tr>
        <td><b>Nama</b></td>
        <td><b>Harga</b></td>
        <td><b>Berat</b></td>
      </tr>
      </table>
      < Tugas11 />
    </div>
  );
}

export default App;
