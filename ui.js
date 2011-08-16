var UI;

(function(public) {
  function signIn() {
    var login = document.getElementById("login");
    var pwd = document.getElementById("pwd");
    github.signIn(login, pwd);
  }

  function connected(user) {
    var badge = document.getElementById("githubbadge");
    badge.className = "connected";
    var img = badge.querySelector(".connected > img");
    img.src = user.avatar_url;
    var span = badge.querySelector(".connected > span");
    span.innerHTML = user.login + " (" + user.name + ")";
  }

  function connecting() {
    var badge = document.getElementById("githubbadge");
    badge.className = "connecting";
  }

  function disconnected() {
    var badge = document.getElementById("githubbadge");
    badge.className = "disconnected";
  }

  UI.connected = connected;
  UI.connecting = connecting;
  UI.disconnected = disconnected;
  UI.signIn = signIn;

})(UI)
