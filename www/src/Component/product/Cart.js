import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, BrowserRouter as Router,} from "react-router-dom";
import Product from '../product/product'
import {removeCart} from "../../redux/action/productAtions"
import {updateCart} from "../../redux/action/productAtions"


class cart extends Component {
    formart_curency = (gia)=>{
        return gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    }
    showSubTotal=(gia,soLuong)=>{
        return gia * soLuong;
    } 
    render() {
        return (
            <div className="ListCart">
                <h1>Product List</h1>
                <div className="listpro">
                    <section className="section">
                        <div className="table-reponsive">
                            <table className="table product-table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Image</th>
                                        <th>Amount</th>
                                        <th>Price</th>   
                                        <th>Delete</th>                                         
                                        <th>Total</th>
                                                
                                    </tr>
                                </thead>
                                {Object.values(this.props.cart).map((values,index)=>{
                                    return(
                                        <tbody>
                                            <tr key={index}>
                                            <td>{values.ten}</td>
                                            <td><img src={values.image} width="50px" height="50px" atl=""/></td>
                                            <td className="center-on-small-only">
                                                <span className="qty">{values.quantity}</span>
                                                <div className="btn-group radio-group" data-toggle="buttons">
                                                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                                        <a>-</a>
                                                    </label>
                                                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                                                        <a>+</a>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>{this.formart_curency(values.gia, values.soLuong)}</td>
                                            <td><div className="removecart"><i onClick={() => {
                                                    this.props.removeCart(`${values.id}_${values.ten}`);
                                                    updateCart(`${values.id}_${values.ten}`)}} 
                                                    className="btn btn-success" >X</i></div></td>
                                            </tr>
                                        </tbody>
                                        )})}
                            </table>
                        </div>
                    </section>          
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { cartReducer } = state
    return { cart: cartReducer.items }
}

const mapDispacthToProps = dispatch =>{
    return{
        removeCart: sanPham => {
            dispatch(removeCart(sanPham));
        },
    }
}
  
  export default connect(mapStateToProps,mapDispacthToProps)(cart);