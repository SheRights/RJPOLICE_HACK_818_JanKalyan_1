import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Animated} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Root, Popup} from '@kyupss/native-popup';
import FeedbackComponent from '../components/FeedbackComponent';
import * as colors from '../components/color';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const FeedBackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = text => {
    setFeedback(text);
  };

  const handleAddPhoto = () => {
    console.log('Add Photo button clicked');
  };

  const handleSubmit = () => {
    Popup.show({
      type: 'Success',
      title: 'Upload complete',
      button: false,
      textBody: 'Thank you for your feedback. Your insights light up our path!',
      buttonText: 'Ok',
      callback: () => Popup.hide(),
    });
  };

  return (
    <Root>
      <View style={styles.container}>
        <View style={styles.StarConatiner}>
          <FeedbackComponent />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label="Feedback"
            mode="outlined"
            multiline
            numberOfLines={10}
            value={feedback}
            onChangeText={handleFeedbackChange}
            style={styles.textInput}
          />

          <Button
            mode="outlined"
            onPress={handleAddPhoto}
            style={styles.addPhotoButton}
            labelStyle={styles.buttonLabel}>
            <View style={styles.buttonContent}>
              <FontAwesome5Icon
                name="camera"
                size={20}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Add Photo</Text>
            </View>
          </Button>

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
            labelStyle={styles.buttonLabel}>
            Post
          </Button>
        </View>
      </View>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  StarConatiner: {
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  textInput: {
    height: 150,
    marginBottom: 20,
    outlineColor: '#000',
    borderColor: '#000',
    backgroundColor: 'white', // Set background color for better visibility
  },
  addPhotoButton: {
    marginBottom: 25,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#000',
  },
});

export default FeedBackScreen;
