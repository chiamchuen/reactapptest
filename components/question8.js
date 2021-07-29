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
import RadioButtonRN from 'radio-buttons-react-native';


const data = [
  {
    label: 'Once every few hours'
   },
   {
    label: 'Once a day'
   },
   {
    label: 'Once every few days'
   },
   {
    label: 'Once a week'
   },
   
];

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function postthis() {
  fetch('http://ptsv2.com/t/ob8gg-1598076748/post', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendthis),
  })
  .then(response => response.json())
  .then(sendthis => {
    console.log('Success:', sendthis);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


export default function question8 ({route, navigation }) {
    const {qn1_1,qn2_1,qn2_2,qn2_3,qn2_4,qn2_5,qn2_6,qn3_1,qn3_2,qn3_3,qn3_4,qn3_5,qn3_6} = route.params;
    let[fontsLoaded, error]=useFonts({
        'Lato-Bold':require('../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular':require('../assets/fonts/Lato-Regular.ttf'),
        'Montserrat-Bold':require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular':require('../assets/fonts/Montserrat-Regular.ttf')
      });

    if (!fontsLoaded){
        return <AppLoading />
    }
    var uniqueID = uuidv4();

    var sendthis = {"pregnant":JSON.parse(qn2_1), "obese":JSON.parse(qn2_2), "smoker":JSON.parse(qn2_3), "diabetic": JSON.parse(qn2_4), 
              "highcholestrol": JSON.parse(qn2_5), "hypertension": JSON.parse(qn2_6), "headache": JSON.parse(qn3_1), "fever": JSON.parse(qn3_2),
              "fatigue": JSON.parse(qn3_3), "chills": JSON.parse(qn3_4), "runningnose": JSON.parse(qn3_5), "nausea" : JSON.parse(qn3_6),
              "userid": String(uniqueID), "injury": false, "chestpain": false, "shortnessofbreath": false, "dizziness": false,
              "vomit": false, "diarrhoea": false, "stomachache": false, "cough": false, "sorethroat": false};




    console.log("POST")
    console.log(sendthis)
    fetch('http://ptsv2.com/t/ob8gg-1598076748/post', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendthis),
    })
    .then(response => response.json())
    .then(sendthis => {
      console.log('Success:', sendthis);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    


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
            <Text style={styles.question1}>Question 8</Text>
          </View>

          <View style={styles.questionWrapper}>
            <Text style={styles.questionContent}>How frequently do you    experience these headaches?</Text>
          </View>
          <RadioButtonRN
            data={data}
            selectedBtn={(e) => console.log(e)} 
            box={false}
            style={{ marginLeft: 42, marginTop: 30 }}
            textStyle={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 30, }}
            activeColor={colors.darkestGreen}
          />
            {/* back and next */}
            <View style={styles.bottomWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                <View style={styles.backBox}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('question8',{qn1_1,qn2_1,qn2_2,qn2_3,qn2_4,qn2_5,qn2_6,qn3_1,qn3_2,qn3_3,qn3_4,qn3_5,qn3_6})} style={styles.nextWrapper}> 
                <View style={styles.nextBox}>
                  <Text style={styles.nextText}>End</Text>
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
    marginTop:12,
    textAlign:'center',
  },

  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 155,
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
    textAlign: 'center',
  },
});
