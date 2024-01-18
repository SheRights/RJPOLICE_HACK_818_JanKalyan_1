import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
} from 'react-native';
import * as colors from '../components/color';
import { Picker } from '@react-native-picker/picker';

const cardcontent = [
  {
    name: 'Chatbot',
    image: 'https://i.ibb.co/GHdChFm/5187875-2.png',
    description:
      'Provide feedbacks interactively chatting with our chatbot. No multimedia support in chatbot.',
    navito: 'SmartChat',
  },
  {
    name: 'Form Based',
    image: 'https://i.ibb.co/DLkMZhQ/5187875-3.png',
    description:
      'Provide feedbacks by using our manual feedback form. Also includes multimedia support.',
    navito: 'Feedback',
  },
];

const FeedbackType = ({ navigation }) => {
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('');
  const [rating, setRating] = useState('');
  const [showChatbotFields, setShowChatbotFields] = useState(false);

  const navigateToChatbot = () => {
    // Validate if the user has selected a police station and provided a rating
    if (!selectedPoliceStation || !rating) {
      alert('Please select a police station and provide a rating.');
      return;
    }

    // Navigate to another screen (replace 'SmartChat' with the actual screen name)
    navigation.navigate('SmartChat', {
      policeStation: selectedPoliceStation,
      rating: rating,
    });

    // Close the popup
    setShowChatbotFields(false);
  };

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
                if (item.name === 'Chatbot') {
                  // Show popup for Chatbot feedback
                  setShowChatbotFields(true);
                } else {
                  // Navigate to other screens directly
                  navigation.navigate(item.navito, { who: item.name });
                }
              }}>
              <View style={styles.cardAlign}>
                <Image source={{ uri: item.image }} style={styles.cardimage} />
                <View>
                  <Text style={styles.cardtitle}>{item.name}</Text>
                  <Text style={{ fontSize: 15, marginLeft: 20, color: '#000', width: '40%' }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* Popup for Chatbot feedback */}
        <Modal visible={showChatbotFields} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <Text>Select Police Station:</Text>
            <Picker
              selectedValue={selectedPoliceStation}
              onValueChange={(itemValue) => setSelectedPoliceStation(itemValue)}>
              <Picker.Item label="Station A" value="Station A" />
              <Picker.Item label="Station B" value="Station B" />
            </Picker>

            <Text>Enter Rating:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(text) => setRating(text)}
            />

            <Button title="Submit" onPress={navigateToChatbot} />
          </View>
        </Modal>
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
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    modalContainer: {
      backgroundColor: colors.primary,
      padding: 20,
      borderRadius: 10,
      margin: 50,
    },
  });
  