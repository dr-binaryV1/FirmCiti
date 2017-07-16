import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class ShoppingCart extends Component{
    componentDidMount(){

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
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        session: state.session
    }
}

export default withRouter(connect(mapStateToProps, { })(ShoppingCart));

