import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import * as colors from '../components/color';
import auth from '@react-native-firebase/auth';

const { width } = Dimensions.get('window');

const Feedbacks = ({ navigation , route}) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const station = route.params.station;

  useEffect(() => {
    // code to get user email by firebase auth
    const user = auth().currentUser;

    if (user) {
      const userEmail = user.email;

      const fetchData = async () => {
        try {
          const apiUrl = `https://aawaz-backend-pthakare72003.replit.app/user/spec_station/${station}`;
          const response = await axios.get(apiUrl);
          setFeedbacks(response.data.subcollection_data); // Assuming that feedbacks are nested within the 'feedbacks' property
        } catch (error) {
          console.error('Error fetching feedbacks:', error);
        }
      };

      fetchData();
    }
  }, []); 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.feedbackCards}>
        {feedbacks.map((feedback, index) => (
          <View key={index} style={styles.feedbackCard}>
            <View style={styles.feedbackImageNameContainer}>
              {/* <Image source={{ uri: feedback.image }} style={styles.feedbackImage} /> */}
              <Text style={styles.userName}>{feedback.user_name}</Text>
            </View>
            <View style={styles.ActualFeedbackContainer}>
              <Text style={styles.stationName}>Station: {feedback.station_name}</Text>
              <Text style={styles.actualfeedback}>
                <Text style={styles.stationName}>Feedback: </Text>
                {feedback.text}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  feedbackCards: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  feedbackCard: {
    backgroundColor: colors.uppercircle,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: width - 40, // Adjusted to fit within the screen width with padding
  },
  feedbackImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  feedbackImageNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  ActualFeedbackContainer: {
    marginTop: 10, // Adjusted margin for better spacing
  },
  stationName: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  actualfeedback: {
    fontSize: 15,
    color: '#000',
    fontStyle: 'italic',
    marginTop: 5, // Adjusted margin for better spacing
  },
});

export default Feedbacks;
