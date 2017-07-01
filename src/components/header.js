import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <h2>JusBuss Client Portal</h2>
                <Link to="/">Home</Link>
                <Link to="/Restaurants">Restaurants</Link>
>>>>>>> 01667d91e8be39dc24a467d1b97b6a2ed1c98cef
            </div>
        );
    }
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 01667d91e8be39dc24a467d1b97b6a2ed1c98cef
