import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT, icons, images, SIZES } from "../../constants";

const Watch = ({ title, content, imagesUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.contentText}>{content}</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Watch now</Text>
          <Image
            source={icons.Watch}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image source={imagesUrl} resizeMode="cover" />
      </View>
    </View>
  );
};

export default Watch;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  contentContainer: {
    width: "70%",
    paddingRight: 10, // Slight padding to separate text from image
  },
  imgContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: SIZES.xLarge + 4,
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    fontWeight: "bold",
  },
  contentText: {
    fontSize: SIZES.medium + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 138,
    height: 39,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 16,
    paddingTop: 6,
    paddingBottom: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "semibold",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  btnImg: {
    width: 13,
    height: 13,
    marginLeft: 4,
  },
});
