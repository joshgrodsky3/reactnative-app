import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../constants/colors';
import MainButton from '../components/MainButton';


const Footer = props => {
    return (
        <View style={styles.footer}>
            <View style={styles.buttonContainer}>

                <View style={styles.buttonHolder}>
                <MainButton onPress={() => {}}>
                    <MaterialCommunityIcons name="dumbbell" size={48} color= "gray"/>
            </MainButton>
                </View>
            
            <View style={styles.buttonHolder}>
            <MainButton onPress={() => {}}>
                    <AntDesign name="dotchart" size={55} color= "gray"/>
            </MainButton>
                </View>
                <View style={styles.buttonHolder}>
                
                <MainButton onPress={() => {}}>
                    <AntDesign name="user" size={60} color= "gray"/>
                </MainButton>

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
      width: '100%', 
      height: 80, 
      backgroundColor: 'black', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        width: 380,
    },
    buttonHolder: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default Footer;