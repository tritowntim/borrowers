import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: function() {
    var first = this.get('firstName') || '';
    var last = this.get('lastName') || '';
    var combined = first + ' ' + last;
    return combined.trim() ? combined : '(new)';
  }.property('firstName', 'lastName')
});
