import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import data from '../product/data.json';
import Product from '../product/product';
import {Link} from 'react-router-dom';
import {addCart} from '../../redux/action/productAtions';
import { connect } from 'react-redux';

class Detail extends Component {

    formart_curency = (gia)=>{
        return gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    }
    render() {
        var id=parseInt(this.props.match.params.id,10);
        console.log(data);
        return (
            <div className="detail">
                <div className="picture">
                    {data.map((value, key)=>{
                    if(value.id===id){
                        return <div key={key}><h1><img src={value.image} width="225px" height="200px" /></h1></div>
                    }
                    })}    
                </div>
                <div className="price">
                    {data.map((value, key)=>{
                    if(value.id===id){
                    return <div key={key}><h2>{value.ten}</h2><p>{this.formart_curency(value.gia)}</p><p1>{value.discribe}</p1  >
                    <div className="addcart"><i onClick={() => this.props.addCart(value)} className="btn btn-success">ADD CART</i></div>
                    </div>
                    
                }
                    })}

                </div>
            </div>
        );
    }
}

const mapDispacthToProps = dispatch =>{
    return{
        addCart: sanPham => {
            dispatch(addCart(sanPham));
        },
    }
}

export default connect(null, mapDispacthToProps)(Detail);