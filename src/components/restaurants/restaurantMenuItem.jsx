import React, { Component } from 'react';

class MenuItem extends Component {
    render(){
        return (
            <div className="MenuItemContainer" id={ this.props.Id } >
                <div className="DisplayImageContainer">
                    <img className="menu-profile-picture" src="/src/static/images/noImage.jpg" alt="menu profile picture"/>
                </div>

                <div className="Menu-Information">
                    <p>Item: { this.props.name }</p>
                    <p>Description: { this.props.description }</p>
                    <select className="form-control"></select>
                </div>

                <div className="menu-price-info">
                    <span> QTY: <input type="number" className="qty-input" id={ `${this.props.Id}-select` } name="quantity" /></span>
                    <h3 className="right">--N/A--</h3>
                    <button className="btn btn-success btn-sm right">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default MenuItem;