import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';

import Card from '../components/Card';

const UpdateScreen = props => {
  
  var dataMap = {};

  const [enteredName, setEnteredName] = useState('Josh Grodsky');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState('140');
  const [maxBench, setMaxBench] = useState('170');
  const [maxSquat, setMaxSquat] = useState('225');
  const [selectedNumber, setSelectedNumber] = useState('66');
    //only allowing number values 
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g), '');
    };

    

    const confirmInputHandler = () => {
       var i = 0;
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0)
        {
          return;
        }
        setConfirmed(true);
        //setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));

        dataMap[i] = {enteredValue};
        i++;
    }

    

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
      <View style={styles.screen}>
        <Card style={styles.textContainer}>
          <Text style={{fontSize: 30}}> Name: </Text>
          <TextInput placeholder="Name" autoCorrect={false} style={{borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 30, onChangeText={_lastNativeText = setEnteredName}}  }/>
        </Card>
        <Card style={styles.textContainer}>
          <Text style={{fontSize: 30}}> Weight: </Text>
          <TextInput placeholder="Weight" keyboardType='numeric' maxLength={3} style={{borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 30, onChangeText={_lastNativeText = setSelectedWeight}}}/>
        </Card>
        <Card style={styles.textContainer}>
          <Text style={{fontSize: 30}}> Max Bench: </Text>
          <TextInput placeholder="Max Bench" keyboardType='numeric' maxLength={3} style={{borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 30,onChangeText={_lastNativeText = setMaxBench}}}/>
        </Card>
        <Card style={styles.textContainer}>
          <Text style={{fontSize: 30}}> Max Squat: </Text>
          <TextInput placeholder="Max Squat" keyboardType='numeric' maxLength={3} style={{borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 30, onChangeText={_lastNativeText = setMaxSquat}}}/>
        
        </Card>
        
        <View style={styles.buttonContainer}>
        <MainButton onPress={() => {
          navigation.navigate('MeScreen', enteredName, selectedWeight, maxBench, maxSquat);
        }} title='SAVE'>
            
                    <Ionicons name="ios-save" size={50} color= "green"/>
            </MainButton>
          <MainButton onPress={() => {
            navigation.navigate('MeScreen');
          }} title='CANCEL'>
            
            <Ionicons name="ios-undo" size={50} color= "red"/>
          </MainButton>

            </View>
      </View>
      confirmInputHandler();
      </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    marginVertical: 10
  },
  textContainer: {
    flex: 0,
    fontSize: 30,
    width: 350,
    maxWidth: "90%",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});

export default UpdateScreen;