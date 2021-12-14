# About this branch

This branch is a bare workflow and doesn't have **Expo**, which means you will have to manage the ios XCode project manually,
and you can only tune the app on a simulator or locally on your iPhone with a mac or a hackintosh. But in a bare workflow,
you're not restricted to use libraries from Expo SDK, and you can do more customization to the project.

***

# How to run this project
### First: In IDE
1. Open this project in VSCode ,WebStorm, ...
2. Open a terminal under the project root.
3. Run `yarn install`.
4. Enter ios folder through `cd ios` and then do `pod install`. If using m1 chip mac, run `arch -x86_64 pod install`.

### Second: In Xcode
1. Open Xcode and open `AwesomeProject.xcworkspace` under the project's ios folder.
2. Start running.
