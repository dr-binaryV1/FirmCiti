import React from 'react';
import { Link } from 'react-router-dom';

export const EventItem = (props) => {
    var Admission;

    if(props.Admission === "0"){
         Admission = "FREE";
    } else {
        Admission = `$${props.Admission}`;
    }

    return(
        <div className="eventItem" key={ props.key }>
            <div className="DisplayImageContainer">
                <img className="profile-picture" src={ props.Img } alt={ props.Alt } />
            
                <div className="information">
                    <h5> { props.Name }</h5>
                    <hr className="line-brightPink-left-sm" />
                    <p> Address: { props.Address } </p>
                    <p> { props.Date } starting { props.Time } </p>                    
                    <h5 className="admission"> { Admission } </h5>
                    <Link to={ `/events/${props.Id}` } className="blue-links">View Details</Link>
                </div>
            </div>
        </div>
    );
}