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

const carouselData = [
  {
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
];
const topRatedPoliceStations = [
  {
    id: 1,
    name: 'Police Station 1',
    rating: 4.8,
    image: 'https://example.com/police-station1.jpg',
  },
  {
    id: 2,
    name: 'Police Station 2',
    rating: 3.0,
    image: 'https://example.com/police-station2.jpg',
  },
  {
    id: 3,
    name: 'Police Station 3',
    rating: 2.5,
    image: 'https://example.com/police-station3.jpg',
  },
];

const recentFeedbacks = [
  {
    id: 1,
    userName: 'User 1',
    image: 'https://example.com/user1.jpg',
    feedback: 'Great experience with the police station!',
  },
  {
    id: 2,
    userName: 'User 2',
    image: 'https://example.com/user2.jpg',
    feedback: 'Quick response and helpful staff.',
  },
  {
    id: 3,
    userName: 'User 3',
    image: 'https://example.com/user3.jpg',
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
            <Text style={styles.cardTitle}>{station.name}</Text>
            <Text style={styles.cardRating}>{`Rating: ${station.rating}`}</Text>
          </View>
        ))}
      </View>

      {/* Recent Feedbacks */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Feedbacks</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentFeedbacks.map(feedback => (
            <View key={feedback.id} style={styles.feedbackCard}>
              <Image source={{uri: feedback.image}} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{feedback.userName}</Text>
              <Text style={styles.cardFeedback}>{feedback.feedback}</Text>
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
    backgroundColor: '#fff',
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
    borderRadius: 15
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  policeStationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  feedbackCard: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardRating: {
    fontSize: 14,
    color: '#888',
  },
  cardFeedback: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;
