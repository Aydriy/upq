import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parkData from "./markersLosAngeles.json";
import markerSmall from "./markerSmall.svg";
import markerBig from "./markerBig.svg";
import mapStyles from "./mapStyles.js";

// const style = {
//   width: "702px",
//   height: "761px",
// };

function Map() {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 34.0598532, lng: -118.2641654 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {parkData.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[0],
            lng: park.geometry.coordinates[1],
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={markerSmall}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[0],
            lng: selectedPark.geometry.coordinates[1],
          }}
        >
          <div></div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapsLosAngeles() {
  return (
    <div>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBLcuIjzC9KWhUvjDF-mqlR_QYGG_JCN4Q`}
        loadingElement={<div className="mapLoad" />}
        containerElement={<div className="mapClass" />}
        mapElement={<div className="mapClassEl" />}
      />
    </div>
  );
}

// import React, { Component, useState } from "react";
// import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
// import markerSmall from "./markerSmall.svg"
// import markerBig from "./markerBig.svg"

// const style = {
//   width: '702px',
//   height: '761px'
// }

// function MapLosAngeles(props) {

//   const [selectedPoint, setSelectedPoint] = useState(null);

//   return (
//     <GoogleMap
//       defaultZoom={14}
//       defaultCenter={{ lat: 34.0598532, lng: -118.2641654 }} >

//       {props.markers.map((point) => (
//         <Marker position={{ lat: 34.0598532, lng: -118.2641654 }}
//           icon={markerSmall}
//           onClick={() => {
//             setSelectedPoint(point);
//           }}
//         />
//       ))}

//       {selectedPoint && (
//         <InfoWindow position={{ lat: 34.0598532, lng: -118.2641654 }}>
//           <div>info</div>
//         </InfoWindow>
//       )}

//       <Marker position={{ lat: 34.0489231, lng: -118.2442112 }}
//         icon={markerBig} />

//     </GoogleMap>

//   )
// }

// const WrappedMapLosAngeles = withScriptjs(withGoogleMap(MapLosAngeles));

// export default function GoogleMapsLosAngeles() {
//   return (
//     <div>
//       <WrappedMapLosAngeles
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBLcuIjzC9KWhUvjDF-mqlR_QYGG_JCN4Q`}
//         loadingElement={<div style={style} />}
//         containerElement={<div style={style} />}
//         mapElement={<div style={style} />}
//       />
//     </div>
//   )
// }
