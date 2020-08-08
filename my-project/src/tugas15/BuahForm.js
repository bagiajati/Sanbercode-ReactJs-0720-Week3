import React, {useContext, useEffect} from "react"
import axios from 'axios'
import {BuahContext} from "./BuahContext"

const BuahForm = () =>{
    const [daftarBuah, setDaftarBuah] =  useContext(BuahContext)
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

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        switch (typeOfInput){
            case "name": { setInput({...input, name: event.target.value}); break }
            case "price": { setInput({...input, price: event.target.value}); break }
            case "weight": { setInput({...input, weight: event.target.value}); break }
            default: {break;}
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        let name = input.name
        let price = input.price.toString()
        
        if (name.replace(/\s/g,'') !== "" && price.replace(/\s/g,'') !== ""){      
            if (statusForm === "create"){        
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
                .then(res => {
                    setDaftarBuah([
                    ...daftarBuah, 
                    { id: res.data.id, 
                        name: input.name, 
                        price: input.price,
                        weight: input.weight
                    }])
                })
            } else if(statusForm === "edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name: input.name, price: input.price, weight: input.weight})
                .then(() => {
                    let dataBuah = daftarBuah.find(el=> el.id === selectedId)
                    dataBuah.name = input.name
                    dataBuah.price = input.price
                    dataBuah.weight = input.weight
                    setDaftarBuah([...daftarBuah])
                })
            }
            setStatusForm("create")
            setSelectedId(0)
            setInput({name: "", price: "", weight: 0})
        }
    }

    return(
        <>
        <h1>Form Daftar Harga Buah</h1>
        <div style={{width: "50%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
            <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>Nama: </label>
                <input style={{float: "right"}} type="text" name="name" value={input.name} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>Harga: </label>
                <input style={{float: "right"}} type="text" name="price" value={input.price} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>Berat (dalam gram): </label>
                <input style={{float: "right"}} type="number" name="weight" value={input.weight} onChange={handleChange}/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                    <button style={{ float: "right"}}>submit</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )

}

export default BuahForm