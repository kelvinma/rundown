import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  type: DS.attr('string'),
  duration: DS.attr('number'),
  distance: DS.attr('number'),
  notes: DS.attr('string'),
  athlete: DS.belongsTo('athlete')
});
