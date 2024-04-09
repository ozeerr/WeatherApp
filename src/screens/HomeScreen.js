import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { CalendarIcon, MapPinIcon } from 'react-native-heroicons/solid'

const HomeScreen = () => {
    const [showShearch,setShowSearch]=useState(false);
    const [locations,setLocations]=useState([1,2,3]);

    const handleLocation=(loc)=>{
        console.log('loc', loc)
    }
   
  return (
    <View className="flex-1 relative">
     <Image blurRadius={70} className="absolute h-full w-full" source={require("../assets/images/bg.png")}/>

     <SafeAreaView className="flex flex-1">
        <View className="h-[8%] mx-4 relative z-50">
            <View className="flex-row justify-end rounded-full items-center"  style={{backgroundColor:showShearch?theme.bgWhite(0.2):"transparent"}}>
                {
                    showShearch?(
                        <TextInput placeholder='Konum bilgisi giriniz'
                        placeholderTextColor={"lightgray"}
                        className="pl-6 h-10 flex-1 text-base text-white pb-1"
                       />
                    ):null
                }
               
                <TouchableOpacity onPress={()=>setShowSearch(!showShearch)} style={{backgroundColor:theme.bgWhite(0.3)}} className="rounded-full p-3 m-1">
                    <MagnifyingGlassIcon size="25" color="white"/>
                </TouchableOpacity>
            </View>
            {
                locations.length>0&&showShearch?(
                    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                    {
                        locations.map((loc,index)=>{
                            return(
                                <TouchableOpacity onPress={handleLocation(loc)} key={index} className={`flex-row  items-center border-0 p-3 px-4 mb-1 ${locations?.length-1==index?"border-b-0":"border-b-2"}  border-b-gray-400`}>
                                    <MapPinIcon size="20" color="black"/>
                                    <Text className="text-black text-lg ml-2">London, United Kingdom</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                ):null
            }
        </View>
        <View className="mx-4 flex justify-around flex-1 mb-2">
            <Text className="text-white text-center text-2xl font-bold">London,<Text className="text-lg font-semibold text-gray-300">United Kingdom</Text></Text>
            <View className="flex-row justify-center">
            <Image source={require("../assets/images/partlycloudy.png")} className="w-52 h-52"/>
         </View>
         <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
                23°
            </Text>
            <Text className="text-center font-semibold text-white text-xl tracking-widest">
                Parçalı Bulutlu
            </Text>
         </View>
         <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
                <Image source={require("../assets/icons/wind.png")} className="h-6 w-6"/>
                <Text className="text-white font-semibold text-base">22km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image source={require("../assets/icons/drop.png")} className="h-6 w-6"/>
                <Text className="text-white font-semibold text-base">23%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image source={require("../assets/icons/sun.png")} className="h-6 w-6"/>
                <Text className="text-white font-semibold text-base">6:05 AM</Text>
            </View>
         </View>
        </View>
        <View className="mb-2 space-y-3">
            <View className="flex-row items-center mx-5 space-x-2">
            <CalendarIcon size="22" color="white"/>
            <Text className="text-white text-base">Günlük tahmin</Text>
            </View>
            <ScrollView 
            contentContainerStyle={{paddingHorizontal:20}}
            showsHorizontalScrollIndicator={false}
            horizontal>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Pazartesi</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Salı</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Çarşamba</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Perşembe</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Cuma</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Cumartesi</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                    <Image source={require("../assets/images/heavyrain.png")} className="h-11 w-11"/>
                    <Text className="text-white">Pazar</Text>
                    <Text className="text-white text-xl font-semibold">
                        23°
                    </Text>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
    </View>
  
  )
}


export default HomeScreen

const styles = StyleSheet.create({})