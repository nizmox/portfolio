Portfolio.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home' //,
    //invalid url
    // '*anything': 'goHome'
  },

  //home page
  home: function () {
    // var view = new ReviewMi.Views.homeView({collection: ReviewMi.reviews});
    // view.render();
  }
});