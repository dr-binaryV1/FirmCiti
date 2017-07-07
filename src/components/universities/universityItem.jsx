import React from 'react';
import { Link } from 'react-router-dom';

const UniversityItem = (props) => {
    return (
        <div className="universityItem" key={ props.key }>
            <div className="DisplayImageContainer">
                <img className="profile-picture" src={ props.Img } alt={ props.Alt } />
                <div className="information">
                    <h5> { props.name }</h5>
                    <hr className="line-brightPink-left-sm" />
                    <p> { props.desc } </p>
                    <p> Address: { props.address } </p>
                    <p> Tel: { props.tel } </p>
                    <Link to={ `/universities/${props.id}` } className="blue-links">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default UniversityItem;