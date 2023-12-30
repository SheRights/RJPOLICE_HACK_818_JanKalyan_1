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
    email: 'policestation@gmail.com',
    district: 'Pune',
  },
  {
    id: 2,
    name: 'Swargate Police Station',
    email: 'policestation@gmail.com',
    district: 'Pune',
  },
  {
    id: 3,
    name: 'Karvenagar Police Station',
    email: 'policestation@gmail.com',
    district: 'Pune',
  },
];



const PendingApprovals = ({navigation}) =>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Pending Police Station Approvals</Text>
        {topRatedPoliceStations.map(station => (
          <View key={station.id} style={styles.policeStationCard}>
            <View style={styles.policeTextContainer}>
              <Text style={styles.cardTitle}>{station.name}</Text>
              <Text style={styles.cardRating}>{`${station.email}`}</Text>
              <Text style={styles.cardRating}>{station.district}</Text>
              
              <TouchableOpacity >
                <Image source={require('../Assets/Select.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Assets/Cancel.png')}/>
              </TouchableOpacity>

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


export default PendingApprovals;
