/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './AboutScreen';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel: true,
      style:{height:70},
      labelStyle:{fontSize:15}
    }}
   >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}


export default MyStack;
