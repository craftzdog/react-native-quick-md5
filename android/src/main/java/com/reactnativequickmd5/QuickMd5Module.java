package com.reactnativequickmd5;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;


class QuickMd5Module extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("cpp");
  }

  private static native void initialize(long jsiPtr, String docDir);
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

    QuickMd5Module.initialize(
      this.getReactApplicationContext().getJavaScriptContextHolder().get(),
      this.getReactApplicationContext().getFilesDir().getAbsolutePath());
  }

  @Override
  public void onCatalystInstanceDestroy() {
    QuickMd5Module.destruct();
  }
}
