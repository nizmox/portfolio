Portfolio.Views.homeView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.template = _.template($('#homeView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  }

});