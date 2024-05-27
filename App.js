import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textFormat}>My name is<Text style={styles.boldText}>Francis Donkor</Text> </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#bbff00',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textFormat:{
    fontSize: 24,
  },

    boldText: {
      fontWeight: 'bold',
    },
});
