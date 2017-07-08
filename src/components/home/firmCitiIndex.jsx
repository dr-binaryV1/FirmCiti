import _ from 'lodash';
import React, { Component } from 'react';
import Title, { flushTitle } from 'react-title-component';

import LobbyItem from './firmCitiLobbyItem';

class JusBussIndex extends Component {
    componentDidMount(){
        <Title render="FirmCiti"/>
    }

    render(){
        return(
            <div className="Container animated fadeIn">
                <LobbyItem 
                    Name="Schools/Universities" 
                    Desc="View Universities in your area. Check out locations and chill spots on campus and more." 
                    img="src/static/images/utech.jpg"
                    alt="University Image" 
                    url="/schools" />

                <LobbyItem 
                    Name="Restaurants" 
                    Desc="a place where people pay to sit and eat meals that are cooked and served on the premises." 
                    img="src/static/images/restaurant.jpg"
                    alt="Restaurant Image"
                    url="/restaurants" />

                <LobbyItem 
                    Name="Rooms for Rent" 
                    Desc="an agreement where a payment is made for the temporary use of a good, service..." 
                    img="src/static/images/rentHouse.jpg"
                    alt="House for rent Image"
                    url="/houses" />

                <LobbyItem 
                    Name="Events" 
                    Desc="View upcoming events in your location, bookmark and add these events to your calendar." 
                    img="src/static/images/Upcoming-Events.jpg"
                    alt="Events Image"
                    url="/events" />
            </div>
        );
    }
}

export default JusBussIndex;
