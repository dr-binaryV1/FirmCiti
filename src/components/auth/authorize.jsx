import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import LogIn from './login';
import SignUp from './signup';

class Auth extends Component {
    componentDidUpdate(){
        if(this.props.session.authenticated === true){
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="AuthContainer animated fadeIn">
                <h2>Get Authenticated or Join the JusBuss Environment!</h2>
                <hr className="line-brightPink-left" />
                <div className="LogInAuthContainer">
                    <LogIn />
                </div>

                <div className="SignUpAuthContainer">
                    <SignUp />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        session: state.session
    }
}

export default withRouter(connect(mapStateToProps, {  }) (Auth));