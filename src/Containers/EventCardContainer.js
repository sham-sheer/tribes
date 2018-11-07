import React, { Component } from 'react';
import EventCard from '../Components/EventCard/EventCard';
import PropTypes from 'prop-types';

class EventCardContainer extends Component {
  render() {
    const allEventsObject = this.props.events;
    let tribeEvents = allEventsObject.map(event => {
      return <EventCard eventData={event}/>
    });

    return <div> {tribeEvents} </div>
  }
}

EventCardContainer.propTypes = {
  events: PropTypes.array
};

export default EventCardContainer;
