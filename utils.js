function $(query) { return document.querySelector(query)}
function $$(query) { return document.querySelectorAll(query)}
NodeList.prototype.forEach = function(fun) {
    if (typeof fun !== "function") throw new TypeError();
    for (var i = 0; i < this.length; i++) {
        fun.call(this, this[i]);
    }
}

window.onbeforeunload = function() {return ""}
