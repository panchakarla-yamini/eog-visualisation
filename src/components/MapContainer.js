import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
      style={{width: '80%', height: '80%', position: 'relative'}}
      className={'map'}
      zoom={5}
      initialCenter={{
            lat: 31.61218605715766,
            lng: -90.59432789285076
          }}>
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: this.props.currentPosition.latitude, lng: this.props.currentPosition.longitude}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA4YrymUlcWlooz31HEM4C72j_AUdgm0YU')
})(MapContainer);
