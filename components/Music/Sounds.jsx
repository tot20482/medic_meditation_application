import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";

const Sounds = ({ imgUrl, title, countListent, minute }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={imgUrl} height={80} width={80} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textListen}>{countListent} Listening</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textMin}>{minute} Min</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Sounds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 20,
  },
  textTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
    fontWeight: "bold",
  },
  textListen: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  textMin: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});
