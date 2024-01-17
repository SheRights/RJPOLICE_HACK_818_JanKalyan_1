import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios'; // Import Axios library

import * as colors from '../components/color';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

const rowData = [
  { title: 'Justice', progress: 0.3 },
  { title: 'Co-operation', progress: 0.5 },
  { title: 'Availability', progress: 0.8 },
  { title: 'Behaviour', progress: 0.2 },
];

const data = [
  { text: "The police station staff was very helpful and courteous." },
  { text: "I appreciate the prompt response and professionalism of the officers." },
  { text: "Had a positive experience. The officers were understanding and supportive." },
  { text: "Unpleasant encounter with a rude officer. Needs improvement in behavior." },
  { text: "The facilities were clean and well-maintained. Good overall service." }
];

const FeedbackReport = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [summaryData, setSummaryData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleDetails = async () => {
    setShowDetails(!showDetails);

    if (!showDetails) {
      try {
        setIsLoading(true);

        // Send a POST request to the API with the data array
        const response = await axios.post(
          'https://aawaz-backend-pthakare72003.replit.app/user/generate_summary',
          { data }
        );

        setSummaryData(response.data);
      } catch (error) {
        console.error('Error fetching summary data:', error);
        // Handle error (e.g., display an error message to the user)
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // You can perform additional actions when summaryData changes
    console.log('Summary Data:', summaryData);
  }, [summaryData]);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.topContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/2YhGBzB/center.jpg' }}
          style={styles.stationImage}
        />
        <View style={styles.stationDetailsContainer}>
          <Text style={styles.stationName}>Bibwewadi Police Station</Text>
          <Text style={styles.stationAddr}>Bibwewadi, Pune</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleDetails}
      >
        <Text style={styles.toggleButtonText}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Text>
      </TouchableOpacity>

      {showDetails && (
        <>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTextTitle}>Summary Report</Text>
            <Text style={styles.aboutTextDesc}>
              {summaryData.summary || 'Loading summary...'}
            </Text>
          </View>

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
  allFeedbackButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  allFeedbackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
