Portfolio.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home' //,
    //invalid url
    // '*anything': 'goHome'
  },

  //home page
  home: function () {
    Portfolio.currentView = new Portfolio.Views.homeView();
    Portfolio.currentView.render();
  }
});