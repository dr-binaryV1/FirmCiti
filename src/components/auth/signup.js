import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions';

class SignUp extends Component {
    render(){
        return (
            <div className="signupContainer">
                <h2>Log up to gain access to JusBuss Dashboard</h2>
                <p>Use dashboard to create, delete and update products/service information.</p>

            </div>
        );
    }
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