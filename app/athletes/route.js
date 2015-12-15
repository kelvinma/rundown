import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      athlete: this.store.findAll('athlete'),
      workouts: this.store.findAll('workout')
    };
  },
  actions: {
    createWorkout: function(workoutData, athleteID){
      console.log('Create Workout received from component of athlete_id: ' + athleteID);
      var newWorkout = this.store.createRecord('workout', workoutData);
      this.store.findRecord('athlete', athleteID).then(function(athlete){
        athlete.get('workouts').addObject(newWorkout);
        newWorkout.save();
      });
    }
  }
});
