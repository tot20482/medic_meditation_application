import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Stack } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeaderBtn from "../../components/Header/ScreenHeaderBtn";
import MedicStyle from "../../components/home/MedicStyle";
import Watch from "../../components/home/Watch";
import { Tabs } from "expo-router"; // Ngoài ra nếu bạn cần
import { StatusBar } from "expo-status-bar"; // Chỉ sử dụng expo-status-bar

const MockData = [
  { title: "Calm", iconsUrl: icons.Calm },
  { title: "Relax", iconsUrl: icons.Relax },
  { title: "Focus", iconsUrl: icons.Focus },
  { title: "Anxious", iconsUrl: icons.Anxious },
];

const MockContentData = [
  {
    title: "Meditation 101",
    content: "Techniques, Benefits, and a Beginner's How-To",
    imagesUrl: images.People,
  },
  {
    title: "Cardio Meditation",
    content: "Basics of Yoga for Beginners or Experienced Professionals",
    imagesUrl: images.Heart,
  },
];

const Home = () => {
  return (
    <>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.homeText}>Welcome back, Afreen!</Text>
            <Text style={styles.homeSubText}>How are you feeling today?</Text>
          </View>

          <View style={styles.medicContainer}>
            {MockData.map((item, index) => (
              <MedicStyle
                key={index}
                iconsUrl={item.iconsUrl}
                title={item.title}
              />
            ))}
          </View>

          <View style={styles.contentContainer}>
            {MockContentData.map((item, index) => (
              <Watch
                key={index}
                title={item.title}
                content={item.content}
                imagesUrl={item.imagesUrl}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  medicContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  contentContainer: {
    marginTop: 60,
  },
  textContainer: { marginTop: 30 },
  headerText: {
    fontSize: SIZES.large,
    fontFamily: FONT.extraBold,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  homeText: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    fontWeight: "semibold",
  },
  homeSubText: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});

export default Home;
