import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SideBar extends Component{
    writeReview(){
        if(this.props.loginStatus !== true){
            this.props.history.push('/authorize');
        }
    }

    render(){
        const { id } = this.props.match.params;
        if(id){
            return(
                <div className="animated fadeIn">
                    <button className="btn btn-primary" onClick={ this.writeReview.bind(this) }>Write a Review</button>
                </div>
            );
        }else{
            return(
                <div className="sidebar-info">
                    <h5>Not here? Tell us what we're missing.</h5>
                    <p>If the business you're looking for isn't here, add it!</p>
                    <Link className="btn btn-sm btn-primary" to="#">Add a Business</Link>
                    <hr />
                    <p>Got search feedback? Help us improve.</p>
                </div>
            );
        }
    }
}

export default withRouter(SideBar);