import React from 'react';
import { View, StyleSheet } from 'react-native';


const WorkoutRect = props => {
    return (
    <View style={{...styles.workoutrect, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    workoutrect: {
        // width: 300,
        // maxWidth: '80%',
        // alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1},
        shadowRadius: 6,
        shadowOpacity: 0.16,
        backgroundColor: 'white',
        padding: 0,
        borderRadius: 20,
    }
})


export default WorkoutRect;