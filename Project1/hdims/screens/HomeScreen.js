// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.gradientTop}></View>
      <View style={styles.gradientBottom}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Home Screen</Text>
          <Button
            title="Go to Graphs"
            onPress={() => navigation.navigate('Graphs')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
//   gradientTop: {
//     flex: 1,
//     backgroundColor: '#d3d3d3', // Light grey
//   },
  gradientBottom: {
    flex: 2,
    backgroundColor: '#a9a9a9', // Dark grey
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
