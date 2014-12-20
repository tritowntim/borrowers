import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    save: function() {
      var that = this;
      this.get('model').save().then(function(friend) {
        that.transitionToRoute('friends.show', friend);
      });
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('friends.show', this.get('model'));
    }

  }
});
