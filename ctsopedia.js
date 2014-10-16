if (Meteor.isClient) {
  var scopes = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file'
    'https://www.googleapis.com/auth/userinfo.email'];

  Accounts.ui.config({'requestPermissions':{'google':scopes}});

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
