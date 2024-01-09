import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

import * as colors from '../components/color';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';

const recentFeedbacks = [
  {
    id: 1,
    userName: 'Username 1',
    image:
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Great experience with the police station!',
  },
  {
    id: 2,
    userName: 'Username 2',
    image:
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Quick response and helpful staff.',
  },
  {
    id: 3,
    userName: 'Username 3',
    image:
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback: 'Could improve the waiting time.',
  },
];

const StarRating = ({rating, starSize = 20, starColor = '#000'}) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <FontAwesome5Icon
        key={i}
        name="star"
        size={starSize}
        color={starColor}
        solid
      />,
    );
  }

  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};

const StationDetails = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={{uri: 'https://i.ibb.co/2YhGBzB/center.jpg'}}
            style={styles.StationImage}
          />
          <View style={styles.stationDetailsContainer}>
            <Text style={styles.stationName}>Bibwewadi Police Station</Text>
            <Text style={styles.stationAddr}>Bibwewadi, Pune</Text>
          </View>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTextTitle}>About police station</Text>
          <Text style={[styles.aboutTextDesc, {flexWrap: 'wrap'}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Text>
        </View>

        <View style={styles.floatingButtonsContainer}>
          <TouchableOpacity style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>View Cases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>Feedbacks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>Insights</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ratingAndReviewContainer}>
          <Text style={styles.ratingAndReviewText}>Ratings And Reviews</Text>
          <View style={styles.ratingContentContainer}>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingStarTextContainer}>
                <Text style={styles.ratingText}>4.0</Text>
                <View style={styles.ratingStarContainer}>
                  <StarRating rating={4} />
                </View>
              </View>
            </View>

            <View style={styles.progBarContainer}>
              <View style={styles.progBar}>
                <Text style={styles.progBarText}>1</Text>
                <Progress.Bar progress={0.3} width={200} color="black" />
              </View>
              <View style={styles.progBar}>
                <Text style={styles.progBarText}>2</Text>
                <Progress.Bar progress={0.5} width={200} color="black" />
              </View>
              <View style={styles.progBar}>
                <Text style={styles.progBarText}>3</Text>
                <Progress.Bar progress={0.8} width={200} color="black" />
              </View>
              <View style={styles.progBar}>
                <Text style={styles.progBarText}>4</Text>
                <Progress.Bar progress={0.2} width={200} color="black" />
              </View>
              <View style={styles.progBar}>
                <Text style={styles.progBarText}>5</Text>
                <Progress.Bar progress={0.1} width={200} color="black" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.feedbacksContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.feedbackCards}>
              {recentFeedbacks.map(feedback => (
                <View key={feedback.id} style={styles.feedbackCard}>
                  <View style={styles.feedbackImageNameContainer}>
                    <Image
                      source={{uri: feedback.image}}
                      style={styles.feedbackImage}
                    />
                    <Text style={styles.userName}>{feedback.userName}</Text>
                  </View>
                  <View style={styles.ActualFeedbackContainer}>
                    <Text style={styles.actualfeedback}>
                      {feedback.feedback}
                    </Text>
                  </View>
                  <View style={styles.IconsContainer}>
                    <FontAwesome5Icon name="thumbs-up" size={20} color="#000" />
                    <FontAwesome5Icon
                      name="thumbs-down"
                      size={20}
                      color="#000"
                    />
                    <FontAwesome5Icon name="reply-all" size={20} color="#000" />
                    <FontAwesome5Icon name="comment" size={20} color="#000" />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default StationDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: width,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: width - 40,
    overflow: 'hidden',
  },
  StationImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  stationDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
  },
  stationName: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  stationAddr: {
    marginLeft: 20,
    fontSize: 15,
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
    fontSize: 13,
  },
  floatingButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  floatingButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 10,
    width: width / 3.5,
  },
  floatingButtonText: {
    fontSize: 15,
    color: '#fff',
  },
  ratingAndReviewContainer: {
    marginTop: 20,
  },
  ratingAndReviewText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
},
  ratingContentContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  ratingStarTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 45,
    color: '#000',
  },
  ratingStarContainer: {},
  progBarContainer: {},
  progBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  progBarText: {
    color: '#000',
    marginRight: 10,
  },
  feedbacksContainer: {
    marginTop: 20,
  },
  feedbackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: '#000',
  },
  feedbackCards: {
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: 130,
    width: '100%',
  },
  feedbackCard: {
    width: width - 30,
    backgroundColor: colors.uppercircle,
    padding: 10,
    borderRadius: 20,
    marginRight: 20,
  },
  feedbackImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  feedbackImageNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  ActualFeedbackContainer: {
    marginTop: 15,
  },
  actualfeedback: {
    fontSize: 15,
    color: '#000',
    fontStyle: 'italic',
  },
  IconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
