// Generated by CoffeeScript 2.5.1
(function() {
  var configmodule, log;

  configmodule = {
    name: "configmodule"
  };

  //log Switch
  log = function(arg) {
    if (allModules.debugmodule.modulesToDebug["configmodule"] != null) {
      console.log("[configmodule]: " + arg);
    }
  };

  //#initialization function  -> is automatically being called!  ONLY RELY ON DOM AND VARIABLES!! NO PLUGINS NO OHTER INITIALIZATIONS!!
  configmodule.initialize = function() {
    log("configmodule.initialize");
  };

  configmodule.outputCoffeeName = "allmodules.coffee";

  configmodule.outputStylusName = "allstyles.styl";

  module.exports = configmodule;

}).call(this);
