import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as colors from '../components/color';

const cardcontent = [
  {
    name: 'Police',
    image: 'https://cdn3d.iconscout.com/3d/premium/thumb/policeman-6368703-5250850.png',
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
      <Text style={styles.title}>Who are you?</Text>
      <View style={styles.cardholder}>
        {cardcontent.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <View style={styles.cardAlign}>
                <Image source={{uri: item.image}} style={styles.cardimage} />
                <Text style={styles.cardtitle}>{item.name}</Text>
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
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20
  },
  cardholder: {
    padding: 20,
    overflow: 'hidden',
    width: '100%'
  },
  card: {
    padding: 10,
    overflow: 'hidden',
    width: "100%",
    marginBottom: 30,
    backgroundColor: colors.primary,
    borderRadius: 20,
    elevation: 10
  },
  cardAlign: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardimage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  cardtitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
