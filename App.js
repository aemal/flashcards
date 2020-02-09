import React from 'react';
import { Text, View, Platform, StatusBar, StyleSheet, Animated } from 'react-native'
import Decks from './components/Decks'
import DeckDetail from './components/DeckDetail'
import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
import NewDeck from './components/NewDeck';
import Result from './components/Result'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { white, orange, gray } from './utils/colors'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import Constants from 'expo-constants'

function AppStatusBar ({ backgroundColor, ...props }) {
  return(
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialTopTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Decks'
      tabBarOptions={{
        activeTintColor: orange,
        style: {
          height: Platform.OS === 'android' ? 56 : 80,
          backgroundColor: white,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            height: 0,
            width: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
        labelStyle: {
          fontWeight: Platform.OS === 'android' ? '800' : '500',
          fontSize: Platform.OS === 'android' ? 17 : 10,
        },
        indicatorStyle: {
          backgroundColor: orange,
          height: 2,
        },
      }}
    >
      <Tab.Screen
        name='Decks'
        component={Decks}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={32} color={color} style={{marginTop: 3}} />
          ),
        }}
      />
      <Tab.Screen
        name='NewDeck'
        component={NewDeck}
        options={{
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='add-box' size={32} color={color} style={{marginTop: 3}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      
      screenOptions={{
        headerTintColor: white,
        headerStyle: { 
          backgroundColor: orange, 
          height: 56,
        },
        headerTitleStyle: {
          fontWeight: '600',
          marginBottom: Platform.OS === 'android' ? 20 : 0,
        },
        headerLeftContainerStyle: {
          marginBottom: Platform.OS === 'android' ? 20 : 0,
        }
      }}
    >
    <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DeckDetail"
        component={DeckDetail}
        options={{
          title: 'Deck Detail',
          headerStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{
          title: 'Question',
          headerStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        name="AddQuestion"
        component={AddQuestion}
        options={{
          title: 'Add Question',
          headerStyleInterpolator: forFade,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex: 1}} accessible>
    <AppStatusBar backgroundColor={orange} barStyle="light-content" />
    <NavigationContainer>
      <Result />
    </NavigationContainer>
    </View>
  );
}


