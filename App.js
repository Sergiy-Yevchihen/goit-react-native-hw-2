

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";

import { useFonts } from "expo-font";

const backImage = require("./src/image/BG.png");

export default function App() {

   const [fontsLoaded] = useFonts({
     RobotoBold: require("./src/fonts/Roboto-Bold.ttf"),
     RobotoRegular: require("./src/fonts/Roboto-Regular.ttf"),
     RobotoMedium: require("./src/fonts/Roboto-Medium.ttf"),
   });
  

   if (!fontsLoaded) {
     return null;
   }
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScrennFunc = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground source={backImage} style={styles.backImg}>
          {activeScreen === 0 ? (
            <LoginScreen changeScrenn={changeScrennFunc} />
          ) : (
            <RegistrationScreen changeScrenn={changeScrennFunc} />
          )}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  backImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
