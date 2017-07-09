import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import { connect } from 'react-redux';

import { login } from '../../actions';

class LogIn extends Component{
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
        this.setState({loginStatus: ''});
        this.props.login(values);

        this.checkLoginStatus();
    }

    checkLoginStatus(){
        if(this.props.loginStatus.message === true){
            const { user } = this.props.loginStatus;
            sessionService.saveUser(user);
            sessionService.saveSession();
            this.props.history.push('/dashboard');
        }
        else if(this.props.loginStatus.message === false){
            document.getElementById("loginResponse").innerHTML="Log in failed, please check email and password.";
            document.getElementById("loginResponse").className = "error";
            window.setTimeout(() => {
                this.checkLoginStatus();
            }, 100 
         )
        }
        else{
            window.setTimeout(() => {
                this.checkLoginStatus();
            }, 100)
        }
    }s

    render(){
        const { handleSubmit, match, location, history } = this.props;

        return(
            <div className="loginContainer">
                <h3>Log in</h3>
                <p>Log in to your personal Dashboard.</p>
                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                    <Field
                        label="Email:"
                        name="email" 
                        type="email"
                        component={this.renderField} />

                    <Field
                        label="Password:"
                        name="password" 
                        type="password"
                        component={this.renderField} />

                    <button type="submit" className="btn btn-primary">Log In</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>

                <p id="loginResponse"></p>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    // Validate the inputs from the values object
    if(!values.email || values.email.length < 5){
        errors.email = "Enter a valid Email address";
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
    withRouter(connect(mapStateToProps, { login }) (LogIn))
);