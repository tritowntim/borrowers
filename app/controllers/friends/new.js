import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log('+- save action in friends new controller');
      var that = this;
      this.get('model').save().then(function() {
        that.transitionToRoute('friends');
      });
      return true;
    },

    cancel: function() {
      console.log('+- console action in friends new controller');
      return true;
    }
  }
});
