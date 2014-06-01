Portfolio.Views.projectsView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.template = _.template($('#projectsView').html() );
  },

  render: function () {
    this.$el.html( this.template() );

    $majorProjects = $('.project-list.major');

    this.collection.each(function(project){
      var view = new Portfolio.Views.projectsSubView({model: project});
      $majorProjects.append(view.render().el);
    });
  } 
});