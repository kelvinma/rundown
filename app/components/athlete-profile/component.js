import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions:{
    createWorkout: function(workoutData){
      var athleteID = this.get('athlete.id');
      this.sendAction('routeCreateWorkout', workoutData, athleteID);
    },
    deleteWorkout: function(workoutID){
      console.log('Athlete Profile Parent Layer delete received. workoutID: ', workoutID);
      this.sendAction('routeDeleteWorkout', workoutID);
    },
    editWorkout: function(workoutData, workoutID){
      console.log('Athlete Profile Parent Layer edit received. workoutID: ', workoutID);
      this.sendAction('routeEditWorkout', workoutData, workoutID);
    }
  }
});
