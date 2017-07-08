import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { fetchSchool } from '../../actions';
import SchoolItem from './schoolItem';
import SideBar from '../sidebar/sidebar';

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
            <div>
                <div className="Container animated fadeIn">
                    <h3>Schools/Universities</h3>
                    <hr className="line-brightPink-left" />

                    { this.renderSchools() }
                </div>
                <div className="recommend animated fadeIn">
                    <SideBar loginStatus={ this.props.loginStatus }/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        schools: state.schools,
        loginStatus: state.loginStatus
    }
}

export default connect(mapStateToProps, { fetchSchool })(School);