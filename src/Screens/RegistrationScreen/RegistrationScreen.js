import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
const backImage = require("../../image/BG.png");

const buttonImg = require("../../image/add.png");

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleLogin = (text) => {
    setLogin(text);
  };
  const handleMail = (text) => {
    setMail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const register = () => {
    if (!login || !mail || !password) {
      alert("Enter all data pleace!!!");
      return;
    }
    console.log(`Login: ${login}, Email: ${mail}, Password: ${password}`);
    navigation.navigate("Home", { screen: "PostsScreen" });
  };

  

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.maincontainer}>
      <ImageBackground source={backImage} style={styles.backImg}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.containerKeyB}
        >
          <View style={styles.container}>
            <View style={styles.pfotoContainer}>
              <TouchableOpacity style={styles.addbutton} activeOpacity={0.5}>
                <ImageBackground
                  source={buttonImg}
                  style={{ width: "100%", height: "100%" }}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Registration</Text>

            <TextInput
              style={[styles.inputLogin, inputFocused && styles.inputFocused]}
              placeholder="Login"
              inputMode="text"
              value={login}
              onChangeText={handleLogin}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <TextInput
              style={[
                styles.inputMailPassw,
                inputFocused && styles.inputFocused,
              ]}
              placeholder="Email address"
              inputMode="email"
              value={mail}
              onChangeText={handleMail}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <TextInput
              style={[
                styles.inputMailPassw,
                inputFocused && styles.inputFocused,
              ]}
              placeholder="Password"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={handlePassword}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />

            <TouchableOpacity
              style={styles.passwShow}
              activeOpacity={0.5}
              onPress={toggleShowPassword}
            >
              <Text style={styles.passwShowText}>
                {showPassword ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.registerButton,
                keyboardVisible && styles.inputFocused,
              ]}
              activeOpacity={0.5}
              onPress={register}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginLink, keyboardVisible && styles.inputFocused]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginLinkText}>
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

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
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyB: {
    justifyContent: "flex-end",
  },
  form: {
    marginLeft: 20,
    marginRight: 20,
  },
  pfotoContainer: {
    marginTop: -70,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addbutton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputMailPassw: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  hiddenButton: {
    opacity: 0,
    height: 0,
    width: 0,
    position: "absolute",
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default RegistrationScreen;
