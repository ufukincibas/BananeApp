import React from "react";
import {Text , View } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/auth/Login/Login"
import Sign from "./pages/auth/Sign/Sign";


const Stack = createNativeStackNavigator()

function App(){
  const AuthStack = () => {
    return (
      <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={Login}/>
      <Stack.Screen name="SignPage" component={Sign}/>
    </Stack.Navigator>
 )
  }
  return(
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="AuthStack" component={AuthStack}/>
 
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;