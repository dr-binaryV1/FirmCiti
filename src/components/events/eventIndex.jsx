import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchEvents } from '../../actions';
import { EventItem } from './eventItem';

class Event extends Component {
    componentDidMount(){
        this.props.fetchEvents();
    }

    renderEvents(){
        return _.map(this.props.events, event => {
            return (
                <EventItem 
                    key={ event._id }
                    Id={ event._id }
                    Name={ event.name }
                    Time={ event.time }
                    Date={ event.date }
                    Admission={ event.admission }
                    Tel={ event.tel }
                    Img = "src/static/images/Upcoming-Events.jpg"
                    Address={ event.address } />
            )
        });
    }

    render(){
        return (
            <div className="Container animated fadeIn">
                <h3>Events</h3>
                <hr className="line-brightPink-left" />

                { this.renderEvents() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return { events: state.events }
}

export default connect(mapStateToProps, { fetchEvents })(Event);