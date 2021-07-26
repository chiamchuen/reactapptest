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


export default function question5 ({ navigation }) {
  const [checkboxState, setCheckboxState] = React.useState(false);

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
          <Text style={styles.mainquestion}>Question 5</Text>
      </View>

      <View style={styles.questionWrapper}>
          <Text style={styles.questionContent}>Rate the severity of your {"\n"}headache.</Text>
      </View>

      {/*
      <Text style = {{fontSize: 16}, {fontFamily: 'Lato-Bold'}, {marginHorizontal: 181}}>
        Mild
      </Text>
      */}


      <Text style = {styles.bodyText}>Mild</Text>

      <View style={styles.level_1_wrap}>
          <Text style={styles.question1}>1</Text>
      </View>
      
      <View style={styles.level_2_wrap}>
          <Text style={styles.question1}>2</Text>
      </View>

      <View style={styles.level_3_wrap}>
          <Text style={styles.question1}>3</Text>
      </View>

      <View style={styles.level_4_wrap}>
          <Text style={styles.question1}>4</Text>
      </View>

      <View style={styles.level_5_wrap}>
          <Text style={styles.question1}>5</Text>
      </View>

      <View style={styles.level_6_wrap}>
          <Text style={styles.question1}>6</Text>
      </View>

      <View style={styles.level_7_wrap}>
          <Text style={styles.question1}>7</Text>
      </View>

      <View style={styles.level_8_wrap}>
          <Text style={styles.question1}>8</Text>
      </View>

      <View style={styles.level_9_wrap}>
          <Text style={styles.question1}>9</Text>
      </View>

      <View style={styles.level_10_wrap}>
          <Text style={styles.question1}>10</Text>
      </View>

      <Text style = {styles.bodyText2}>Very Severe</Text>

      {/* back and next */}
      <View style={styles.bottomWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
          <View style={styles.backBox}>
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('question6')} style={styles.nextWrapper}> 
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
    mainquestion: {
      fontSize: 25,
      fontFamily: 'Montserrat-Bold',
      color: colors.darkestGreen,
    },
    question1: {
      fontSize: 18,
      fontFamily: 'Montserrat-Bold',
      color: "#FFF",
      marginHorizontal: 15,
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
      paddingTop: 14,
      alignItems: 'center',
      textAlign: 'center',
    },

    bottomWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 0,
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
    bodyText: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: '#707070',
      marginTop : 36,
      marginHorizontal: 90,
      
    },
    
    bodyText2: {
      fontFamily: 'Lato-Bold',
      fontSize: 16,
      color: '#707070',
      marginTop : 10,
      marginHorizontal: 90,
      marginBottom: 14,
      
    },

      level_1_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FFE353',
      marginTop: 0,
      marginLeft: 150,
    },
    level_2_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FFD84E',
      marginTop: 7,
      marginLeft: 150,
    },
    level_3_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FFC328',
      marginTop: 7,
      marginLeft: 150,
    },
    level_4_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FFB628',
      marginTop: 7,
      marginLeft: 150,
    },
    level_5_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FF9900',
      marginTop: 7,
      marginLeft: 150,
    },
    level_6_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#F38300',
      marginTop: 7,
      marginLeft: 150,
    },
    level_7_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FF6B00',
      marginTop: 7,
      marginLeft: 150,
    },
    level_8_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#FF5C00',
      marginTop: 7,
      marginLeft: 150,
    },
    level_9_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#F54108',
      marginTop: 7,
      marginLeft: 150,
    },
    level_10_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#D40000',
      marginTop: 7,
      marginLeft: 150,
    },
    
    level_10_wrap: {
      width: 67,
      height: 24,
      borderRadius: 14,
      backgroundColor: '#D40000',
      marginTop: 7,
      marginLeft: 150,
    },



});
