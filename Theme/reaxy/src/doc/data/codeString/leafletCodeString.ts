export const leafletCodeString = `
import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const MyMap = () => {
  const position = [51.505, -0.09];

  return (
    <Map center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>
          A marker on the map.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MyMap;

`;
