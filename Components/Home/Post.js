import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/ios-glyphs/90/fa314a/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/344/ffffff/filled-topic.png",
  },
  {
    name: "share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/telegram-app.png",
  },
  {
    name: "save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/bookmark-ribbon--v1.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30, marginTop: 30 }}>
      <Divider orientation="vertical" width={1} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", fontWeight: "700", marginLeft: 5 }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgstyle={styles.footerIcon} imgurl={postFooterIcons[0].imageUrl} />
      <Icon imgstyle={styles.footerIcon} imgurl={postFooterIcons[1].imageUrl} />
      <Icon imgstyle={styles.footerIcon} imgurl={postFooterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgstyle={styles.footerIcon} imgurl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);
const Icon = ({ imgstyle, imgurl }) => (
  <TouchableOpacity>
    <Image style={imgstyle} source={{ uri: imgurl }} />
  </TouchableOpacity>
);
const Likes = ({ post }) => (
  <View atyle={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "bold" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);
const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);
const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#c61063",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "32%",
  },
});
export default Post;
