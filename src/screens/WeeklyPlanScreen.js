import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PlanCard from '../components/planCard'
import { ArrowLeftCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTodosStore } from '../states/planState'
import { theme } from '../theme'
const WeeklyPlanScreen = ({navigation}) => {
    const todos=useTodosStore(state=>state.todos)
    
  return (
    <View className="flex-1 relative">
      <Image blurRadius={70} className="absolute h-full w-full" source={require("../assets/images/bg.png")}/>
      <View className="flex-row items-center justify-around  mt-10 mb-5 ">
         <TouchableOpacity onPress={()=>navigation.goBack()} className="items-center justify-center mt-5"><ArrowLeftCircleIcon size={45} color="white"/></TouchableOpacity>
          <TouchableOpacity   onPress={()=>navigation.navigate("Add")} className="items-center justify-center mt-5"><PlusCircleIcon size={45} color="white"/></TouchableOpacity>
          <View className="w-[45px]"></View>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} className="  mx-8 flex-1 mb-10 rounded-3xl" style={{backgroundColor:theme.bgWhite(0.2)}}>
        {
            todos?.map((item,index)=>(
                <PlanCard key={index} item={item}/>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default WeeklyPlanScreen

const styles = StyleSheet.create({})