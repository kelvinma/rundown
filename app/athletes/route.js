import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      athletes: this.store.findAll('athlete'),
      workouts: this.store.findAll('workout')
    };
  }
});
