package com.reactnativequickmd5;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class QuickMd5Module extends ReactContextBaseJavaModule {
  public static final String NAME = "QuickMd5";
  private static native void initialize(long jsiPtr, String docDir);

  public QuickMd5Module(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @NonNull
  @Override
  public String getName() {
    return NAME;
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean install() {
    try {
      System.loadLibrary("quickmd5");

      ReactApplicationContext context = getReactApplicationContext();
      initialize(
        context.getJavaScriptContextHolder().get(),
        context.getFilesDir().getAbsolutePath()
      );
      return true;
    } catch (Exception exception) {
      return false;
    }
  }
}
