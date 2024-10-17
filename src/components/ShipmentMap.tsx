import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 20,
  lng: 0
};

const shipments = [
  { id: 'SH001', position: { lat: 40.7128, lng: -74.0060 }, label: 'New York' },
  { id: 'SH002', position: { lat: 51.5074, lng: -0.1278 }, label: 'London' },
  { id: 'SH003', position: { lat: 48.8566, lng: 2.3522 }, label: 'Paris' },
];

const ShipmentMap: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        {shipments.map((shipment) => (
          <Marker
            key={shipment.id}
            position={shipment.position}
            label={shipment.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ShipmentMap;