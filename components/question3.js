import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Triangle } from 'react-native-shape';
import Checkbox from 'expo-checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function question3 ({ navigation }) {
    let[fontsLoaded, error]=useFonts({
        'Lato-Bold':require('../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular':require('../assets/fonts/Lato-Regular.ttf'),
        'Montserrat-Bold':require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular':require('../assets/fonts/Montserrat-Regular.ttf')
      });
      const [checkboxState, setCheckboxState] = React.useState(false);
      const [checkboxState2, setCheckboxState2] = React.useState(false);
      const [checkboxState3, setCheckboxState3] = React.useState(false);
      const [checkboxState4, setCheckboxState4] = React.useState(false);
      const [checkboxState5, setCheckboxState5] = React.useState(false);
      const [checkboxState6, setCheckboxState6] = React.useState(false);
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
          <Text style={styles.question1}>Question 3</Text>
      </View>

      <View style={styles.questionWrapper}>
          <Text style={styles.questionContent}>Do you have the symptoms listed below?</Text>
      </View>
        
      <View style={styles.optionsWrapper}>
          <BouncyCheckbox
            isChecked={checkboxState}
            disableBuiltInState
            onPress={() => setCheckboxState(!checkboxState)} 
            fillColor={colors.darkestGreen} 
            iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
            text = "Headache" 
            textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
          />
        </View>

        <View style={styles.optionsWrapper2}>
          <BouncyCheckbox 
            isChecked={checkboxState2}
            disableBuiltInState
            onPress={() => setCheckboxState2(!checkboxState2)} 
            fillColor={colors.darkestGreen} 
            iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
            text = "Fever" 
            textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
          />
        </View>

        <View style={styles.optionsWrapper2}>
          <BouncyCheckbox
            isChecked={checkboxState3}
            disableBuiltInState
            onPress={() => setCheckboxState3(!checkboxState3)} 
            fillColor={colors.darkestGreen} 
            iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
            text = "Fatigue" 
            textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
          />
        </View>

        <View style={styles.optionsWrapper2}>
          <BouncyCheckbox
            isChecked={checkboxState4}
            disableBuiltInState
            onPress={() => setCheckboxState4(!checkboxState4)} 
            fillColor={colors.darkestGreen} 
            iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
            text = "Chills" 
            textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
          />
        </View>

        <View style={styles.optionsWrapper2}>
          <BouncyCheckbox
            isChecked={checkboxState5}
            disableBuiltInState
            onPress={() => setCheckboxState5(!checkboxState5)} 
            fillColor={colors.darkestGreen} 
            iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
            text = "Runny Nose" 
            textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
          />
        </View>

        <View style={styles.optionsWrapper2}>
          <BouncyCheckbox
            isChecked={checkboxState6}
            disableBuiltInState
            onPress={() => setCheckboxState6(!checkboxState6)} 
            fillColor={colors.darkestGreen} 
            iconStyle={{ borderColor: colors.darkestGreen, borderRadius: 6, height: 23, width: 23, borderWidth: 1, }} 
            text = "Nausea" 
            textStyle={{ fontFamily: 'Lato-Regular', textDecorationLine: 'none', }}
          />
        </View>
      {/* back and next */}
      <View style={styles.bottomWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
          <View style={styles.backBox}>
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('question4')} style={styles.nextWrapper}> 
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
      paddingTop: 12,
      paddingLeft: 15,
      alignItems: 'center',
    },

    optionsWrapper: {
      marginTop: 40,
      marginHorizontal: 90,
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
      marginHorizontal: 90,
      flexDirection: 'row',
      alignItems: 'center',
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
      justifyContent: "center",
    },

    radioButtonIconContainer: {
      flexDirection: 'row',

    },
  
    radioButtonIcon: {
      height: 14,
      width: 14,
      borderRadius: 7,
      backgroundColor: colors.darkestGreen,
    },
  
    radioButtonText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      marginHorizontal: 15,
      color: '#707070',
    },    

    bottomWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
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
});
