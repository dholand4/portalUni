import React from "react";

import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import SGA from "../pages/SGA";
import RM from "../pages/RM";
import AVA from "../pages/AVA";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeRoutes" component={Home} />
      <Stack.Screen name="AVA" component={AVA} />
      <Stack.Screen name="SGA" component={SGA} />
      <Stack.Screen name="RM" component={RM} />
    </Stack.Navigator>
  )
}

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={HomeRoutes} />
    </Stack.Navigator>
  );
}
