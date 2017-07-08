import React from 'react';
import { Link } from 'react-router-dom';

const LobbyItem = (props) => {
    return(
        <div className="lobby-item">
            <h3>{props.Name}</h3>
            <hr className="line-brightPink-left-sm" />
            <div className="display-picture">
                <img className="LobbyImage" src={props.img} alt={props.alt} />
            </div>
            <div className="information">
                <p>{props.Desc}</p>
                <br />
                <Link className="blue-links" to={props.url}>View Category</Link>
            </div>
        </div>
    );
};

export default LobbyItem;