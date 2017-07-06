import React, { Component } from 'react';
import { fetchUniverisity } from '../../actions';
import { connect } from 'react-redux';

class University extends Component{
    componentDidMount(){
        this.props.fetchUniverisity();
    }

    render(){
        return(
            <div></div>
        );
    }
}

function mapStateToProps(state){
    return { university: state.university }
}

export default connect(mapStateToProps, { fetchUniverisity })(University);