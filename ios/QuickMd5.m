#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(QuickMd5, NSObject)

RCT_EXTERN__BLOCKING_SYNCHRONOUS_METHOD(calc:(NSString*)string withInputEncoding:(NSString*)inputEncoding
       outputEncoding:(NSString*)outputEncoding);

@end
