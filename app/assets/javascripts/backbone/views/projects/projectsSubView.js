Portfolio.Views.projectsSubView = Backbone.View.extend({
  tagName: 'div',
  className: 'project',
  
  events: {
    'mouseenter': 'slideUp',
    'mouseleave': 'slideDown',
  },

  initialize: function () {
    this.template = _.template($('#projectsSubView').html() );
  },

  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );

    this.$overlay = this.$el.find('.overlay');
    this.$links = this.$el.find('.links');

    return this;
  },

  slideUp: function () {
    this.$overlay.stop().slideDown("slow");
    this.$links.stop().fadeIn("slow");
  },

  slideDown: function () {
    this.$overlay.stop().slideUp("slow");
    this.$links.stop().fadeOut("slow");
  }
});