import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    deleteWorkout: function(){
      console.log('delete command sent');
      this.sendAction('routeDeleteWorkout', this.get('workout.id'));
    },
    editWorkout: function(){
      console.log('edit command sent');
      this.sendAction('routeEditWorkout', this.get('workout'), this.get('workout.id'));
    }
  }
});
