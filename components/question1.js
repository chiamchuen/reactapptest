import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Triangle } from 'react-native-shape';
import { Checkbox } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const RadioButton = ({ onPress, selected, children }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default function question1 ( { navigation }) {

  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "No, I have not.", selected: false },
    { id: 2, value: false, name: "Yes, I have.", selected: false }
  ]);

  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };

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
    {/*<View style={styles.optionsWrapper}>
      <BouncyCheckbox
        isChecked={checkboxState}
        disableBuiltInState
        onPress={() => setCheckboxState(!checkboxState)} 
        fillColor={colors.darkestGreen} 
        iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
        text = "No, I have not." 
        textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
      />
    </View>

    <View style={styles.optionsWrapper2}>
      <BouncyCheckbox
        isChecked={checkboxState}
        disableBuiltInState
        onPress={() => setCheckboxState(!checkboxState)} 
        fillColor={colors.darkestGreen} 
        iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
        text = "Yes, I have." 
        textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
      />
    </View>
  */}
    {isLiked.map((item) => (
      <RadioButton
        onPress={() => onRadioBtnClick(item)}
        selected={item.selected}
        key={item.id}
      >
        {item.name}
      </RadioButton>
    ))}

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
    {/*
    <TouchableOpacity onPress={() => navigation.navigate('question2')}>
      <View style={styles.nextWrapper}>
        <View style={styles.nextBox}>
          <Text style={styles.nextText}>Next</Text>
        </View>
      </View>
    </TouchableOpacity>
    */}
    {/* back and next */}
    <View style={styles.bottomWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
        <View style={styles.backBox}>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('question2')} style={styles.nextWrapper}> 
        <View style={styles.nextBox}>
          <Text style={styles.nextText}>Next</Text>
        </View>
      </TouchableOpacity>
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

  radioButtonContainer: {
    marginTop: 40,
    marginHorizontal: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center"
  },

  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: colors.darkestGreen
  },

  radioButtonText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    marginHorizontal: 15,
    color: '#707070',
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
    marginLeft: 128,
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

  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 169,
  },

  backWrapper: {
      marginLeft: 40,
  },

  backBox: {
      height: 38,
      width: 91,
      borderRadius: 38,
      borderColor: colors.darkGreen,
      borderWidth: 2,
  },

  backText: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      color: colors.darkGreen,
      paddingTop: 5,
      marginHorizontal: 21,
  },
});
