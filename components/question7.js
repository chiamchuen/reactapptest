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

export default function question7 ({ navigation }) {
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
        <View>
            <Text>question7</Text>

            {/* back and next */}
            <View style={styles.bottomWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
                <View style={styles.backBox}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('question8')} style={styles.nextWrapper}> 
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

    bottomWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 300,
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
  