import { View, StyleSheet, ImageBackground, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Post = ({ img, text, msgs, location }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.postImg}></ImageBackground>
      <Text style={styles.posText}>{text}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Feather name="message-circle" size={18} color="gray" />
          <Text>{msgs}</Text>
        </View>
        <View style={styles.info}>
          <EvilIcons name="location" size={24} color="gray" />
          <Text style={styles.infolink}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    justifyContent: "flex-start",
    padding: 10,
  },
  postImg: {
    flex: 4,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  posText: {
    textAlign: "left",
    marginTop: 8,
    fontWeight: "500",
    fontSize: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 10,
  },
  infolink: {
    textDecorationLine: "underline",
  },
  infoContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Post;
