import React, { useRef, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native';
import Constants from 'expo-constants';
import DisplayResult from './DisplayResult';
import Actions from './Actions';
import Header from './Header';

function Rockpaper() {
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setcomputerChoice] = useState(0);
    const [result, setResult] = useState("");
    const [canPlay, setPlay] = useState(true);

    // for animation 
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice){
      // we have 3 choice 
      // 1 = rock
      // 2 = paper
      // 3 = scissors

      const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
      let resultString = "";

      if(choice === 1){
        resultString = randomComputerChoice === 3 ? "WIN 🎉" : "LOSE 😭";
      }else if(choice === 2){
        resultString = randomComputerChoice === 1 ? "WIN 🎉" : "LOSE 😭";
      }else{
        resultString = randomComputerChoice === 2 ? "WIN 🎉" : "LOSE 😭";
      }

       if(choice === randomComputerChoice){
        resultString = "DRAW 😎";
       }

       setUserChoice(choice);
       setcomputerChoice(randomComputerChoice);

      // Wait animation hide old result 
      setTimeout(()=>{
        setResult(resultString);
      }, 300);


      // Animation hide old result and show new result
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration:300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue:1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();


      // Disable action when animated running 
      setPlay(false);
      setTimeout(()=>{
        setPlay(true);
      }, 600);      
    }
    
    // return the view 
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Header />
          <View style={styles.content}>

            {/*  result  */}
            <View style={styles.result}>
                <Animated.Text
                  style={[styles.resultText, {opacity: fadeAnimation}]}
                >
                  {result}
                </Animated.Text>
            </View>

            {/* display  */}
            <View style={styles.screen}>
                {!result ? (
                  <Text style={styles.readyText}>
                    Let's play
                  </Text>
                ) : (
                  <DisplayResult
                    userChoice={userChoice}
                    computerChoice={computerChoice}
                  />
                )}
            </View>

            {/* player choice actions  */}
            <Actions play={play} canPlay={canPlay}/>
            
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    )
      
}
  
  export default Rockpaper
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },
    content: {
      flex:1,
      marginBottom: 5,
      backgroundColor: '#e8eaed'
    },
    result: {
      height: 100,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    resultText: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    screen: {
      flex: 1,
      flexDirection: 'row',
    },
    readyText: {
      marginTop: -48,
      alignSelf: 'center',
      textAlign: 'center',
      width: '100%',
      fontSize: 48,
      fontWeight: 'bold',
    }



  });