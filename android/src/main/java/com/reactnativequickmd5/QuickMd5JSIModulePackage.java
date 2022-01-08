package com.reactnativequickmd5;

import com.facebook.react.bridge.JSIModulePackage;
import com.facebook.react.bridge.JSIModuleSpec;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.Collections;
import java.util.List;

public class QuickMd5JSIModulePackage implements JSIModulePackage {
  @Override
  public List<JSIModuleSpec> getJSIModules(ReactApplicationContext reactApplicationContext, JavaScriptContextHolder jsContext) {
    QuickMd5Module.install(reactApplicationContext);
    return Collections.emptyList();
  }
}
