if (Meteor.isClient) {

  //http://stackoverflow.com/questions/14227222/unauthorized-access-to-google-calendar-api-post-request
  Accounts.ui.config({
    'requestPermissions': {
      'google': [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    },
    'requestOfflineToken': {
      'google': true
    }
  });

  Template.search.events({
    'click button': function(e, tmpl){
        e.preventDefault();
        var searchTerm = $(tmpl.find("#searchBox")).val();

        console.log("performing search for: ", Meteor.user().profile);

        if( searchTerm === "cigna"){
          Router.go('clients');
        }else{
          Router.go('resultsPage');
        }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
