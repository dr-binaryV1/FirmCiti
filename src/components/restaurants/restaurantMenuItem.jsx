import React from 'react';

export const MenuItem = (props) => {
    return (
        <div className="MenuItemContainer">
            <h5 id={ props.key }> {props.name } </h5>
        </div>
    );
}