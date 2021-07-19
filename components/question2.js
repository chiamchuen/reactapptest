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

export default function question2 ({ navigation }) {
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

        {/* back */}

        <TouchableOpacity onPress={() => navigation.goBack()} >
            <View style={styles.backWrapper}>
                <View style={styles.backBox}>
                    <Text style={styles.backText}>Back</Text>
                </View>
            </View>
        </TouchableOpacity>
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

    backWrapper: {
        marginTop: 574,
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
  