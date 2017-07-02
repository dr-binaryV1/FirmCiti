import React, { Component } from 'react';
import Construction from './construction';
import Title, { flushTitle } from 'react-title-component';
import { connect } from 'react-redux';

import { fetchRestaurant } from '../actions';
import RestaurantItem from './restaurantItem';

class Restaurant extends Component{
    componentDidMount(){
        <Title render="JusBuss | Restaurants"/>
        this.props.fetchRestaurant();
    }

    renderRestaurants(){
        return _.map(this.props.restaurants, restaurant => {
            return (
                <RestaurantItem
                    Name = { restaurant.name }
                    Desc = { restaurant.description }
                    Address = { restaurant.address }
                    Tel = { restaurant.tel }
                    OpenClose = { `${restaurant.openTime}AM - ${restaurant.closeTime}PM`}
                    Img = "src/static/images/noImage.jpg" />
            );
        });
    }

    render(){
        return(
            <div className="Container">
                { this.renderRestaurants() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return { restaurants: state.restaurants };
}

export default connect(mapStateToProps, { fetchRestaurant })(Restaurant);
