import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, Dimensions} from 'react-native';
import * as colors from '../components/color';
import auth from '@react-native-firebase/auth';

var {width, height} = Dimensions.get('window');

const lowerConatinerList = [
  {
    name: 'Edit Profile',
    icon: 'pencil-alt',
    callfun: 'editProfile',
  },
  {
    name: 'Feedback History',
    icon: 'file',
    callfun: 'feedbackHistory',
  },
  {
    name: 'Logout',
    icon: 'arrow-left',
    callfun: 'logout',
  },
];

const ProfileScreen = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return navigation.replace('Askwho');
  }

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Askwho');
      });
  };
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.upperConatiner}>
        <FontAwesome5Icon name="user" size={100} color="white" />
        <Text style={styles.upperConatinerText}>Hello Nikita!</Text>
      </View>

      <View style={styles.lowerConatiner}>
        <View style={styles.lowerConatinerList}>
          {lowerConatinerList.map((item, index) => {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  style={styles.lowerConatinerItem}
                  onPress={() => {auth()
                    .signOut()
                    .then(() => {
                      navigation.replace('Askwho');
                    });}}>
                  <FontAwesome5Icon name={item.icon} size={20} color="black" />
                  <Text style={styles.lowerConatinerListText}>{item.name}</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    marginTop: 20,
                    marginBottom: 40,
                  }}></View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  upperConatiner: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  upperConatinerText: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  lowerConatiner: {
    padding: 30,
  },
  lowerConatinerList: {},
  lowerConatinerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 40,
  },
  lowerConatinerListText: {
    marginLeft: 20,
    fontSize: 20,
    color: '#000',
  },
});
