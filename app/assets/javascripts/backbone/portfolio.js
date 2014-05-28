//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

window.Portfolio = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
};

$(document).ready(function () {

  //create and render the app view
  Portfolio.appView = new Portfolio.Views.appView();
  Portfolio.appView.render();

  //instansiate collections required
  Portfolio.projects = new Portfolio.Collections.Projects();
  Portfolio.posts = new Portfolio.Collections.Posts();

  $.when(
    //fetch the 'projects'
    Portfolio.projects.fetch(),

    //fetch the 'posts'
    Portfolio.posts.fetch()

  ).then(function() {

    console.log("done fetching data");

    //start the backbone router
    Portfolio.router = new Portfolio.Routers.appRouter();
    Backbone.history.start({pushState: false});   

  });
});