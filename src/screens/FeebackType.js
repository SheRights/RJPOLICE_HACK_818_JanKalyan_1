import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Touchable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import * as colors from '../components/color';
  
  const cardcontent = [
    {
      name: 'Chatbot',
      image: 'https://i.ibb.co/GHdChFm/5187875-2.png',
      description:
        'Provide feedbacks interactively chatting with our chatbot. No multimedia support in chatbot.',
      navito: 'Chatscreen'
    },
    {
      name: 'Form Based',
      image: 'https://i.ibb.co/DLkMZhQ/5187875-3.png',
      description:
        'Provide feedbacks by using our manual feedback form. Also includes multimedia support.',
      navito: 'Feedback'
    },
  ];
  
  const FeedbackType = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>How would you like to provide feedback ?</Text>
        <View style={styles.cardholder}>
          {cardcontent.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => {
                  navigation.navigate(item.navito, {who: item.name});
                }}>
                <View style={styles.cardAlign}>
                  <Image source={{uri: item.image}} style={styles.cardimage} />
                  <View>
                  <Text style={styles.cardtitle}>{item.name}</Text>
                  <Text style={{fontSize: 15, marginLeft:20, color: '#000', width: '40%'}}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };
  
  export default FeedbackType;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 20,
      textAlign: 'center',
    },
    cardholder: {
      padding: 20,
      overflow: 'hidden',
      width: '100%'
    },
    card: {
      padding: 10,
      overflow: 'hidden',
      width: "100%",
      marginBottom: 30,
      backgroundColor: colors.primary,
      borderRadius: 20,
      elevation: 10
    },
    cardAlign: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardimage: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    cardtitle: {
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
  });
  