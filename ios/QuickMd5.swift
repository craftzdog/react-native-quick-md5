import Foundation
import var CommonCrypto.CC_MD5_DIGEST_LENGTH
import func CommonCrypto.CC_MD5
import typealias CommonCrypto.CC_LONG

@objc(QuickMd5)
class QuickMd5: NSObject {

    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }

    @objc(calc:withInputEncoding:outputEncoding:)
    func calc(string: String, inputEncoding: String, outputEncoding: String) -> String {
        let length = Int(CC_MD5_DIGEST_LENGTH)
        let messageData = inputEncoding == "utf8" ? string.data(using:.utf8)! : Data(base64Encoded: string)!
        var digestData = Data(count: length)

        _ = digestData.withUnsafeMutableBytes { digestBytes -> UInt8 in
            messageData.withUnsafeBytes { messageBytes -> UInt8 in
                if let messageBytesBaseAddress = messageBytes.baseAddress, let digestBytesBlindMemory = digestBytes.bindMemory(to: UInt8.self).baseAddress {
                    let messageLength = CC_LONG(messageData.count)
                    CC_MD5(messageBytesBaseAddress, messageLength, digestBytesBlindMemory)
                }
                return 0
            }
        }
        
        if (outputEncoding == "base64") {
            return digestData.base64EncodedString()
        } else {
            return digestData.map { String(format: "%02hhx", $0) }.joined()
        }
    }
}
