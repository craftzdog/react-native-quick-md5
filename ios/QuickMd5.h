#import <React/RCTBridgeModule.h>

#ifdef __cplusplus
#import "quick-md5.h"
#endif

@interface QuickMd5 : NSObject <RCTBridgeModule>
@property (nonatomic, assign) BOOL setBridgeOnMainQueue;
@end
