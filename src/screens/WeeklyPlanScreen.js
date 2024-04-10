import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PlanCard from '../components/planCard'
import { PlusCircleIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTodosStore } from '../states/planState'
const WeeklyPlanScreen = ({navigation}) => {
    const todos=useTodosStore(state=>state.todos)
    
  return (
    <View className="flex-1 relative">
      <Image blurRadius={70} className="absolute h-full w-full" source={require("../assets/images/bg.png")}/>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white my-20 mx-8 flex-1 opacity-40 rounded-3xl">
<TouchableOpacity   onPress={()=>navigation.navigate("Add")} className="items-center justify-center mt-5"><PlusCircleIcon size={45} color="black"/></TouchableOpacity>
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