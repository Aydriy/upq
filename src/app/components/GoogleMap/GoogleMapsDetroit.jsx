import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// const style = {
//   width: "702px",
//   height: "761px",
// };

function MapDetroit() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 42.3308152, lng: -83.0500765 }}
    />
  );
}

const WrappedDetroit = withScriptjs(withGoogleMap(MapDetroit));

export default function GoogleMapsDetroit() {
  return (
    <div>
      <WrappedDetroit
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBLcuIjzC9KWhUvjDF-mqlR_QYGG_JCN4Q`}
        loadingElement={<div className="mapLoad" />}
        containerElement={<div className="mapClass" />}
        mapElement={<div className="mapClassEl" />}
      />
    </div>
  );
}
