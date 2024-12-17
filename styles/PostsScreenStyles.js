import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    position: "relative",
  },
  headerText: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
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
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 83,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerIcon: {
    flex: 1,
    alignItems: "center",
  },
  addPostWrapper: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addPostIcon: {
    color: "#FFFFFF",
    fontSize: 24,
  },
});
