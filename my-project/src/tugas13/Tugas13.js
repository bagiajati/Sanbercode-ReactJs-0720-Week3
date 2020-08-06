import React, {Component} from 'react'

class Tugas13 extends Component{

    constructor(props){
        super(props)
        this.state = {
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500} ],
            input: { 
                nama: "",
                harga: "",
                berat: ""
            },
            indexOfForm: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
        console.log(event.target.value)
        this.setState({input: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        let input = this.state.input
        if(input['nama'].replace(/\s/g, '') !== "" && input['harga'].toString().replace(/\s/g, '') !== "" && input['berat'].toString().replace(/\s/g,'') !== ""){
            let newDaftarBuah = this.state.dataHargaBuah
            let index = this.state.indexOfForm
            console.log(index)
            console.log(newDaftarBuah)
            if(index === -1){
                newDaftarBuah = [...newDaftarBuah, input]
            } else { newDaftarBuah[index] = input }
            this.setState({
                dataHargaBuah: newDaftarBuah,
                input: { 
                    nama: "",
                    harga: "",
                    berat: ""
                },
                indexOfForm: index
            })
        }        
    }

    handleEdit(event){
        let index = event.target.value
        let buah = this.state.dataHargaBuah[index]
        this.setState({
            input: {
                nama: buah.nama,
                harga: buah.harga,
                berat: buah.berat
            },
            indexOfForm: index
        })
    }

    handleDelete(event){
        let index = event.target.value
        let newDaftarBuah = this.state.dataHargaBuah
        let editedDaftarBuah = newDaftarBuah[this.state.indexOfForm]
        newDaftarBuah.splice(index, 1)

        if (editedDaftarBuah !== undefined){
            var newIndex = newDaftarBuah.findIndex((el) => el === editedDaftarBuah)
            this.setState({dataHargaBuah: newDaftarBuah, indexOfForm: newIndex})
        } else{
            this.setState({dataHargaBuah: newDaftarBuah})
        }
    }

    render() {
        return(
            <>
            <h1 style={{textAlign: "center", fontFamily: "Times New Roman"}}>Tabel Harga Buah</h1>
            <table style={{border:"1px solid #000", width: "40%", margin:"0 auto", fontFamily:"Times New Roman"}}>
            <thead style={{backgroundColor:"#aaa"}}>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody style={{backgroundColor:"coral"}}>
                { this.state.dataHargaBuah.map((el, index) => {
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat / 1000} kg</td>
                            <td style={{textAlign:"center"}}>
                                <button onClick={this.handleEdit} value={index}>Edit</button>
                                &nbsp;
                                <button onClick={this.handleDelete} value={index}>Delete</button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
            </table>

            <h1>Form Buah</h1>
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Nama Buah: </label>
                <input type="text" value={this.state.input.nama} onChange={this.handleChange} placeholder="nama" /><br></br>
                <label>Harga Buah: </label>
                <input type="text" value={this.state.input.harga} onChange={this.handleChange} placeholder="harga" /><br></br>
                <label>Berat Buah: </label>
                <input type="text" value={this.state.input.berat} onChange={this.handleChange} placeholder="berat (dalam gr)" /><br></br>
                <button>submit</button>
            </form>
            </div>
            </>
        )
    }
}

export default Tugas13