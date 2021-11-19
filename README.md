# About this branch

This branch is the first integration of all new features with **Expo** support that allows you to test Siitch real time on 
a real device using Expo Go app. Of course, you can still test it using Xcode on a simulator like before, but the command
changes from `npm start` to `react-native start`. I don't recommend you pull from this branch, because there are some 
dependency changes that may damage the original project when merging. However, I do recommend you checkout this branch to 
your local repository and develop on it because testing through Expo Go is way easier than using a simulator.

If you run it on a simulator with m1 chip mac, the app will still crash during image prediction (After you hit camera button).

***  

# Dependencies removed
1. "@tensorflow-models/mobilenet": "^2.1.0"
2. "expo-image-picker": "^10.2.3"
3. "typescript": "^4.4.3"

# Dependencies added
### 2021/11/05
1. "expo": "~42.0.1"
2. "react-native-ui-lib": "^6.2.1" UI library
3. "increase-memory-limit": "^1.0.7" Used to publish project to Expo

### 2021/09/25
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
### 2021/11/05
1. Removed original MLTool prototype and added new files
2. Removed 'Screenshots' folder
3. Removed 'tsconfig.json' to remove typescript support
4. Modified 'app.json' to support Expo
5. Modified 'metro.config.js' to support .bin model files
6. Modified 'package.json' to change dependencies
7. Modified 'LandingPage.js' to hide and show tab in the MLTool according to the current screen
8. Modified 'info.plist' to remove redundant permission descriptions
9. Added 'Camera.png' camera button, 'arrow.png' submit button, 'redClock_3pm.png' clock icon under ./images

### 2021/09/25
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
5. Go back to root folder by `cd ..`. (Step 4 and 5 are not required when use Expo)
6. Start through `expo start`(Use Expo) or `react-native start`(Use simulator).
### Second(Use Expo):
1. Browser will open automatically, a developer page will show up
2. Start to test using Expo Go
### Second(Use simulator): In Xcode
1. Open Xcode and open the project `AwesomeProject.xcworkspace` under ios folder.
2. Run on simulator.
***
