const g = global as any

function stringToArrayBuffer(str: string) {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export function stringMd5(data: string): string {
  return g.md5FromArrayBuffer(data)
}

export function binaryMd5(data: string | ArrayBuffer): string {
  data = typeof data === 'string' ? stringToArrayBuffer(data) : data

  return g.md5FromArrayBuffer(data)
}

const isHermes = () => !!g.HermesInternal
console.log('Hermes enabled:', isHermes())
