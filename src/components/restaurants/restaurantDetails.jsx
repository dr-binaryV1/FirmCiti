import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

import { fetchRestaurantDetail } from '../../actions';
import MenuItem from './restaurantMenuItem';

class RestaurantDetail extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchRestaurantDetail(id);
    }

    onSubmit(values){

    }

    renderMenu(restaurant){
        return _.map(restaurant.menu, menuItem => {
            return(
                <MenuItem
                    key={ menuItem._id }
                    id={ menuItem._id }
                    name={ menuItem.name } />
            );
        });
    }

    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return(
            <div className = { className }>
                <label>{ field.label }</label>
                <input
                    className="form-control"
                    type={ field.type }
                    { ...field.input } />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }
    
    render(){
        const { restaurant, handleSubmit } = this.props;

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
                <div className="left">
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
                        
                        <h5>Rate { restaurant.name }? </h5>
                        <Rating />
                    </div>
                </div>
                <div className="restaurant-menu">
                    <h4>Menu</h4>
                    <hr className="line-brightPink-left-sm" />
                    { this.renderMenu(restaurant) }
                </div>
                <div className="restaurant-comment">
                    <h4>Comments</h4>
                    <hr className="line-brightPink-left-sm" />
                    <p><i>No comments yet, be the first to comment on { restaurant.name }'s profile.</i></p>
                    <hr />
                    <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                        <Field
                            label="Name:"
                            name="name"
                            type="text"
                            component={this.renderField} />

                        <Field
                            label="Email:"
                            name="email"
                            type="email"
                            component={this.renderField} />

                        <label>Comment</label>
                        <textarea className="form-control" rows="5" cols="40" name="comment"></textarea>
                        <br />

                        <button type="submit" className="btn btn-primary">Comment</button>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.name || values.name.length < 3){
        errors.name = "Enter a valid name thats atleast 3 characters.";
    }

    if(!values.email || values.email.length < 5){
        errors.email = "Enter a valid Email address";
    }

    return errors;
}

function mapStateToProps({ restaurants }, ownProps) {
    return { restaurant: restaurants[ownProps.match.params.id] }
}

export default reduxForm({
    form: 'CommentForm',
    validate
})(
    connect(mapStateToProps, { fetchRestaurantDetail })(RestaurantDetail)
)