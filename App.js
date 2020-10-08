import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../jg-capstone/components/header';
import WorkoutScreen from '../jg-capstone/screens/WorkoutScreen';
import Footer from '../jg-capstone/components/footer';
import WorkoutNavigator from './navigation/WorkoutNavigator';
import UpdateScreen from '../jg-capstone/screens/UpdateScreen';


import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Initialized Database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  })

//import a new screen

console.log('APP OPENED')
export default function App() {
  
//let content = <WorkoutScreen />

  return (
    <View style={styles.screen}>
      
     
      <UpdateScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});