import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import CarouselComponent from '../components/CarouselComponent';
import axios from 'axios';
import * as colors from '../components/color';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

const carouselData = [
  {
    image: 'https://i.ibb.co/2YhGBzB/center.jpg',
  },
  {
    image: 'https://i.ibb.co/2YhGBzB/center.jpg',
  },
  {
    image: 'https://i.ibb.co/2YhGBzB/center.jpg',
  },
];

const HomeScreen = ({ navigation }) => {
  const [topRatedStations, setTopRatedStations] = useState([]);
  const [recentFeedbacks, setRecentFeedbacks] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = useCallback(() => {
    try {
      axios
        .get('https://aawaz-backend-pthakare72003.replit.app/user/listStations')
        .then(response => {
          const sortedStations = response.data.sort(
            (a, b) => b.overall_rating - a.overall_rating,
          );
          const top3Stations = sortedStations.slice(0, 3);
          setTopRatedStations(top3Stations);
        })
        .catch(error =>
          console.error('Error fetching top-rated stations:', error),
        );

      axios
        .get('https://aawaz-backend-pthakare72003.replit.app/user/feedback?orderBy=date&order=desc')
        .then(response => setRecentFeedbacks(response.data))
        .catch(error =>
          console.error('Error fetching recent feedbacks:', error),
        );
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      setDataFetched(true);
    }
  }, []);

  useFocusEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  });
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder="Search Police Stations"
        onSearch={text => console.log(text)}
      />

      <View style={styles.carouselContainer}>
        <CarouselComponent data={carouselData} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Top Rated Police Stations</Text>
        {topRatedStations.map(station => (
          <TouchableOpacity
            key={station.id}
            style={styles.policeStationCard}
            onPress={() => {
              navigation.navigate('StationDetails', {stationId: station.id});
            }}>
            <Image
              source={{
                uri: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/07/18/Pictures/bikaner_f64af148-a927-11e9-bdb2-acd0277ecbef.jpg',
              }}
              style={styles.cardImage}
            />
            <View style={styles.policeTextContainer}>
              <Text style={styles.cardTitle}>{station.name}</Text>
              <Text
                style={
                  styles.cardRating
                }>{`Rating: ${station.overall_rating}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.feedbacksContainer}>
        <Text style={styles.feedbackTitle}>Recent Feedbacks</Text>
        <ScrollView horizontal={true}>
          <View style={styles.feedbackCards}>
            {recentFeedbacks.map(feedback => (
              <View key={feedback.id} style={styles.feedbackCard}>
                <View style={styles.feedbackImageNameContainer}>
                  <Image
                    source={{
                      uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
                    }}
                    style={styles.feedbackImage}
                  />
                  <Text style={styles.userName}>{feedback.user_name}</Text>
                </View>
                <View style={styles.ActualFeedbackContainer}>
                  <Text style={styles.stationName}>
                    Station: {feedback.police_station}
                  </Text>
                  <Text style={styles.actualfeedback}>
                    <Text style={styles.stationName}>Feedback: </Text>
                    {feedback.feedback_text}
                  </Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.secondary,
  },
  carouselContainer: {
    marginBottom: 16,
    borderRadius: 15,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: '#000',
  },
  policeStationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  policeTextContainer: {
    marginLeft: 15,
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardRating: {
    fontSize: 14,
    color: '#000',
  },
  feedbacksContainer: {},
  feedbackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -20,
    color: '#000',
  },
  feedbackCards: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 130,
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
    marginLeft: 5,
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
  },
  IconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
