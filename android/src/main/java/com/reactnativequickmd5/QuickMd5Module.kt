package com.reactnativequickmd5

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.security.MessageDigest
import java.util.*
import kotlin.text.Charsets.UTF_8

fun ByteArray.toHex() = joinToString("") { "%02x".format(it) }

class QuickMd5Module(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "QuickMd5"
  }

  @ReactMethod(isBlockingSynchronousMethod = true)
  fun calc(string: String, inputEncoding: String, outputEncoding: String): String {
    var data: ByteArray
    if (inputEncoding == "base64") {
      data = Base64.getDecoder().decode(string)
    } else {
      data = string.toByteArray(UTF_8)
    }
    var digest = MessageDigest.getInstance("MD5").digest(data)

    if (outputEncoding == "base64") {
      return Base64.getEncoder().encodeToString(digest)
    } else {
      return digest.toHex()
    }
  }

}
