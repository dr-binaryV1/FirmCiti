import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Appointment from './appointment';

class SideBar extends Component{
    writeReview(){
        if(this.props.loginStatus.message !== true){
            this.props.history.push('/authorize');
        }
    }

    render(){
        const { id } = this.props.match.params;
        if(id){
            return(
                <div className="sidebar-info-review animated fadeIn">
                    <button
                        className="btn btn-primary sidebarButton" onClick={ this.writeReview.bind(this) }>Write a Review</button>
                    <button className="btn btn-sm btn-default sidebarButton">Add Photo</button>
                    <button className="btn btn-sm btn-default sidebarButton">Share</button>
                    <br />

                    <Appointment />
                </div>
            );
        }else{
            return(
                <div className="sidebar-info">
                    <h5>Not here? Tell us what we're missing.</h5>
                    <p>If the business you're looking for isn't here, add it!</p>
                    <button
                        className="btn btn-sm btn-primary sb-btn"
                        data-toggle="modal"
                        data-target="#addBusinessModal">
                        Add a Business
                    </button>
                    <hr />
                    <p>Got search feedback? Help us improve.</p>
                </div>
            );
        }
    }
}

export default withRouter(SideBar);
