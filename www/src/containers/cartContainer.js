import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class cartContainer extends Container {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
cartContainer.PropTypes={
    cart: PropTypes.arrayOf().isRequired
}

export default connect(null,null)(cartContainer);