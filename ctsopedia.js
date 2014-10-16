if (Meteor.isClient) {
  Template.search.events({
    'click button': function(e){
        console.log("got btn click");
        e.preventDefault();
        Router.go('resultsPage');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
