import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component{
    render(){
        return(
            <div className="animated fadeIn">
                <Link className="btn btn-primary" to="/">Write a Review</Link>
            </div>
        );
    }
}

export default SideBar;