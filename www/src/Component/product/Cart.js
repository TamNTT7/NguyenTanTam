import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, BrowserRouter as Router,} from "react-router-dom";
import Product from '../product/product'
import {removeCart} from "../../redux/action/productAtions"


class cart extends Component {
    formart_curency = (gia)=>{
        return gia.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    }
    render() {
        return (
            <div className="ListCart">
                <h1>Product List</h1>
                <div className="listpro">
                    {Object.values(this.props.cart).map((values,index)=>{
                        return(
                            <tr key={index}>
                                <td>{values.ten}</td>
                                <td><img src={values.image} width="50px" height="50px" atl=""/></td>
                                <td><button onClick={() => this.props.tanggiam(false, values.id)}>-
                                </button>1
                                <button onClick={() => this.props.tanggiam(true, values.id)}> +</button></td>
                                <td>{this.formart_curency(values.gia)}</td>
                                <td><div className="removecart"><i onClick={() => {this.props.removeCart(`${values.id}_${values.ten}`)}} className="btn btn-success" >Delete</i></div></td>
                            </tr>
                        ) 
                    })}
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