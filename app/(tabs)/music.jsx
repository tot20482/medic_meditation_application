import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { images, icons, SIZES, FONT, COLORS } from "../../constants";
import Sounds from "../../components/Music/Sounds";

const MockData = [
  {
    imgUrl: images.PaintingForest,
    title: "Painting Forest",
    countListent: "59899",
    minute: "20",
  },
  {
    imgUrl: images.Mountain,
    title: "Mountaineers",
    countListent: "45697",
    minute: "15",
  },
  {
    imgUrl: images.Desert,
    title: "Lovely Deserts",
    countListent: "9428",
    minute: "39",
  },
  {
    imgUrl: images.Hill,
    title: "The Hill Sides",
    countListent: "52599",
    minute: "50",
  },
];

const Music = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Image
            source={images.Relax_Sounds}
            width={339}
            height={195}
            style={styles.imgContainer}
          />
          <View style={styles.imgContent}>
            <Text style={styles.imgHeader}>Relax Sounds</Text>
            <Text style={styles.imgSubHeader}>
              Sometimes the most productive thing you can do is relax.
            </Text>
            <TouchableOpacity style={styles.imgBtn}>
              <Text style={styles.imgBtnText}>Play Now</Text>
              <Image source={icons.Play} width={15} height={15} />
            </TouchableOpacity>
          </View>

          <View style={styles.soundsContainer}>
            {MockData.map((item, index) => (
              <Sounds
                key={index}
                imgUrl={item.imgUrl}
                title={item.title}
                countListent={item.countListent}
                minute={item.minute}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 35,
  },
  imgContainer: {
    position: "relative",
  },
  imgContent: {
    width: "60%",
    position: "absolute",
    top: 25,
    left: 40,
  },
  imgHeader: {
    fontSize: SIZES.xxLarge,
    color: "#fff",
    fontFamily: FONT.regular,
    fontWeight: "semibold",
  },
  imgSubHeader: {
    color: "#fff",
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  imgBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "70%",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  imgBtnText: {
    marginRight: 4,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  soundsContainer: {
    marginTop: 40,
  },
});
