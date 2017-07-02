import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions';

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

    onSubmit(values){
        //this.signup(values);
        console.log('clicked');
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="signupContainer">
                <h3>Sign up to gain access to the Dashboard</h3>
                <p>Use dashboard to create, delete and update products/service information.</p>

                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
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
                        name="tel"
                        type="phone"
                        component={ this.renderField } />

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

                    <br />
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
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

    if(!values.tel || values.tel.length < 7){
        errors.tel = "Enter a valid phone #";
    }

    if(!values.password || values.password.length < 5){
        errors.password = "Please enter a strong password thats atleast 5 characters.";
    }

    if(values.password !== values.conform_password){
        errors.confirm_password = "Passwords Mismatch";
    }

    return errors;
}

function mapStateToProps(state){
    return { signupStatus: state.signupStatus }
}

export default reduxForm({
    form: 'SignUpForm',
    validate
})(
    connect(mapStateToProps, { signup }) (SignUp)
);