#import "quick-md5.h"
#import "md5.h"
#include <iostream>
#include <sstream>

using namespace facebook;

// Returns false if the passed value is not a string or an ArrayBuffer.
bool md5_valueToString(jsi::Runtime& runtime, const jsi::Value& value, std::string* str) {
  if (value.isString()) {
    *str = value.asString(runtime).utf8(runtime);
    return true;
  }

  if (value.isObject()) {
    auto obj = value.asObject(runtime);
    if (!obj.isArrayBuffer(runtime)) {
      return false;
    }
    auto buf = obj.getArrayBuffer(runtime);
    *str = std::string((char*)buf.data(runtime), buf.size(runtime));
    return true;
  }

  return false;
}

void installMd5(jsi::Runtime& jsiRuntime) {
  std::cout << "Initializing react-native-quick-md5" << "\n";

  auto md5FromArrayBuffer = jsi::Function::createFromHostFunction(
      jsiRuntime,
      jsi::PropNameID::forAscii(jsiRuntime, "md5FromArrayBuffer"),
      1,  // string or ArrayBuffer
      [](jsi::Runtime& runtime, const jsi::Value& thisValue, const jsi::Value* arguments, size_t count) -> jsi::Value {
        std::string str;
        if(!md5_valueToString(runtime, arguments[0], &str)) {
          return jsi::Value(-1);
        }
        std::string strMd5 =  md5(str);

        return jsi::Value(jsi::String::createFromUtf8(runtime, strMd5));
      }
  );
  jsiRuntime.global().setProperty(jsiRuntime, "md5FromArrayBuffer", std::move(md5FromArrayBuffer));
}

void cleanupMd5() {
}
