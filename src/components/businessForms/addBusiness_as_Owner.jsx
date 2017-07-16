import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { fetchCategories, postBusiness } from '../../actions';

class AddBusinessAsOwner extends Component{
    componentDidMount(){
        this.props.fetchCategories();
    }

    renderCategories(categories){
        if(categories.length > 0){
            let categoriesField = document.getElementById('category');
            categoriesField.innerHTML = "<option id='selectCategory' value='selectCategory'>Select Category</option>";
            
            return _.map(categories, category => {
                categoriesField.innerHTML += "<option id="+ category._id + " value="+ category.name +">"+ category.name +"</option>";
            });
        }
    }

    onSubmit(values){
        this.props.postBusiness(values);
    }

    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        if(field.type === 'select'){
            return(
                <div className = { className }>
                    <label>{ field.label }</label>
                    <select
                        className="form-control"
                        id={ field.id }
                        { ...field.input }></select>
                    <div className="text-help">
                        { touched ? error : '' }
                    </div>
                </div>
            );
        }
        
        if(field.type !== 'textarea'){
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

        if(field.type === 'textarea'){
            return(
                <div className = { className }>
                    <label>{ field.label }</label>
                    <textarea
                        className="form-control"
                        rows="2"
                        { ...field.input }></textarea>
                    <div className="text-help">
                        { touched ? error : '' }
                    </div>
                </div>
            );
        }
    }
    
    render(){
        const { categories, handleSubmit } = this.props;

        return(
            <div className="Container animated fadeIn">
                <div className="add-business">
                    <h3>Add your Business</h3>
                    <hr className="line-brightPink-left" />
                    <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                        <Field
                            label="Name of Business:"
                            name="name"
                            type="text"
                            component={ this.renderField } />

                        <Field
                            label="Description:"
                            name="description"
                            type="textarea"
                            component={ this.renderField } />

                        <Field
                            label="Address:"
                            name="address"
                            type="textarea"
                            component={ this.renderField } />

                        <Field
                            label="Telephone:"
                            name="tel"
                            type="tel"
                            component={ this.renderField } />

                        <Field
                            label="Select business category:"
                            name="category"
                            id="category"
                            type="select"
                            component={ this.renderField } />

                        { this.renderCategories(categories) }
                        <br />

                        <Field
                            label="Open Time:"
                            name="openTime"
                            type="number"
                            component={ this.renderField } />

                        <Field
                            label="Close Time:"
                            name="closeTime"
                            type="number"
                            component={ this.renderField } />

                        <button className="btn btn-primary btn-sm" type="submit">Add Business</button>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.name){
        errors.name = "Business name is required";
    }

    if(!values.description){
        errors.description = "Description for business is required";
    }

    if(!values.address){
        errors.address = "Address field is required";
    }

    if(!values.tel){
        errors.tel = "Telephone information is required";
    }

    if(!values.category || values.category == "selectCategory"){
        errors.category = "Please select a category";
    }

    if(!values.openTime){
        errors.openTime = "Open hours is required";
    }

    if(!values.closeTime){
        errors.closeTime = "Close hours is required";
    }

    return errors;
}

function mapStateToProps(state){
    return {
        categories: state.categories,
        addBusinessStatus: state.addBusinessStatus
    }
}

export default reduxForm({
    form: 'AddBusiness',
    validate
}) (
    connect(mapStateToProps, { fetchCategories, postBusiness }) (AddBusinessAsOwner)
);