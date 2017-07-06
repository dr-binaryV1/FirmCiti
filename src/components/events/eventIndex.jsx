import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions';

class Event extends Component {
    componentDidMount(){
        this.props.fetchEvents();
    }

    render(){
        return (
            <div></div>
        );
    }
}

function mapStateToProps(state){
    return { events: state.events }
}

export default connect(mapStateToProps, { fetchEvents })(Event);