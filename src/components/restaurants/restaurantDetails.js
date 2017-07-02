import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { fetchRestaurantDetail } from '../../actions';

class RestaurantDetail extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchRestaurantDetail(id);
    }
    
    render(){
        const { restaurant } = this.props;

        if(!restaurant){
            return (
                <div className="Container">
                    <Link className="btn btn-primary" to="/restaurants">Back to Restaurants</Link>
                    <h4>Loading...</h4>
                </div>
            );
        }

        return(
            <div className="Container">
                <Link className="btn btn-primary" to="/restaurants">Back to Restaurants</Link>
                <div className="DisplayImageContainer">
                    <img className="profile-picture" src="../src/static/images/noImage.jpg" alt="profile picture" />
                </div>
                <div className="information">
                    <h2>{ restaurant.name }</h2>
                    <hr className="line-brightPink-left" />
                    <p>{ restaurant.description }</p>
                    <p>Address: { restaurant.address } </p>
                    <p>Telephone: { restaurant.tel } </p>
                    <p>Open Hours: { `${restaurant.openTime}AM - ${restaurant.closeTime}PM` } </p>
                    
                    <h5>Rate { restaurant.name } </h5>
                    <Rating />
                </div>
                <div className="restaurant-menu">
                    <h4>View Menu</h4>
                    <hr className="line-brightPink-left" />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ restaurants }, ownProps) {
    return { restaurant: restaurants[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchRestaurantDetail })(RestaurantDetail);