import React, { Component } from 'react';
import EventCard from './EventCard/EventCard';

class EventCardContainer extends Component {
  render() {
    const allEventsObject = this.props.events;
    let tribeEvents = allEventsObject.map(event => {
      return <EventCard eventData={event}/>
    });

    return <div> {tribeEvents} </div>
  }
}

export default EventCardContainer;
