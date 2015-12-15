import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      athlete: this.store.findAll('athlete'),
      workouts: this.store.findAll('workout')
    };
  }
});
