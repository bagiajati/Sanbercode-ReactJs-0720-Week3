import React, {useContext, useEffect} from "react"
import axios from 'axios'
import {BuahContext} from "./BuahContext"

const BuahList = () =>{
  const [daftarBuah, setDaftarBuah] = useContext(BuahContext)
  const [input, setInput]  =  useContext(BuahContext)
  const [selectedId, setSelectedId]  =  useContext(BuahContext)
  const [statusForm, setStatusForm]  =  useContext(BuahContext)

  useEffect( () => {
    if (daftarBuah === null){
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
        })
    }
  }, [daftarBuah])

  const handleDelete = (event) => {
    let idDataBuah = parseInt(event.target.value)
    let newdaftarBuah = daftarBuah.filter(el => el.id !== idDataBuah)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
    .then(res => { console.log(res) })
    setDaftarBuah([...newdaftarBuah])
}

  const handleEdit = (event) =>{
      let idDataBuah = parseInt(event.target.value)
      let dataBuah = daftarBuah.find(x=> x.id === idDataBuah)
      setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight})
      setSelectedId(idDataBuah)
      setStatusForm("edit")
  }

  return(
    <>
      <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
          <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
          </tr>
          </thead>
          <tbody>
            { daftarBuah !== null && daftarBuah.map((item, index) => {
            return(                    
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.weight/1000} Kg</td>
              <td>
                <button onClick={handleEdit} value={item.id}>Edit</button>
                &nbsp;
                <button onClick={handleDelete} value={item.id}>Delete</button>
              </td>
            </tr>
            )
            })
            }
          </tbody>
        </table>
    </>
  )
}

export default BuahList