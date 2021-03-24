import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, Todo, RegistrationScreen, AboutScreen, HomeScreen,GeoLocation,ImagePickerr } from './src/screens'
// import FbLogin  from './src/firebase/FbLogin';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen> */}
        {/* ) : ( */}
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Todo" component={Todo}/>
            <Stack.Screen name="AboutScreen" component={AboutScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="GeoLocation" component={GeoLocation}/>
            <Stack.Screen name="ImagePicker" component={ImagePickerr}/>
            {/* <Stack.Screen name="FbLogin" component={FbLogin}/> */}
          </>

        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}