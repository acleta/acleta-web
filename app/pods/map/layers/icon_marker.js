import {faIcon} from 'acleta/helpers/fa-icon';
/* global L */

export default function(iconName, location) {
  var icon = L.divIcon({
    className: '',
    html : faIcon(iconName, {hash: {}})
  });
  var marker = new L.Marker(location, {icon: icon});

  return marker;
}
