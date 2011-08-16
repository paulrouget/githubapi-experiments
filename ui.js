var UI = {};

(function(public) {
  var iframeDoc;

  function onload() {
    iframeDoc = document.querySelector("iframe").contentDocument;
  }

  function updateSource() {
    var src = editor.getSession().getValue();
    iframeDoc.open();
    iframeDoc.write(src);
    iframeDoc.close();
  }

  function signIn() {
    var login = document.getElementById("login").value;
    var pwd = document.getElementById("password").value;
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

  public.connected = connected;
  public.connecting = connecting;
  public.disconnected = disconnected;
  public.signIn = signIn;
  public.onload = onload;
  public.updateSource = updateSource;

})(UI)

window.onload = function() {UI.onload()};
