package com.reactnativequickmd5;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;


public class QuickMd5Module extends ReactContextBaseJavaModule {
  static {
    System.loadLibrary("quickmd5");
  }

  private static native void initialize(long jsiPtr, String docDir);

  public QuickMd5Module(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @NonNull
  @Override
  public String getName() {
    return "QuickMd5";
  }

  public static void install(ReactApplicationContext context) {
    QuickMd5Module.initialize(
      context.getJavaScriptContextHolder().get(),
      context.getFilesDir().getAbsolutePath());
  }
}
