var UI = {};

// FIXME: check first if any changes happened
// setInterval(function() {
//  UI.updateView();
// }, 2000);

(function(public) {
  var gistAvailable = false;

  function onload() {
    var hash = window.location.hash.split("#")[1]
    if (hash) {
      github.getGist(hash);
    }
  }

  function updateView() {
    var iframeDoc = document.querySelector("iframe").contentDocument;
    var src = editor.getSession().getValue();
    iframeDoc.location = "data:text/html;charset=utf-8," + encodeURIComponent(src) + "#" + slides.idx;
    editor.focus();
  }

  function updateSource(src) {
    editor.getSession().setValue(src);
  }

  function getGist() {
    var id = window.prompt("Gist id?");
    if (id)
      github.getGist(id);
  }

  function setGist(gist, updateSource) {
    var src = gist.files["slides.html"].content; // FIXME, fragile:
    if (updateSource)
      UI.updateSource(src);
    $("#gist").href = gist.html_url;
    window.location.hash = gist.id;
    gistAvailable = true;
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

  function notify(msg) {
    alert("NOTIFICATION: " + msg);
  }

  function save() {
    //FIXME: if no gist available?
    github.saveGist();
  }

  public.onload = onload;
  public.connected = connected;
  public.connecting = connecting;
  public.disconnected = disconnected;
  public.signIn = signIn;
  public.save = save;
  public.getGist = getGist;
  public.setGist = setGist;
  public.updateSource = updateSource;
  public.updateView = updateView;
  public.notify = notify;

})(UI)

window.addEventListener("load", function() {
  UI.onload();
}, true);
