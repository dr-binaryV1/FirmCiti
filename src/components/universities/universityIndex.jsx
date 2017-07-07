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
        return _.map(this.props.universities, university => {
            return(
                <UniversityItem
                    key={ university._id }
                    Img = "src/static/images/utech.jpg"
                    id={ university._id }
                    name={ university.name }
                    desc={ university.description }
                    address={ university.address }
                    tel={ university.tel } />
            );
        });
    }

    render(){
        return(
            <div className="Container animated fadeIn">
                <h3>Universities</h3>
                <hr className="line-brightPink-left" />

                { this.renderUniverity() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return { universities: state.universities }
}

export default connect(mapStateToProps, { fetchUniverisity })(University);