import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  // store: Ember.inject.service(),
  newWorkout: {
    date: null,
    title: null,
    type: null,
    distance: null,
    duration: null,
    notes: null
},
  actions: {
      createWorkout: function(){
      this.sendAction('routeCreateWorkout', this.get('newWorkout'));
    }
  }
});
