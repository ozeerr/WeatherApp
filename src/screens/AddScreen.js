import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { theme } from '../theme'
import { useTodosStore } from '../states/planState'


const AddScreen = () => {
    const [day,setDay]=useState("");
    const [plan,setPlan]=useState("");
    const addTodo=useTodosStore(store=>store.addTodo)
    const submitHandle=()=>{
        addTodo({
            id:(Math.random()*1000).toString(),
            day,
            plan,
            date:new Date().toDateString()
        })
        setDay("");
        setPlan("");
    }
    
  return (
    <View className="flex-1 relative">
           <Image blurRadius={70} className="absolute h-full w-full" source={require("../assets/images/bg.png")}/>
           <View className="bg-white my-20 mx-8 flex-1 opacity-40 rounded-3xl">
           <View className="flex-row justify-end rounded-2xl items-center bg-green-900 mt-2 mx-2">
                            <TextInput value={day} onChangeText={(e)=>setDay(e)} placeholder='Gün giriniz'
                            placeholderTextColor={"lightgray"}
                            className="pl-6 h-16 flex-1 text-base text-white pb-1"
                           />  
                           
                </View>
                <View className="flex-row items rounded-2xl items-start justify-start h-[60%] bg-green-900 mt-2 mx-2">
                            <TextInput  value={plan} onChangeText={(e)=>setPlan(e)} placeholder='Plan giriniz'
                            placeholderTextColor={"lightgray"}
                            className="pl-6 h-full flex-1 text-base text-white pb-1"
                           />  
                </View>
                <TouchableOpacity onPress={()=>submitHandle()} className="rounded-2xl p-3 m-1 items-center justify-center bg-green-900 mt-5"><Text className="text-white">Ekle</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default AddScreen

