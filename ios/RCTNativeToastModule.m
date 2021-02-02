// RCTCalendarModule.m
#import "RCTNativeToastModule.h"
#import <React/RCTLog.h>

@implementation RCTNativeToastModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(showToast:(NSString *)message duration:(nonnull NSNumber *)duration)
{
 RCTLogInfo(@"Loggin message and duration %@", message);
}

@end
