import React, {useState} from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
// import { Checkbox } from 'react-native-paper'
import Checkbox from 'expo-checkbox';
import { Audio } from 'expo-av';


export default function DrawerContent({navigation}) {
const [checked, setChecked] =useState (false)
const [sound, setSound] =useState(false);
    const [music, setMusic]=useState()
    // const navigation = useNavigation()

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('./playBg.mp3')
        );
        setMusic(sound&&sound);
    
        await sound.playAsync(); 
        setSound(true)
    }

        const pauseMusic = async() =>{
            setSound(false) 
            if (music !== null){
                await music?.pauseAsync()
            }
        }
    const playMusic=() =>{

playSound()
    }
      React.useEffect(() => {
        return music
          ? () => {
              console.log('Unloading Sound');
              music.unloadAsync(); }
          : undefined;
      }, [music]);

    return (
        <View style={styles.game}>
       
        <ImageBackground style={styles.gamePhoto}>
            <View style={styles.settings}>
            <Checkbox   
    value={sound}
    onValueChange={sound ? pauseMusic : playMusic}
    color={sound ? '#4630EB' : '#000'}
    style={{margin:8}}
/>
            <Text style={styles.settingsText} >Sound On/Off</Text>
            <TouchableOpacity
            onPress={()=>
                navigation.navigate('Choice')
            }>
                <Text
                style={styles.exit}
                >Exit</Text>
            </TouchableOpacity>
            <View  style={styles.container}>





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
        width: '100%',
        backgroundColor: '#AFD471',
    },
    settingsText: {
        color: 'white',
        
    }, 
    settings: {
        marginTop: '20%',
        flex: 1
    },
    exit: {
        color: 'white',
        marginTop: '190%'
    }
 
})

