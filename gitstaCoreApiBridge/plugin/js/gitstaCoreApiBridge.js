const exec = window.cordova.require("cordova/exec");

module.exports = function exec(action, args, successCb, failureCb, async) {
  cordova.exec(
    successCb,
    failureCb,
    "GitstaCoreApiBridgePlugin",
    async ? "coreapicallasync" : "coreapicall",
    [action, args]
  );
};
