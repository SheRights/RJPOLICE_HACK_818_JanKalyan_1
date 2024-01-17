import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import * as colors from '../components/color';
import {ScrollView} from 'react-native';

const LoginScreen = ({route, navigation}) => {
  const {who} = route.params;
  console.log(who);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const loginfun = async () => {
    if (email === '' || pass === '' || loading) {
      return; // Do nothing if fields are empty or login is in progress
    }

    try {
      setLoading(true); // Start loading
      await auth().signInWithEmailAndPassword(email, pass);
      ToastAndroid.show(
        'Logged in Successfully',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      // Navigate to the appropriate screen based on 'who'
      if (who === 'Admin') {
        navigation.replace('BottomtabAdmin');
      } else if (who === 'Police') {
        navigation.replace('BottomtabPolice');
      } else if (who === 'User') {
        navigation.replace('Bottomtab');
      } else {
        console.error('Invalid user type:', who);
      }
    } catch (error) {
      // Handle authentication errors
      if (error.code === 'auth/invalid-email') {
        ToastAndroid.show(
          'Invalid email address!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      if (error.code === 'auth/wrong-password') {
        ToastAndroid.show(
          'Invalid password!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
      console.log(error);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.secondary}}>
      <View style={styles.container}>
        <View style={styles.UpperContainer}>
          <View style={styles.LabelConatiner}></View>
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
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
            />
            <TextInput
              style={styles.TextInputArea}
              value={pass}
              onChangeText={text => setPass(text)}
              placeholder="Password"
              secureTextEntry={true}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
            />
          </View>

          <View style={styles.RegisterButtonConatiner}>
            <Button
              style={styles.Regbtn}
              onPress={loginfun}
              title="Login"
              color="#000"
              disabled={loading} // Disable the button while loading
            />
            {loading && (
              <ActivityIndicator
                size="small"
                color="#000"
                style={{marginTop: 10}}
              />
            )}
          </View>
        </View>

        {who !== 'Admin' && (
          <View style={styles.LowerContainerContent}>
            <View style={styles.AskLoginContainer}>
              <Text style={styles.txt}>
                Don't have an account?{' '}
                <TouchableOpacity
                  onPress={() =>
                    navigation.replace(
                      who === 'Police' ? 'RegisterPolice' : 'SignUp',
                    )
                  }>
                  <Text style={styles.login}> Create One!</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
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
    backgroundColor: colors.primary,
    marginTop: '50%',
    marginHorizontal: '10%',
    borderRadius: 21,
    padding: 10,
  },
  Regbtn: {},
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
    color: '#000',
  },
  RegisterButtonConatiner: {
    padding: 10,
    position: 'relative',
  },
});
