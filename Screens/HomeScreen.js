import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import Stories from "../Components/Home/Stories";
import Post from "../Components/Home/Post";
import { POSTS } from "../Data/posts";
import BottomTabs, { bottomTabIcons } from "../Components/Home/BottomTabs";

const HomeScreen = ({ navigation, USERS }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories USERS={USERS} />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
