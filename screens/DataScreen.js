import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

const DataScreen = props => {
  
    //consts here


    //work out conditions of what days to work out what 
    let content = 'Today\'s workout will be: Arms';
    //if(day is ___ ), display arms 
  return (
    
    
        
      <View style={styles.screen}>
        <Text style={styles.title}>DATA SCREEN HERE</Text>

      </View>

      



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
});

export default DataScreen;