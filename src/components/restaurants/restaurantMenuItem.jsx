import React, { Component } from 'react';

class MenuItem extends Component {
    openModal(menu){
        document.getElementById('myModalLabel').innerHTML = menu.props.name;
        document.getElementById('modal-body')
            .innerHTML = menu.props.id;
    }

    render(){
        return (
            <div 
                className="MenuItemContainer" 
                id={ this.props.key } 
                onClick={ () => this.openModal(this) }
                data-toggle="modal" data-target="#myModal">
                <h5> { this.props.name } </h5>
            </div>
        );
    }
}

export default MenuItem;