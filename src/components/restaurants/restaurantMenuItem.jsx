import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addToCart } from '../../actions';

//TODO Make Responsive
class MenuItem extends Component {
    renderVariations(){
        let sizeSelect = document.getElementById(`${this.props.Id}_size`);
        if(sizeSelect){
            sizeSelect.innerHTML = "<option>Select Size</option>";
            return _.map(this.props.variations, variant => {
                sizeSelect.innerHTML += "<option value="+ variant.price +" id="+ variant._id + ">"+ variant.size +"</option>";
            });
        }
    }   

    sizeChanged(e){
        let price = e.target.options[e.target.selectedIndex].value;
        let priceLabel = document.getElementById(`${this.props.Id}_price`);
        let qty = document.getElementById(`${this.props.Id}_qty`);
        
        priceLabel.innerHTML= `$${price}`;
        priceLabel.value = price;
        qty.value = 1;
    }

    quantityChanged(){
        let qty = document.getElementById(`${this.props.Id}_qty`).value;
        let cost = document.getElementById(`${this.props.Id}_size`).value;

        if(parseInt(qty) < 1) {
            document.getElementById(`${this.props.Id}_qty`).value = 1;

            document.getElementById(`${this.props.Id}_price`).innerHTML = `$${cost * 1}`;
            document.getElementById(`${this.props.Id}_price`).value = cost * 1;
        }

        if(cost !== "Select Size" && parseInt(qty) > 0){
            document.getElementById(`${this.props.Id}_price`).innerHTML = `$${cost * qty}`;
            document.getElementById(`${this.props.Id}_price`).value = cost * qty;
        }
    }

    addToCart(){
        let qty = document.getElementById(`${this.props.Id}_qty`).value;
        let finalPrice = document.getElementById(`${this.props.Id}_price`).value;
        let sizesControl = document.getElementById(`${this.props.Id}_size`);
        let sizeLabel = sizesControl.options[sizesControl.selectedIndex].innerHTML;

        if(sizeLabel !== "Select Size"){
            const userId = this.props.session.user._id;

            // Getting Restaurant ID from the URL parameter
            const { id } = this.props.match.params

            let item = {
                'companyId': id,
                'name': this.props.name,
                'description': this.props.description,
                'quantity': parseInt(qty),
                'price': finalPrice,
            }

            // Add to cart once everything is checked
            // this.props.addToCart(item, userId);
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
                    <select onChange={ (e) => this.sizeChanged(e) } id={ `${this.props.Id}_size` } className="form-control"></select>
                    { this.renderVariations() }
                </div>

                <div className="menu-price-info">
                    <span><input placeholder="QTY" onChange={ this.quantityChanged.bind(this) } type="number" className="qty-input" id={ `${this.props.Id}_qty` } name="quantity" /></span>
                    <h3 className="right-clear price" id={ `${this.props.Id}_price` }>--N/A--</h3>
                    <button className="btn btn-success btn-sm right-clear" onClick={ this.addToCart.bind(this) }>Add to Cart</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        addToCartStatus: state.addToCartStatus,
        session: state.session
    }
}

export default withRouter(connect(mapStateToProps, { addToCart }) (MenuItem));