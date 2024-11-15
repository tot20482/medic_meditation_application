import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { images, FONT, SIZES, COLORS } from "../../constants";

const Profile = () => {
  const [isActived, setIsActived] = useState("Stats");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={images.Profile} width={150} height={150} />
        <Text style={styles.profileName}>Afreen Khan</Text>
        <Text style={styles.profileAddr}>Lucknow, India</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btnStats, isActived === "Stats" && styles.activeBtn]}
          onPress={() => setIsActived("Stats")}
        >
          <Text
            style={[
              styles.statsText,
              isActived === "Stats" && styles.activeText,
            ]}
          >
            Stats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnAchie,
            isActived === "Achievements" && styles.activeBtn,
          ]}
          onPress={() => setIsActived("Achievements")}
        >
          <Text
            style={[
              styles.achieText,
              isActived === "Achievements" && styles.activeText,
            ]}
          >
            Achievements
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image source={images.Stats} width={235} height={271} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    marginTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    fontSize: SIZES.xxLarge + 4,
    fontFamily: FONT.regular,
    color: COLORS.gray1,
  },
  profileAddr: {
    fontSize: SIZES.large + 3,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnStats: {
    width: "50%",
    alignItems: "center",
    borderBottomWidth: 4,
    borderColor: "#fff",
    padding: 4,
  },
  btnAchie: {
    width: "50%",
    alignItems: "center",
    borderBottomWidth: 4,
    borderColor: "#fff",
    padding: 4,
  },
  statsText: {
    fontSize: SIZES.medium + 2,
    textTransform: "uppercase",
    fontFamily: FONT.bold,
    color: COLORS.gray,
  },
  achieText: {
    fontSize: SIZES.medium + 2,
    textTransform: "uppercase",
    fontFamily: FONT.bold,
    color: COLORS.gray,
  },
  activeBtn: {
    borderBottomWidth: 4,
    borderColor: COLORS.primary,
  },
  activeText: {
    color: COLORS.primary,
  },
  imgContainer: {
    alignItems: "center",
    paddingTop: 75,
  },
});
