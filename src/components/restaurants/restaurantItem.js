import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = (props) => {
    return(
        <div className="restaurantItem" key={props.key}>
            <div className="DisplayImageContainer">
                <img className="profile-picture" src={ props.Img } alt={ props.Alt } />
            </div>
            <div className="information">
                <h4> { props.Name }</h4>
                <hr className="line-brightPink-left" />
                <p> { props.Desc } </p>
                <Link to={ `/restaurants/${props.Id}` } className="blue-links">View Details</Link>
            </div>
        </div>
    );
};

export default RestaurantItem;