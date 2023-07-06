
import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import React, { useState } from "react";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";

const backImage = require("./src/image/BG.png");

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreen = (value) => {
    setActiveScreen(value);
  };

  let screenComponent;
  if (activeScreen === 0) {
    screenComponent = <LoginScreen changeScreen={changeScreen} />;
  } else if (activeScreen === 1) {
    screenComponent = <RegistrationScreen changeScreen={changeScreen} />;
  } else if (activeScreen === 2) {
    screenComponent = <PostsScreen changeScreen={changeScreen} />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.maincontainer}>
        <ImageBackground source={backImage} style={styles.backImg}>
          {screenComponent}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  backImg: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
