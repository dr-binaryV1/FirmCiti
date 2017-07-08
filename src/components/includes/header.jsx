import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component{
    onSubmit(values){

    }

    isLoggedIn(){
      if(this.props.loginStatus === true){
        return (
          <p className="loggedInGreeting">Welcome Sir!</p>
        )
      } else {
          return(
            <Link to="/authorize" className="login">Login / SignUp</Link>
          );
      }
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <div className="header">
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
                  <div className="AuthLinksContainer">
                      { this.isLoggedIn() }
                  </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
  return { loginStatus: state.loginStatus }
}

export default connect(mapStateToProps, {})(Header);
