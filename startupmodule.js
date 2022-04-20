// Generated by CoffeeScript 2.6.1
//#############################################################################
//region debug
var errLog, log, olog, successLog;

import {
  createLogFunctions
} from "thingy-debug";

({log, olog} = createLogFunctions("startupmodule"));

import c from 'chalk';

import * as syncProcess from "./syncprocessmodule.js";

import * as cliArguments from "./cliargumentsmodule.js";

//endregion

//#############################################################################
//region internal variables
errLog = function(arg) {
  return console.log(c.red(arg));
};

successLog = function(arg) {
  return console.log(c.green(arg));
};

//endregion

//#############################################################################
export var cliStartup = async function() {
  var done, e, err;
  log("cliStartup");
  try {
    e = cliArguments.extractArguments();
    done = (await syncProcess.execute(e.thingyPath));
    if (done) {
      return successLog('All done!');
    }
  } catch (error) {
    err = error;
    errLog('Error!');
    console.log(err);
    return console.log("\n");
  }
};
