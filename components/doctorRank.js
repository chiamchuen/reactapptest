import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Checkbox from 'expo-checkbox';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import Animated from 'react-native-reanimated';

const initialData = [
  {
    index: 1,
    label: 'Julie Tan',
  },
  {
    index: 2,
    label: 'Haresh Sharma',
  },
  {
    index: 3,
    label: 'Siti Nurul',
  },
  {
    index: 4,
    label: 'Tan Jin Sheng',
  },
  
];

export default function doctorRank ({navigation}) {
  const [data, setData] = useState(initialData);

  const renderItem = ({ item, index, drag, isActive }) => (
    <View style={styles.item}>
      <TouchableOpacity onLongPress={drag}>
        <Text style={styles.patientName}>{item?.label}</Text>
      </TouchableOpacity>
    </View>
  );

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


      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Hello Doctor</Text>
      </View>


      <View style={styles.questionTitleWrapper}>
        <Text style={styles.question1}>Current List</Text>
        <View style={styles.refreshBox}>
            <Text style={styles.refreshText}>Refresh</Text>
        </View>
      </View>


      <View style={styles.filterWrapper}>
          <Text style={styles.filterText}>Filter:</Text>
          <Text style={styles.teleconsultText}>Teleconsultation</Text>
          <Text style={styles.bar}>|</Text>
          <Text style={styles.physicalText}>Physical consultation</Text>
      </View>

      <View style={styles.seeAllWrapper}>
          <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View></View>
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <Text style={{marginTop: 49, marginLeft: 40, fontSize: 28, fontFamily: 'Montserrat-Bold', }}>1{"\n"}{"\n"}{"\n"}2{"\n"}{"\n"}{"\n"}3{"\n"}{"\n"}{"\n"}4</Text>
          <DraggableFlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={({ data }) => setData(data)}
          />
      </View>



  {/*
    <View style={styles.patientWrapper}>
        <View style={styles.patientBox}>
            <View style={styles.innerWrapper}>
                <View style={styles.indexBox}>
                    <Text style={styles.indexText}>1</Text>
                </View>
                <Text style={styles.patientName}>Julie Tan</Text>
                <View style={styles.functionWrapper}>
                    <Text style={styles.viewText}>View Info | Rearrange Order</Text>
                </View> 
            </View>

        </View>
    </View>
  */}
{/*
        <View style={styles.bottomWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}>
            <View style={styles.backBox}>
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
*/}

    </View>







    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    headerWrapper: {
      backgroundColor: colors.doctorHeader,
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
  
  
    questionTitleWrapper: {
      marginTop: 52,
      marginLeft: 35,
      flexDirection: 'row',
      alignItems: 'center',
    },
    question1: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      color: colors.doctorbutton,
    },

    refreshBox: {
        marginLeft: 96,
        height: 38,
        width: 91,
        borderRadius: 38,
        backgroundColor: colors.doctorbutton,

    },

    refreshText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: "#fff",
        paddingTop: 9,
        marginHorizontal: 13,

    },

    filterWrapper: {
        marginTop: 21,
        marginLeft: 35,
        alignItems: 'center',
        flexDirection: 'row',
    },

    filterText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: "#707070",

    },

    teleconsultText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: "#707070",
        marginLeft: 16,

    },

    bar: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: "#707070",
        marginLeft: 7,
    },

    physicalText: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: "#707070",
        marginLeft: 7,

    },

    seeAllWrapper: {
        marginLeft: 142,
        marginTop: 16,
        height: 38,
        width: 91,
        borderRadius: 38,
        backgroundColor: colors.doctorbutton,
    },

    seeAllText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: "#fff",
        paddingTop: 9,
        marginHorizontal: 18,

    },

    screen: {
      marginTop: 24,
      flex: 1,
      backgroundColor: '#212121',
    },

    item: {
      borderColor: colors.doctorbutton,
      borderWidth: 3,
      //padding: 20,
      width: 250,
      height: 74,
      //marginHorizontal: 10,
      marginTop: 31,
      marginLeft: 30,
      borderRadius: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    patientWrapper: {
        marginTop: 31,
        marginLeft: 29,
    },

    patientBox: {
        width: 317,
        height: 74,
        borderRadius: 18,
        borderColor: "#D40000",
        borderWidth: 3,
    },

    innerWrapper: {
        flexDirection: 'row',
    },

    indexBox: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: "#D40000",
        marginTop: 2,

    },

    indexText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: "#fff",
        paddingTop: 14,
        marginHorizontal: 27,
    },

    patientName: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: "#707070",
        paddingTop: 17,
        marginLeft: 18,

    },

    functionWrapper: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 53,
    },

    viewText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: "#707070",
    },
  
    bottomWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 190,
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
  