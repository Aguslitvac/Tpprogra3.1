import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import HomeMenu from './src/components/HomeMenu';
import Home from './src/screens/Home';
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";

const Stack = createNativeStackNavigator();



export default function App() {
  return (

   
    
                  
             


   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } options={ {headerShown: false} }/>
        <Stack.Screen name="Register" component={ Register } options={ {headerShown: false} }/>
        <Stack.Screen name="HomeMenu" component={ HomeMenu } options={ {headerShown: false} }/>
        <Stack.Screen name="Profile" component={ Profile } options={ {headerShown: false} }/>
        <Stack.Screen name="Home" component={ Home } options={ {headerShown: false} }/>


     </Stack.Navigator>
   </NavigationContainer>

 


);
}
