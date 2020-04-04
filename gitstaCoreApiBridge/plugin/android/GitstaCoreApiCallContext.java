package com.gitsta.gitstaapp.plugins.GitstaCoreApiBridge;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class GitstaCoreApiCallContext implements Runnable {
  private native boolean coreapicall(String action, String args);

  String action;
  String args;
  CallbackContext callbackContext;

  public GitstaCoreApiCallContext(String action, String args, CallbackContext callbackContext) {
    this.action = action;
    this.args = args;
    this.callbackContext = callbackContext;
  }

  public void run() {
    this.invokeAsync(action, args);
  }

  private boolean invokeAsync(String action, String args) {
    return coreapicall(action, args);
  }

  private void success(String result) {
    this.callbackContext.success(result);
  }

  private void error(String error) {
    this.callbackContext.error(error);
  }

  private void callback(String message) {
    PluginResult result = new PluginResult(PluginResult.Status.OK, message);
    result.setKeepCallback(true);
    this.callbackContext.sendPluginResult(result);
  }
}