import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import * as colors from '../components/color';

const SplashScreen = ({navigation}) => {
  const [initialising, setInitialising] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initialising) {
      setInitialising(false);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (initialising) return null;

  if (!user) {
    setTimeout(() => {
      navigation.replace('Askwho');
    }, 4000);
  } else {
    navigation.replace('Bottomtab');
  }
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Lottie
          source={require('../Assets/Aawaz.json')}
          autoPlay
          loop
          style={styles.illu}
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.SplashText}>Aawaz</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
  },
  TextContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  SplashText: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  illu: {
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
});