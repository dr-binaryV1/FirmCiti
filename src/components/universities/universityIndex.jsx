import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchUniverisity } from '../../actions';
import UniversityItem from './universityItem';

class University extends Component{
    componentDidMount(){
        this.props.fetchUniverisity();
    }

    renderUniverity(){
        console.log('here');
        return _.map(this.props.universities, university => {
            return(
                <UniversityItem
                    key={ university._id }
                    name={ university.name } />
            );
        });
    }

    render(){
        return(
            <div>
                { this.renderUniverity() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return { universities: state.universities }
}

export default connect(mapStateToProps, { fetchUniverisity })(University);