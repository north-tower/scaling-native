import React, { useState } from 'react';
import { StyleSheet, SafeAreaView,View,TouchableOpacity, TextInput, Button, Alert , Text} from 'react-native';
import { FIRESTORE_DB } from '../FirebaseConfig'; // Assuming you have a reference to Firestore database
import { addDoc, collection } from 'firebase/firestore';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useNavigation } from "@react-navigation/native"
import { useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';

import tw from "tailwind-react-native-classnames"

const MessageFormScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);


  const [message, setMessage] = useState('');

  const firestore = FIRESTORE_DB;

  const postMessageToFirestore = async () => {
    try {
      // Assuming you have a collection named 'messages'
      const messagesRef = collection(firestore, 'messages');
      await addDoc(messagesRef, {
        message: message,
        timestamp: new Date()
      });
      console.log('Message posted to Firestore successfully.');
      Alert.alert('Success', 'Message posted successfully.');
      setMessage(''); // Clear input field after posting
    } catch (error) {
      console.error('Error posting message to Firestore:', error);
      Alert.alert('Error', 'Failed to post message. Please try again.');
    }
  };

  return (
    <SafeAreaView style={tw` bg-white h-full pt-5`}>
        <View style={tw`flex-1 bg-gray-100`}>
            <View style={tw`p-5 bg-white `}>
                <View>
                    <Text style={tw`text-lg text-black
                    font-bold text-center`}>Report Incident to {resturant.title}</Text>
                </View>
          <TouchableOpacity onPress={navigation.goBack} 
          style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}>
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View> 
        
      <TextInput
        value={message}
        style={styles.input}
        placeholder='Location'
        onChangeText={(text) => setMessage(text)}
      />
      <TextInput
        value={message}
        style={styles.input}
        placeholder='Description of Incident'
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Post Message" onPress={postMessageToFirestore} />
    </View>
   
    </SafeAreaView>
  );
};

export default MessageFormScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
