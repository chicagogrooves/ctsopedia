//this variable will hold the preauthorized google drive api object
var driveApi;

var throttledSearch = _.throttle(function(e, tmpl){
  var term = $(tmpl.find("input.gSearch")).val();
  console.log("Searching " + term + " into window.lastSearchResults");

  driveApi.files.list({
    q: "title contains '" + term.replace("'", "") + "'"
  }).execute( updateUi );
}, 250, {leading: false});

function updateUi(results){
  var docTitles = _.pluck(results.items, "title");
  Session.set("gdrive-results", results.items);
  window.lastSearchResults = results.items;
}

Template.gSearch.rendered = function(){
  //console.log("The googs says:", this.googleApi);
  $(document).on("gdriveready", function(e, api){
    console.debug("Ready to query Google Drive files (google page)..");
    driveApi = api; //give this to the file-global variable
  });
};

Template.gSearch.events({
  "keyup .gSearch": throttledSearch
});
Template.gResults.helpers({
  "results": function(){
    return Session.get("gdrive-results");
  },
  "lastModifiedPhoto": function(){
    return "";
  },
  "ownerPhoto": function(){
    if( ! this.lastModifyingUser.picture ){
      return "";
    }
    return this.lastModifyingUser.picture.url;
  }
});
