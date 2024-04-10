import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { CalendarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import {debounce} from "lodash"
import { fetchLocations, fetchWeatherForecast } from '../api/weather'
import { weatherImages } from '../constants'
import * as Progress from 'react-native-progress';
import { getData, storeData } from '../utils/asyncStorage'
const HomeScreen = () => {
    const [showShearch,setShowSearch]=useState(false);
    const [locations,setLocations]=useState([]);
    const [weather,setWeather]=useState({})
    const [loading,setLoading]=useState(true)
    const {current,location}=weather;
    const datehour=new Date();
    const handleLocation=(loc)=>{
        setLocations([])
        setShowSearch(false)
        setLoading(true)
        fetchWeatherForecast({cityName:loc.name,days:'7'})
        .then(data=>{setWeather(data)
            setTimeout(() => {setLoading(false)}, 300)
            storeData("city",loc?.name)
        })
    }
    
    console.log(weather)
   
    const handleSearch=(value)=>{
        if(value.length>3){
            fetchLocations({cityName:value}).
            then((data)=>{setLocations(data)})
        }
    }

    useEffect(()=>{
        fetchMyWeatherData()
  
    },[])

    const fetchMyWeatherData=async()=>{
        let myCity=await getData("city")
        let cityName="Tokat"
        if(myCity){cityName=myCity}
        fetchWeatherForecast({cityName,days:'7'}).
        then(data=>setWeather(data))
        setTimeout(() => {setLoading(false)}, 300)
    }
    const handleTextDebounce=useCallback(debounce(handleSearch,700),[])

  return (
    <View className="flex-1 relative">
     <Image blurRadius={70} className="absolute h-full w-full" source={require("../assets/images/bg.png")}/>
    {
        loading?(
            <View className="flex-1 justify-center items-center">
                <Progress.CircleSnail color="#0bb" size={140} thickness={10}/>
            </View>
        ):(
            <SafeAreaView className="flex flex-1">
            <View className="h-[8%] mx-4 relative z-50">
                <View className="flex-row justify-end rounded-full items-center"  style={{backgroundColor:showShearch?theme.bgWhite(0.2):"transparent"}}>
                    {
                        showShearch?(
                            <TextInput onChangeText={handleTextDebounce} placeholder='Konum bilgisi giriniz'
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
                                    <TouchableOpacity onPress={()=>handleLocation(loc)} key={index} className={`flex-row  items-center border-0 p-3 px-4 mb-1 ${locations?.length-1==index?"border-b-0":"border-b-2"}  border-b-gray-400`}>
                                        <MapPinIcon size="20" color="black"/>
                                        <Text className="text-black text-lg ml-2">{loc?.name}, {loc?.country}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    ):null
                }
            </View>
            <Text className="text-teal-100  text-center text-3xl font-bold">{datehour.getHours()+"."+datehour.getMinutes()}</Text>
            <View className="mx-4 flex justify-around flex-1 mb-2">
                <Text className="text-white text-center text-2xl font-bold">{location?.name},
                <Text className="text-lg font-semibold text-gray-300">{" "+location?.country}</Text></Text>
                <View className="items-center justify-center">
                <Image source={weatherImages[current?.condition?.text]} className="w-52 h-52"/>
             </View>
             <View className="space-y-2">
                <Text className="text-center font-bold text-white text-6xl ml-5">
                    {current?.temp_c}°
                </Text>
                <Text className="text-center font-semibold text-white text-xl tracking-widest">
                    {current?.condition?.text}
                </Text>
             </View>
             <View className="flex-row justify-between mx-4">
                <View className="flex-row space-x-2 items-center">
                    <Image source={require("../assets/icons/wind.png")} className="h-6 w-6"/>
                    <Text className="text-white font-semibold text-base">{current?.wind_kph}km</Text>
                </View>
                <View className="flex-row space-x-2 items-center">
                    <Image source={require("../assets/icons/drop.png")} className="h-6 w-6"/>
                    <Text className="text-white font-semibold text-base">{current?.humidity}%</Text>
                </View>
                <View className="flex-row space-x-2 items-center">
                    <Image source={require("../assets/icons/sun.png")} className="h-6 w-6"/>
                    <Text className="text-white font-semibold text-base">{weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
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
                    {
                        weather?.forecast?.forecastday?.map((item,index)=>{
                            let date=new Date(item?.date)
                            let options={weekday:'long'}
                            let dayName=date.toLocaleDateString('tr-TR',options)
    
                            return(
                                <View key={index} className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4" style={{backgroundColor:theme.bgWhite(0.15)}}>
                                    <Image source={weatherImages[item?.day?.condition?.text?.trim()]} className="h-12 w-12"/>
                                    {console.log(item?.day?.condition?.text)}
                                    <Text className="text-white">{dayName}</Text>
                                    <Text className="text-white text-xl font-semibold">
                                        {item?.day?.avgtemp_c}°
                                    </Text>
                                </View>
                            )
                        })
                    }
                  
                </ScrollView>
            </View>
        </SafeAreaView>
        )
    }
 
    </View>
  
  )
}


export default HomeScreen

const styles = StyleSheet.create({})