import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 83,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  userName: {
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  userEmail: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  post: {
    marginBottom: 32,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postCaption: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    marginVertical: 8,
  },
  wrapperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  commentCount: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  commentCountActive: {
    color: "#FF6C00",
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
    textDecorationLine: "underline",
    flexWrap: "wrap",
  },
});
