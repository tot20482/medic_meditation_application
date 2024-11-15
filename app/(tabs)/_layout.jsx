import { Image, StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect, Stack } from "expo-router";
import { COLORS, FONT, icons, images, SIZES } from "../../constants";
import { StatusBar } from "expo-status-bar";
import ScreenHeaderBtn from "../../components/Header/ScreenHeaderBtn";

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

const TabsLayout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fff" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconsUrl={icons.Tab} dimension={20} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconsUrl={images.Avatar} dimension={40} />
          ),
          headerTitle: () => <Text style={styles.headerText}>Medic</Text>,
        }}
      />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.Profile} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="music"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.Sounds} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.Profile} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  headerText: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
});
