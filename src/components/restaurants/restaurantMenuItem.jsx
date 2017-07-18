import React, { Component } from 'react';

//TODO Make Responsive
class MenuItem extends Component {
    renderVariations(){
        let sizeSelect = document.getElementById(`${this.props.Id}_size`);
        if(sizeSelect){
            sizeSelect.innerHTML = "";
            return _.map(this.props.variations, variant => {
                sizeSelect.innerHTML += "<option id="+ variant._id + ">"+ variant.size +"</option>";
            });
        }
    }
    
    render(){
        return (
            <div className="MenuItemContainer" id={ this.props.Id } >
                <div className="DisplayImageContainer">
                    <img className="menu-profile-picture" src="/src/static/images/noImage.jpg" alt="menu profile picture"/>
                </div>

                <div className="Menu-Information">
                    <p>Item: { this.props.name }</p>
                    <p>Description: { this.props.description }</p>
                    <label>Meal sizes:</label>
                    <select id={ `${this.props.Id}_size` } className="form-control"></select>
                    { this.renderVariations() }
                </div>

                <div className="menu-price-info">
                    <span> QTY: <input type="number" className="qty-input" id={ `${this.props.Id}-variant` } name="quantity" /></span>
                    <h3 className="right">--N/A--</h3>
                    <button className="btn btn-success btn-sm right">Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default MenuItem;