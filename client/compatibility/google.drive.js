//root callback for pages that include the google client library
function handleGoogleClientLoad(result){
  console.debug("google client loaded - authorizing...");

  var clientId = '142974835119-2q26fu1lijvnjiauvd2od868e5vblo2f.apps.googleusercontent.com';
  var scopes = ['https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/plus.me'];

  gapi.client.setApiKey('AIzaSyCKU0gRQheg7FVaUR44KpviQW5R4BwgMFw');
  _.defer( performGoogleAuth );

  function performGoogleAuth(){
    gapi.auth.authorize(
      {
        client_id: clientId,
        scope: scopes,
        immediate: true
      }, handleAuthResult);
  }

  //triggers the 'gdriveready' event, passing a drive api object
  function handleAuthResult(authResult){
    if (authResult && !authResult.error) {
      gapi.client.load('drive', 'v2', function() {
        $(document).trigger("gdriveready", gapi.client.drive);
      });
    } else {
      console.error("Google Client Auth Failure", authResult);
    }
  }

}

// call retrieveAllFiles( function(result){ console.log(result); });
function retrieveAllFiles(callback) {
  var retrievePageOfFiles = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.items);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.drive.files.list({
          'pageToken': nextPageToken
        });
        retrievePageOfFiles(request, result);
      } else {
        callback(result);
      }
    });
  }
  var initialRequest = gapi.client.drive.files.list();
  retrievePageOfFiles(initialRequest, []);
}
