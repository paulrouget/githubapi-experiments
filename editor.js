var editor;
window.addEventListener("load", function() {
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.setHighlightActiveLine(false);
  var HTMLMode = require("ace/mode/html").Mode;
  editor.getSession().setMode(new HTMLMode());
}, true);

