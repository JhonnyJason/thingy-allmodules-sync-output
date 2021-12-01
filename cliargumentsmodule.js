// Generated by CoffeeScript 2.6.1
(function() {
  var cliargumentsmodule, extractMeowed, getHelpText, getOptions, log, meow, throwErrorOnUsageFail;

  cliargumentsmodule = {
    name: "cliargumentsmodule"
  };

  //region node_modules
  meow = require('meow');

  //endregion

  //log Switch
  log = function(arg) {
    if (allModules.debugmodule.modulesToDebug["cliargumentsmodule"] != null) {
      console.log("[cliargumentsmodule]: " + arg);
    }
  };

  //region internal variables

  //endregion

  //#initialization function  -> is automatically being called!  ONLY RELY ON DOM AND VARIABLES!! NO PLUGINS NO OHTER INITIALIZATIONS!!
  cliargumentsmodule.initialize = function() {
    log("cliargumentsmodule.initialize");
  };

  //region internal functions
  getHelpText = function() {
    log("getHelpText");
    return `Usage
    $ thingy-allmodules-sync <arg1> <arg2>

Options
    optional:
        arg1, --thingy-path <path/to/thingy>, -p <path/to/thingy> [default: ./ ]
            path to the root of the thingy. Usually it is cwd. Use it if you call this script from somewhere else.
        arg2, --style <importStyle>, -s <importStyle> [default: import]
            determines if we use require or import can either be "require" or "import"
TO NOTE:
    The flags will overwrite the flagless argument.
Examples
    $ thingy-allmodules-sync 
    ...`;
  };

  getOptions = function() {
    log("getOptions");
    return {
      flags: {
        thingyPath: {
          type: "string",
          alias: "p"
        },
        style: {
          type: "string",
          alias: "s"
        }
      }
    };
  };

  extractMeowed = function(meowed) {
    var style, thingyPath;
    log("extractMeowed");
    thingyPath = "";
    style = "";
    if (meowed.input[0]) {
      thingyPath = meowed.input[0];
    }
    if (meowed.input[1]) {
      style = meowed.input[1];
    }
    if (meowed.flags.thingyPath) {
      thingyPath = meowed.flags.thingyPath;
    }
    if (meowed.flags.style) {
      style = meowed.flags.style;
    }
    if (!thingyPath) {
      thingyPath = ".";
    }
    if (!style) {
      style = "import";
    }
    return {thingyPath, style};
  };

  throwErrorOnUsageFail = function(extract) {
    log("throwErrorOnUsageFail");
    if (!extract.thingyPath) {
      throw "fatal error: no default thingyPath was not available as fallback!";
    }
    if (!extract.style) {
      throw "fatal error: no default style was not available as fallback!";
    }
    if (!(typeof extract.thingyPath === "string")) {
      throw "Usage error: option thingyPath was provided in an unexpected way!";
    }
    if (!(typeof extract.style === "string")) {
      throw "Usage error: option style was provided in an unexpected way!";
    }
    if (extract.style !== "import" && extract.style !== "require") {
      throw "Usage error: option style must be either import or require!";
    }
  };

  //endregion

  //region exposed functions
  cliargumentsmodule.extractArguments = function() {
    var extract, meowed, options;
    log("cliargumentsmodule.extractArguments");
    options = getOptions();
    meowed = meow(getHelpText(), getOptions());
    extract = extractMeowed(meowed);
    throwErrorOnUsageFail(extract);
    return extract;
  };

  //endregion exposed functions
  module.exports = cliargumentsmodule;

}).call(this);
