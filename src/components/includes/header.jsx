import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Header extends Component{
  constructor(){
    super();

    this.state = {
      loggedIn: false
    };
  }

    onSubmit(values){

    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <div className="header">
                  <div className="header-comps-left">
                    <Link to="/" >
                      <div className="logoContainer">
                        <h2>JusBuss</h2>
                      </div>
                    </Link>
                    <div className="searchBarContainer">
                      <form onSubmit={ this.onSubmit.bind(this) }>
                        <input
                          className="searchBar"
                          placeholder="Search"
                          type="text" />
                      </form>
                    </div>
                    <div className="navBarContainer">
                      <Link to="/" className="nav-item">Home</Link>
                      <Link to="/events" className="nav-item">Events</Link> 
                      <Link to="/houses" className="nav-item">Houses</Link>
                      <Link to="/restaurants" className="nav-item">Restaurants</Link>
                    </div>
                  </div>
                  <div className="AuthLinksContainer">
                  <Link to="/authorize" className="login">Login / SignUp</Link>
                  </div>
                </div>
            </div>
        );
    }
}

export default Header;
