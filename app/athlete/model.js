import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  gender: DS.attr('string'),
  workouts: DS.hasMany('workout')
});
