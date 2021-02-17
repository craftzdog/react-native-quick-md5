cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

add_library(quickmd5 # Library name
  SHARED
  ../../react-native/ReactCommon/jsi/jsi/jsi.cpp
  ../cpp/quick-md5.cpp
  ../cpp/md5.cpp
  cpp-adapter.cpp
)

# Specifies a path to native header files.
include_directories(
  ../cpp
  ../../react-native/React
  ../../react-native/React/Base
  ../../react-native/ReactCommon/jsi
)

target_link_libraries(quickmd5)
