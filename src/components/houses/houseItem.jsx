import React from 'react';
import { Link } from 'react-router-dom';

const HouseItem = (props) => {
    return(
        <div className="houseItem" key={props.key}>
            <div className="DisplayImageContainer">
                <img className="profile-picture" src={ props.Img } alt={ props.Alt } />
            
                <div className="information">
                    <h4> { props.name }</h4>
                    <hr className="line-brightPink-left-sm" />
                    <p> { props.address } </p>
                    <p> Tel: { props.tel } </p>
                    <p> <span className="rent">${ props.price }</span> / {props.status}</p>
                    <Link to={ `/rentals/${props.Id}` } className="blue-links">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default HouseItem;