import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet,} from 'react-native'
import mainPage from '../image/Mainpage.png'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
        <ImageBackground source={mainPage} 
        style={styles.img}>
            <Text style={styles.mentis}>MENTIS</Text> 
              <TouchableOpacity
               style={styles.button}
               onPress={()=>
            navigation.navigate('Choice')
             }
              >  
            <Text style= {styles.start}>START</Text>
      </TouchableOpacity> 
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    img: { 
      height: '100%',
      width: '100%'
    },
    mentis: {
        fontSize: 55,
        marginTop: 355,
        marginLeft: 70,
        color: '#AFD471',
    },
    button: {
        marginTop: 30,
        marginLeft: 140,
        width: 100,
        height: 30, 
       borderRadius: 50,
       backgroundColor: 'white',
       borderColor: '#AFD471',
        borderWidth: 3,
    },
   start: {
     color: '#AFD471',
     fontSize: 20,
     textAlign: 'center',
     fontWeight: 'bold',
   }
  });