import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useTodosStore } from '../states/planState'

const PlanCard = ({item}) => {
    const removeTodo=useTodosStore(store=>store.removeTodo)
  return (
    <View className="flex-1 p-5 flex-row justify-between  border-b-[0.2px]">
        <View className="items-start justify-center">
        <Text className="text-center font-bold text-white text-xl">{item?.day}</Text>
        <Text className="text-center text-white text-lg">{item?.plan}</Text>
        <Text className="text-sm text-white">{item.date}</Text>
        </View>
        <TouchableOpacity onPress={()=>{removeTodo(item?.id)}}><XCircleIcon size={25} color="red"/></TouchableOpacity>
  </View>
  )
}

export default PlanCard

const styles = StyleSheet.create({})