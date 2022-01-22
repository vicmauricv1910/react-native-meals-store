import React, { useState, useEffect } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    fetchFonts();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <MealsNavigator />;
}
