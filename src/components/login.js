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
                    type={field.type}
                    {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.login(values);

        this.checkLoginStatus();
    }

    checkLoginStatus(){
        if(this.props.loginStatus === "success"){
            this.props.history.push('/dashboard');
        }
        else if(this.props.loginStatus === "fail"){
            document.getElementById("response").innerHTML="Log in failed, please check email and password.";
        }
        else{
            window.setTimeout(() => {
                this.checkLoginStatus();
            }, 100 
         )
        }
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="loginContainer">
                <h2>Log in to JusBuss Dashboard</h2>
                <p>Use dashboard to create, delete and update products/service information.</p>
                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                    <Field
                        label="Username / Email:"
                        name="email" 
                        type="text"
                        component={this.renderField} />

                    <Field
                        label="Password:"
                        name="password" 
                        type="password"
                        component={this.renderField} />

                    <button type="submit" className="btn btn-primary">Log In</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>

                <p id="response" className="has-danger"></p>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    // Validate the inputs from the values object
    if(!values.email || values.email.length < 5){
        errors.email = "Enter a title that is atleast 5 characters!";
    }

    if(!values.password || values.password.length < 5){
        errors.password = "Enter a strong password thats more than 5 characters!";
    }
    return errors;
}

function mapStateToProps(state){
    return { loginStatus: state.loginStatus }
}

export default reduxForm({
    form: 'LogInForm',
    validate
})(
    connect(mapStateToProps, { login }) (LogIn)
);