import React, { Component } from 'react';
import TribeEvent from './TribeEvent';

class List extends Component {
  render() {
    const results = this.props.data;
    let tribeEvent = results.map(event => {
      return event.url != null ?
        <TribeEvent title={event.name.text}
                    id={event.id}
                    pic={event.logo}
                    status={event.status}
        />
        :
        <TribeEvent title={event.name.text}
                    id={event.id}
                    pic="#"
                    status={event.status}
        />
      }
    );
    return(
      <div>
          {tribeEvent}
      </div>
    );
  }
}

export default List;
