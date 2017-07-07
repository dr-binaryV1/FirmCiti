import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends Component{
    render(){
        const { id } = this.props.match.params;
        if(id){
            return(
                <div className="animated fadeIn">
                    <Link className="btn btn-primary" to="/">Write a Review</Link>
                </div>
            );
        }

        if(!id){
            return(
                <div>
                    
                </div>
            );
        }
    }
}

export default withRouter(SideBar);