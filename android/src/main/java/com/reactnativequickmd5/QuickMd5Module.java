package com.reactnativequickmd5;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;


class QuickMd5Module extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("quickmd5");
  }

  private static native void initialize(long jsiPtr);
  private static native void destruct();

  public QuickMd5Module(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @NonNull
  @Override
  public String getName() {
    return "QuickMd5";
  }

  @Override
  public void initialize() {
    super.initialize();

    long contextPointer = this.getReactApplicationContext().getJavaScriptContextHolder().get();

    if (contextPointer == 0) {
      Log.e("QuickMd5", "Initialization failed due to void pointer");
    } else {
      QuickMd5Module.initialize(contextPointer);
    }
  }

  @Override
  public void onCatalystInstanceDestroy() {
    QuickMd5Module.destruct();
  }
}
