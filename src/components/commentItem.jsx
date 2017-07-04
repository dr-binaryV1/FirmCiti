import React, { Component } from 'react';

class CommentItem extends Component {
    onClick(reply){
        document.getElementById(reply.props.id).style.display = "block";
    }

    render(){
        const date = new Date(this.props.date);
        const timeString = date.toLocaleTimeString();
        const dateString = date.toDateString();

        return (
            <div className="comment-item" key={ this.props.key }>
                <div className="DisplayImageContainer">
                    <img className="comment-profile-picture" src="../src/static/images/noImage.jpg" alt="profile picture" />
                </div>
                <div className="comment-header left">Posted by: { this.props.name }</div>
                <div className="comment-header right">{dateString} { timeString }</div>
                <br />
                <hr />
                <p><i>{ this.props.comment }</i></p>
                <div><textarea id={ this.props.id } className="form-control animated fadeIn" cols="10" rows="2" placeholder="Write a comment..." /></div>
                <div><button onClick={ () => this.onClick(this) } className="btn btn-primary btn-sm pull-right" >Reply</button></div>
            </div>
        );
    }
}

export default CommentItem;