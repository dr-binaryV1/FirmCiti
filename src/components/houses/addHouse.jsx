import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class AddHouse extends Component {
    onSubmit(){

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
        const { handleSubmit } = this.props;

        return (
            <div className="Container animated fadeIn">
                <h3>Add House</h3>
                <hr className="line-brightPink-left " />
                <form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label="First Name:"
                        name="firstname"
                        component={this.renderField} />

                    <button type="submit" className="btn btn-sm btn-primary">Add House</button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.firstname || values.firstname < 3) {
        errors.firstname = "Please enter a valid first name that has more than 3 characters."
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        addRestaurantStatus: state.addRestaurantStatus,
        session: state.session
    }
}

export default  reduxForm({
    form: 'AddHouse',
    validate
})(
    withRouter(connect(mapStateToProps, {  })(AddHouse))
);