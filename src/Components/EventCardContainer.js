import React, { Component } from 'react';
import TribeEvent from './TribeEvent';
import _ from 'lodash';

class EventCardContainer extends Component {
  render() {
    const allEventsObject = this.props.events;

    // parse eventsObject and create a list of tribeEvents
    let tribeEvent = allEventsObject.map(event => {
      return <TribeEvent
        title={event.name.text}
        id={event.id}
        pic={event.url == null ? "#" : event.logo}
        status={_.capitalize(event.status)}
      />
    });

    return <div> {tribeEvent} </div>
  }
}

export default EventCardContainer;
