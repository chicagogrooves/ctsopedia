if (Meteor.isClient) {
  Template.search.events({
    'click button': function(e){
        console.log("performing search for: ", Meteor.user().profile);
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
