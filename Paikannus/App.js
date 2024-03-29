import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Map from './screens/Map';


export default function App() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
