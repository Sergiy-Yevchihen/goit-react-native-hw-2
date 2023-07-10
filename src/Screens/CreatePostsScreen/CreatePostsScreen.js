import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import { EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const trashImg = require("../../image/trash.png");

const BottomTabs = createBottomTabNavigator();

const CreatePost = ({ navigation }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postImg}>
        <TouchableOpacity style={styles.postImgAdd} activeOpacity={0.5}>
          <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.postImgText}>Add photo</Text>
      <View style={styles.postForm}>
        <TextInput
          style={styles.postName}
          placeholder="Title..."
          inputMode="text"
        />
        <TextInput
          style={styles.postName}
          placeholder="Location"
          inputMode="text"
        />
        <TouchableOpacity style={styles.postButton} activeOpacity={0.5}>
          <Text style={styles.postButtonText}>Publicate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CreatePostsScreen = ({ navigation }) => {
   const [activeTab, setActiveTab] = React.useState("Create post");
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderBottomColor: "#E8E8E8",
          // 
          borderBottomWidth: 2,
         tabBarActiveTintColor: "orange", 
        },
        
      }}
    >
      <BottomTabs.Screen
        options={{
          tabBarIcon: () => {
            return (
              <TouchableOpacity style={styles.trashButton} activeOpacity={0.5}>
                <EvilIcons name="trash" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("Home", { screen: "PostsScreen" })
              }
            >
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleAlign: "center",
          headerTitleStyle: { paddingBottom: 5 },
        }}
        name="Create post"
        component={CreatePost}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  trashButton: {
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  postContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  postImg: {
    flex: 2,
    width: "80%",
    height: "40%",
    color: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  postImgAdd: {
    width: 40,
    height: 40,
    borderRadius: 100,
    color: "#FFFFFF",
  },
  postImgText: {
    alignItems: "flex-start",
  },
  postForm: {
    flex: 3,
  },
  postButton: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  postName: {
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },
});

export default CreatePostsScreen;
