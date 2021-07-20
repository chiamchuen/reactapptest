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

export default function question4 ({ navigation }) {
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

      {/*question no.*/}
      <View style={styles.questionTitleWrapper}>
        <Text style={styles.question1}>Question 4</Text>
      </View>

      {/* question */}
      <View style={styles.questionWrapper}>
        <Text style={styles.questionContent}>How long have these symptoms lasted for?</Text>
      </View>
      
      {/*symptom*/}
      <Text style = {styles.symptomText}>Headache</Text>

      {/*selects*/}
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

      <Text style = {styles.symptomText}>Nausea</Text>
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
            {/* back and next */}
            <View style={styles.bottomWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                <View style={styles.backBox}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('question5')} style={styles.nextWrapper}> 
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
      paddingLeft: 21,
    },

    bottomWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 200,
      
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
      marginTop:0
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
    selectWrapper: {
      marginTop: 18,
      paddingHorizontal: 41,
      flexDirection: 'row',
      alignItems: 'center',
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
    inputbox: {
      width: 293,
      height: 52,
      borderRadius: 29,
      backgroundColor: colors.input,
    },
    
    symptomText: {
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: colors.darkestGreen,
      marginTop : 36,
      marginHorizontal: 46,
    }

},
);
  