import { View, Text } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";

// Prevent the splash screen from hiding immediately
Splash.preventAutoHideAsync();

const RootLayout = () => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    AleBlack: require("../assets/fonts/Alegreya-Black.ttf"),
    AleExtraBold: require("../assets/fonts/Alegreya-ExtraBold.ttf"),
    AleBold: require("../assets/fonts/Alegreya-Bold.ttf"),
    AleMedium: require("../assets/fonts/Alegreya-Medium.ttf"),
    AleRegular: require("../assets/fonts/Alegreya-Regular.ttf"),
  });

  const onRootLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Use a useEffect hook to call onRootLayoutView when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      onRootLayoutView();
    }
  }, [fontsLoaded, onRootLayoutView]);

  // Render a loading screen or the rest of your app
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Stack onLayout={onRootLayoutView} />;
};

export default RootLayout;
