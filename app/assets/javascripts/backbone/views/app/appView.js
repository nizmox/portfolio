Portfolio.Views.appView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.template = _.template($('#appView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  }
});