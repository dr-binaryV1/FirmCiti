import React from 'react';

export const CommentItem = (props) => {
    const date = new Date(props.date);
    const timeString = date.toLocaleTimeString();
    const dateString = date.toDateString();

    return (
        <div className="comment-item" key={ props.key }>
            <div className="DisplayImageContainer">
                 <img className="comment-profile-picture" src="../src/static/images/noImage.jpg" alt="profile picture" />
            </div>
            <div className="comment-header left">Posted by: { props.name }</div>
            <div className="comment-header right">{dateString} { timeString }</div>
            <br />
            <hr />
            <p><i>{ props.comment }</i></p>
            <button className="btn btn-primary btn-sm pull-right" >Reply</button>
        </div>
    );
}