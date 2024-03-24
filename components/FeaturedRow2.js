import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard2 from './ResturantCard2'

const FeaturedRow2 = ({id, title, description }) => {
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
        <ResturantCard2 id={23} imgUrl="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
         title="Red Cross" rating={9.5} genre="Material" 
         short_description="Ready to help." dishes={[]} long={10} lat={0} />
         
        <ResturantCard2 id={24} imgUrl="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="St John's" rating={9.0} genre="Simple"
         short_description="Here to serve."  dishes ={[
          {
            name: "Help Line",
            description: "24/7 Service 011111022",
            id: "3",
            image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          },
          {
            name: "View Website",
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

export default FeaturedRow2

const styles = StyleSheet.create({})