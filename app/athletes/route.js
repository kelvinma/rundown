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
      console.log('create workout command received');
      console.log(workoutData);
      console.log(athleteID);

      // this.store.findRecord('athlete', athleteID).then(function(athlete){
      //   athlete.get('workouts').forEach(function(w){console.log(w.get('title'));});
      // });

      // var newWorkout = this.store.createRecord('workout', workoutData);
      this.store.findRecord('athlete', athleteID).then(function(athlete){
        // athlete.get('workouts').pushObject(newWorkout);
        athlete.get('workouts').forEach(function(w){console.log(w.get('title'));});
        // newWorkout.save();
      });
    },
    deleteWorkout: function(workoutID){
      this.store.findRecord('workout', workoutID).then(function(workoutRecord){
        workoutRecord.destroyRecord();
      console.log('delete workout command received. WorkoutID: ', workoutID);
      });
    },
    editWorkout: function(workoutData, workoutID){
      console.log('edit workout command received. WorkoutID: ');
    }
  }
});
