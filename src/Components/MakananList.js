import React from 'react'

export default class MakananList extends React.Component {
    render() {
        return(
            <div class="card m-2" style={{width: "15rem", backgroundColor:"black"}}>
                <img src={this.props.image} className="card-img-top" alt={this.props.name}/> 
                <div class="card-body text-light">
                    <div className='row'>
                        <h6 className="text-bold">{this.props.name}</h6>
                    </div>
                    <div className='row'>
                        <p>Price : Rp.{this.props.price}</p>
                        <p>deskripsi : {this.props.desk}</p>                    
                    </div>
                        <button className="btn btn-dark m-1 text-success" onClick={this.props.onEdit}>Edit</button>
                        <button className="btn btn-dark m-1 text-danger" onClick={this.props.onDrop}>Delete</button>
                </div>
            </div>
        )
    }
}