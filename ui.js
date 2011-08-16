var UI = {};

(function(public) {

  function updateView() {
    var iframeDoc = document.querySelector("iframe").contentDocument;
    var src = editor.getSession().getValue();
    iframeDoc.location = "data:text/html;charset=utf-8," + encodeURIComponent(src);
  }

  function updateSource(src) {
    editor.getSession().setValue(src);
  }

  function getGist() {
    var id = window.prompt("Gist id?");
    if (id)
      github.getGist(id);
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

  function save() {
  }

  public.connected = connected;
  public.connecting = connecting;
  public.disconnected = disconnected;
  public.signIn = signIn;
  public.save = save;
  public.getGist = getGist;
  public.updateSource = updateSource;
  public.updateView = updateView;

})(UI)
