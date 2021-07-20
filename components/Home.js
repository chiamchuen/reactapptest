import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
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
            <View style={styles.container}>
                {/* header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTitle}>Hello Doctor</Text>
                </View>
                
                {/* Appointments */}
                <View style={styles.appointmentTitleWrapper}>
                    <Text style={styles.appointments}>Appointments</Text>
                </View>
                
                <TouchableOpacity onPress={() => navigation.navigate('question1')} style={styles.appointmentBox}>
                    <Text style={styles.appointmentContent}>
                        Book an appointment{'\n'} at your nearest Polyclinic
                    </Text>
                    <View style={styles.imageWrapper}>
                        <Image source={require("../assets/images/doctor_login42.png")}/>
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

    appointmentTitleWrapper: {
        marginTop: 69,
        marginLeft: 40,
    },

    appointments: {
        fontSize: 25,
        fontFamily: 'Montserrat-Bold',
        color: colors.darkestGreen,
    },

    appointmentWrapper: {
        marginTop: 50,
        marginLeft: 35,
    },

    appointmentBox: {
        width: 322,
        height: 168,
        borderRadius: 14,
        borderColor: '#A7B93C',
        borderWidth: 3,
        marginTop: 50,
        marginLeft: 35,
    },

    appointmentContent: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#707070',
        textAlign: 'center',
        marginTop: 13,
      },
    imageWrapper: {
        alignItems: "center",
        marginTop: 12,
    }
  });
  