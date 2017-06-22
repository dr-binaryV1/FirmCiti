import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <h2>JusBuss Client Portal</h2>
                <Link to="/">Home</Link>
                <Link to="/Restaurants">Restaurants</Link>
            </div>
        );
    }
}

export default Header;