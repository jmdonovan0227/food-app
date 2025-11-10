import { SafeAreaProvider } from "react-native-safe-area-context";
// render content within 'safe area' of the device by using SafeAreaView or to be precise above the notch and status bar.
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
