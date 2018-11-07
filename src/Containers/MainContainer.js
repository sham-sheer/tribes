import React from 'react';
import axios from 'axios';
import EventCardContainer from './EventCardContainer.js';
import EventSearchBar from '../Components/EventSearchBar.js';
import pic from '../assets/download.png';

const DEFAULT_SEARCH_QUERY = 'HACK_BELGIUM';
export const EVENT_BRITE_SECURITY_TOKEN = 'GUOC2RZKKGQHHFMHXLON';

export class MainContainer extends React.Component {
  state = {
    events: [],
    activePage: 1,
    searchQuery: DEFAULT_SEARCH_QUERY
  }

  componentDidMount() {
    this.fetchEvents();
  }

  filterResults = (value) => {
    this.setState({
      searchQuery : value
    })
    this.fetchEvents();
  }

  fetchEvents = () => {
    axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=` + EVENT_BRITE_SECURITY_TOKEN + `&q=${this.state.searchQuery}`)
    .then(response => {
      console.log(response);
      this.setState({
        events: response.data.events,
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    let styleObj = { fontSize: 34, textAlign : 'left', marginRight: 670, color: "#067655" };
    let styleImg = { height: 50, width: 50 };

    return(
      <div className="container">

        {/*Navigation Container*/}
        <nav className="navbar navbar-light bg-light">
          <img src={pic} style={styleImg} alt=""></img>
            <h1 style={styleObj}>Tribes</h1>
            <EventSearchBar handleFilter={this.filterResults}/>
        </nav>

        {/*Event Cards Container*/}
        <div>
          <EventCardContainer events={this.state.events}/>
        </div>
      </div>
    );
  }
}
