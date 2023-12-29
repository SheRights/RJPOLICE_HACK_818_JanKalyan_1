import {StyleSheet, Text, View, Image, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

const cardcontent = [
  {
    name: 'Police',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'User',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Admin',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const AskWho = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.cardholder}>
          {cardcontent.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.card} onPress={()=>{navigation.navigate('Login')}}>
                <View style={styles.cardAlign}>
                  <Image source={{uri: item.image}} style={styles.cardimage} />
                  <View>
                  <Text style={styles.cardtitle}>{item.name}</Text>
                    <Text style={styles.carddescription}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
  );
};

export default AskWho;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0', 
    justifyContent: 'center',
  },
  cardholder: {
    flexDirection: 'column',
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffffff', 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  cardAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardimage: {
    width: 80,
    height: 80, 
    borderRadius: 8,
    marginRight: 16,
  },
  cardtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  carddescription: {
    fontSize: 16,
    color: '#555',
  },
});
