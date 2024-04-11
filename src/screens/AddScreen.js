import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme'
import { useTodosStore } from '../states/planState'

const AddScreen = ({navigation}) => {
    const [plan,setPlan]=useState("");
    const [days,setDays]=useState(["PZT","SLI","ÇRŞ","PRŞ","CMA","CMT","PZR"])
    const [selectedDay,setSelectedDay]=useState("")
    const addTodo=useTodosStore(store=>store.addTodo)
    const submitHandle=()=>{
        addTodo({
            id:(Math.random()*1000).toString(),
            day:selectedDay,
            plan,
            date:new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear()+"-"+new Date().getHours()+":"+new Date().getMinutes()
        })
        setSelectedDay("");
        setPlan("");
    }
    
  return (
    <View className="flex-1 relative">
           <Image blurRadius={70} className="absolute h-full w-full" source={require("../assets/images/bg.png")}/>
           <View style={{backgroundColor:theme.bgWhite(0.2)}} className=" my-20 p-3 mx-8 flex-1  rounded-3xl " >
          <View className="flex-row items-center justify-around border-2 border-green-900 rounded-full bg-green-900 h-[8%] w-full " >
            {days.map((item,index)=>(
                 <TouchableOpacity onPress={()=>{setSelectedDay(item)}} className={`justify-center items-center  ${item==selectedDay&&"borderb-2 border-t-2 border-white"}  rounded-full`} >
                    <Text className="p-4 text-white">{item}</Text>
                 </TouchableOpacity>
            ))}
          </View>
                <View className="flex-row items rounded-2xl items-start justify-start h-[60%] border-green-900 border-2 mt-2 mx-2">
                            <TextInput  value={plan} onChangeText={(e)=>setPlan(e)} placeholder='Plan giriniz'
                            placeholderTextColor={"lightgray"}
                            className="pl-6 h-full flex-1 text-base text-white pb-1"
                           />  
                </View>
                <TouchableOpacity onPress={()=>{submitHandle(),navigation.goBack()}} className="rounded-2xl p-5 m-1 items-center justify-center  bg-green-900 mt-3"><Text className="text-white">Ekle</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default AddScreen

