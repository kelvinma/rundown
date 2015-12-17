import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authenticate() {
      this.sendAction('authenticate', this.get('username'), this.get('password'));
    }
  }
});
