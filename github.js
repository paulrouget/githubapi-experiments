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
  var connected = false;

  function signIn(aLogin, aPassword) {
    UI.connecting();
    req("user", aLogin, aPassword, null,
      function onSuccess(aResponce) {
        this.user = JSON.parse(aResponce);
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

  function req(aZone, aLogin, aPassword, aParam, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL + "/" + aZone);

    var hash = base64.encode(aLogin + ":" + aPassword);
    xhr.setRequestHeader("Authorization", "Basic " + hash);

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
    xhr.send(aPublic);
  }

  public.signIn = signIn;
})(github)
