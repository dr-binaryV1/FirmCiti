import React, { Component } from 'react';

class MenuItem extends Component {
    openModal(menu){
        console.log(menu.props.id);
    }

    render(){
        return (
            <div 
                className="MenuItemContainer" 
                id={ this.props.key } 
                onClick={ () => this.openModal(this) }>
                <h5> { this.props.name } </h5>
            </div>
        );
    }
}

export default MenuItem;