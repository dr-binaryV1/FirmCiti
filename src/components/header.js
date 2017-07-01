import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Header extends Component{
    onSubmit(values){

    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <div className="header">
                  <div className="logoContainer">
                    <h2>JusBuss</h2>
                  </div>
                  <div className="searchBarContainer">
                    <form onSubmit={ this.onSubmit.bind(this) }>
                      <input
                        className="searchBar"
                        type="text" />
                    </form>
                  </div>
                  <div className="navBarContainer">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/Restaurants" className="nav-item">Restaurants</Link>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;
