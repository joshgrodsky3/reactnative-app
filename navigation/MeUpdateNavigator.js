
import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


import DataScreen from '../screens/DataScreen';
import MeScreen from '../screens/MeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import UpdateScreen from '../screens/UpdateScreen';

const MeUpdateNavigator = createStackNavigator({
    Me: 
    {screen: MeScreen},
    Update:
    {screen: UpdateScreen}

});

export default createAppContainer(MeUpdateNavigator);