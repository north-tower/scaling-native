import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import tw from "tailwind-react-native-classnames"


const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;


  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
       <TouchableOpacity onPress={() => navigation.navigate("Basket")}
  style={[
    tw`mx-5 p-4 rounded-lg flex-row items-center `,
    { backgroundColor: '#00CCBB' }
  ]}
>
         
            <Text style={tw`flex-1 text-white font-extrabold text-lg text-center`}>Request</Text>
           

        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon

const styles = StyleSheet.create({})