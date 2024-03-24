import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard3 from './ResturantCard3'

const FeaturedRow3 = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#00bbcc" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard3 id={23} imgUrl="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGRpc2FzdGVyfGVufDB8fDB8fHww"
         title="Natural Disasters" rating={9.5} genre="Material" 
         short_description="Natural Disasters" dishes ={[
            {
              name: "Earthquakes",
              description: "Drop, Cover, and Hold On during shaking,Move away from windows, heavy furniture, and tall objects,If outdoors, move to an open area away from buildings, trees, and power lines.",
              id: "3",
              image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Hurricanes",
              description: "Stay informed about the storm's progress through local authorities.Follow evacuation orders if instructed to do so. Secure outdoor items and board up windows.",
              price: 10.99,
              id: "4",
              image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            },
            {
              name: "Wildfires",
              description: "Follow evacuation orders immediately if you're in the path of a wildfire. Keep windows and doors closed to prevent smoke from entering your home.Use a respirator mask if you need to go outside.",
              price: 10.99,
              id: "4",
              image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            },
          ]} long={10} lat={0} />
         
        <ResturantCard3 id={24} imgUrl="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Medical Emergencies" rating={9.0} genre="Simple"
         short_description="HMedical Emergencies"  dishes ={[
          {
            name: "Cardiac Arrest",
            description: "Call 911 immediately.Begin CPR if you are trained to do so.Use an automated external defibrillator (AED) if available.",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "Servere Bleeding",
            description: "Apply direct pressure to the wound with a clean cloth or bandage.Elevate the injured limb if possible. Call 911 for immediate medical assistance. ",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "Choking",
            description: "Encourage the person to cough forcefully.Perform abdominal thrusts (Heimlich maneuver) if the person is conscious.Call 911 if the person is unable to breathe or loses consciousness. ",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "Choking",
            description: "Encourage the person to cough forcefully.Perform abdominal thrusts (Heimlich maneuver) if the person is conscious.Call 911 if the person is unable to breathe or loses consciousness. ",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ]} long={10} lat={0} />
        <ResturantCard3 id={24} imgUrl="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Electric Shock" rating={9.0} genre="Simple"
         short_description="Here to serve."  dishes ={[
          {
            name: "Snake Bites",
            description: "Visit medical facility",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "Insect Bites",
            description: "Water is life. ",
            price: 10.99,
            id: "4",
            image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
        ]} long={10} lat={0} />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow3

const styles = StyleSheet.create({})