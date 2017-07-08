import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHouse } from '../../actions'
import { Loader } from '../includes/loader';

class HouseDetail extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchHouse(id);
    }

    render(){
        return(
            <div className="Container animated fadeIn">
                <Loader />
            </div>
        );
    }
}

function mapStateToProps(state){
    return { houses: state.houses }
}

export default connect(mapStateToProps, { fetchHouse })(HouseDetail)