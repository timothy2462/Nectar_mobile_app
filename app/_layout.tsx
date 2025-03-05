import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
    const [loaded] = useFonts({
    "Gilroy-ExtraBold": require("../assets/fonts/Gilroy-ExtraBold 800.ttf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light 300.ttf"),
    "gilroy-medium": require("../assets/fonts/gilroy-medium.ttf"),

  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
     <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}