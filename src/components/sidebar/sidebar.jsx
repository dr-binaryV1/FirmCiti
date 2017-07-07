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