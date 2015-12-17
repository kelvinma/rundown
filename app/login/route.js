import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticate(username, password) {
      console.log('authenticate action received');
      console.log('username: ', username + ', password: ', password);

      this.get('session').authenticate('authenticator:oauth2', username, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
