import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';


import './EventCard.css';
import _ from 'lodash';


const EventCard = ({ eventData }) => {
  console.log(eventData);
  const startDate = eventData.start.local;
  const endDate = eventData.end.local;

  console.log(moment(endDate).format('MMMM Do YYYY'));
  const eventName = eventData.name.text;
  const thumbnailImageSrc = eventData.logo == null ? "#" : eventData.logo.url;
  const eventId = eventData.id;

  return (
    <div className="tribe-event-card-container">
      <div className="thumbnail-image-container">
        <figure className="thumbnail-image">
          <img src={thumbnailImageSrc} alt=""/>
        </figure>
      </div>
      <div className="card-content-container">
        <div className="date-thumbnail-container">
          <div className="date-thumbnail-month">{_.toUpper(moment(startDate).format('MMM'))}</div>
          <div className="date-thumbnail-day">{moment(startDate).format('DD')}</div>
        </div>
        <div className="event-content-container">
          <NavLink className="link-to-event-details" to={`/${eventId}`} >
              <div className="event-name">{eventName}</div>
          </NavLink>
          <div className="event-date-time">{moment(startDate).format('ddd, MMM DD, hh:mma')}</div>
          <div className="event-location">135 West San Carlos Street, San Jose, CA 95113</div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

EventCard.propTypes = {
  eventData: PropTypes.array
}
