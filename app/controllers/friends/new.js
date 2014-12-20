import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    save: function() {
      var that = this;
      this.get('model').save().then(function() {
        that.transitionToRoute('friends');
      });
    },

    cancel: function() {
      this.get('model').deleteRecord();
      this.transitionToRoute('friends');
    }

  }
});
