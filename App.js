

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import RegistrationScreen from "./src/component/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/component/LoginScreen/LoginScreen";



const backImage = require("./src/image/BG.png");

export default function App() {

  
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreenFunc = (value) => {
    setActiveScreen(value);
  };

  let screenComponent;
  if (activeScreen === 0)  {
    screenComponent = <RegistrationScreen changeScreen={changeScreenFunc} />;
  } else {
    screenComponent = <LoginScreen changeScreen={changeScreenFunc} />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <ImageBackground source={backImage} style={styles.backImg}>
          {screenComponent}
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

