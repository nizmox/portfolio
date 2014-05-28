Portfolio.Collections.Posts = Backbone.Collection.extend({
  model: Portfolio.Models.Post,
  url: '/posts'
});