// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-88.98154780935343,40.54587868703646],
  [-88.98315369676732,40.54575528672065],
  [-88.98328000251898,40.544918900809726],
  [-88.98324391516135,40.543630023384075],
  [-88.98367696345275,40.543767139182705],
  [-88.98364087609514,40.545467351766284],
  [-88.98320782780375,40.54685217044508],
  [-88.98540915661827,40.546879592308],
  [-88.98809766476063,40.5468384595094],
  [-88.99324011341686,40.54676990478101],
  [-88.99668645606911,40.54666021708221],
  [-89.00085454616138,40.546646506108836],
];

// TODO: add your own access token
mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-88.98151172199582, 40.54464467364732],
  zoom: 14,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-88.98151172199582, 40.54464467364732]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
