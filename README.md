# About this branch

This branch doesn't have **Expo**, which means you can't tune the app on your phone via `expo start`. You can only run
this app through `npm start` and then run it from Xcode on a simulator.

***  
# Dependencies removed
1. "@tensorflow-models/mobilenet": "^2.1.0"
2. "expo-image-picker": "^10.2.3"

# Dependencies added
###2021/11/06
1. "react-native-ui-lib": "^6.2.1" UI library
###2021/09/25
1. "@react-native-async-storage/async-storage": "^1.15.8"
2. "@tensorflow-models/mobilenet": "^2.1.0"
3. "@tensorflow/tfjs": "^3.9.0"
4. "@tensorflow/tfjs-react-native": "^0.7.0"
5. "jpeg-js": "^0.4.3"
6. "react-native-fs": "^2.18.0"
7. "react-native-unimodules": "^0.14.9"
8. "expo-camera": "^11.2.2"
9. "expo-gl": "^10.4.2"
10. "expo-image-manipulator": "^9.2.2"
11. "expo-image-picker": "^10.2.3"
12. "typescript": "^4.4.3"
***  

# Changes on files and folders
###2021/11/06
1. Removed original MLTool prototype and added new files
2. Removed 'Screenshots' folder
3. Modified 'metro.config.js' to support .bin model files
4. Modified 'package.json' to change dependencies
5. Modified 'LandingPage.js' to hide and show tab in the MLTool according to the current screen
6. Modified 'info.plist' to remove redundant permission descriptions
7. Added 'Camera.png' camera button, 'arrow.png' submit button, 'redClock_3pm.png' clock icon under ./images
###2021/09/25
1. Added 'MLTool' folder and files for MLTool under it
2. Added 'Screenshots' folder for README
3. Modified 'app.json' to test Expo (Doesn't affect anything)
4. Modified files in ios folder to apply react-native-unimodules so that we can use many great expo components(see
   document: [unimodules](https://docs.expo.dev/bare/installing-unimodules/))
5. Modified 'package.json' to add dependencies
6. Modified 'App.js' to apply react-native-paper (see document: [react-native-paper](https://callstack.github.io/react-native-paper/getting-started.html))
7. Modified 'LandingPage.js' to add the MLTool tab
***

# How to run this project
### First: In IDE
1. Open this project in VSCode ,WebStorm, ...
2. Open a terminal under the project root.
3. Run `npm install` or `yarn install`.
4. Enter ios folder through `cd ios` and then do `pod install`. If using m1 chip mac, run `arch -x86_64 pod install`.
5. Go back to root folder by `cd ..`.
6. Start through `npm start`.
### Second: In Xcode
1. Open Xcode and open our project `AwesomeProject.xcworkspace` under ios folder.
2. Run on simulator.
