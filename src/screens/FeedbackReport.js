import React, { useState, useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import * as colors from '../components/color';

const { width } = Dimensions.get('window');

const rowData = [
  { title: 'Justice', progress: 0.3 },
  { title: 'Co-operation', progress: 0.5 },
  { title: 'Availability', progress: 0.8 },
  { title: 'Behaviour', progress: 0.2 },
];

const FeedbackReport = ({ navigation, route }) => {
  // Extract the station email from the route params
  const stationEmail = route.params.station;

  // State to manage the visibility of details
  const [showDetails, setShowDetails] = useState(false);

  // State to store the summary data
  const [summaryData, setSummaryData] = useState({});

  // State to store the specific station details
  const [stationDetails, setStationDetails] = useState({});

  // State to store feedback data
  const [feedbackData, setFeedbackData] = useState([]);

  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to fetch police station details and feedback data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch specific station details using stationEmail
        const stationDetailsResponse = await axios.get(
          `https://aawaz-backend-pthakare72003.replit.app/user/spec_station/${stationEmail}`
        );

        // Update the stationDetails state with fetched data
        setStationDetails(stationDetailsResponse.data);

        // Fetch feedback data for the specific station
        const feedbackResponse = await axios.get(
          `https://aawaz-backend-pthakare72003.replit.app/user/feedback/${stationEmail}`
        );

        // Update the feedbackData state with fetched data
        setFeedbackData(feedbackResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., display an error message to the user)
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [stationEmail]);

  // Function to toggle the visibility of details
  const toggleDetails = async () => {
    setShowDetails(!showDetails);

    if (!showDetails) {
      try {
        setIsLoading(true);

        // Send a POST request to the API with the feedbackData array
        const response = await axios.post(
          'https://aawaz-backend-pthakare72003.replit.app/user/generate_summary',
          { data: feedbackData }
        );

        // Update the summaryData state with fetched data
        setSummaryData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error (e.g., display an error message to the user)
      } finally {
        setIsLoading(false);
      }
    }
  };

  // useEffect to perform actions when summaryData changes
  useEffect(() => {
    console.log('Summary Data:', summaryData);
    // Additional actions if needed
  }, [summaryData]);

  return (
    <ScrollView style={styles.container}>
      {/* Top container containing station image and details */}
      <View style={styles.topContainer}>
        <Image
          source={{ uri: stationDetails.image }}
          style={styles.stationImage}
        />
        <View style={styles.stationDetailsContainer}>
          <Text style={styles.stationName}>{stationDetails.name}</Text>
          <Text style={styles.stationAddr}>{stationEmail}</Text>
        </View>
      </View>

      {/* Toggle button to show/hide details */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleDetails}
      >
        <Text style={styles.toggleButtonText}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Text>
      </TouchableOpacity>

      {/* Details section */}
      {showDetails && (
        <>
          {/* About container with summary report */}
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTextTitle}>Summary Report</Text>
            <Text style={styles.aboutTextDesc}>
              {summaryData.summary || 'Loading summary...'}
            </Text>
          </View>

          {/* Feedback data */}
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackTitle}>Feedback Data</Text>
            {feedbackData.map((item, index) => (
              <Text key={index} style={styles.feedbackText}>
                {item.text}
              </Text>
            ))}
          </View>

          {/* Progress bars for different criteria */}
          <View style={styles.progBarContainer}>
            {rowData.map((item, index) => (
              <View key={index} style={styles.progBar}>
                <View style={styles.progBarTextContainer}>
                  <Text style={styles.progBarText}>{item.title}</Text>
                </View>
                <Progress.Bar progress={item.progress} width={200} color="#000" />
              </View>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  topContainer: {
    flexDirection: 'row',
    width: width - 40,
    overflow: 'hidden',
    marginBottom: 20,
  },
  stationImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  stationDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  stationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  stationAddr: {
    fontSize: 15,
    color: '#000',
  },
  aboutContainer: {
    marginTop: 15,
  },
  aboutTextTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  aboutTextDesc: {
    color: 'grey',
    fontSize: 15,
    marginTop: 5,
  },
  feedbackContainer: {
    marginTop: 15,
  },
  feedbackTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  feedbackText: {
    color: 'grey',
    fontSize: 15,
    marginTop: 5,
  },
  progBarContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  progBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progBarTextContainer: {
    width: 120,
    marginRight: 20,
  },
  progBarText: {
    color: '#000',
    fontSize: 16,
  },
  toggleButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackReport;
