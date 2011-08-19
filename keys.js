var keys = {};


(function(public) {
  function setupEditor() {
    var canon = require("pilot/canon");

    canon.addCommand({
      name: "prev",
      bindKey: {
        win: "Home",
        mac: "Home",
        sender: "editor"
      },
      exec: function() {
        slides.prev();
      }
    });

    canon.addCommand({
      name: "next",
      bindKey: {
        win: "End",
        mac: "End",
        sender: "editor"
      },
      exec: function() {
        slides.next();
      }
    });

    canon.addCommand({
      name: "updateView",
      bindKey: {
        win: "Ctrl-R",
        mac: "Command-R",
        sender: "editor"
      },
      exec: function() {
        UI.updateView();
      }
    });

    canon.addCommand({
      name: "save",
      bindKey: {
        win: "Ctrl-S",
        mac: "Command-S",
        sender: "editor"
      },
      exec: function() {
        UI.save();
      }
    });

  }
  public.setupEditor = setupEditor;
})(keys);
