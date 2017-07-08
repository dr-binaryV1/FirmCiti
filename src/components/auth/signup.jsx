import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signup } from '../../actions';
import { login } from '../../actions';

class SignUp extends Component {
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

    checkSignupStatus(){
        if(this.props.signupStatus === true){
            document.getElementById("signUpResponse").innerHTML="Account Successfully created with FirmCiti. Check email to activate Account.";
            document.getElementById("signUpResponse").className="success";
        } else if(this.props.signupStatus === false){
            document.getElementById("signUpResponse").innerHTML="There was an issue signing you up to the system. Please try again later.";
            document.getElementById("signUpResponse").className="error";
        } else{
            window.setTimeout(() => {
                this.checkSignupStatus();
            }, 100)
        }
    }

    onSubmit(values){
        this.props.signup(values);

        this.checkSignupStatus();
    
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="signupContainer">
                <h3>Sign up to gain access to the Dashboard</h3>
                <p>Use dashboard to create, delete and update products/service information.</p>

                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                    <div className="form-elements-container">
                        <div className="left-item">
                            <Field
                                label="First Name:"
                                name="first_name"
                                type="text"
                                component={ this.renderField } />
                        </div>

                        <div className="right-item">
                            <Field
                                label="Last Name:"
                                name="last_name"
                                type="text"
                                component={ this.renderField } />
                        </div>
                    </div>

                    <Field
                        label="Username:"
                        name="username"
                        type="text"
                        component={ this.renderField } />

                    <Field
                        label="Email:"
                        name="email"
                        type="email"
                        component={ this.renderField } />

                    <Field
                        label="Phone:"
                        name="phone"
                        type="phone"
                        component={ this.renderField } />

                    <div className="form-elements-container">
                        <div className="left-item">
                            <Field
                                label="Password:"
                                name="password"
                                type="password"
                                component={ this.renderField } />
                        </div>

                        <div className="right-item">
                            <Field
                                label="Confirm Password:"
                                name="confirm_password"
                                type="password"
                                component={ this.renderField } />
                        </div>
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                    <p id="signUpResponse"></p>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.first_name || values.first_name.length < 3){
        errors.first_name = "Please enter a valid first name.";
    }

    if(!values.last_name || values.last_name.length < 3){
        errors.last_name = "Please enter a valid last name.";
    }

    if(!values.username || values.username.length < 3){
        errors.username = "Enter a valid username that is atleast 3 characters.";
    }

    if(!values.email || values.email.length < 10){
        errors.email = "Enter a valid email address.";
    }

    if(!values.phone || values.phone.length < 7){
        errors.phone = "Enter a valid phone #";
    }

    if(!values.password || values.password.length < 5){
        errors.password = "Please enter a strong password thats atleast 5 characters.";
    }

    if(!values.confirm_password){
        errors.confirm_password = "Please enter value to compare passwords.";
    }

    if(values.password !== values.confirm_password){
        errors.confirm_password = "Passwords Mismatch";
    }

    return errors;
}

function mapStateToProps(state){
    return { 
        signupStatus: state.signupStatus,
        loginStatus: state.loginStatus
    }
}

export default reduxForm({
    form: 'SignUpForm',
    validate
})(
    connect(mapStateToProps, { signup, login }) (SignUp)
);