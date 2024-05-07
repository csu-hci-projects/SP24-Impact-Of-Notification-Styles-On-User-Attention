# Impact of Notification Styles on User Attention

This is a mobile app built with React Native and Expo Router for CS464 to study the impact of notification styles on user attention while reading. The app presents users with reading material and sends notifications during the reading process to measure their attention and comprehension.

The app is hosted through AWS Amplify and can be found here: https://main.d2ui043a3wxlw.amplifyapp.com/

Short Overview Video: https://youtu.be/HwPqogAiRMc
Demo + Code Overview: https://youtu.be/xAy8w36ZWtE
Link to Overleaf: https://www.overleaf.com/read/spzggqqmrjjm#c5f580 

## Prerequisites

Before running the app, ensure that you have the following installed on your system:

- Node.js (version 12 or above)
- npm (Node Package Manager)
- Expo

## Installation 

1. Clone the repository:
   git clone https://github.com/csu-hci-projects/SP24-Impact-Of-Notification-Styles-On-User-Attention.git
2. Navigate to the project directory
3. Install the dependencies:
   npm install
   
## Running the App

To run the app, follow these steps:

1. Start the Expo development server:
   npx expo start
   
3. The Expo Developer Tools will open in your default web browser. You can choose to run the app on an iOS simulator, Android emulator, or your physical device using the Expo Go app.

- For iOS Simulator:
  - Make sure you have Xcode installed on your macOS system.
  - Click on "Run on iOS Simulator" in the Expo Developer Tools.

- For Android Emulator:
  - Make sure you have Android Studio installed and an Android emulator set up.
  - Click on "Run on Android device/emulator" in the Expo Developer Tools.

- For Physical Device:
  - Install the Expo Go app on your iOS or Android device from the respective app store.
  - Scan the QR code displayed in the Expo Developer Tools using the Expo Go app.

3. The app will be bundled and launched on the selected device/emulator.

## App Structure

The app consists of the following main components:

- `InstructionsScreen`: Displays the instructions for the experiment and allows users to start the reading process.
- `ReadingScreen`: Presents the reading material to the user and tracks their reading time.
- `NotificationModal`: Displays notifications during the reading process based on the notification type (intrusive or non-intrusive).
- `WpmScreen`: Calculates and displays the user's reading speed in words per minute (WPM) after each reading session.
- `ThankYouScreen`: Shows a thank you message to the user upon completion of the experiment.

The app uses Expo Router for navigation between screens.
## Installation

1. Clone the repository:
2. Navigate to the project directory CS464_Experiment
3. Install the main dependencies: React Native, Expo, Expo Router, React-Navigation

## Dependencies

The app relies on the following main dependencies:

- React Native
- Expo
- Expo Router
- React Navigation

For a complete list of dependencies, refer to the `package.json` file.
