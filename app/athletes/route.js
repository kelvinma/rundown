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

      var self = this;
      var newWorkout = this.store.createRecord('workout', workoutData);
      newWorkout.save().then(function(savedWorkout){
        self.store.findRecord('athlete', athleteID).then(function(athlete){
          athlete.get('workouts').pushObject(savedWorkout).save();
          console.log("Athlete ID is " + newWorkout.get('athlete.id'));
        });
      });

    },
    deleteWorkout: function(workoutID){
      this.store.findRecord('workout', workoutID).then(function(workoutRecord){
        workoutRecord.destroyRecord();
        this.store.unloadRecord(workoutRecord);
      console.log('delete workout command received. WorkoutID: ', workoutID);
      });
    },
    editWorkout: function(workoutData, workoutID){
      console.log('edit workout command received. WorkoutID: ', workoutID);
      this.store.findRecord('workout', workoutID).then(function(workoutRecord){
        workoutRecord.set('workout', workoutData);
        workoutRecord.save();
      });
    },
    createAthlete: function(athleteData){
      console.log('newAthlete action received in Route with athlete Data ', athleteData);
      var newAthlete = this.store.createRecord('athlete', athleteData);
      newAthlete.save();
    },
    deleteAthlete: function(athleteID){
      this.store.findRecord('athlete', athleteID).then(function(athleteRecord){
        athleteRecord.destroyRecord();
        this.store.unloadRecord(athleteRecord);
        console.log("athlete " + athleteID + " deleted");
      });
    },
    editAthlete: function(athleteData, athleteID){
      console.log('edit athlete request received for athlete: ', athleteID);
      this.store.findRecord('athlete', athleteID).then(function(athleteRecord){
        athleteRecord.set('athlete', athleteData);
        athleteRecord.save();
        console.log('athlete updated', athleteRecord.get('firstname'));
      });
    }
  }
});
