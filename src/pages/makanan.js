import React from 'react'
import Navbar from '../navbar'
import axios from 'axios'
// import '../style/home.css';
// import {Modal, Button, Form} from "react-bootstrap"
import MakananList from '../Components/MakananList';
// import Test from '../components/test';
// import Footer from '../components/footer';

export default class Makanan extends React.Component{
    constructor(){
        super()
        this.state = {
            Makanans:[],
            isModalOpen: false,
            nama_mk: "",
            harga: "",
            desk:"",
            gambar_mk: null,
            action: ""
        }
    //     if(localStorage.getItem('token')){
    //         this.state.token = localStorage.getItem('token')
    //     }
    //     else{
    //         window.location = '/login'
    //     }
    }
    // headerConfig=() =>{
    //     let header = {
    //         headers: {Authorization: `Bearer ${this.state.token}`}
    //     }
    //     return header
    // }
    // handleClose = () =>{
    //     this.setState({
    //         isModalOpen: false
    //     })
    // }
    // handleAdd = () => {
    //     this.setState({
    //         isModalOpen: true,
    //         name: "",
    //         price: "",
    //         stock: "",
    //         image: null,
    //         action: "insert"
    //     })
    // }
    // handleChange = (e) =>{
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }
    // handleEdit = (selectedItem) => {
    //     this.setState({
    //         isModalOpen: true,
    //         product_id: selectedItem.product_id,
    //         name: selectedItem.name,
    //         price: selectedItem.price,
    //         stock: selectedItem.stock,
    //         image: null,
    //         action: "update"
    //     })
    // }
    // handleFile = (e) =>{
    //     this.setState({
    //         image: e.target.files[0]
    //     })
    // }
    // handleSave = (e) => {
    //     e.preventDefault()
    //     let form = new FormData()
    //     form.append("name",this.state.name)
    //     form.append("price",this.state.price)
    //     form.append("stock",this.state.stock)
    //     form.append("image",this.state.image)
        
    //     let url = ""
   
    //     if (this.state.action === "insert") {
    //         url = "http://localhost:8080/product"

    //         axios.post(url, form)
    //         .then(res => {
    //             this.getCustomer()
    //             this.handleClose()
    //         })
    //         .catch(err => {
    //            console.log(err.message)
    //         })
    //     }
    //     else if (this.state.action === "update"){
    //         url = "http://localhost:8080/product/" + this.state.product_id

    //         axios.put(url, form)
    //         .then(res => {
    //             console.log(this.state.product_id)
    //             this.getProduct()
    //             this.handleClose()
    //         })
    //         .catch(err => {
    //            console.log(err.message)
    //         })
    //     }

    // }
    // handleDelete = (product_id) => {
    //     let url = "http://localhost:8080/product/" + product_id

    //     if (window.confirm('Anda yakin ingin menggapus data ini?')){
    //         axios.delete(url, this.headerConfig())
    //         .then(res => {
    //             console.log(res.data.message)
    //             this.getProduct()
    //         })
    //         .catch(err => {
    //             console.log(err.message)
    //         })
    //     }
    // }
    getMakanan = () => {
        //ganti url
        let url = "http://localhost:8080//coffeeshop/makanan"

        axios.get(url, this.headerConfig())
        .then(res => {
            this.setState({
                Makanans: res.data.Makanans
            })
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    componentDidMount = () =>{
        this.getmakanan()
    }
    render(){
        return(
            <div className='bg'>
                <Navbar/>
                <div className='container-fluid'>
                    <div className='row'>
                        {/* <Test/> */}
                    <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                            <div className="col-lg-12 col-sm-12 p-2">
                            <button className="col-3 btn btn-dark my-1 mb-3 text-warning" style={{backgroundColor:"black"}} onClick={() => this.handleAdd()}>
                                        Tambah Makanan
                                    </button>  
                                <div className='row'>
                                    {this.state.makanans.map((item,index)=>{
                                        return(
                                        <MakananList
                                        key={index}
                                            nameimage={item.image}
                                            //ganti utl
                                            image={"http://localhost:8080/image/product/" + item.image}
                                            name={item.nama_mk}
                                            price={item.harga}
                                            deskripsi={item.desk}
                                            onEdit={() => {this.handleEdit(item)}}
                                            onDrop={() => {this.handleDelete(item.id_mk)}}
                                        />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* <Footer/> */}
                    </div>
                    </div>

                    {/* <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Tambah Produk</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={e => this.handleSave(e)}>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Masukan Nama Produk"
                                                value={this.state.name} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="double" name="price" placeholder="Masukan Harga Produk"
                                                value={this.state.price} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Stok</Form.Label>
                                <Form.Control type="double" name="stock" placeholder="Masukan Stok Produk"
                                                value={this.state.stock} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>image</Form.Label>
                                <Form.Control type="file" name="image" placeholder="Pilih Gambar anda"
                                                value={this.state.Image} onChange={this.handleFile}/>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Modal.Footer>
                        </Form>
                    </Modal> */}
                </div>
            </div>    
        )
    }
}