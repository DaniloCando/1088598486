import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; 
import Home from './Home';
import RegisterScreen from "./RegisterScreen";
import UserListScreen from "./UserListScreen";

const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "RegisterScreen") { // Corregido el nombre
              iconName = focused ? "rocket" : "rocket-outline";
            } else if (route.name === "UserListScreen") {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#f8f8f8", paddingBottom: 5 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="RegisterScreen" component={RegisterScreen} /> {/* Corregido */}
        <Tab.Screen name="UserListScreen" component={UserListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
