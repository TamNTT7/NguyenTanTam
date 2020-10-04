import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import data from '../product/data.json';
import Product from '../product/product';
import {Link} from 'react-router-dom'

class Detail extends Component {

    formart_curency = (gia)=>{
        return gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    }
    render() {
        var pid=parseInt(this.props.match.params.id,10);
        console.log(data);
        return (
            <div className="detail">
                <div className="picture">
                    {data.map((value, key)=>{
                    if(value.id===pid){
                        return <div key={key}><h1><img src={value.image} width="225px" height="200px" /></h1></div>
                    }
                    })}
                    
                </div>
                <div className="price">
                    {data.map((value, key)=>{
                    if(value.id===pid){
                    return <div key={key}><h2>{value.ten}</h2><p>{this.formart_curency(value.gia)}</p><p1>{value.discribe}</p1  ></div>
                    }
                    })}
                    <Link to="/cart" className="btn">ADD CART</Link>
                </div>
            </div>
        );
    }
}

export default Detail;