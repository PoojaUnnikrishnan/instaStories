import React from "react";
import LoginForm from "../Components/LoginScreen/LoginForm";
import { StyleSheet, View, Image } from "react-native";
const INSTAGRAM_LOGO =
  "https://clipartcraft.com/images/instagram-logo-png-2.png";
const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <LoginForm navigation={navigation} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
export default LoginScreen;
