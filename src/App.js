import React, { Component } from 'react';
import './App.css';
import { MainContainer } from './Containers/MainContainer';
import EventDetailsContainer from './Containers/EventDetailsContainer';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path={"/"} component={MainContainer} />
          <Route exact path={"/:eventId"} component={EventDetailsContainer} />
        </div>
       </BrowserRouter>
    )
  }
}

export default App;
