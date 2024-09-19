#### Setup
- https://www.nativewind.dev/quick-starts/expo

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ColorButtonsScreen() {
  return (
    <View style={styles.container}>
      {/* Button 1 - Red */}
      <TouchableOpacity style={[styles.button, styles.redButton]}>
        <Text style={styles.buttonText}>Red</Text>
      </TouchableOpacity>

      {/* Button 2 - Yellow */}
      <TouchableOpacity style={[styles.button, styles.yellowButton]}>
        <Text style={styles.buttonText}>Yellow</Text>
      </TouchableOpacity>

      {/* Button 3 - Blue */}
      <TouchableOpacity style={[styles.button, styles.blueButton]}>
        <Text style={styles.buttonText}>Blue</Text>
      </TouchableOpacity>

      {/* Button 4 - Green */}
      <TouchableOpacity style={[styles.button, styles.greenButton]}>
        <Text style={styles.buttonText}>Green</Text>
      </TouchableOpacity>

      {/* Button 5 - Brown */}
      <TouchableOpacity style={[styles.button, styles.brownButton]}>
        <Text style={styles.buttonText}>Brown</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    height: 35,
    width: 35,
    borderRadius: 17.5, // Half of the height to make it a circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  redButton: {
    backgroundColor: '#f44336', // Red
  },
  yellowButton: {
    backgroundColor: '#ffeb3b', // Yellow
    color: '#000', // Text color for better contrast
  },
  blueButton: {
    backgroundColor: '#2196f3', // Blue
  },
  greenButton: {
    backgroundColor: '#4caf50', // Green
  },
  brownButton: {
    backgroundColor: '#795548', // Brown
  },
});


