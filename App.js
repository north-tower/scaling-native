import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames"
import StackNavigator from './StackNavigator';
import { NavigationContainer } from "@react-navigation/native"

import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return(  
    <NavigationContainer>
      <Provider store={store}> 
    
          <StackNavigator />
       

      </Provider>
      
    </NavigationContainer>
  )
}
