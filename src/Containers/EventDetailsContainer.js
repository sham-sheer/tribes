import React from 'react';
import axios from 'axios';
import moment from 'moment';

import { EVENT_BRITE_SECURITY_TOKEN } from './MainContainer';

import './EventDetailsContainer.css';


class EventDetailsContainer extends React.Component {
  state = {
    eventDescription: '',
    eventName: '',
    eventTimeZone: '',
    eventStartDate: '',
    eventEndDate: '',
    eventImageUrl: ''
  }
  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    this.fetchEventDetails(eventId);
  }

  fetchEventDetails = eventId => {
    axios.get(`https://www.eventbriteapi.com/v3/events/${eventId}/?token=` + EVENT_BRITE_SECURITY_TOKEN)
    .then(response => {
      this.setState({
        eventDescription: response.data.description.text,
        eventName: response.data.name.text,
        eventTimeZone: response.data.start.timezone,
        eventStartDate: response.data.start.local,
        eventEndDate: response.data.end.local,
        eventImageUrl: response.data.logo.url
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    const eventHeader = "Event Details";
    const eventName = this.state.eventName;
    const eventDescription = this.state.eventDescription;
    const eventTimeZone= this.state.eventTimeZone;
    const eventStartDate = this.state.eventStartDate;
    const eventEndDate = this.state.eventEndDate;
    const eventImageUrl = this.state.eventImageUrl;

    return(
      <div className="event-container">

        {/* Event Title Container */ }
        <div className="event-title jumbotron bg-light">
          <div className="event-name-container">
            <p className="event-name">{eventName}</p>
            <p className="event-date-time">
              {moment(eventStartDate).format('ddd, MMM DD, hh:mma')} to {moment(eventEndDate).format('ddd, MMM DD, hh:mma')}
            </p>
            <p className="lead event-time-zone">{eventTimeZone}</p>
          </div>
            <div className="event-image-container shadow p-3 mb-5 bg-white rounded">
              <img src={eventImageUrl} className="event-image" alt=""></img>
            </div>
        </div>

        {/* Event Description(Text) Container*/}
        <div className="event-description card shadow p-3 mb-5 bg-white rounded">
          <div className="event-details-header card-header bg-info text-white">{eventHeader}</div>
          <div className="event-details-body card-body text-left">{eventDescription}</div>
        </div>

        </div>
    );
  }
}

export default EventDetailsContainer;
