// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {  SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Choice = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
            <Text style={styles.level}>Choose one of  the options</Text>
        </View>
            <View style={styles.operations}>
          <View style={styles.operation}>
          <TouchableOpacity
                style={styles.randomNumber}
                onPress={()=>
                navigation.navigate('Level', {operator:'+'})}>
               <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.randomNumber}
                onPress={()=>
                navigation.navigate('Level', {operator:'-'})}><Text>-</Text>
            
              </TouchableOpacity>
          </View>

          <View style={styles.operation1}>
          <TouchableOpacity
                style={styles.randomNumber}
                onPress={()=>
                navigation.navigate('Level', {operator:'*'})}><Text>*</Text>
              
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.randomNumber}
                onPress={()=>
                navigation.navigate('Level', {operator:'/'})}>
               <Text>/</Text>
              </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
}

export default Choice;

const styles = StyleSheet.create({
  game: {
      flex: 1,
  },
  gamePhoto: {
      height: '100%',
      width: '100%'
  },
  level: {
      color: '#0186BF',
      textAlign: 'center',
      fontSize: 42,
      marginTop: 40,
   },
  operations:{
      marginTop: '5%',
      marginLeft: '10%',
      width: '80%'
  },
  operation:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '50%'
  },
  operation1:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '10%'
  },
  multiply: {
      width: 90.57,
      height: 88.62,
  },
  plus: {
      width: 90.44,
      height: 89.84,
  },
  minus: {
      width: 91,
      height: 44.01,
  },
  split: {
      width: 62.67,
      height: 88.62,
  },
  randomNumber: {
      flex: 1,
      justifyContent: 'center',
      width: 100,
      height: 140,
      backgroundColor: 'rgba(175,212,113,0.2)',
      borderWidth: 1,
      borderColor: 'rgba(175,212,113,1)',
      borderRadius: 25,
      alignItems: 'center',
      marginBottom: '5%',
      marginTop: '5%',
      marginLeft: '2%',
      marginRight: '2%'
  },
})
