import React from "react"
 
class MakananList extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="card col-5 mx-3 my-3">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5">
                            <img src="donat-coklat.jpg"
                            height="200" width="200" alt={this.props.name}/>
                        </div>
 
                        {/* menampilkan deskripsi */}
                        <div className="col-5 me-5">
                            <h5 className="text-info">
                                { this.props.name }
                            </h5>
                            <h6 className="text-danger">
                                Price: { this.props.price}
                            </h6>
                            <h6 className="text-danger">
                                deskripsi : {this.props.deskripsi}
                            </h6>
                            {/*button untuk menambah ke keranjang belanja*/}
                            <button className="btn btn-sm btn-success m-1"
                            onClick={this.props.onCart}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card col-5 mx-3 my-3">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5 me-5">
                            <img src="donat-matcha.jpg"
                            height="200" width="200" alt={this.props.name}/>
                        </div>
 
                        {/* menampilkan deskripsi */}
                        <div className="col-5">
                            <h5 className="text-info">
                                { this.props.name }
                            </h5>
                            <h6 className="text-danger">
                                Price: { this.props.price}
                            </h6>
                            <h6 className="text-danger">
                                deskripsi : {this.props.deskripsi}
                            </h6>
                            {/*button untuk menambah ke keranjang belanja*/}
                            <button className="btn btn-sm btn-success m-1"
                            onClick={this.props.onCart}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card col-5 mx-3 my-3">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5 me-5">
                            <img src="kentang-goreng.jpg"
                            height="200" width="200" alt={this.props.name}/>
                        </div>
 
                        {/* menampilkan deskripsi */}
                        <div className="col-5">
                            <h5 className="text-info">
                                { this.props.name }
                            </h5>
                            <h6 className="text-danger">
                                Price: { this.props.price}
                            </h6>
                            <h6 className="text-danger">
                                deskripsi : {this.props.deskripsi}
                            </h6>
                            {/*button untuk menambah ke keranjang belanja*/}
                            <button className="btn btn-sm btn-success m-1"
                            onClick={this.props.onCart}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card col-5 mx-3 my-3">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5 me-3">
                            <img src="onion-ring.jpg"
                            height="200" width="200" alt={this.props.name}/>
                        </div>
 
                        {/* menampilkan deskripsi */}
                        <div className="col-5">
                            <h5 className="text-info">
                                { this.props.name }
                            </h5>
                            <h6 className="text-danger">
                                Price: { this.props.price}
                            </h6>
                            <h6 className="text-danger">
                                deskripsi : {this.props.deskripsi}
                            </h6>
                            {/*button untuk menambah ke keranjang belanja*/}
                            <button className="btn btn-sm btn-success m-1"
                            onClick={this.props.onCart}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default MakananList;