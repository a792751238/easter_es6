define(function(require, exports, module) {
  var $ = require("jquery");
  var color = ["rgba(", Math.floor(Math.random() * 255), ",", Math.floor(Math.random() * 255), ",", Math.floor(Math.random() * 255), ")"];

  exports.changeBg = function() {
    $(".background").css({
      position: "fixed",
      top: "0px",
      bottom: "0px",
      left: "0px",
      right: "0px",
      background: color.join("")
    });
  };
});
