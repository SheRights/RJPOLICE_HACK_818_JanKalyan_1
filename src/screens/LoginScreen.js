import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import * as colors from '../components/color';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const loginfun = async () => {
    if (email === '' && pass === '') {
      ToastAndroid.show(
        'Enter the required fields',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      await auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          ToastAndroid.show(
            'Logged in Successfully',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          navigation.replace('Bottomtab', {email: email});
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            // console.log('The email address is invalid!');
            ToastAndroid.show(
              'Invalid email address!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }
          if (error.code === 'auth/wrong-password') {
            // console.log('The password does not matches the email id!');
            ToastAndroid.show(
              'Invalid password!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          }

          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <View style={styles.LabelConatiner}>
        </View>
      </View>

      <View style={styles.MiddleContainer}>
        <View style={styles.RegTitleContainer}>
          <Text style={styles.RegTitleText}>LOGIN</Text>
        </View>
        <View style={styles.InputFieldsConatiner}>
          <TextInput
            style={styles.TextInputArea}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
          <TextInput
            style={styles.TextInputArea}
            value={pass}
            onChangeText={text => setPass(text)}
            placeholder="Password"
            secureTextEntry={true}
            backgroundColor="#EEE6FF"
            placeholderTextColor="#3d5c5c"
          />
        </View>

        <View style={styles.RegisterButtonConatiner}>
          <Button
            style={styles.Regbtn}
            onPress={() => loginfun()}
            title="Login"
            color="#B1ABF1"
          />
        </View>
      </View>

      <View style={styles.LowerContainerContent}>
        <View style={styles.AskLoginContainer}>
          <Text style={styles.txt}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
              <Text style={styles.login}> Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  TextInputArea: {
    height: 40,
    width: '90%',
    alignItems: 'center',
    color: 'black',
    margin: 10,
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
    backgroundColor: colors.mainbg,
  },
  UpperContainer: {
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: colors.uppercircle,
    position: 'absolute',
  },
  LabelConatiner: {},
  MiddleContainer: {
    // flex:0.4,
    backgroundColor: colors.authcontentholder,
    marginTop: '50%',
    marginHorizontal: '10%',
    borderRadius: 21,
    padding: 10,
  },
  Regbtn: {
    borderRadius: 21,
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
  },
  LowerContainerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  AskLoginContainer: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
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
    paddingBottom: 40,
    margin: 40,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
  },
  login: {
    color: 'blue',
  },
});
