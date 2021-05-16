import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import bg from '../image/bg1.png'



export default function Result({navigation, route}) {
    const{operator,  level} = route.params
    return (
    
        <View style={styles.game}>
        <ImageBackground source={bg} style={styles.gamePhoto}>
        <View style={styles.textLevel}>
        <Text>Option {operator}</Text>
         <Text>{level} level</Text>
        </View>
          <View>
              <Text style={styles.second}>Your result is</Text>

              <Text style={styles.second1}>points</Text>
          </View>

          <View style={styles.text}>
            <TouchableOpacity style={styles.next} 
            onPress={()=>
                navigation.navigate('Game')
            }>
<Text style={styles.nextText}>TRY AGAIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.next} 
            onPress={()=>
                navigation.navigate('Choice')
            }>
<Text style={styles.nextText}>GO TO MAIN MENU</Text>
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
        </View>
        
    )
}
const styles = StyleSheet.create({
    game: {
        flex: 1,
    },
    gamePhoto: {
        height: '100%',
        width: '100%'
    },
    textLevel: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around', 
        marginTop: '15%',
        marginLeft: '10%'  
    },
    plus: {
        width: 45,
        height: 45,
        
    },
    level: {
       color: '#0186BF',
       fontSize: 35,  
    },
    second: {
        color: 'white',
        textAlign: 'center',
        fontSize: 27,
        marginTop: '15%'
     },
     second1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 27,
        marginTop: '5%'
     },
    seven: {
        width: 150,
        height: 200,
        marginLeft: '30%',
        marginTop: '2%'
        
    },
    text: {
        marginBottom: '50%'
    },
      next: {
        marginLeft: '10%',
        width: 300,
        height: 40, 
       borderRadius: 50,
       backgroundColor: '#AFD471',
       marginTop: '2%'
      

    },
    nextText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
     },
 
})

