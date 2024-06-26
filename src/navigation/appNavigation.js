import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import WeeklyPlanScreen from '../screens/WeeklyPlanScreen';
import AddScreen from '../screens/AddScreen';

const Stack=createStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name="Plan" options={{headerShown:false}} component={WeeklyPlanScreen}/>
        <Stack.Screen name="Add" options={{headerShown:false}} component={AddScreen}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})