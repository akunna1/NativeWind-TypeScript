# NativeWind-TypeScript

Converting a regular React Native StyleSheet into NativeWind utility-first styling with TypeScript for cleaner, more maintainable code.

## Setup

Follow the official NativeWind Expo quick start guide:
[https://www.nativewind.dev/quick-starts/expo](https://www.nativewind.dev/quick-starts/expo)

---

## Example: Without NativeWind (Using StyleSheet)

```tsx
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
    borderRadius: 17.5, // Makes circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  redButton: {
    backgroundColor: '#f44336',
  },
  yellowButton: {
    backgroundColor: '#ffeb3b',
    color: '#000',
  },
  blueButton: {
    backgroundColor: '#2196f3',
  },
  greenButton: {
    backgroundColor: '#4caf50',
  },
  brownButton: {
    backgroundColor: '#795548',
  },
});
```

---

## Example: With NativeWind (Using Utility Classes)

```tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function ColorButtonsScreen() {
  return (
    <View className="flex-1 justify-center items-center p-4">
      {/* Button 1 - Red */}
      <TouchableOpacity className="h-9 w-9 rounded-full bg-red-600 flex justify-center items-center mb-2">
        <Text className="text-white text-xs">Red</Text>
      </TouchableOpacity>

      {/* Button 2 - Yellow */}
      <TouchableOpacity className="h-9 w-9 rounded-full bg-yellow-400 flex justify-center items-center mb-2">
        <Text className="text-black text-xs">Yellow</Text>
      </TouchableOpacity>

      {/* Button 3 - Blue */}
      <TouchableOpacity className="h-9 w-9 rounded-full bg-blue-600 flex justify-center items-center mb-2">
        <Text className="text-white text-xs">Blue</Text>
      </TouchableOpacity>

      {/* Button 4 - Green */}
      <TouchableOpacity className="h-9 w-9 rounded-full bg-green-600 flex justify-center items-center mb-2">
        <Text className="text-white text-xs">Green</Text>
      </TouchableOpacity>

      {/* Button 5 - Brown */}
      <TouchableOpacity className="h-9 w-9 rounded-full bg-brown-700 flex justify-center items-center mb-2">
        <Text className="text-white text-xs">Brown</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

## Benefits of NativeWind

* Cleaner, more readable JSX
* No need for separate StyleSheet files
* Rapid styling with Tailwind-like utility classes
* Easier to maintain and update styles
