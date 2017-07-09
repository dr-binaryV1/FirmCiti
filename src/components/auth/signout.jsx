import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signout } from '../../actions';
import Loader from '../includes/loader';

class SignOut extends Component{
    componentDidMount(){
        this.props.signout();
        this.props.history.push("/");
    }
    
    render(){
        return(
            <div>
                <Loader />
            </div>
        );
    }
}

export default withRouter(connect(null, { signout })(SignOut));