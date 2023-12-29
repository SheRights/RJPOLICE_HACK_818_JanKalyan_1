import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, Dimensions} from 'react-native';
import * as colors from '../components/color';

var {width, height} = Dimensions.get('window');

const lowerConatinerList = [
  {
    name: 'Edit Profile',
    icon: 'pencil-alt',
  },
  {
    name: 'Feedback History',
    icon: 'file',
  },
  {
    name: 'Logout',
    icon: 'arrow-left',
  },
];

const ProfileScreen = () => {
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
              <View>
                <TouchableOpacity style={styles.lowerConatinerItem} key={index}>
                  <FontAwesome5Icon name={item.icon} size={20} color="black" />
                  <Text style={styles.lowerConatinerListText}>{item.name}</Text>
                </TouchableOpacity>
                <View key={index+1}
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    marginTop: 20,
                    marginBottom: 40
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
