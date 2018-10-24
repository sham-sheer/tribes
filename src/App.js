import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsContainer from './Containers/EventsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventsContainer />
      </div>
    );
  }
}

export default App;
