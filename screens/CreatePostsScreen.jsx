import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/CreatePostsStyles";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    console.log("Post Created", { title, location });
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoWrapper}>
        <TouchableOpacity style={styles.photoButton}>
          <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <Text style={styles.uploadText}>Завантажте фото</Text>

      {/* Назва */}
      <TextInput
        placeholder="Назва..."
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.locationWrapper}>
        <MaterialIcons
          name="location-on"
          size={24}
          color="#BDBDBD"
          style={styles.locationIcon}
        />
        <TextInput
          placeholder="Місцевість..."
          style={styles.locationInput}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Опублікувати</Text>
      </TouchableOpacity>

      <View style={styles.deleteWrapper}>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePostsScreen;
