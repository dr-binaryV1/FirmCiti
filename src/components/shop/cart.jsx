import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchShoppingCart } from '../../actions';

class ShoppingCart extends Component{
    componentDidMount(){
        // Fetch shopping cart items for specific user
        // Create end points on server for shopping cart details

        // Get Id from user object... Refactoring needs to be done for database
        // this,props.fetchShoppingCart(id)
    }

    componentDidUpdate(){
        if(!this.props.session.authenticated){
            this.props.history.push('/authorize');
        }
    }
    
    render(){
        return(
            <div className="Container animated fadeIn">
                <h3>Shopping Cart</h3>
                <hr className="line-brightPink-left" />
                <img src="src/static/images/empty_shopping_cart.png" alt="empty shopping cart" />
                <h3>Oooops! Your shopping cart is empty!</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        session: state.session
    }
}

export default withRouter(connect(mapStateToProps, { fetchShoppingCart })(ShoppingCart));

