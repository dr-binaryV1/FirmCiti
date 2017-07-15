import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { sessionService } from 'redux-react-session';

import { signout } from '../../actions';

class SignOut extends Component{
    componentDidMount(){
        this.props.signout();
        sessionService.deleteSession();
        sessionService.deleteUser();
    }

    render(){
        return(
            <div className="animated fadeIn signout-container">
                <div className="signout-content">
                    <div className="signout-img">
                        <p><img className="signed-out-img" src="src/static/images/signedOut.jpg" alt="signout image" /></p>
                    </div>
                    <div className="signout-msg">
                        <h3>You just signed out. Please visit again</h3>
                        <p>To sign in again, please click <Link to="/authorize">here</Link>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, { signout })(SignOut));
