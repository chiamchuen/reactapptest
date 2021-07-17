import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from './assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Triangle } from 'react-native-shape';

const Stack = createStackNavigator();

export default function App() {
  let[fontsLoaded, error]=useFonts({
    'Lato-Bold':require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular':require('./assets/fonts/Lato-Regular.ttf'),
    'Montserrat-Bold':require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular':require('./assets/fonts/Montserrat-Regular.ttf')
  });

  if (!fontsLoaded){
    return <AppLoading />
  }
  return (
  <View style={styles.container}>
    {/* header */}
    <View style={styles.headerWrapper}>
      <Text style={styles.headerTitle}>Hello Doctor</Text>
    </View>

    {/* exit */}
    <View style={styles.exitWrapper}>
      <AntDesign name="caretleft" size={12} color={colors.darkestGreen} />
      <Text style={styles.exitWord}>Exit</Text>
    </View>


    {/* Question */}
    <View style={styles.questionTitleWrapper}>
      <Text style={styles.question1}>Question 1</Text>
    </View>

    <View style={styles.questionWrapper}>
      <Text style={styles.questionContent}>Have you recently travelled to any country(s)? If yes, which?</Text>
    </View>

    {/* options */}
    <View style={styles.optionsWrapper}>
      <View style={styles.optionsBox}></View>
      <Text style={styles.optionsText}>No, I have not.</Text>
    </View>


    <View style={styles.inputbox}>
    </View>
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerWrapper: {
    backgroundColor: colors.lightGreen,
    height: 105,
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    paddingTop: 52,
  },

  exitWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginTop: 28,
  },


  exitWord: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: colors.darkestGreen,
    marginLeft: 2,
  },

  questionTitleWrapper: {
    marginTop: 22,
    marginLeft: 116,
  },
  question1: {
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    color: colors.darkestGreen,
  },

  questionWrapper: {
    width: 317,
    height: 74,
    borderRadius: 14,
    backgroundColor: colors.midGreen,
    marginTop: 23,
    marginLeft: 29,
  },

  questionContent: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: '#fff',
    paddingTop: 10,
    paddingLeft: 26,
  },

  optionsWrapper: {
    marginTop: 62,
    marginHorizontal: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionsBox: {
    height: 23,
    width: 23,
    color: colors.darkestGreen,
  },

  optionsText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#707070',
    
  },

  inputbox: {
    width: 293,
    height: 52,
    borderRadius: 29,
    backgroundColor: colors.input,
    marginTop: 165,
    marginLeft: 41,
  },
});
