Portfolio.Views.projectsView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.template = _.template($('#projectsView').html() );
  },

  render: function () {
    this.$el.html( this.template() );
  }
});