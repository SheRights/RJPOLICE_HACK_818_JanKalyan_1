import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import * as colors from '../components/color';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const rowData = [
  {title: 'Justice', progress: 0.3},
  {title: 'Co-operation', progress: 0.5},
  {title: 'Availability', progress: 0.8},
  {title: 'Behaviour', progress: 0.2},
];

const FeedbackReport = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{uri: 'https://i.ibb.co/2YhGBzB/center.jpg'}}
          style={styles.stationImage}
        />
        <View style={styles.stationDetailsContainer}>
          <Text style={styles.stationName}>Bibwewadi Police Station</Text>
          <Text style={styles.stationAddr}>Bibwewadi, Pune</Text>
        </View>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTextTitle}>Summary Report</Text>
        <Text style={styles.aboutTextDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>

      <View style={styles.progBarContainer}>
        {rowData.map((item, index) => (
          <View key={index} style={styles.progBar}>
            <View style={styles.progBarTextContainer}>
              <Text style={styles.progBarText}>{item.title}</Text>
            </View>
            <Progress.Bar progress={item.progress} width={200} color="#000" />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.allFeedbackButton}>
        <Text style={styles.allFeedbackButtonText}>See Feedbacks</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  topContainer: {
    flexDirection: 'row',
    width: width - 40,
    overflow: 'hidden',
    marginBottom: 20,
  },
  stationImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  stationDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  stationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  stationAddr: {
    fontSize: 15,
    color: '#000',
  },
  aboutContainer: {
    marginTop: 15,
  },
  aboutTextTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  aboutTextDesc: {
    color: 'grey',
    fontSize: 15,
    marginTop: 5,
  },
  progBarContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  progBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progBarTextContainer: {
    width: 120,
    marginRight: 20,
  },
  progBarText: {
    color: '#000',
    fontSize: 16,
  },
  allFeedbackButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  allFeedbackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackReport;
