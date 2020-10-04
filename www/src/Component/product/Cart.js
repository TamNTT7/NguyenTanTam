import React, { Component } from 'react';
import { connect } from 'react-redux';

class cart extends Component {
    render() {
        return (
            <div className="ListCart">
                <h1>Product List</h1>
                {Object.values(this.props.cart).map((values,index)=>{
                    console.log(values);
                })}
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { cartReducer } = state
    return { cart: cartReducer.items }
  }
  
  export default connect(mapStateToProps)(cart);