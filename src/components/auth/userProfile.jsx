import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends Component {
    componentDidMount(){

    }

    render(){
        return(
            <div>

            </div>
        );  
    }
}

function mapStateToProps(state){
    return { session: state.session }
}

export default connect(mapStateToProps, { })(UserProfile);