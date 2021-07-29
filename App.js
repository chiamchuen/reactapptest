import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from './assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Triangle } from 'react-native-shape';

import Home from './components/Home';
import question2 from './components/question2';
import question3 from './components/question3';
import question4 from './components/question4';
import question5 from './components/question5';
import question6 from './components/question6';
import question7 from './components/question7';
import question8 from './components/question8';
import doctorRank from './components/doctorRank';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerShown: false,
          }} 
        />

        <Stack.Screen 
          name="question2" 
          component={question2} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="question3" 
          component={question3} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="question4" 
          component={question4} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="question5" 
          component={question5} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="question6" 
          component={question6} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="question7" 
          component={question7} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="question8" 
          component={question8} 
          options={{ 
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="doctorRank" 
          component={doctorRank} 
          options={{ 
            headerShown: false,
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

module.expo