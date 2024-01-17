import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';
import * as colors from '../components/color';

const { width, height } = Dimensions.get('window');

const EditProfile = ({ route, navigation }) => {
  const [Name, setName] = useState('');
  const [idProof, setIdProof] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const updateProfile = () => {
    console.log('Data updated!');
    // navigation.replace('Bottomtab');
  };

  const uploadPicture = () => {
    // Implement your own logic for picture upload
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.backbuttonContainer}
            onPress={() => navigation.goBack()}>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={() => uploadPicture()}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.roundImage}
                source={{ uri: 'https://picsum.photos/200/300' }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.userName}>prathamesh</Text>
        </View>

        <View style={styles.formContainer}>
          <ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Name"
                value={Name}
                onChangeText={(text) => setName(text)}
                theme={{ colors: { primary: colors.primary } }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Id Proof"
                value={idProof}
                onChangeText={(text) => setIdProof(text)}
                theme={{ colors: { primary: colors.primary } }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Phone"
                keyboardType="numeric"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                theme={{ colors: { primary: colors.primary } }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                label="Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
                theme={{ colors: { primary: colors.primary } }}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.genderContainer}>
                <TouchableOpacity
                  onPress={() => setGender('male')}
                  style={[
                    styles.boxContainer,
                    {
                      backgroundColor: gender == 'male' ? 'black' : '#fff',
                      borderColor: gender == 'male' ? colors.primary : '#000',
                    },
                  ]}>
                  <View style={styles.box}>
                    <FontAwesome5
                      name="male"
                      size={18}
                      color={gender == 'male' ? colors.primary : '#000'}
                    />
                    <Text style={{ color: gender == 'male' ? colors.primary : '#000' }}>
                      Male
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.boxContainer,
                    {
                        backgroundColor: gender == 'female' ? 'black' : '#fff',
                        borderColor: gender == 'female' ? colors.primary : '#000',
                    },
                  ]}
                  onPress={() => setGender('female')}>
                  <View style={styles.box}>
                    <FontAwesome5
                      name="female"
                      size={18}
                      color={gender == 'female' ? colors.primary : '#000'}
                    />
                    <Text style={{ color: gender == 'female' ? colors.primary : '#000' }}>
                      Female
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.2}
              style={styles.saveBtnContainer}
              onPress={updateProfile}>
              <View style={styles.saveBtn}>
                <Text style={styles.saveBtnText}>Update</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.35,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    position: 'relative',
  },
  backbuttonContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 1,
  },
  imageContainer: {
    marginTop: 30,
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: 'white',
    borderWidth: 2,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 15,
    color: '#000',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 15,
  },
  input: {
    height: 60,
    borderRadius: 20,
    padding: 0,
    backgroundColor: colors.secondary
  },
  inputHeader: {
    marginRight: 10,
    color: '#000',
    opacity: 0.6,
  },
  saveBtnContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    width: 150,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
    flex: 1,
    marginTop: 5,
  },
  boxContainer: {
    width: 100,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
