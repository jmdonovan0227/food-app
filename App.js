import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// render content within 'safe area' of the device by using SafeAreaView or to be precise above the notch and status bar.
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <SafeAreaProvider>
      <RestaurantsScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainer: {
    backgroundColor: "green",
    padding: 16,
  },

  listContainer: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});
