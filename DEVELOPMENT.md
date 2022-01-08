You may have to edit `CMAkeLists.txt` as following for Android:

```diff
diff --git a/android/CMakeLists.txt b/android/CMakeLists.txt
index d749939..cc6250d 100644
--- a/android/CMakeLists.txt
+++ b/android/CMakeLists.txt
@@ -5,7 +5,7 @@ set (CMAKE_CXX_STANDARD 11)

 add_library(quickmd5 # Library name
   SHARED
-  ../../react-native/ReactCommon/jsi/jsi/jsi.cpp
+  ../node_modules/react-native/ReactCommon/jsi/jsi/jsi.cpp
   ../cpp/quick-md5.cpp
   ../cpp/md5.cpp
   cpp-adapter.cpp
@@ -14,9 +14,9 @@ add_library(quickmd5 # Library name
 # Specifies a path to native header files.
 include_directories(
   ../cpp
-  ../../react-native/React
-  ../../react-native/React/Base
-  ../../react-native/ReactCommon/jsi
+  ../node_modules/react-native/React
+  ../node_modules/react-native/React/Base
+  ../node_modules/react-native/ReactCommon/jsi
 )

 target_link_libraries(quickmd5)
```
