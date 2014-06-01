Portfolio.Views.projectsSubView = Backbone.View.extend({
  tagName: 'div',
  className: 'project',

  initialize: function () {
    this.template = _.template($('#projectsSubView').html() );
  },

  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );
    return this;
  } 
});