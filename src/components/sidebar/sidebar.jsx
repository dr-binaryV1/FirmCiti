import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Appointment from './appointment';

class SideBar extends Component{
    writeReview(){
        if(this.props.session.authenticated !== true){
            this.props.history.push('/authorize');
        }
    }

    addBusiness(){
        if(this.props.session.authenticated !== true){
            this.props.history.push('/authorize');
        }

        if(this.props.session.authenticated === true){
            this.props.history.push('/add-business-owner');
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
                        onClick={ this.addBusiness.bind(this) }>
                        Add a Business
                    </button>
                    <hr />
                    <p>Got search feedback? Help us improve.</p>
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return {
        session: state.session
    }
}

export default withRouter(connect(mapStateToProps, { })(SideBar));
