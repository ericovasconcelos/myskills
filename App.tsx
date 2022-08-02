import React, { useEffect } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  // useEffect(() => {
  //   SplashScreen.hide()
  // },[])
  return (
    <>
      <View>
        <Text>Oi</Text>
        {/* <StatusBar barStyle="light-content" /> */}
        {/* <Home/> */}
      </View>
    </>
  )
}