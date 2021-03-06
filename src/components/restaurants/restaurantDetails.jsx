import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Rating from 'react-rating';

import { fetchRestaurantDetail, fetchRestaurantComments, postRestaurantComment } from '../../actions';
import SideBar from '../sidebar/sidebar';
import ReviewItem from '../reviews/reviewItem';
import MenuItem from './restaurantMenuItem';
import { Loader } from '../includes/loader';

class RestaurantDetail extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        //window.setInterval(() => this.props.fetchRestaurantDetail(id), 1000);
        this.props.fetchRestaurantDetail(id);
    }

    onSubmit(values){
        const { id } = this.props.match.params;
        this.props.postRestaurantComment(values, id);
    }

    renderMenu(restaurant){
        return _.map(restaurant.menu, menuItem => {
            return(
                <MenuItem
                    key={ menuItem._id }
                    Id={ menuItem._id }
                    name={ menuItem.name } 
                    description={ menuItem.description }
                    variations={ menuItem.variations }/>
            );
        });
    }

    renderComment(restaurant){
        if(restaurant.comments.length > 0){
            return _.map(restaurant.comments, comment => {
                return(
                    <ReviewItem
                        name={ comment.name }
                        comment={ comment.comment }
                        date={ comment.createdAt }
                        id={ comment._id }
                        key={ comment._id } />
                );
            });
        }

        if(restaurant.comments.length == 0){
            return (
              <p><i>No comments yet, be the first to comment on { `${restaurant.name}'s` } profile.</i></p>
            )
        }
    }

    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        if(field.type !== "textarea"){
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

        if(field.type === "textarea"){
            return(
                <div className = { className }>
                    <label>{ field.label }</label>
                    <textarea
                        className="form-control"
                        cols="20"
                        rows="5"
                        type={ field.type }
                        { ...field.input } />
                    <div className="text-help">
                        { touched ? error : '' }
                    </div>
                </div>
            );
        }
    }


    render(){
        const { restaurant, handleSubmit } = this.props;

        if(!restaurant){
            return (
                <div className="Container  animated fadeIn">
                    <Loader />
                </div>
            );
        }

        return(
            <div>
                <div className="Container  animated fadeIn">
                    <div className="left">
                        <div className="DisplayImageContainer">
                            <img className="profile-picture" src="../src/static/images/noImage.jpg" alt="profile picture" />
                        </div>
                        <div className="information">
                            <h2>{ restaurant.name }</h2>
                            <hr className="line-brightPink-left" />
                            <Rating
                                initialRate={ restaurant.rating } />
                            <p>{ restaurant.description }</p>
                            <p>Address: { restaurant.address } </p>
                            <p>Telephone: { restaurant.tel } </p>
                            <p>Open Hours: { `${restaurant.openTime}AM - ${restaurant.closeTime}PM` } </p>
                        </div>
                    </div>
                    <div className="restaurant-menu">
                        <h4>Menu</h4>
                        <hr className="line-brightPink-left-sm" />
                        { this.renderMenu(restaurant) }
                    </div>
                    <div className="restaurant-comment">
                        <h4>Reviews</h4>
                        <hr className="line-brightPink-left-sm" />
                        { this.renderComment(restaurant) }
                        <hr />
                        <form className="review-form" onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
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

                            <Field
                                label="Comment:"
                                name="comment"
                                type="textarea"
                                component={this.renderField} />
                            <br />

                            <button type="submit" className="btn btn-primary">Comment</button>
                        </form>
                    </div>
                </div>

                <div className="recommend animated fadeIn">
                   <SideBar loginStatus={ this.props.loginStatus }/>
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

    if(!values.comment){
        errors.comment = "Cannot submit an empty comment.";
    }

    return errors;
}

function mapStateToProps(state, ownProps) {
    return {
        restaurant: state.restaurants[ownProps.match.params.id],
        loginStatus: state.loginStatus
    }
}

export default reduxForm({
    form: 'CommentForm',
    validate
})(
    withRouter(connect(mapStateToProps, { fetchRestaurantDetail, fetchRestaurantComments, postRestaurantComment })(RestaurantDetail))
)
