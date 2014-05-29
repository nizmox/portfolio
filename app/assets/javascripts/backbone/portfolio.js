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

  var blurCount = 10;
  $background = $('#background');
  var blur = function () {
    if (blurCount >= 0) {
      //update the css blur effect
      $background.css("-webkit-filter","blur("+ blurCount + "px)");
      $background.css("-moz-filter","blur("+ blurCount + "px)");
      $background.css("-o-filter","blur("+ blurCount + "px)");
      $background.css("-ms-filter","blur("+ blurCount + "px)");
      $background.css("filter","blur("+ blurCount + "px)");

      console.log('setting blur to ',blurCount);
      //decrease the blur counter by 1
      blurCount--;
      //start the function again in 100ms
      var blurTimer = window.setTimeout(blur, 100);
    }
  };

  blur();

});
