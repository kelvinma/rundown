import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  editable: false,
  expanded: false,
  actions:{
    createWorkout: function(workoutData){
      console.log('create athlete action sent from profile parent layer');
      this.sendAction('routeCreateWorkout', workoutData, this.get('athlete.id'));
    },
    deleteWorkout: function(workoutID){
      console.log('Athlete Profile Parent Layer delete received. workoutID: ', workoutID);
      this.sendAction('routeDeleteWorkout', workoutID);
    },
    editWorkout: function(workoutData, workoutID){
      console.log('Athlete Profile Parent Layer edit received. workoutID: ', workoutID);
      this.sendAction('routeEditWorkout', workoutData, workoutID);
    },
    deleteAthlete: function(){
      var athleteID = this.get('athlete.id');
      console.log('delete Athlete action sent with athleteID: ', athleteID);
      this.sendAction('routeDeleteAthlete', athleteID);
    },
    editAthlete: function(){
      var athleteID = this.get('athlete.id');
      console.log('edit Athlete action sent with athleteID: ', athleteID);
      this.toggleProperty('editable');
      this.sendAction('routeEditAthlete', this.get('athlete'), athleteID);
    },
    toggleEditable: function(){
      this.toggleProperty('editable');
    },
    toggleExpanded: function(){
      this.toggleProperty('expanded');
    }
  }
});
