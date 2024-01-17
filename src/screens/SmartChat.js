import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, StatusBar, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

const SmartChat = ({navigation}) => {
  const [chatBubbles, setChatBubbles] = useState([]);
  const intervalIdRef = useRef(null);

  const updateChatBubbles = () => {
    const injectedJavaScript = `
      var elements = document.getElementsByClassName('rounded-b-md bg-base-100 p-2 text-center text-xs');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }

      var chatBubbles = document.getElementsByClassName('chat-bubble');
      var chatBubbleContents = [];
      for (var i = 0; i < chatBubbles.length; i++) {
        chatBubbleContents.push(chatBubbles[i].textContent);
      }
      window.ReactNativeWebView.postMessage(JSON.stringify(chatBubbleContents));
    `;

    webviewRef.current.injectJavaScript(injectedJavaScript);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      updateChatBubbles();
      console.log('Chat Bubbles:', chatBubbles);
    }, 1000);

    return () => clearInterval(intervalIdRef.current);
  }, [chatBubbles]);

  const onMessage = event => {
    const messageData = JSON.parse(event.nativeEvent.data);

    if (messageData.includes('exit ')) {
      console.log('Final Chat Bubbles:', chatBubbles);
      clearInterval(intervalIdRef.current);
      ToastAndroid.show('Thank you for your time.. your feedback was submitted', ToastAndroid.SHORT);
      navigation.navigate('Bottomtab');
    } else {
      setChatBubbles(messageData);
    //   postFeedback(messageData); 
    }
  };

  const postFeedback = async feedbackData => {
    try {
      const apiUrl = 'https://aawaz-backend-pthakare72003.replit.app/user/generate_feedback'; // Replace with your actual API endpoint
      const response = await axios.post(apiUrl, { data: feedbackData });

      console.log('Feedback response:', response.data);
    } catch (error) {
      console.error('Error posting feedback:', error);
    }
  };

  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <WebView
        ref={webviewRef}
        source={{
          uri: 'https://app.fastbots.ai/embed/clrhgeaiw00l3pxb11qzzihk1',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={onMessage}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default SmartChat;
