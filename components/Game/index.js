import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import bg from '../image/bg1.png'
import { Audio } from 'expo-av';



const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};


export default function Game({ navigation, route }) {
  const{operator, maxNum, level} = route.params

  const [counter, setCounter] = React.useState(5);
  React.useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);

      }
    };
  }, [counter]);

  const [data, setData] = useState([])
  const [num, setNum] = useState(0)
  const [check, setCheck] = useState('')
  const [music, setMusic]=useState()


  React.useEffect(() => {
    return music
      ? () => {
          music.unloadAsync(); }
      : undefined;
  }, [music]);  

  let arr = []

const MinusEasy= ()=>{
  arr=[]

  let numberOne=Math.floor(Math.random() * (100 - 90)) + 90;
  let numberTwo=Math.floor(Math.random() * (50 - 20)) + 20;
  let numberThree=Math.floor(Math.random() * (50- 20)) + 20;
  

  setData([numberOne,numberTwo,numberThree]) 
}

const MinusHard= ()=>{
  arr=[]

  let numberOne=Math.floor(Math.random() * (1000 - 450)) + 450;
  let numberTwo=Math.floor(Math.random() * (100 - 30)) + 20;
  let numberThree=Math.floor(Math.random() * (100- 30)) + 20;
  let numberFour=Math.floor(Math.random() * (100- 20)) + 20;
  let numberFive=Math.floor(Math.random() * (100- 30)) + 20;
  let numberSix=Math.floor(Math.random() * (100- 30)) + 20;
  let numberSeven=Math.floor(Math.random() * (100- 30)) + 20;
  let numberEight=Math.floor(Math.random() * (100- 30)) + 20;
  let numberNine=Math.floor(Math.random() * (100- 30)) + 20;
  let numberTen=Math.floor(Math.random() * (100- 30)) + 20;
  setData([numberOne,numberTwo,numberThree,numberFour,numberFive,numberSix,numberSeven,numberEight,numberNine,numberTen]) 
}

const MinusNormal= ()=>{
  arr=[]

  let numberOne=Math.floor(Math.random() * (400 - 350)) + 300;
  let numberTwo=Math.floor(Math.random() * (100 - 20)) + 20;
  let numberThree=Math.floor(Math.random() * (100- 20)) + 20;
  let numberFour=Math.floor(Math.random() * (100- 20)) + 20;
  let numberFive=Math.floor(Math.random() * (100- 20)) + 20;

  setData([numberOne,numberTwo,numberThree,numberFour,numberFive]) 
}


const DivideEasy = ()=>{
  
  var int1 = Math.floor((Math.random() * 99) + 10);
  var int2 = Math.floor((Math.random() * 9) + 2);
   if (int1 % int2 === 0){
     setData([int1, int2])
       }   else {
        DivideEasy()
  }
  }

 const DivideNormal = ()=>{
    let int1 = Math.floor((Math.random() * 999) + 10);
    let int2 = Math.floor((Math.random() * 20) + 2);
    debugger
      if (int1 % int2 === 0){
       setData([int1, int2])
      }   else {
        DivideNormal()
      }
    }

    const DivideHard = ()=>{
      let int1 = Math.floor((Math.random() * 9999) + 10);
      let int2 = Math.floor((Math.random() * 90) + 2);
       if (int1 % int2 === 0){
         setData([int1, int2])
           }   else {
            DivideHard()
      }
      }
      
const changeMinus = () => {
  arr = []
  if(operator=='-' && level=='Easy') MinusEasy()
  if(operator=='-' && level=='Normal') MinusNormal()
  if(operator=='-' && level=='Hard') MinusHard()
  setNum(0)
}

      const changeDivide = () => {
        arr = []
        if(operator=='/' && level=='Easy')DivideEasy()
        if(operator=='/' && level=='Normal')DivideNormal()
        if(operator=='/' && level=='Hard')DivideHard()
        setNum(0)
      }
const changePlus = () => {
  arr = []
  for (let i = 0; i < maxNum; i++) {
    arr.push(Math.floor(Math.random() * 99))
    setData([...arr])
    setCheck('')
  }
  setNum(0)


}


const changeMulty = () => {
  arr = []
  for (let i = 0; i < maxNum; i++) {
    arr.push(Math.floor(Math.random() * 10)+1)
    setData([...arr])
  }
  setNum(0)

}

let summ
if (operator ==='+' || operator ==='-')summ = 0
else summ = 1 ;




if(operator == '+'){
  arr = []
  for (let i = 0; i < data.length; i++) {
    summ+=data[i]
  }
}
if(operator == '*'){
  arr = []
  for (let i = 0; i < data.length; i++) {
    summ*=data[i]
  }
} 
if(operator =='/'){
 summ=Number(data[0]/data[1])
}
if(operator == '-' && level=='Easy'){
   summ=data[0]-data[1]-data[2]
}
if(operator == '-' && level=='Normal'){
  summ=data[0]-data[1]-data[2]-data[3]-data[4]
}
if(operator == '-' && level=='Hard'){
  summ=data[0]-data[1]-data[2]-data[3]-data[4]-data[5]-data[6]-data[7]-data[8]-data[9]
}








  const nextNum = () => {
    num == maxNum ? alert('vse') : setNum(num + 1)
  }

  const proverka = () => {
    if (check == summ) trueSound()
    else falseSound()
    if(operator=='+')changePlus()
   if(operator=='*')changeMulty()
   changeDivide()
   changeMinus()
 
  }


  useEffect(() => {
   if(operator=='+')changePlus()
   if(operator=='*')changeMulty()
   changeDivide()
   changeMinus()
  }, [])




  const trueSound =()=>{

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('./player/true.mp3')
        );
        setMusic(sound&&sound);
    
        await sound.playAsync(); 
 
    }

      playSound()
    

     

  }
  const falseSound =()=>{
    

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('./player/false.mp3')
        );
        setMusic(sound&&sound);
    
        await sound.playAsync(); 

    }

      playSound()

  }
  

  return (

    <View style={styles.game}>
      <ImageBackground source={bg} style={styles.gamePhoto}>
        <View style={styles.textLevel}>
     
          <View className="App">
            <Text>{counter === 0 ? navigation.navigate('Result', {operator, level}) : `Timer: ${format(counter)}`}</Text>
          </View>
          <Text>Option {operator}</Text>  
                <Text>{level} level</Text> 
        </View>
       

        {
          num == maxNum ?
            <>
              <TextInput type="text" onChange={e => setCheck(e.target.value)} value={check}   style={styles.randomNumber} />
              <TouchableOpacity onPress={() => proverka() } style={styles.next}>
                <Text style={styles.nextText} >
                  Check
                </Text>
              </TouchableOpacity>
            </>
            :
            <>
              <TextInput style={styles.randomNumber} value={data[num]} />
              <TouchableOpacity onPress={() => nextNum()} style={styles.next}>
                <Text style={styles.nextText} >
                  Next
                </Text>
              </TouchableOpacity>
            </>
        }
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
    color: '#0186BF',
    textAlign: 'center',
    fontSize: 27,
    marginBottom: '5%'
    // marginTop: 80,
  },
  randomNumber: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(175,212,113,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(175,212,113,1)',
    borderRadius: 25,
    marginBottom: '5%',
    marginLeft: '30%',
  },
  seven: {
    width: 100,
    flex: 1,
    justifyContent: 'center',
    marginLeft: '20%'
  },
  next: {
    // marginTop: 45,
    marginLeft: '10%',
    width: 300,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#AFD471',
    marginBottom: '70%'

  },
  nextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },

})











