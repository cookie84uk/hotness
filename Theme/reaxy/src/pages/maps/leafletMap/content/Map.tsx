import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useLayoutSize } from '@config/hooks';
import MarkerShadow from '@config/assets/images/leaflet/marker-shadow.png';
import MarkerIcon from '@config/assets/images/leaflet/marker-icon.png';

const Map = () => {
  useEffect(() => {
    // Özel ikonu oluştur
    const customIcon = L.icon({
      iconUrl: MarkerIcon,
      shadowUrl: MarkerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Özel ikonlu marker'ı ekle
    L.marker([51.505, -0.09], { icon: customIcon })
      .addTo(map)
      .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
      .openPopup();
  }, []);

  const { LAYOUT_SIZE } = useLayoutSize();

  return <div id="map" style={{ width: '100%', height: LAYOUT_SIZE, borderRadius: '16px', zIndex: 0 }} />;
};

export default Map;
