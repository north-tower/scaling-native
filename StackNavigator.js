import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'
import ResturantScreen from './screens/ResturantScreen'
import BasketScreen from './screens/BasketScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import ContactScreen  from './screens/ContactScreen'
import InfoScreen from './screens/InfoScreen'
import FaqScreen from './screens/FaqScreen'
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { useEffect, useState } from 'react';
import MessageFormScreen from './screens/MessageFormScreen'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  
  return (
    <Stack.Navigator>
        {user ? (
      
            <>
             <Stack.Screen name='Home' component={HomeScreen} options={{
                headerShown: false,
              }} />
       
            <Stack.Screen name='Chat' component={ChatScreen} options={{
                headerShown: false,
              }}  />
            <Stack.Screen name='Resturant' component={ResturantScreen} options={{
                headerShown: false,
              }} />
            <Stack.Screen name='Basket' component={BasketScreen} options={{
                headerShown: false,
              }}  />
            <Stack.Screen name='Delivery' component={DeliveryScreen} options={{
                headerShown: false,
              }}  />
            
            <Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen}  options={{
                headerShown: false,
              }}  />
            <Stack.Screen name='Contact' component={ContactScreen} options={{
                headerShown: false,
              }}  />
            <Stack.Screen name='Info' component={InfoScreen} options={{
                headerShown: false,
              }}  />
            <Stack.Screen name='Faq' component={FaqScreen}  options={{
                headerShown: false,
              }} />
              <Stack.Screen name='message' component={MessageFormScreen}  options={{
                headerShown: false,
              }} />
            </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />

        )}

     

      
        
            
        
       

    </Stack.Navigator>
  )
}

export default StackNavigator