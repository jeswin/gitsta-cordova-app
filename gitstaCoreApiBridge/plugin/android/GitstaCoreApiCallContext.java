package com.gitsta.gitstaapp.plugins.GitstaCoreApiBridge;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class GitstaCoreApiCallContext implements Runnable {
  private native boolean coreapicallasync(String action, String args);

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
    return coreapicallasync(action, args);
  }

  private void callback(String result) {
    this.callbackContext.success(result);
  }
}
