var github = {};

(function(public) {
  var API_URL = "https://api.github.com";

  var user = null;
  var login = null;
  var password = null;
  var gist = null;

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
    req("gists/" + aId, "GET", login, password, null,
        function onSuccess(aResponse) {
          gist = JSON.parse(aResponse);
          UI.setGist(gist, true);
        },
        function onError(aMsg) {
          console.warn("ERROR");
        });
  }

  function saveGist() {
    if (gist) {
      var param = {};
      param.description = gist.description;
      param.public = gist.public;
      param.files = {}
      param.files["slides.html"] = {content: editor.session.getValue()};
      param = JSON.stringify(param);

      req("gists/" + gist.id, "PATCH", login, password, param,
          function onSuccess(aResponse) {
            gist = JSON.parse(aResponse);
            UI.setGist(gist, false);
            UI.notify("saved");
          },
          function onError(aMsg) {
            console.warn("ERROR");
          });
    } else {
      console.warn("NO GIST TO SAVE");
    }
  }

  function req(aZone, aMethod, aLogin, aPassword, aParam, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.open(aMethod, API_URL + "/" + aZone);

    if (aLogin && aPassword) {
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

    xhr.send(aParam);
  }

  public.signIn = signIn;
  public.getGist = getGist;
  public.saveGist = saveGist;
})(github)
