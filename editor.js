var editor;
window.addEventListener("load", function() {
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai-paul");
  editor.setHighlightActiveLine(false);
  var HTMLMode = require("ace/mode/html").Mode;
  editor.getSession().setMode(new HTMLMode());
  editor.renderer.setHScrollBarAlwaysVisible(false);
  editor.renderer.setShowPrintMargin(false);

  var lastRow = -1;
  function getCurrentSection() {
    var cursor = editor.getCursorPosition();
    if (lastRow == cursor.row) return;
    var range = {start:{row: 0, column: 0}, end: cursor};
    var src = editor.session.getTextRange(range);
    var idx = src.split("<section").length - 1;
    lastRow = cursor.row;
    slides.setSlide(idx);
  }

  //editor.selection.on("changeCursor", getCurrentSection);
  keys.setupEditor();
}, true);
