import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SplashScreen from './src/screens/SplashScreen';
import AskWho from './src/screens/AskWho';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StationDetails from './src/screens/StationDetails';
import FeedBackScreen from './src/screens/FeedBackScreen';
import AdminLanding from './src/screens/AdminLanding';
import PendingApprovals from './src/screens/PendingApprovals';
import FeedbackType from './src/screens/FeebackType';
import ChatScreen from './src/screens/ChatScreen';
import AddNewCase from './src/screens/AddNewCase';
import AllCases from './src/screens/AllCases';
import PoliceHome from './src/screens/PoliceHome';
import FeedbackReport from './src/screens/FeedbackReport'
import SampleChat from './src/screens/SampleChat';
import TestingScreen from './src/screens/TestingScreen';
import EditProfile from './src/screens/EditProfile';
import SmartChat from './src/screens/SmartChat';
import RegisterPolice from './src/screens/Registerpolice';
import Feedbacks from './src/screens/Feedbacks';

import * as colors from './src/components/color';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({
  children,
  onPress,
}: {
  children: any;
  onPress: any;
}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 58,
        height: 58,
        borderRadius: 35,
        backgroundColor: colors.secondary,
        elevation: 5,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavi = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 8,
          backgroundColor: colors.primary,
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="home" size={22} color={color} />;
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Feedbacktype"
        component={FeedbackType}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="plus"
              size={22}
              color={focused ? '#000' : 'grey'}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton onPress={() => {}} {...props} />
          ),
        }}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="user" size={22} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const TabNaviAdmin = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 8,
          backgroundColor: colors.primary,
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="home" size={22} color={color} />;
          },
        }}
        name="AdminLanding"
        component={AdminLanding}
      />
      <Tab.Screen
        name="PendingApprovals"
        component={PendingApprovals}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="users"
              size={22}
              color={focused ? '#000' : 'grey'}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton onPress={() => {}} {...props} />
          ),
        }}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="user" size={22} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const TabNaviPolice = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 8,
          backgroundColor: colors.primary,
          borderRadius: 15,
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="home" size={22} color={color} />;
          },
        }}
        name="PoliceHome"
        component={PoliceHome}
      />
      <Tab.Screen
        name="AddNewCase"
        component={AddNewCase}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="file"
              size={22}
              color={focused ? '#000' : 'grey'}
            />
          ),
          tabBarButton: props => (
            <CustomTabBarButton onPress={() => {}} {...props} />
          ),
        }}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => {
            return <FontAwesome5 name="user" size={22} color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Askwho"
          component={AskWho}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Bottomtab"
          component={TabNavi}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomtabAdmin"
          component={TabNaviAdmin}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomtabPolice"
          component={TabNaviPolice}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="StationDetails"
          component={StationDetails}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="Feedback"
          component={FeedBackScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AdminLanding"
          component={AdminLanding}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PendingApprovals"
          component={PendingApprovals}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Feedbacktype"
          component={FeedbackType}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Chatscreen"
          component={ChatScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddNewCase"
          component={AddNewCase}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AllCases"
          component={AllCases}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FeedbackReport"
          component={FeedbackReport}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SampleChat"
          component={SampleChat}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PoliceHome"
          component={PoliceHome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TestingScreen"
          component={TestingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SmartChat"
          component={SmartChat}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RegisterPolice"
          component={RegisterPolice}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Feedbacks"
          component={Feedbacks}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
