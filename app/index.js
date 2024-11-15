import { View, Text } from "react-native";
import { Link } from "expo-router";
import { FONT, SIZES } from "../constants";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: FONT.black, fontSize: SIZES.xLarge }}>
        Welcome to Tot's first App
      </Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go to home
      </Link>
    </View>
  );
}
