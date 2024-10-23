import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/auth/Login/Login"
import Sign from "./pages/auth/Sign/Sign";
import FlashMessage from "react-native-flash-message";
import Messages from "./pages/Messages/Messages";

import auth from "@react-native-firebase/auth"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Stack = createNativeStackNavigator()

function App(){

    const [userSession , setUserSession] = useState();

    useEffect(() => { //acıldıgı anda
      auth().onAuthStateChanged((user) => {
        setUserSession(!!user) //dolu geliyosa true bossa false set eder
      })

    } , [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
      
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignPage" component={Sign} />
    </Stack.Navigator>
 )
  }
  return(
   <NavigationContainer>
     
    {
      !userSession ? (
      <AuthStack/>
    ):(
      <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="MessagesPage" component={Messages}
      options={{
        headerShown:true,
        title: "Dertler",
        headerTintColor : "#4CAF50",
        headerRight: () => (<Icon name="logout" size={30} color="#4CAF50"
        onPress={() => auth().signOut()}
        />)
      }}/>
      </Stack.Navigator>
    )}
   
     
    
 
   
    <FlashMessage position="top" />
   </NavigationContainer>
  )
}

export default App;