seajs.config({
  base: "./lib",
  alias: {
    jquery: "jquery.js",
    color: "color.js"
  }
});

seajs.use(["color", "jquery"], function(c, $) {
  $("#change").click(function() {
    c.changeBg();
  });
});
