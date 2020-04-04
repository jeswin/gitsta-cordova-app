package com.gitsta.gitstaapp.plugins.GitstaCoreApiBridge;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import android.util.Log;

import com.gitsta.gitstaapp.plugins.GitstaCoreApiBridge.GitstaCoreApiCallContext;

/*
   TODO: This leaks memory. Call free defined in lib.rs
  Gotta do two things:
    1. Release all strings created coreside.
    2. Release the ApiCallContext once async action is complete.
*/

public class GitstaCoreApiBridgePlugin extends CordovaPlugin {
  private native void coreapiinit();

  private native String coreapicallsync(String action, String args);

  private static final int NUMBER_OF_CORES = Runtime.getRuntime().availableProcessors();

  // Sets the amount of time an idle thread waits before terminating
  private static final int KEEP_ALIVE_TIME = 1;
  // Sets the Time Unit to seconds
  private static final TimeUnit KEEP_ALIVE_TIME_UNIT = TimeUnit.SECONDS;

  // A queue of Runnables
  private final BlockingQueue<Runnable> workQueue;
  private final ThreadPoolExecutor threadPool;

  public GitstaCoreApiBridgePlugin() {
    // Instantiates the queue of Runnables as a LinkedBlockingQueue
    workQueue = new LinkedBlockingDeque<Runnable>();

    // Creates a thread pool manager
    // param1: initial pool size, param2: max pool size
    threadPool = new ThreadPoolExecutor(NUMBER_OF_CORES * 2, NUMBER_OF_CORES * 2, KEEP_ALIVE_TIME, KEEP_ALIVE_TIME_UNIT,
        workQueue);
  }

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    coreapiinit();
  }

  @Override
  public boolean execute(String action, JSONArray argsArray, CallbackContext callbackContext) throws JSONException {
    String coreApiAction = argsArray.getString(0);
    String coreApiArgs = argsArray.getString(1);

    if (action.equals("coreapicall")) {
      return invoke(coreApiAction, coreApiArgs, callbackContext);
    } else if (action.equals("coreapicallasync")) {
      return invokeAsync(coreApiAction, coreApiArgs, callbackContext);
    } else {
      return false;
    }
  }

  private boolean invoke(String coreApiAction, String coreApiArgs, CallbackContext callbackContext) {
    String result = coreapicallsync(coreApiAction, coreApiArgs);
    callbackContext.success(result);
    return true;
  }

  private boolean invokeAsync(String coreApiAction, String coreApiArgs, CallbackContext callbackContext) {
    GitstaCoreApiCallContext callContext = new GitstaCoreApiCallContext(coreApiAction, coreApiArgs, callbackContext);
    this.threadPool.execute(callContext);
    return true;
  }

  static {
    System.loadLibrary("gitstacoreapi");
  }
}