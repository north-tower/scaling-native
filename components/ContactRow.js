import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from "tailwind-react-native-classnames"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from "react-redux"
import {addToBasket, selectBasketItems, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';

const ContactRow = ( {id, name, description, price, image }) => {
 

  return (
    <>
     <TouchableOpacity
        style={[tw`bg-white border p-4 border-gray-200`]}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg text-black mb-1`}>
                {name}
            </Text>
            <Text style={tw`text-gray-400`}>
                {description}
            </Text>
          
          </View>
        
        <View>
          <Image source={{ uri: image }}   
          style={tw`h-20 w-20 bg-gray-300 p-4 `}  />
        </View>
        </View>
      </TouchableOpacity>

      
    </>
  )
}

export default ContactRow

const styles = StyleSheet.create({})