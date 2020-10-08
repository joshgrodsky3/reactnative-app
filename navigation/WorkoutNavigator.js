
import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


import DataScreen from '../screens/DataScreen';
import MeScreen from '../screens/MeScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import UpdateScreen from '../screens/UpdateScreen';

const WorkoutNavigator = createStackNavigator({
    Workout: WorkoutScreen,
    Activity: {
        screen: DataScreen
    },
    User: MeScreen,
    Update: UpdateScreen,
})

const UserNavigator = createStackNavigator({
    User: MeScreen,

})




const WorkoutTabNavigator = createBottomTabNavigator({
    Workout: 
    {
        screen: WorkoutNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="dumbbell" size={30} color={tabInfo.tintColor}/>
            }
        }
    },
    Activity:
    {
        screen: DataScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <AntDesign name="dotchart" size={30} color={tabInfo.tintColor}/>
            }
        }
    },
    User: 
    {
        screen: UserNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return  <AntDesign name="user" size={30} color={tabInfo.tintColor}/>
            }
        }
    }


}, {
    tabBarOptions: {
        activeTintColor: 'black'
    }
}); 

export default createAppContainer(WorkoutTabNavigator);