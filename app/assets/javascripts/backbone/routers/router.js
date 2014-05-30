Portfolio.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home',
    //projects
    'projects': 'projects'
    //invalid url
    // '*anything': 'goHome'
  },

  //home page
  home: function () {
    Portfolio.currentView = new Portfolio.Views.homeView();
    Portfolio.currentView.render();
  },

  projects: function () {
    Portfolio.currentView = new Portfolio.Views.projectsView({collection: Portfolio.projects});
    Portfolio.currentView.render();
  }
});