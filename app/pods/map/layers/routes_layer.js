import DataSetLayer from './data_set';

export default DataSetLayer.extend({
  enabled: true,
  id: 'routes/santiago',
  style: function() {
    return {
      color: '#3AB2FE', 
      opacity: 0.5, 
      weight: 5
    };
  }
});
