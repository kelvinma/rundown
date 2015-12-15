import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  type: DS.attr('string'),
  duration: DS.attr('number'),
  distance: DS.attr('number'),
  reps: DS.attr('number'),
  newPr: DS.attr('boolean'),
  notes: DS.attr('string'),
  athlete: DS.belongsTo('athlete', {async: true})
});
