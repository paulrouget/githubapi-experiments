/*function sendToGithub(aTitle, aPublic, aContent, onSuccess, onError) {

  var param = {};
  param.description = aTitle;
  param.public = aPublic;
  param.files = {}
  param.files["slides.html"] = {content: aContent};

  xhr.send(JSON.stringify(param));
}*/

var github = {};

(function(public) {
  var API_URL = "https://api.github.com";

  var user = null;
  var login = null;
  var password = null;

  function signIn(aLogin, aPassword) {
    UI.connecting();
    req("user", "GET", aLogin, aPassword, null,
      function onSuccess(aResponse) {
        this.user = JSON.parse(aResponse);
        UI.connected(this.user);
        login = aLogin;
        password = aPassword;
      },
      function onError(aMsg) {
        this.user = null;
        UI.disconnected();
        console.warn("signIn Error: " + aMsg);
      });
  }

  function getGist(aId) {
    req("gists", "GET", login, password, aId,
        function onSuccess(aResponse) {
          var src = JSON.parse(aResponse).files[0].content; // FIXME, fragile:
          UI.updateSource(src);
        },
        function onError(aMsg) {
          alert("ERROR");
        });
  }

  function req(aZone, aMethod, aLogin, aPassword, aParam, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open(aMethod, API_URL + "/" + aZone + (aMethod == "GET" ? "/" + aParam : ""));

    if (this.user) {
      var hash = base64.encode(aLogin + ":" + aPassword);
      xhr.setRequestHeader("Authorization", "Basic " + hash);
    }

    xhr.onerror = function () {
      if (onError)
        onError("Connection error")
    };

    xhr.onload = function(e) {
      if (xhr.status != 200) {
        if (onError)
          onError("Github.com error");
      } else {
        if (onSuccess)
          onSuccess(xhr.responseText);
      }
    };
    xhr.send(aMethod == "GET" ? null : aParam);
  }

  public.signIn = signIn;
  public.getGist = getGist;
})(github)
