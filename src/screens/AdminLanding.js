import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import CarouselComponent from '../components/CarouselComponent';

import * as colors from '../components/color';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const topRatedPoliceStations = [
  {
    id: 1,
    name: 'Bibwewadi Police Station',
    rating: 4.8,
    image: 'https://i.ibb.co/QvG4yvc/ps1.jpg',
  },
  {
    id: 2,
    name: 'Swargate Police Station',
    rating: 3.0,
    image: 'https://i.ibb.co/3M1pYfZ/ps2.jpg',
  },
  {
    id: 3,
    name: 'Karvenagar Police Station',
    rating: 1.0,
    image: 'https://i.ibb.co/ZmDv5fD/ps3.jpg',
  },
];

///Alignment of images has to be changed.(Approve and Reject)

const AdminLanding = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Registered Police Stations</Text>
        {topRatedPoliceStations.map(station => (
          <TouchableOpacity key={station.id} style={styles.policeStationCard} onPress={() => {navigation.navigate('StationDetails')}}>
            <Image source={{uri: station.image}} style={styles.cardImage} />
            <View style={styles.policeTextContainer}>
              <Text style={styles.cardTitle}>{station.name}</Text>
              <Text
                style={styles.cardRating}>{`Rating: ${station.rating}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
            <TouchableOpacity onPress={() => {navigation.navigate('PendingApprovals')}}>
            <View>
              <Text style={styles.sectionTitle}>Pending Approvals (Click me)</Text>
            </View>
          </TouchableOpacity>
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
