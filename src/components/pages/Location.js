import React from 'react';
import '../../App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
// import Footer from '../Footer';

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 21.027763, lng: 105.834160}} 
        />
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Location() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_GOOGLE_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
}