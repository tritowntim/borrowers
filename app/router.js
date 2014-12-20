import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('friends', function() { });
});

export default Router;

// Use Ember Inspector to retrieve data from Rails app 
// $E.store.find('friend').then(function(friends) { friends.forEach(function(friend) { console.log('Hi from ' + friend.get('firstName')); }) });
