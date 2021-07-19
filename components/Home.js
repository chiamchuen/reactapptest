import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Triangle } from 'react-native-shape';


export default function Home () {
  let[fontsLoaded, error]=useFonts({
    'Lato-Bold':require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular':require('../assets/fonts/Lato-Regular.ttf'),
    'Montserrat-Bold':require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular':require('../assets/fonts/Montserrat-Regular.ttf')
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

    <View style={styles.optionsWrapper2}>
      <View style={styles.optionsBox}></View>
      <Text style={styles.optionsText}>Yes, I have.</Text>
    </View>

    <View style={styles.selectWrapper}>
      <View style={styles.inputbox}>
        <View style={styles.arrowWrapper}>
          <Text style={styles.selectText}>- Select -</Text>
          <View marginLeft={163} marginTop={18} >
            <AntDesign name="caretdown" size={16} color={'#707070'} />
          </View>
        </View>
      </View>
    </View>

    <View style={styles.countryWrapper}>
      <FontAwesome name="plus-square-o" size={23} color={'#707070'} />
      <Text style={styles.countryText}>Add another country</Text>
    </View>

    <View style={styles.nextWrapper}>
      <View style={styles.nextBox}>
        <Text style={styles.nextText}>Next</Text>
      </View>
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
    borderRadius: 6,
    borderColor: colors.darkestGreen,
    borderWidth: 1,
  },

  optionsText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    marginHorizontal: 15,
    color: '#707070',
  },

  optionsWrapper2: {
    marginTop: 35,
    marginHorizontal: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectWrapper: {
    marginTop: 22,
    paddingHorizontal: 41,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputbox: {
    width: 293,
    height: 52,
    borderRadius: 29,
    backgroundColor: colors.input,
  },

  selectText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#707070',
    marginTop: 14,
    marginLeft: 29,
  },

  arrowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  countryWrapper: {
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  countryText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#707070',
    marginLeft: 22,
  },

  nextWrapper: {
    marginTop: 169,
    marginLeft: 259,
  },

  nextBox: {
    height: 38,
    width: 91,
    borderRadius: 38,
    backgroundColor: colors.midGreen,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
  },

  nextText: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: '#fff',
    marginTop: 7,
    marginHorizontal: 23,
  },
});
