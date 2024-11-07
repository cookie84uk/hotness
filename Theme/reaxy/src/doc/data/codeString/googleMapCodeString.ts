export const googleMapCodeString = `
// ** script

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>

// ** create map

<div id="map"></div>

// ** Initialize Map in JavaScript

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
`;
