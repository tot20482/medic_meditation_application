import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
const MedicStyle = ({ iconsUrl, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Image source={iconsUrl} resizeMode="cover" style={styles.btnImg} />
      </TouchableOpacity>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  );
};

export default MedicStyle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  btnContainer: {
    width: 72,
    height: 75,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    width: 35,
    height: 35,
  },
  btnText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontFamily: FONT.regular,
  },
});
