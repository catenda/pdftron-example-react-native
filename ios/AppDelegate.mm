#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <Tools/Tools.h> // /!\ react-native-pdftron

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"pdftronExample";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  /**
   /!\ react-native-pdftron
   Font selection header
   */
  UINavigationBarAppearance *appearance = [[UINavigationBarAppearance alloc] init];
  [appearance configureWithOpaqueBackground];
  [UINavigationBar appearanceWhenContainedInInstancesOfClasses:@[[PTPopoverNavigationController class]]].standardAppearance = appearance;
  [UINavigationBar appearanceWhenContainedInInstancesOfClasses:@[[PTPopoverNavigationController class]]].scrollEdgeAppearance = appearance;

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
