import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Status = ({ route, navigation }) => {
  const { user } = route.params;
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", marginTop: 20 }}> {user} status</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default Status;
