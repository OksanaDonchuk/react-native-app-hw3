import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import BgImg from "../assets/images/bg-img.jpg";
import styles from "../styles/ProfileScreenStyles";

const ProfileScreen = ({ navigation }) => {
  const posts = [
    {
      id: 1,
      image: require("../assets/images/Home_photo_1.png"),
      caption: "Захід на чорному морі",
      location: "Ukraine",
      likes: 10,
    },
    {
      id: 2,
      image: require("../assets/images/Home_photo_2.png"),
      caption: "Гори восени",
      location: "Ukraine",
      likes: 8,
    },
    {
      id: 3,
      image: require("../assets/images/Home_photo_3.png"),
      caption: "Міський пейзаж",
      location: "Kyiv",
      likes: 12,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={BgImg} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.logoutBtn}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../assets/images/Avatar.png")}
                style={styles.avatar}
              />

              <TouchableOpacity style={styles.closeIconWrapper}>
                <MaterialIcons name="close" size={18} color="#BDBDBD" />
              </TouchableOpacity>
            </View>

            <Text style={styles.userName}>Natali Romanova</Text>

            {posts.map((post) => (
              <View key={post.id} style={styles.post}>
                <Image source={post.image} style={styles.postImage} />
                <View style={styles.wrapperRow}>
                  <View style={styles.commentSection}>
                    <Feather name="message-circle" size={24} color="#FF6C00" />
                    <Text style={styles.commentCount}>4</Text>
                  </View>
                  <View style={styles.likeSection}>
                    <MaterialIcons name="thumb-up" size={24} color="#FF6C00" />
                    <Text style={styles.likeCount}>{post.likes}</Text>
                  </View>
                  <View style={styles.locationSection}>
                    <MaterialIcons
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                    <Text style={styles.locationText}>{post.location}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;
