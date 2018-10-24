import React from 'react';
import './TribeEvent.css';
import PropTypes from 'prop-types';


const TribeEvent = ({ id, title, pic, status }) => {
  let profile_image;
  try {
    profile_image = <figure className="profile">
                            <img src={pic.url} />
                          </figure>;
  } catch {
    profile_image = <figure className="profile">
                            <img src="#"/>
                          </figure>;
  }

  const name = <a href="#" target="_blank">{title}</a>;


  return (
    <div className="card" >
        <div className="card-body">
        {profile_image}
          <h5 className="card-title">{title}</h5>
            <p className="card-text"></p>
              <a href="#" className="btn btn-primary">{status}</a>
        </div>
    </div>
  );
}

TribeEvent.propTypes = {
  pic: PropTypes.string.isRequired,
};


export default TribeEvent;
