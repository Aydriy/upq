import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parkData from "./markersNewYork.json";
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
      defaultCenter={{ lat: 40.7225585, lng: -73.9982584 }}
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
          <div>info</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapsNewYork() {
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

// import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
// import markerSmall from "./markerSmall.svg"
// import markerBig from "./markerBig.svg"

// const style = {
//     width: '702px',
//     height: '761px'
// }

// function MapNewYork() {
//     return (
//         <GoogleMap defaultZoom={14} defaultCenter={{ lat: 40.7225585, lng: -73.9982584 }} >
//             <Marker position={{ lat: 40.721705, lng: -74.0149677 }}
//                 icon={markerSmall} />
//             <Marker position={{ lat: 40.7120457, lng: -74.012595 }}
//                 icon={markerSmall} />
//             <Marker position={{ lat: 40.728574, lng: -74.0021107 }}
//                 icon={markerSmall} />
//             <Marker position={{ lat: 40.716337, lng: -74.0082967 }}
//                 icon={markerBig} />

//         </GoogleMap>

//     )
// }

// const WrappedMapNewYork = withScriptjs(withGoogleMap(MapNewYork));

// export default function GoogleMapsNewYork() {
//     return (
//         <div>
//             <WrappedMapNewYork
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBLcuIjzC9KWhUvjDF-mqlR_QYGG_JCN4Q`}
//                 loadingElement={<div style={style} />}
//                 containerElement={<div style={style} />}
//                 mapElement={<div style={style} />}
//             />
//         </div>
//     )
// }
