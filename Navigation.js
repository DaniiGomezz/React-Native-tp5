import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


//screens 


import  HomeScreens  from "./screens/HomeScreen.js";
import SettingScreen from "./screens/SettingScreens.js";


const Tab = createBottomTabNavigator()

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple",
            }}
          >
           
                <Tab.Screen 
                name="Home" 
                component={HomeScreens} 
                options={{
                    tabBarLabel: "Robo",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={24} color="black" />
                    )
                }}
                />


                <Tab.Screen name="cambio" component={SettingScreen}  options={{
                    tabBarLabel: "Casita",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={24} color="black" />
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export function Navigation() {
    return (
        <NavigationContainer>
           <MyTabs />
        </NavigationContainer>
    );
}

