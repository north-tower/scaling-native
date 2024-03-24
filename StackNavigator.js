import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import ResturantScreen from './screens/ResturantScreen'
import useAuth from './hooks/useAuth'
import BasketScreen from './screens/BasketScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import ContactScreen  from './screens/ContactScreen'
import InfoScreen from './screens/InfoScreen'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    const {user} = useAuth();
  return (
    <Stack.Navigator>
        {user ? (
            <>
             <Stack.Screen name='Home' component={HomeScreen} />
       
            <Stack.Screen name='Chat' component={ChatScreen} />
            <Stack.Screen name='Resturant' component={ResturantScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} />
            <Stack.Screen name='Delivery' component={DeliveryScreen} />
            
            <Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen} />
            <Stack.Screen name='Contact' component={ContactScreen} />
            <Stack.Screen name='Info' component={InfoScreen} />






            </>

        ) : (
            <Stack.Screen name='Login' component={LoginScreen} />

        )

        
            
        }
       

    </Stack.Navigator>
  )
}

export default StackNavigator