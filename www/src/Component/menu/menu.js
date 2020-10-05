import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import CartIcon from '../svg/carticon.svg'


class menu extends Component {

    render() {
        
        return (
           
            <div className="nav">
                <div id="menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">Intro</NavLink></li>
                        <li><NavLink to="/">NIKE-Clothes</NavLink></li>
                        <li><NavLink to="/">NIKE-Shoes</NavLink></li>
                        <li><NavLink to="/">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="cart">
                    <Link to="/Cart">
                        
                        <img src={CartIcon} alt="" width="20px"/>
                    </Link>
                </div>
            </div>
        );
    }
}
export default menu;