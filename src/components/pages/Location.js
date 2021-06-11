import React, {useState} from 'react';
import '../../App.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";
// import Footer from '../Footer';
import * as shopsData from "../../data/coffeeshop-location.json";
import mapStyle from "../mapStyle"
import Footer from '../Footer';
import CardsLocation from '../CardsLocation';

function Map() {
  const  [selectedShop, setSelectedShop] = useState(null);

    return (
      <>
        <GoogleMap 
            defaultZoom={13} 
            defaultCenter={{ lat: 21.027763, lng: 105.834160}}
            defaultOptions={{ styles : mapStyle}} 
        >
          {shopsData.features.map(coffeeshop => (
            <Marker 
              key={coffeeshop.properties.SHOP_ID} 
              position={{ 
                lat: coffeeshop.geometry.coordinates[0], 
                lng: coffeeshop.geometry.coordinates[1]
              }}
              onClick={() => {
                setSelectedShop(coffeeshop);
              }}
              icon={{
                url: `/img16.jpg`,
                scaledSize: new window.google.maps.Size(25, 25)
              }}
            />
          ))}

          {selectedShop && (
            <InfoWindow 
            position={{ 
              lat: selectedShop.geometry.coordinates[0], 
              lng: selectedShop.geometry.coordinates[1]
            }}
            onCloseClick={() => {
              setSelectedShop(null);
            }}
            >
              <div>
                <h2>{selectedShop.properties.NAME}</h2>
                <p>{selectedShop.properties.ADDRESS}</p>
                <p>{selectedShop.properties.OPEN}</p>
                <p>{selectedShop.properties.NOTES}</p>
                <p>{selectedShop.properties.PHONE}</p>
                <p>{selectedShop.properties.SHOP_ID}</p>
                <p>{selectedShop.properties.DESCRIPTION}</p>
              </div>
            </InfoWindow>
          ) }
        </GoogleMap>
        <CardsLocation/>
        <Footer/>
        </>
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
          mapElement={<div style={{ height: `70%` }} />}
        />
      </div>
    );
}