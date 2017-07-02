import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRestaurantDetail } from '../../actions';

class RestaurantDetail extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchRestaurantDetail(id);
    }
    
    render(){
        const { restaurant } = this.props;

        if(!restaurant){
            return <div>Loading...</div>
        }

        return(
            <div>
                <h2>{restaurant.name}</h2>
            </div>
        );
    }
}

function mapStateToProps({ restaurants }, ownProps) {
    return { restaurant: restaurants[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchRestaurantDetail })(RestaurantDetail);