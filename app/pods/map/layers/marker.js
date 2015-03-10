/* global L */

export default function(type, location) {
  var icon = L.divIcon({
    className: 'marker marker-'+type,
  });
  var marker = new L.Marker(location, {icon: icon});

  return marker;
}

