import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchSchool } from '../../actions';
import SchoolItem from './schoolItem';

class School extends Component{
    componentDidMount(){
        this.props.fetchSchool();
    }

    renderSchools(){
        return _.map(this.props.schools, school => {
            return(
                <SchoolItem
                    key={ school._id }
                    Img = "src/static/images/utech.jpg"
                    id={ school._id }
                    name={ school.name }
                    desc={ school.description }
                    address={ school.address }
                    tel={ school.tel } />
            );
        });
    }

    render(){
        return(
            <div className="Container animated fadeIn">
                <h3>Schools/Universities</h3>
                <hr className="line-brightPink-left" />

                { this.renderSchools() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return { schools: state.schools }
}

export default connect(mapStateToProps, { fetchSchool })(School);