import React, { Component } from 'react';
import Title, { flushTitle } from 'react-title-component';
import { connect } from 'react-redux';

import { fetchRestaurants } from '../../actions';
import RestaurantItem from './restaurantItem';
import Map from '../sidebar/map';

class Restaurant extends Component{
    componentDidMount(){
        <Title render="JusBuss | Restaurants"/>
        this.props.fetchRestaurants();
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
                    Id = { restaurant._id }
                    Img = "src/static/images/noImage.jpg"
                    rate = { restaurant.rating }
                    key = { restaurant._id } />
            );
        });
    }

    render(){
        return(
            <div>
                <div className="Container animated fadeIn">
                    <h3>Restaurants</h3>
                    <hr className="line-brightPink-left" />
                    <div className="filterRestaurant">
                        <div  className="left-item"><label>Filter Restaurants</label></div>
                        <div  className="right-item">
                            <select className="form-control">
                                <option id="all">All</option>
                                <option id="chinese">Chinese</option>
                                <option id="indian">Indian</option>
                                <option id="jamaican">Jamaica</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    { this.renderRestaurants() }
                </div>

                <div className="recommend animated fadeIn">
                    <Map type="Restaurant" item={this.props.restaurants}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { restaurants: state.restaurants };
}

export default connect(mapStateToProps, { fetchRestaurants })(Restaurant);
