import React, { Component } from 'react';

class ReviewItem extends Component {
    render(){
        const date = new Date(this.props.date);
        const timeString = date.toLocaleTimeString();
        const dateString = date.toDateString();

        return (
            <div className="comment-item animated fadeIn" key={ this.props.key }>
                <div className="DisplayImageContainer">
                    <img className="comment-profile-picture" src="../src/static/images/noImage.jpg" alt="profile picture" />
                </div>
                <div className="comment-header left">Posted by: { this.props.name }</div>
                <div className="comment-header right">{dateString} { timeString }</div>
                <br /><hr /><br />
                <p className="left"><i>{ this.props.comment }</i></p>
                <br /><br />
            </div>
        );
    }
}

export default ReviewItem;