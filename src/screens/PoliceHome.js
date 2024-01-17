import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import * as Progress from 'react-native-progress';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'; // Import Axios
import * as colors from '../components/color'
import auth from '@react-native-firebase/auth'; // Import Firebase Auth


const { width, height } = Dimensions.get('window');

const PoliceHome = ({ navigation }) => {
  const [stationData, setStationData] = useState({
    description: '',
    email: '',
    image: '',
    mean_rating: 0,
    name: '',
    password: '',
    subcollection_data: [{}],
  });

  
  useEffect(() => {
    const fetchStationData = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userEmail = user.email;
          const apiUrl = `https://aawaz-backend-pthakare72003.replit.app/user/spec_station/${userEmail}`;
          const response = await axios.get(apiUrl);
          const data = response.data;
          setStationData(data);
        }
      } catch (error) {
        console.error('Error fetching station data:', error);
      }
    };

    fetchStationData();
  }, []); 
  const StarRating = ({ rating, starSize = 20, starColor = '#000' }) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesome5Icon
          key={i}
          name="star"
          size={starSize}
          color={starColor}
          solid
        />,
      );
    }

    return <View style={{ flexDirection: 'row' }}>{stars}</View>;
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={{ uri: stationData.image }} style={styles.StationImage} />
          <View style={styles.stationDetailsContainer}>
            <Text style={styles.stationName}>{stationData.name}</Text>
            <Text style={styles.stationAddr}>{stationData.email}</Text>
          </View>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTextTitle}>About police station</Text>
          <Text style={[styles.aboutTextDesc, { flexWrap: 'wrap' }]}>{stationData.description}</Text>
        </View>

        <View style={styles.floatingButtonsContainer}>
          <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('AllCases')}>
            <Text style={styles.floatingButtonText}>View Cases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>Feedbacks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>Insights</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ratingAndReviewContainer}>
          <Text style={styles.ratingAndReviewText}>Ratings And Reviews</Text>
          <View style={styles.ratingContentContainer}>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingStarTextContainer}>
                <Text style={styles.ratingText}>{stationData.mean_rating}</Text>
                <View style={styles.ratingStarContainer}>
                  {/* Assuming mean_rating is a number */}
                  <StarRating rating={Math.round(stationData.mean_rating)} />
                </View>
              </View>
            </View>

            <View style={styles.progBarContainer}>
                <View style={styles.progBar}>
                  <Text style={styles.progBarText}>1</Text>
                  <Progress.Bar progress={0.3} width={200} color="black" />
                </View>
                <View style={styles.progBar}>
                  <Text style={styles.progBarText}>2</Text>
                  <Progress.Bar progress={0.5} width={200} color="black" />
                </View>
                <View style={styles.progBar}>
                  <Text style={styles.progBarText}>3</Text>
                  <Progress.Bar progress={0.8} width={200} color="black" />
                </View>
                <View style={styles.progBar}>
                  <Text style={styles.progBarText}>4</Text>
                  <Progress.Bar progress={0.2} width={200} color="black" />
                </View>
                <View style={styles.progBar}>
                  <Text style={styles.progBarText}>5</Text>
                  <Progress.Bar progress={0.1} width={200} color="black" />
                </View>
              </View>
          </View>
        </View>

        <View style={styles.feedbacksContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.feedbackCards}>
              {stationData.subcollection_data.map((feedback, index) => (
                <View key={index} style={styles.feedbackCard}>
                  <View style={styles.feedbackImageNameContainer}>
                    <Image source={{ uri: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/18/Pictures/bikaner_f64af148-a927-11e9-bdb2-acd0277ecbef.jpg' }} style={styles.feedbackImage} />
                    <Text style={styles.userName}>{feedback.user_name}</Text>
                  </View>
                  <View style={styles.ActualFeedbackContainer}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>{feedback.station_name}</Text>
                    <Text style={styles.actualfeedback}>{feedback.text}</Text>
                  </View>
                  <View style={styles.IconsContainer}>
                    <FontAwesome5Icon name="thumbs-up" size={20} color="#000" />
                    <FontAwesome5Icon name="thumbs-down" size={20} color="#000" />
                    <FontAwesome5Icon name="reply-all" size={20} color="#000" />
                    <FontAwesome5Icon name="comment" size={20} color="#000" />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default PoliceHome;

  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      width: width,
    },
    topContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: width - 40,
      overflow: 'hidden',
    },
    StationImage: {
      width: 80,
      height: 80,
      borderRadius: 20,
    },
    stationDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
    },
    stationName: {
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    stationAddr: {
      marginLeft: 20,
      fontSize: 15,
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
      fontSize: 13,
    },
    floatingButtonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    floatingButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      borderRadius: 20,
      padding: 10,
      width: width / 3.5,
    },
    floatingButtonText: {
      fontSize: 15,
      color: '#fff',
    },
    ratingAndReviewContainer: {
      marginTop: 20,
    },
    ratingAndReviewText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#000',
  },
    ratingContentContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ratingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
    },
    ratingStarTextContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ratingText: {
      fontSize: 45,
      color: '#000',
    },
    ratingStarContainer: {},
    progBarContainer: {},
    progBar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    progBarText: {
      color: '#000',
      marginRight: 10,
    },
    feedbacksContainer: {
      marginTop: 20,
      marginBottom: 110
    },
    feedbackTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 10,
      color: '#000',
    },
    feedbackCards: {
      display: 'flex',
      flexDirection: 'row',
      // marginBottom: 130,
      width: '100%',
    },
    feedbackCard: {
      width: width - 30,
      backgroundColor: colors.uppercircle,
      padding: 10,
      borderRadius: 20,
      marginRight: 20,
    },
    feedbackImage: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    feedbackImageNameContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userName: {
      marginLeft: 20,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#000',
    },
    ActualFeedbackContainer: {
      marginTop: 15,
    },
    actualfeedback: {
      fontSize: 15,
      color: '#000',
      fontStyle: 'italic',
    },
    IconsContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
  });
  