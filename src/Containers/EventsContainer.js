import React from 'react';
import axios from 'axios';
import List from '../Components/List.js';
import SearchBar from '../Components/SearchBar.js';
import pic from './download.png';



class EventsContainer extends React.Component {
  state = {
    events: [],
    activePage: 1,
    searchQuery: ''
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
    axios.get(`https://www.eventbriteapi.com/v3/events/search/?token=GUOC2RZKKGQHHFMHXLON&q=${this.state.searchQuery}`)
    .then(resp => {
      console.log(resp)
      this.setState({
        events: resp.data.events,
      });
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    let styleobj = { fontSize: 34, textAlign : 'left', marginRight: 670, color: "#067655" };
    let styleImg = { height: 50, width: 50 };
    return(
      <div className="container">
        <nav className="navbar navbar-light bg-light">
        <img src={pic} style={styleImg}></img>
          <h1 style={styleobj}>tribes</h1>
          <SearchBar handleFilter={this.filterResults} />
        </nav>
        <div><List data={this.state.events} /></div>
      </div>);
  }
}

export default EventsContainer;
