import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title, { flushTitle } from 'react-title-component';

import { fetchUniverisity } from '../actions';
import LobbyItem from './jusBussLobbyItem';

class JusBussIndex extends Component {
    componentDidMount(){
        this.props.fetchUniverisity();
        <Title render="JusBuss"/>
    }

    renderUniversity(){
        return _.map(this.props.university, university => {
            return(
                <li key={university._id}>
                    { university.name }
                </li>
            );
        });
    }

    render(){
        return(
            <div className="LobbyContainer">
                <LobbyItem Name="Restaurant" Desc="This works!!!"/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { university: state.university }
}

export default connect(mapStateToProps, { fetchUniverisity })(JusBussIndex);
