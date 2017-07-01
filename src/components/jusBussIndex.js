import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUniverisity } from '../actions';

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
            <div>
                <ul>
                    { this.renderUniversity() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { university: state.university }
}

export default connect(mapStateToProps, { fetchUniverisity })(JusBussIndex);
