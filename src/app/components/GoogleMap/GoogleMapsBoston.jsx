import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const style = {
  width: '702px',
  height: '761px'
}



function MapBoston() {
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: 42.3605863, lng: -71.0625471 }} />

  )
}

const WrappedBoston = withScriptjs(withGoogleMap(MapBoston));


export default function GoogleMapsBoston() {
  return (
    <div>
      <WrappedBoston 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBLcuIjzC9KWhUvjDF-mqlR_QYGG_JCN4Q`} 
      loadingElement={<div style={style} />}
      containerElement={<div style={style} />}
      mapElement={<div style={style} />}
      />
    </div>
  )
}

