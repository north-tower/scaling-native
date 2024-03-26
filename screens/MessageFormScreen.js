import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { FIRESTORE_DB } from '../FirebaseConfig'; // Assuming you have a reference to Firestore database
import { addDoc, collection } from 'firebase/firestore';

const MessageFormScreen = () => {
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
    <View style={styles.container}>
      <TextInput
        value={message}
        style={styles.input}
        placeholder='Enter your message'
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Post Message" onPress={postMessageToFirestore} />
    </View>
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
