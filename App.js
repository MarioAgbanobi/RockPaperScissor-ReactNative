import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import  Rockpaper from './components/Rockpaper'
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Rockpaper/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
