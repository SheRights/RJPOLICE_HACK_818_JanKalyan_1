import {ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as colors from '../components/color';

import {Dropdown} from 'react-native-element-dropdown';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
  {label: 'Complaint Registered', value: 'Complaint Registered'},
  {label: 'Investigation In Process', value: 'Investigation In Process'},
  {label: 'Completed', value: 'Completed'},
];

const AddNewCase = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.secondary}}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case Number:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Case Number"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Victim Name:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Victim Name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Victim Contact:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Victim Contact"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case Status:</Text>
            <TextInput
              style={styles.textInputArea}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Case Status"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case number:</Text>
            <Dropdown
              style={[
                styles.dropdown,
                isFocus && {borderColor: colors.primary},
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
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textInputTitle}>Case Description:</Text>
            <TextInput
              style={[styles.textInputArea, {height: 150}]}
              backgroundColor={colors.secondary}
              placeholderTextColor="#3d5c5c"
              placeholder="Enter Case Description"
              multiline={true}
              numberOfLines={5}
            />
          </View>

          <TouchableOpacity style={styles.submitButton}>
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
    marginBottom: 120
  },
  submitButtonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',  
  },
});
