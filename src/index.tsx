import { NativeModules } from 'react-native'
import SparkMD5 from 'spark-md5'

const g = global as any

const Md5Module = NativeModules.QuickMd5

if (typeof Md5Module.install === 'function') {
  Md5Module.install()
}

function stringToArrayBuffer(str: string) {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export function stringMd5(data: string): string {
  if (typeof g.md5FromArrayBuffer !== 'undefined') {
    return g.md5FromArrayBuffer(data)
  } else {
    const spark = new SparkMD5()
    spark.append(data)
    return spark.end()
  }
}

export function binaryMd5(data: string | ArrayBuffer): string {
  data = typeof data === 'string' ? stringToArrayBuffer(data) : data

  if (typeof g.md5FromArrayBuffer !== 'undefined') {
    return g.md5FromArrayBuffer(data)
  } else {
    const spark = new SparkMD5.ArrayBuffer()
    spark.append(data)
    return spark.end()
  }
}
