import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import * as colors from '../components/color';
import SearchBar from '../components/SearchBar';

const AllCases = () => {
  const [allCases, setAllCases] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = useCallback(() => {
    try {
      axios
        .get('https://aawaz-backend-pthakare72003.replit.app/user/get_cases/jaipurpolice@gov.in')
        .then(response => setAllCases(response.data))
        .catch(error => console.error('Error fetching cases:', error));
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      setDataFetched(true);
    }
  }, []);

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [dataFetched, fetchData]);

  const sendSms = async (phoneNumber) => {
    try {
      const response = await axios.post('https://aawaz-backend-pthakare72003.replit.app/user/send_sms', {
        to_phone_number: phoneNumber,
      });
      console.log('SMS sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar placeholder="Search Case By Case Number" onSearch={text => console.log(text)} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.column}>
            <Text style={styles.titleText}>Number</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.titleText}>Name</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.titleText}>Status</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.titleText}>Message</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.titleText}>Update</Text>
          </View>
        </View>
        <View style={styles.separator}></View>

        <View style={styles.rowsContainer}>
          {allCases.map((item, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.rowText}>{item.case_number}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.rowText}>{item.victim_name}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.rowText}>{item.case_status}</Text>
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.messageButton}
                  onPress={() => sendSms(item.victim_contact)}>
                  <Text style={{ fontSize: 12, color: '#fff' }}>Message</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.column}>
                <TouchableOpacity style={styles.updateButton} onPress={() => console.log(item.update)}>
                  <FontAwesome5Icon name="edit" size={20} color={'#000'} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  searchBarContainer: {
    marginBottom: 20,
  },
  contentContainer: {},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  titleText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  rowsContainer: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowText: {
    color: '#000',
    fontSize: 12,
  },
  messageButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 5,
  },
  updateButton: {
    alignItems: 'center',
  },
});

export default AllCases;
