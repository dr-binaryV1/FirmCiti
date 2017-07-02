import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

class LogIn extends Component{
    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className = { className }>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(){
        console.log('Form submitted');
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="loginContainer">
                <h2>Log in to JusBuss Dashboard</h2>
                <p>Use dashboard to create, delete and update products/service information.</p>
                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                    <Field
                        label="Username:"
                        name="username" 
                        component={this.renderField} />

                    <Field
                        label="Password:"
                        name="password" 
                        component={this.renderField} />

                    <button type="submit" className="btn btn-primary">Log In</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    // Validate the inputs from the values object
    if(!values.username || values.username.length < 5){
        errors.username = "Enter a title that is atleast 5 characters!";
    }

    if(!values.password || values.password.length < 5){
        errors.password = "Enter a strong password thats more than 5 characters!";
    }
    return errors;
}

export default reduxForm({
    form: 'LogInForm',
    validate
})(
    connect(null, { login }) (LogIn)
);