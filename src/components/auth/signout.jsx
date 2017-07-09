import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sessionService } from 'redux-react-session';

import { signout } from '../../actions';

class SignOut extends Component{
    componentDidMount(){
        this.props.signout();
        sessionService.deleteSession();
        sessionService.deleteUser();
        this.props.history.push("/");
    }
    
    render(){
        return(
            <div>
                <p>Signed Out</p>
            </div>
        );
    }
}

export default withRouter(connect(null, { signout })(SignOut));