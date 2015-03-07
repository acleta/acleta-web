import {faIcon} from 'acleta/helpers/fa-icon';
/* global L */

export default function(icon, location) {
  var icon = L.divIcon({
    className: '',
    html : faIcon(icon, {hash: {}})
  });
  var marker = new L.Marker(location, {icon: icon});

  return marker;
};
