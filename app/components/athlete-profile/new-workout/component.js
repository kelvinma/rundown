import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  expanded: false,
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
    toggleExpanded: function(){
      this.toggleProperty('expanded');
    },
    createWorkout: function(){
      console.log('create workout command sent');
      console.log(this.get('newWorkout'));
      this.toggleProperty('expanded');
      this.sendAction('routeCreateWorkout', this.get('newWorkout'));
    }
  }
});
