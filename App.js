import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames"

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>mhki!</Text>
      <Button title='Click me' />
    </View>
  );
}
