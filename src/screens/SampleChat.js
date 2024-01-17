import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ToastAndroid } from 'react-native';

const SampleChat = () => {
  const [messages, setMessages] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasAskedInitialQuestion, setHasAskedInitialQuestion] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [keywordSets, setKeywordSets] = useState([
    new Set(["help", "assistance", "support", "hello", "feedback", "here", "please"]),
    new Set(["1", "2", "3", "4", "5"]),
    new Set(["like", "enjoy", "love", "appreciate"]),
    new Set(["improve", "enhance", "change", "better"]),
    new Set(["recommend", "suggest", "share"]),
    new Set(["comments", "suggestions", "feedback"]),
  ]);

  const [isChatBotTyping, setChatBotTyping] = useState(false);

  useEffect(() => {
    sendGreeting();
  }, [currentQuestionIndex]);

  const sendGreeting = () => {
    if (currentQuestionIndex === 0 && !hasAskedInitialQuestion) {
      const greetingMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: questions[currentQuestionIndex],
        createdAt: new Date(),
        user: { _id: 2, name: 'ChatBot' },
      };
      setMessages((prevMessages) => GiftedChat.append(prevMessages, [greetingMessage]));
      setHasAskedInitialQuestion(true);
    }
  };

  const sendQuestionToUser = () => {
    if (currentQuestionIndex < questions.length) {
      const typingMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: '...',
        createdAt: new Date(),
        user: { _id: 2, name: 'ChatBot' },
      };
      setMessages((prevMessages) => GiftedChat.append(prevMessages, [typingMessage]));
      animateDots(typingMessage._id);

      setTimeout(() => {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== typingMessage._id));
        const questionMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: questions[currentQuestionIndex],
          createdAt: new Date(),
          user: { _id: 2, name: 'ChatBot' },
        };
        setMessages((prevMessages) => GiftedChat.append(prevMessages, [questionMessage]));
        setChatBotTyping(false); 
      }, 1000); 
    }
  };

  const animateDots = (typingMessageId) => {
    const dots = ['.', '..', '...'];
    let index = 0;

    const intervalId = setInterval(() => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const typingMessageIndex = updatedMessages.findIndex((msg) => msg._id === typingMessageId);

        if (typingMessageIndex !== -1) {
          updatedMessages[typingMessageIndex].text = `${dots[index]}`;
        } else {
          clearInterval(intervalId);
        }

        return updatedMessages;
      });

      index = (index + 1) % dots.length;
    }, 500);
  };

  const containsKeywords = (text, keywords) => {
    const words = text.toLowerCase().split(' ');
    const presentKeywords = keywords.filter((keyword) => words.includes(keyword));
    return presentKeywords.length >= 2; 
  };

  const processUserResponse = async (userMessage) => {
    setChatBotTyping(true);
  
    const keywords = Array.from(keywordSets[currentQuestionIndex]);
    if (containsKeywords(userMessage.text, keywords)) {
      setUserResponses((prevResponses) => [
        ...prevResponses,
        {
          question: questions[currentQuestionIndex],
          answer: userMessage.text,
        },
      ]);
  
      if (currentQuestionIndex < questions.length - 1) {
        await setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        const closingMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: "Thank you for your feedback! Have a great day.",
          createdAt: new Date(),
          user: { _id: 2, name: 'ChatBot' },
        };
        setMessages((prevMessages) => GiftedChat.append(prevMessages, [closingMessage]));
  
        ToastAndroid.show("Feedback session ended. Thank you!", ToastAndroid.SHORT);
  
        // Log user responses
        console.log("User Responses:", userResponses);
  
        // Construct feedback message
        const feedbackMessage = userResponses.map(
          (response) => `${response.question}\nAnswer: ${response.answer}`
        );
        console.log("Constructed Feedback Message:\n\n", feedbackMessage.join('\n\n'));
      }
    } else {
      ToastAndroid.show("Please provide a more detailed response.", ToastAndroid.SHORT);
      setChatBotTyping(false);
    }
  
    // Ask the next question regardless of the correctness of the answer
    sendQuestionToUser();
  };
  
  

  const onSend = (newMessages = []) => {
    const userMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: newMessages[0].text,
      createdAt: new Date(),
      user: { _id: 1 },
    };

    console.log(`User's response to question ${currentQuestionIndex + 1}:`, userMessage.text);

    setMessages((prevMessages) => GiftedChat.append(prevMessages, [userMessage]));

    // Process the user's response
    processUserResponse(userMessage);
  };

  const questions = [
    "Hello! How can I assist you today?",
    "How would you rate our service on a scale of 1 to 5?",
    "What did you like the most about our service?",
    "Is there anything we can improve upon?",
    "Would you recommend our service to others?",
    "Any additional comments or suggestions?",
  ];

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: 1 }}
    />
  );
};

export default SampleChat;
