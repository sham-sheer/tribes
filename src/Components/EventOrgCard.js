import React from 'react';
import axios from 'axios';

import { EVENT_BRITE_SECURITY_TOKEN } from '../Containers/MainContainer';

export default class EventOrgCard extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    orgData : '',
  }

  componentDidMount() {
    const orgId = this.props.orgId;
    this.fetchOrgData(orgId);
  }

  fetchOrgData = orgId => {
    axios.get(`https://www.eventbriteapi.com/v3/organizers/${orgId}/?token=` + EVENT_BRITE_SECURITY_TOKEN)
    .then(response => {
      this.setState({
        orgData: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return(
      <div className="event-org-data-container card">
        <div className="event-org-header card-header">Organiser</div>
        <div className="event-org-body card-body">local chapter OWASP team</div>
      </div>
    );
  }
}
