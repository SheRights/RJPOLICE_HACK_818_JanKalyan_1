import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import * as colors from '../components/color';

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder || 'Search...'}
        placeholderTextColor={'#000'}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#000',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
});

export default SearchBar;
