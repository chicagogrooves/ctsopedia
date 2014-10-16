if (Meteor.isClient) {

  Accounts.ui.config({
    'requestPermissions': {
      'google' : [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }
  });

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
