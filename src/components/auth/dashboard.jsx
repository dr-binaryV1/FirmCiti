import React, { Component} from 'react';
import { connecet } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends Component {
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

export default connect(mapStateToProps, { })(Dashboard);