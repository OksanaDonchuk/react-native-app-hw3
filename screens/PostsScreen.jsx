import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Avatar from "../assets/images/Avatar.png";
import HomePhoto1 from "../assets/images/Home_photo_1.png";
import HomePhoto2 from "../assets/images/Home_photo_2.png";
import styles from "../styles/PostsScreenStyles";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.userSection}>
          <Image source={Avatar} style={styles.avatar} />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>

        <View style={styles.post}>
          <Image source={HomePhoto1} style={styles.postImage} />
          <Text style={styles.postCaption}>Ліс</Text>
          <View style={styles.wrapperRow}>
            <View style={styles.commentSection}>
              <Feather name="message-circle" size={24} color="#BDBDBD" />
              <Text style={styles.commentCount}>0</Text>
            </View>
            <View style={styles.locationSection}>
              <MaterialIcons name="place" size={24} color="#212121" />
              <Text style={styles.locationText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.post}>
          <Image source={HomePhoto2} style={styles.postImage} />
          <Text style={styles.postCaption}>Захід на чорному морі</Text>
          <View style={styles.wrapperRow}>
            <View style={styles.commentSection}>
              <Feather name="message-circle" size={24} color="#FF6C00" />
              <Text style={[styles.commentCount, styles.commentCountActive]}>
                8
              </Text>
            </View>
            <View style={styles.locationSection}>
              <MaterialIcons name="place" size={24} color="#212121" />
              <Text style={styles.locationText}>Ukraine</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
