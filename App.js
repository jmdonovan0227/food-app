import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// render content within 'safe area' of the device by using SafeAreaView or to be precise above the notch and status bar.
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Search</Text>
      </View>

      <View style={styles.listContainer}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchContainer: {
    backgroundColor: 'green',
    padding: 16,
  },

  listContainer: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
});