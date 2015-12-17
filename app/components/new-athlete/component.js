import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  expanded: false,
  newAthlete: {
    firstname: null,
    lastname: null,
    gender: null
  },
  actions: {
    toggleExpanded: function(){
      this.toggleProperty('expanded');
    },
    createAthlete: function(){
      console.log('createAthlete sent');
      this.sendAction('routeCreateAthlete', this.get('newAthlete'));
    }
  }
});
