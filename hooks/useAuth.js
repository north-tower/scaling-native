import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from "expo-google-app-auth"

const AuthContext = createContext({})
const config = {
  androidClientId: '980160263965-buhpjm1sp607r0l6ci4sd6avg9dhuh9p.apps.googleusercontent.com',
  scopes: ["profile", "email"],
  permissions: ["public_profile","email", "gender", "location"]

}

export const AuthProvider = ({ children }) => {
  

  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (loginResult) => {
      if (loginResult.type == "success") {

      }
    });
  }

  
  return (
    <AuthContext.Provider value={
      {user: "m",
      signInWithGoogle
      
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}

