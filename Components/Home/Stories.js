import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import { USERS } from "../../Data/users";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();
  const USERS = [
    {
      id: 1,
      user: "Your Story",
      image:
        "https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/04/attitude-stylish-instagram-whatsapp-dp-for-girls.png",
    },
    {
      id: 2,
      user: "Lin Dan",
      image:
        "https://th.bing.com/th/id/R.dbf901833f48cdd2a04d2ae1ada91515?rik=tUp0J0PO%2fJqYUQ&riu=http%3a%2f%2fdaman.co.id%2fdaman.co.id%2fwp-content%2fuploads%2f2013%2f04%2fscoring-style-with-sport-lin-dan-for-dolce-gabbana_4.jpg&ehk=tAyJw9mLGEoemOsDmQeJS2Kpulw0Q%2f26dk3oZuG2sEE%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      user: "Scarlett Johansson",
      image:
        "https://th.bing.com/th/id/R.98d00f353b4f4edc1391921c5edd0b4a?rik=FFPfmw6Edr2jSQ&riu=http%3a%2f%2fwww.moviehdwallpapers.com%2fwp-content%2fuploads%2f2014%2f10%2fscarlett-johansson-hd-wallpapers-31.jpg&ehk=gkT4AvgsgICGhXlHciL9otipUHnR0Dn3OPkS1VszUCs%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      user: "Emma Watson",
      image: "https://images2.alphacoders.com/611/611390.jpg",
    },
    {
      id: 5,
      user: "Will Smith",
      image: "https://wallpapercave.com/wp/wp1833806.jpg",
    },

    {
      id: 6,
      user: "Selena Gomez",
      image:
        "https://th.bing.com/th/id/OIP.yg6gQ1eFT1KS226iYvHhHgHaEo?pid=ImgDet&rs=1",
    },
  ];

  return (
    // <View style={{ marginBottom: 13 }}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {USERS.map((story, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{ marginBottom: 25 }}
            onPress={() =>
              navigation.push("Status", {
                name: story.name,
                image: story.image,
              })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {story.id == 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 10,
                    zIndex: 1,
                  }}
                >
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: "#c61063",
                  borderWidth: 0.5,
                  borderRadius: 100,
                  borderColor: "#c13584",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: story.image }}
                  style={{
                    resizeMode: "cover",
                    width: "93%",
                    height: "93%",
                    borderRadius: 100,
                    backgroundColor: "orange",
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  color: "white",
                }}
              >
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
