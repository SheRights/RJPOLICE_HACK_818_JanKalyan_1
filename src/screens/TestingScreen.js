import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

const TestingScreen = () => {
  useEffect(() => {
    // Check if TTS is supported on the device
    Tts.getInitStatus().then(() => {
      // Set the language (optional)
      Tts.setDefaultLanguage('en-US');
    });

    // Clean up TTS when the component is unmounted
    return () => {
      Tts.stop();
    };
  }, []);

  const handleSpeak = () => {
    // Speak the desired text
    Tts.speak('Hello, welcome to the Testing Screen!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testing Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleSpeak}>
        <Text style={styles.buttonText}>Speak</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TestingScreen;
