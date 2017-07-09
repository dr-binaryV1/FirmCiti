import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends Component {
    componentDidMount(){

    }

    render(){
        const { session } = this.props;
        return(
            <div className="profileContainer">
                <div className="basic-info">
                    <div className="user-photo left">
                        <img className="profile-picture" src="/../src/static/images/noImage.jpg" alt="" />
                    </div>
                    <div className="user-info left">
                        <h4>{ `${session.user.first_name} ${session.user.last_name} (${session.user.username})` }</h4>
                        <hr />
                        <p>Email: { session.user.email } </p>
                        <p>Phone: { session.user.phone } </p>
                        <br />
                    </div>
                </div>
                <hr />

                <div className="user-business">
                    <h4>Business</h4>
                    <p><i>No business added yet.</i></p>
                </div>
                <hr />

                <div className="user-reviews">
                    <h4>Reviews</h4>
                    <p><i>No reviews posted yet.</i></p>
                </div>
                 <hr />

                <div className="user-order">
                    <h4>Orders</h4>
                    <p><i>No order made yet.</i></p>
                </div>
            </div>
        );  
    }
}

function mapStateToProps(state){
    return { session: state.session }
}

export default connect(mapStateToProps, { })(UserProfile);