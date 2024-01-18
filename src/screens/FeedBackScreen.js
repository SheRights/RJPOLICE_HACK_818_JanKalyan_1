import React, { useState, useEffect } from 'react';
import { View, StyleSheet, LogBox } from 'react-native';
import { TextInput, Button, Menu, Provider } from 'react-native-paper';
import { Root, Popup } from '@kyupss/native-popup';
import FeedbackComponent from '../components/FeedbackComponent';
import * as colors from '../components/color';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';

const FeedBackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleAddPhoto = () => {
    console.log('Add Photo button clicked');
  };

  const handleSubmit = async () => {
    try {
      if (!selectedStation) {
        // Display error popup if station is not selected
        Popup.show({
          type: 'Danger',
          title: 'Error',
          button: false,
          textBody: 'Please select a station before submitting feedback.',
          buttonText: 'Close',
          callback: () => Popup.hide(),
        });
        return;
      }

      if (rating === 0) {
        // Display error popup if rating is not selected
        Popup.show({
          type: 'Danger',
          title: 'Error',
          button: false,
          textBody: 'Please provide a rating before submitting feedback.',
          buttonText: 'Close',
          callback: () => Popup.hide(),
        });
        return;
      }

      const response = await axios.post(`https://aawaz-backend-pthakare72003.replit.app/user/feedback/add/${userEmail}`, {
        station_name: selectedStation,
        ratings: rating,
        text: feedback,
      });

      console.log('Feedback API response:', response.data);

      // Display success popup
      Popup.show({
        type: 'Success',
        title: 'Feedback Added',
        button: false,
        textBody: 'Thank you for your feedback. Your insights light up our path!',
        buttonText: 'Close',
        callback: () => Popup.hide(),
      });
    } catch (error) {
      console.error('Error posting feedback:', error);
      // Display error popup
      Popup.show({
        type: 'Danger',
        title: 'Error',
        button: false,
        textBody: 'An error occurred while posting your feedback. Please try again later.',
        buttonText: 'Close',
        callback: () => Popup.hide(),
      });
    }
  };

  const fetchStations = async () => {
    try {
      const stationsSnapshot = await firestore().collection('stations').get();
      const stationList = stationsSnapshot.docs.map((doc) => doc.data().email);
      setStations(stationList);
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  };

  useEffect(() => {
    // Ignore unnecessary log warning
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

    // Set the user's email in the state
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }

    // Fetch stations from Firebase
    fetchStations();
  }, []);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);

  const handleStationSelect = (station) => {
    setSelectedStation(station);
    closeMenu();
  };

  const handleRatingChange = (value) => {
    setRating(value);
    console.log(value);
  };

  return (
    <Root>
      <Provider>
        <View style={styles.container}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu} style={styles.dropdownButton}>{selectedStation || 'Select Station'}</Button>}
          >
            {stations.map((station) => (
              <Menu.Item key={station} onPress={() => handleStationSelect(station)} title={station} />
            ))}
          </Menu>

          <View style={styles.StarContainer}>
            <FeedbackComponent onRatingChange={handleRatingChange} />
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
              mode="contained"
              onPress={handleSubmit}
              style={styles.submitButton}
              labelStyle={styles.buttonLabel}>
              Post
            </Button>
          </View>
        </View>
      </Provider>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  dropdownButton: {
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  StarContainer: {
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
    backgroundColor: 'white', 
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#000',
    marginTop: 15,
  },
});

export default FeedBackScreen;
