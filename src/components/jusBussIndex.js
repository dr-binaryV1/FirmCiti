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
                <LobbyItem 
                    Name="University" 
                    Desc="View Universities in your area. Check out locations and chill spots on campus and more." 
                    img="src/static/images/utech.jpg"
                    alt="University Image" 
                    url="#" />

                <LobbyItem 
                    Name="Restaurants" 
                    Desc="a place where people pay to sit and eat meals that are cooked and served on the premises." 
                    img="src/static/images/restaurant.jpg"
                    alt="Restaurant Image"
                    url="/restaurants" />

                <LobbyItem 
                    Name="Houses for Rent" 
                    Desc="an agreement where a payment is made for the temporary use of a good, service..." 
                    img="src/static/images/rentHouse.jpg"
                    alt="House for rent Image"
                    url="/houses" />

                <LobbyItem 
                    Name="Events" 
                    Desc="View upcoming events in your location, bookmark and add these events to your calendar." 
                    img="src/static/images/Upcoming-Events.jpg"
                    alt="Events Image"
                    url="#" />
            </div>
        );
    }
}

function mapStateToProps(state){
    return { university: state.university }
}

export default connect(mapStateToProps, { fetchUniverisity })(JusBussIndex);
