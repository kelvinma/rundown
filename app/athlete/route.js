import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {
      athlete: this.store.findRecord('athlete', params.id),
      workouts: this.store.findAll('workout')
    };
  }
});
