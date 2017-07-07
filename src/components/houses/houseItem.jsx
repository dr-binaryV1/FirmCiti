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
                    <span><h5 className="rent"> ${ props.price }</h5>
                        Status: {props.status}</span>
                    <Link to={ `/houses/${props.id}` } className="blue-links">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default HouseItem;