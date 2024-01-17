import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as colors from '../components/color';

const Registerpolice = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signupfun = async () => {
    if (name === '' && email === '' && pass === '') {
      ToastAndroid.show(
        'Enter the required fields',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      await auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          firestore()
            .collection('stations')
            .doc(email)
            .set({
              name: name,
              email: email,
              password: pass,
              description: '', 
              image: 'https://i.ibb.co/2YhGBzB/center.jpg',
            })
            .then(() => {
              console.log('Police Station added successfully!');
            });

          // Create feedbacks and cases collections under the police station
          firestore().collection('stations').doc(email).collection('feedbacks').add({});
          firestore().collection('stations').doc(email).collection('cases').add({});

          ToastAndroid.show(
            'Police Station Registered Successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          navigation.replace('Login');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            ToastAndroid.show(
              'The email address is already in use!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }

          if (error.code === 'auth/invalid-email') {
            ToastAndroid.show(
              'The email address is invalid!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
          if (error.code === 'auth/weak-password') {
            ToastAndroid.show(
              'Password should be more than 6 digits!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }

          console.error(error);
        });
    }
  };

  return (
    <View style={styles.f}>
      <ScrollView>
        <View style={styles.UpperContainer}>
          <View style={styles.LabelConatiner}></View>
        </View>

        <View style={styles.MiddleContainer}>
          <View style={styles.RegTitleContainer}>
            <Text style={styles.RegTitleText}>POLICE STATION REGISTRATION</Text>
          </View>
          <View style={styles.InputFieldsConatiner}>
            <TextInput
              style={styles.TextInputArea}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Police Station Name"
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
            />
            <TextInput
              style={styles.TextInputArea}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email ID"
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
            />
            <TextInput
              style={styles.TextInputArea}
              value={pass}
              onChangeText={text => setPass(text)}
              placeholder="Enter Password"
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.RegisterButtonConatiner}>
            <Button
              style={styles.Regbtn}
              onPress={() => signupfun()}
              title="REGISTER"
              color="#000"
            />
          </View>
        </View>

        <View style={styles.LowerContainerContent}>
          <View style={styles.AskLoginContainer}>
            <Text style={styles.txt}>Already have a police station account?{' '}</Text>

            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate('Login', { who: 'stations' })}>
              <Text style={{ color: '#000' }}> Login    </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Registerpolice;

const styles = StyleSheet.create({
  TextInputArea: {
    height: 40,
    width: '90%',
    alignItems: 'center',
    margin: 10,
    color: '#000',
    padding: 10,
    borderRadius: 10,
  },
  LabelText: {
    color: '#000',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 40,
    margin: 10,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  UpperContainer: {
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: colors.uppercircle,
    position: 'absolute',
  },
  LabelConatiner: {},
  MiddleContainer: {
    backgroundColor: colors.primary,
    marginVertical: '20%',
    marginHorizontal: '10%',
    borderRadius: 21,
    padding: 10,
  },
  Regbtn: {
    borderRadius: 21,
    height: 40,
    width: '90%',
  },
  RegTitleContainer: {},
  RegTitleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    color: 'black',
  },
  InputFieldsConatiner: {},
  RegisterButtonConatiner: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegButton: {
    backgroundColor: '#EEE6FF',
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  LowerContainerContent: {
    marginTop: 30,
  },
  AskLoginContainer: {
    marginTop: -80,
    alignItems: 'center',
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  boxContainer: {
    width: 100,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  custombtn: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
    color: '#000',
    width: '40%',
    borderRadius: 5,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  login: {
    color: '#000',
  },
  gbtn: {
    marginTop: 20,
    paddingTop: 30,

    width: '30%',
    position: 'absolute',
  },
});
