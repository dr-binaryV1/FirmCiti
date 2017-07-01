import React,{ Component } from 'react';

const LobbyItem = (prop) => {
    return(
        <div className="lobby-item">
            <div className="display-picture">
                <img src={prop.img} alt={prop.alt} />
            </div>
            <div className="item-info">
                <h3>{prop.Name}</h3>
                <p>{prop.Desc}</p>
            </div>
        </div>
    );
};

export default LobbyItem;