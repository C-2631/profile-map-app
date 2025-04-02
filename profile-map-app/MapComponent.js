import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 20.5937, // Default to India's center
  lng: 78.9629,
};

const MapComponent = ({ selectedProfile }) => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={selectedProfile || center}>
        {selectedProfile && (
          <Marker position={{ lat: selectedProfile.lat, lng: selectedProfile.lng }} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
