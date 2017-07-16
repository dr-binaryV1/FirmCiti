import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component{
    onSubmit(){

    }

    isLoggedIn(){
		if(this.props.session.authenticated === true){
			return (
			<div className="authHeader">
				<Link to="/profile" className="loggedInGreeting">Welcome {this.props.session.user.username}!</Link>
				<br />
				<div className="shopping-details">
                    <img className="shoppingCart-img" src="src/static/images/shopping_cart.png" alt="shopping card image" />
                </div>
			</div>

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
                  	<div className="header-comps-left">
						<Link to="/" >
							<div className="logoContainer">
								<h2>FirmCiti</h2>
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
                    <Link to="#" className="nav-item">Shop</Link>
                    </div>
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
  return {
    loginStatus: state.loginStatus,
    session: state.session
  }
}

export default connect(mapStateToProps, {  })(Header);
