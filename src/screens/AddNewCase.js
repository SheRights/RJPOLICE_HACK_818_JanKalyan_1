import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import * as colors from '../components/color';

import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const data = [
  { label: 'Complaint Registered', value: 'Complaint Registered' },
  { label: 'Investigation In Process', value: 'Investigation In Process' },
  { label: 'Completed', value: 'Completed' },
];

const AddNewCase = () => {
  const [caseNumber, setCaseNumber] = useState('');
  const [victimName, setVictimName] = useState('');
  const [victimContact, setVictimContact] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = async () => {
    try {
      const user = auth().currentUser;
      const userEmail = user.email;
      // Make a POST request to your API endpoint
      const response = await axios.post(
        `https://aawaz-backend-pthakare72003.replit.app/user/case/add/${userEmail}`, // Replace with your actual API endpoint
        {
          'case_number': caseNumber,
          'victim_name': victimName,
          'victim_contact': victimContact,
          'case_status': selectedStatus,
          'case_description': caseDescription,
        }
      );
  
      // Handle the API response as needed
      console.log('API Response:', response.data);
  
      // Optionally, display a success message to the user
      Alert.alert('Success', 'Case submitted successfully!');
    } catch (error) {
      // Handle errors, display an error message, etc.
      console.error('Error submitting case:', error);
      Alert.alert('Error', 'Failed to submit case. Please try again.');
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case Number:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Case Number"
              value={caseNumber}
              onChangeText={text => setCaseNumber(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Victim Name:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Victim Name"
              value={victimName}
              onChangeText={text => setVictimName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Victim Contact:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Victim Contact"
              value={victimContact}
              onChangeText={text => setVictimContact(text)}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case status:</Text>
            <Dropdown
              style={[
                styles.dropdown,
                isFocus && { borderColor: colors.primary },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={selectedStatus}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSelectedStatus(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case Description:</Text>
            <TextInput
              style={[styles.textInputArea, { height: 150 }]}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Case Description"
              multiline={true}
              numberOfLines={5}
              value={caseDescription}
              onChangeText={text => setCaseDescription(text)}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddNewCase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  textInputTitle: {
    marginBottom: 5,
    color: '#000',
    fontSize: 16,
  },
  textInputArea: {
    color: '#000',
    fontSize: 16,
    borderRadius: 15,
    borderWidth: 0,
    borderColor: 'grey',
    padding: 10,
    elevation: 10,
    marginTop: 5,
  },
  dropdown: {
    backgroundColor: colors.secondary,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  placeholderStyle: {
    color: '#000',
  },
  selectedTextStyle: {
    color: '#000',
  },
  inputSearchStyle: {
    color: '#000',
  },
  iconStyle: {
    color: '#000',
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 120,
  },
  submitButtonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});
