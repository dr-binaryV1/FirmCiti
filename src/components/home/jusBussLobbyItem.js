import React from 'react';
import { Link } from 'react-router-dom';

const LobbyItem = (props) => {
    return(
        <div className="lobby-item">
            <h3>{props.Name}</h3>
            <div className="display-picture">
                <img className="LobbyImage" src={props.img} alt={props.alt} />
            </div>
            <div className="item-info">
                <p>{props.Desc}</p>

                <Link className="readMore" to="/restaurants">View Category</Link>
            </div>
        </div>
    );
};

export default LobbyItem;