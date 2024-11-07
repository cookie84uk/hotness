import { Box } from "@mui/material";
import { Map } from "./content/Map";
import React from "react";

export default function GoogleMap() {
  // ** Api developers
  const apiKey = "AIzaSyCTbhyQUEKiIfN9Sonq1hYul8tCs3RumF8";

  // ** FROM THE REAXY DEVELOPER - Please note that this page may return an error because the google map api is intended for developers. Thank you for your understanding.
  console.warn(
    "FROM THE REAXY DEVELOPER - Please note that this page may return an error because the google map api is intended for developers. Thank you for your understanding."
  );

  // ** location Baku
  const mapOptions: google.maps.MapOptions = {
    center: { lat: 40.4093, lng: 49.8671 }, // Aze
    zoom: 10,
  };

  return (
    <Box>
      <Map apiKey={apiKey} options={mapOptions} />
    </Box>
  );
}
