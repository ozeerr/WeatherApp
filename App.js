import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/appNavigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <AppNavigation/>
  )
}

export default App

const styles = StyleSheet.create({})