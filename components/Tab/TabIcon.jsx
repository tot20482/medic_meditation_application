import { View, Image } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const TabIcon = ({ icon, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? COLORS.primary : COLORS.gray}
        style={{ width: 24, height: 24 }}
      />
    </View>
  );
};

export default TabIcon;
