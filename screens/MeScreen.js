import React, { useState, Fragment } from "react";
import { Button, View, TouchableWithoutFeedback, Keyboard, Text, StyleSheet, Linking } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';



import Card from '../components/Card';
import UpdateScreen from '../screens/UpdateScreen';
import MainButton from "../components/MainButton";
import WorkoutNavigator from "../navigation/WorkoutNavigator";

const MeScreen = props => {


  this.props.navigation.getParam(enteredName, 'Josh Grodsky');
  this.props.navigation.getParam(selectedWeight, '140'); 
  this.props.navigation.getParam(maxBench, '170'); 
  this.props.navigation.getParam(maxSquat, '225');
    
    MeScreen.navigationOptions = ({navigation}) => {
      return {
        headerTitle: 'User',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='EDIT' 
          iconName='ios-add-circle-outline' 
          onPress={() => {} } />
        </HeaderButtons>
      }
    }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
    
      <View style={styles.screen}>
        <Card >
        <View style={styles.listingContainer}>
          <Text style={{fontSize: 30}}> Name: {enteredName} </Text>
        </View>
        <View style={styles.listingContainer}>
          <Text style={{fontSize: 30}}> Weight: {selectedWeight} lbs </Text>
        </View>
        <View style={styles.listingContainer}>
          <Text style={{fontSize: 30}}> Max Bench: {maxBench} lbs </Text>
        </View>
        <View style={styles.listingContainer}>
          <Text style={{fontSize: 30}}> Max Squat: {maxSquat} lbs </Text>
        </View>
        </Card>
        <View style={{paddingTop: 20}}>
        <Card>
          <View style={styles.playlistContainer}> 
          <Text style={{fontSize: 30}}> PLAYLIST: </Text>
          <MainButton onPress={() => {
            Linking.openURL('https://music.apple.com/us/playlist/aaa-rn-workout/pl.u-GgA5e76i88PdAq');
          }}>
                    <Ionicons name="ios-musical-notes" size={36} color= "purple"/>
            </MainButton>
          </View>
          
        </Card>
        </View>
      </View>
      </TouchableWithoutFeedback>
      
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 30,
    marginVertical: 10
  },
  textContainer: {
    flex: 0,
    width: 350,
    maxWidth: "90%",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  listingContainer: {
    padding: 10,
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  playlistContainer: {
    paddingTop: 4,
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default MeScreen;