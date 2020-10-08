import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  CheckBox,
} from "react-native";

import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from "moment";

import StopwatchContainer from "../stopwatch/stopwatchcontainer";
import MainButton from '../components/MainButton';
import Card from "../components/Card";
import Colors from "../constants/colors";
import WorkoutRect from "../components/WorkoutRect";



const WorkoutScreen = props => {
  
    //consts here
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format("MM-DD-YYYY")
     };

     const today = this.state.currentDate;
     const date = moment(today).format("MMMM D, YYYY");
     const day = moment(today).format("dddd");

     
    //work out conditions of what days to work out what 
    let content = 'Today\'s workout will be: ';
    //if(day is ___ ), display arms 
  return (
    <React.Fragment>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
        
      <View style={styles.screen}>
        <Text style={styles.title}>{date}</Text>

      
        <Card style={styles.timerContainer}>
          <StopwatchContainer />
        </Card>

        <View style={styles.summaryContainer}>

          
          <Text style={styles.title}>{content}</Text>
      </View>
      </View>

      
    </TouchableWithoutFeedback>


      <ScrollView>
        
        <View style={ styles.workoutListItem1}> 
          <Text style={styles.numberList}> SET 1: </Text>
          <Text style={{fontSize: 30, paddingRight: 6}}> PULL-UPS </Text>
          <Text style={{fontSize: 30}}> 5 REPS</Text>
        </View>
        <View style={styles.workoutListItem1}> 
          <Text style={styles.numberList}> SET 2: </Text>
          <Text style={{fontSize: 30, paddingRight: 5}}> PULL-UPS </Text>
          <Text style={{fontSize: 30}}> 5 REPS</Text>
        </View>


        <View style={styles.newWorkoutListItem2}> 
          <Text style={styles.numberList}> SET 1: </Text>
          <Text style={{fontSize: 30, paddingRight: 6}}> DB CURLS </Text>
          <Text style={{fontSize: 30}}> 10 REPS</Text>
        </View>
        <View style={styles.workoutListItem2}> 
          <Text style={styles.numberList}> SET 2: </Text>
          <Text style={{fontSize: 30, paddingRight: 5}}> DB CURLS </Text>
          <Text style={{fontSize: 30}}> 10 REPS</Text>
        </View>


        <View style={ styles.newWorkoutListItem1}> 
          <Text style={styles.numberList}> SET 1: </Text>
          <Text style={{fontSize: 30, paddingRight: 6}}> LEG RAISE </Text>
          <Text style={{fontSize: 30}}> 10 REPS</Text>
        </View>
        <View style={styles.workoutListItem1}> 
          <Text style={styles.numberList}> SET 2: </Text>
          <Text style={{fontSize: 30, paddingRight: 5}}> LEG RAISE </Text>
          <Text style={{fontSize: 30}}> 10 REPS</Text>
        </View>

        <View style={styles.newWorkoutListItem2}> 
          <Text style={styles.numberList}> SET 1: </Text>
          <Text style={{fontSize: 30, paddingRight: 6}}> PUSHUPS </Text>
          <Text style={{fontSize: 30}}> 20 REPS</Text>
        </View>
        <View style={styles.workoutListItem2}> 
          <Text style={styles.numberList}> SET 2: </Text>
          <Text style={{fontSize: 30, paddingRight: 5}}> PUSHUPS </Text>
          <Text style={{fontSize: 30}}> 20 REPS</Text>
        </View>
        
      </ScrollView>
      </React.Fragment>


  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 0,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    marginVertical: 10
  },
  timerContainer: {
    width: 350,
    maxWidth: "90%",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  summaryContainer: {
    fontSize: 24,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  workoutListItem1: {
      padding: 10,
      borderColor: 'black',
      backgroundColor: '#6495ed',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  workoutListItem2: {
    padding: 10,
    borderColor: 'black',
    backgroundColor: '#b0c4de',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
},
  newWorkoutListItem1: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#6495ed',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
},
newWorkoutListItem2: {
  padding: 10,
  marginTop: 20,
  backgroundColor: '#b0c4de',
  borderColor: 'black',
  borderWidth: 1,
  flexDirection: 'row',
},
  numberList: {
      paddingLeft: 1,
      paddingRight: 4,
      fontSize: 30,

  }
});
//{backgroundColor: '#6495ed', #b0c4de },
export default WorkoutScreen;