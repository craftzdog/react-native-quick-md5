#include <jni.h>
#include "quick-md5.h"

extern "C"
JNIEXPORT void JNICALL
Java_com_reactnativequickmd5_QuickMd5Module_initialize(JNIEnv* env, jclass clazz, jlong jsiPtr) {
  installMd5(*reinterpret_cast<facebook::jsi::Runtime*>(jsiPtr));
}

extern "C"
JNIEXPORT void JNICALL
Java_com_reactnativequickmd5_QuickMd5Module_destruct(JNIEnv* env, jclass clazz) {
  cleanupMd5();
}
