import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import bg from '../image/bg.png'

export default function Level({navigation, route}) {

    const { operator } = route.params;
    return (
    
        <View style={styles.game}>
        <ImageBackground source={bg} style={styles.gamePhoto}>
        <View>
            <Text style={styles.level}>Select difficulty level</Text>
        </View>
            <View style={styles.blocks}>
            <View style={styles.operation}>
            <TouchableOpacity
                style={styles.block}
                onPress={()=>
                operator == '/' ? navigation.navigate('Game', {operator, maxNum: 2, level:'Easy'}) 
               : navigation.navigate('Game', {operator, maxNum: 3, level:'Easy'})}>
                    <View style={styles.planes}>
                        <View style={styles.plane}></View>
                        <View style={styles.plane}></View>
                        <View style={styles.plane1}></View>
                    </View>
                    <Text style={styles.description}>Easy level. For each example, you are given up to 60 seconds of time, in examples only single-digit numbers</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.operation1}>    
            <TouchableOpacity
                style={styles.block}
                onPress={()=>
                    operator == '/' ? navigation.navigate('Game', {operator, maxNum: 2, level:'Normal'}) 
               :
                navigation.navigate('Game', {operator, maxNum: 5, level:'Normal'})}>
                    <View style={styles.planes}>
                        <View style={styles.plane}></View>
                        <View style={styles.plane1}></View>
                        <View style={styles.plane1}></View>
                    </View>
                    <Text style={styles.description}>Normal level. For each example, you are given up to 60 seconds of time, the examples use single and two-digit numbers</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.operation2}>
            <TouchableOpacity
                style={styles.block}
                onPress={()=>
                    operator == '/' ? navigation.navigate('Game', {operator, maxNum: 2, level:'Hard'}) 
               :
                navigation.navigate('Game', {operator, maxNum:10, level:'Hard'})}>
                    <View style={styles.planes}>
                        <View style={styles.plane1}></View>
                        <View style={styles.plane1}></View>
                        <View style={styles.plane1}></View>
                    </View>
                    <Text style={styles.description}>Hard level. For each example, you are given up to 60 seconds of time, the examples use single, two and three-digit numbers</Text>
            </TouchableOpacity>
            </View>
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
    level: {
        color: '#0186BF',
        textAlign: 'center',
        fontSize: 42,
        marginTop: 40,
     },
    block: {
        flex: 1,
        justifyContent: 'space-around',
        height: 100,
        width: '80%',
        backgroundColor: 'rgba(175,212,113,0.2)',
        borderWidth: 1,
        borderColor: 'rgba(175,212,113,1)',
        borderRadius: 25,
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: '5%',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    operation:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '30%',
    },
    operation1:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10%'
    },
    operation2:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20%'
    },
    planes:{
        height: 60,
        width: '20%'
    },
    plane:{
        flex: 1,
        justifyContent: 'flex-start',
        width: 60,
        borderWidth: 1,
        borderColor: 'rgba(175,212,113,1)',
        alignItems: 'center',
        marginTop:'2%',
        marginBottom: '2%'
    },
    plane1:{
        flex: 1,
        justifyContent: 'flex-start',
        width: 60,
        backgroundColor: 'rgba(175,212,113,1)',
        alignItems: 'center',
        marginTop:'2%',
        marginBottom: '2%'
    },
    description: {
        color: '#0186BF',
        textAlign: 'left',
        fontSize: 14,
        width: '60%'
     },
})

