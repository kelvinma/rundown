import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  newAthlete: {
    firstname: null,
    lastname: null,
    gender: null
  },
  actions: {
    createAthlete: function(){
      console.log('createAthlete sent');
      this.sendAction('routeCreateAthlete', this.get('newAthlete'));
    }
  }
});
