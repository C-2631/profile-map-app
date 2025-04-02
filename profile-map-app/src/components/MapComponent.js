import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ selectedProfile }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {selectedProfile && (
        <Marker position={[selectedProfile.lat, selectedProfile.lng]}>
          <Popup>{selectedProfile.name} - {selectedProfile.address}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
