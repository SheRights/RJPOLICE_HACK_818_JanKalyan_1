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
import axios from 'axios';
import * as colors from '../components/color';

const { width } = Dimensions.get('window');

const AdminLanding = ({ navigation }) => {
  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    const fetchPoliceStations = async () => {
      try {
        const apiUrl = 'https://aawaz-backend-pthakare72003.replit.app/user/listStations';
        const response = await axios.get(apiUrl);
        const data = response.data;
        setPoliceStations(data);
      } catch (error) {
        console.error('Error fetching police stations:', error);
      }
    };

    fetchPoliceStations();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Registered Police Stations</Text>
        {policeStations.map((station, index) => (
          <TouchableOpacity
            key={index}
            style={styles.policeStationCard}
            onPress={() => {
              navigation.navigate('StationDetails', { station });
            }}
          >
            <Image source={{ uri: station.image }} style={styles.cardImage} />
            <View style={styles.policeTextContainer}>
              <Text style={styles.cardTitle}>{station.name}</Text>
              <Text style={styles.cardRating}>{`Rating: ${station.overall_rating}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  
});


export default AdminLanding;
