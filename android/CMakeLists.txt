project(QuickMd5)
cmake_minimum_required(VERSION 3.9.0)

set (PACKAGE_NAME "react-native-quick-md5")
set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 17)

file(TO_CMAKE_PATH "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi/jsi/jsi.cpp" libPath)

# Specifies a path to native header files.
include_directories(
  ../cpp
  "${NODE_MODULES_DIR}/react-native/React"
  "${NODE_MODULES_DIR}/react-native/React/Base"
  "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi"
)

add_library(quickmd5 # Library name
  SHARED
  ${libPath}
  ../cpp/quick-md5.cpp
  ../cpp/md5.cpp
  cpp-adapter.cpp
)

target_link_libraries(quickmd5)
