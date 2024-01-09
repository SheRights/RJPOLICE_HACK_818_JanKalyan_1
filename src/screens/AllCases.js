import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as colors from '../components/color';
import SearchBar from '../components/SearchBar';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const rowData = [
  {
    caseno: '123456',
    name: 'Prathamesh',
    status: 'Pending',
    message: '9112272004',
    update: 'Update',
  },
  {
    caseno: '123457',
    name: 'Girish',
    status: 'Pending',
    message: '7843088689',
    update: 'Update',
  },
  {
    caseno: '123458',
    name: 'Pratham',
    status: 'Pending',
    message: '9221412004',
    update: 'Update',
  },
  {
    caseno: '123459',
    name: 'Mohit',
    status: 'Pending',
    message: '9112272004',
    update: 'Update',
  },
];

const AllCases = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search Case By Case Number"
          onSearch={text => console.log(text)}
        />
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
          {rowData.map((item, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.rowText}>{item.caseno}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.rowText}>{item.name}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.rowText}>{item.status}</Text>
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.messageButton}
                  onPress={() => console.log(item.message)}>
                  <Text style={{fontSize: 12, color: '#fff'}}>Message</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.column}>
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={() => console.log(item.update)}>
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
