import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import CarouselComponent from '../components/CarouselComponent';

import * as colors from '../components/color';

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
const topRatedPoliceStations = [
  {
    id: 1,
    name: 'Police Station 1',
    rating: 4.8,
    image: 'https://i.ibb.co/QvG4yvc/ps1.jpg',
  },
  {
    id: 2,
    name: 'Police Station 2',
    rating: 3.0,
    image: 'https://i.ibb.co/3M1pYfZ/ps2.jpg',
  },
  {
    id: 3,
    name: 'Police Station 3',
    rating: 2.5,
    image: 'https://i.ibb.co/ZmDv5fD/ps3.jpg',
  },
];

const recentFeedbacks = [
  {
    id: 1,
    userName: 'User 1',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Great experience with the police station!',
  },
  {
    id: 2,
    userName: 'User 2',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Quick response and helpful staff.',
  },
  {
    id: 3,
    userName: 'User 3',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Could improve the waiting time.',
  },
];

const HomeScreen = () => {
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
        {topRatedPoliceStations.map(station => (
          <View key={station.id} style={styles.policeStationCard}>
            <Image source={{uri: station.image}} style={styles.cardImage} />
            <View style={styles.policeTextContainer}>
              <Text style={styles.cardTitle}>{station.name}</Text>
              <Text
                style={styles.cardRating}>{`Rating: ${station.rating}`}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.sectionContainer2}>
        <Text style={styles.sectionTitle2}>Recent Feedbacks</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentFeedbacks.map(feedback => (
            <View key={feedback.id} style={styles.feedbackCard}>
              <View style={styles.feedbackTopSection}>
                <Image
                  source={{uri: feedback.image}}
                  style={styles.feedbackImage}
                />
                <Text style={styles.feedbackUserName}>{feedback.userName}</Text>
              </View>

              <View style={styles.feedbackContent}>

              </View>

              <View style={styles.feedbackBottomSection}>

              </View>

            </View>
          ))}
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
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
  feedbackCard: {
    flexDirection: 'column',
    marginRight: 16,
    justifyContent: 'space-between',
    width: "100%"
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
  cardFeedback: {
    fontSize: 14,
    textAlign: 'center',
  },
  sectionContainer2: {
    marginBottom: 106,
  },
  sectionTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -20,
    color: '#000',
  },
  feedbackTopSection:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feedbackImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 8,
  },
});

export default HomeScreen;
