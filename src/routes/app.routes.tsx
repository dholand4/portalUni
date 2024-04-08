import React from "react";

import Home from "../pages/Home";
import SGA from "../pages/SGA";
import RM from "../pages/RM";
import AVA from "../pages/AVA";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Library from "../pages/Library";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AVA" component={AVA} />
      <Stack.Screen name="SGA" component={SGA} />
      <Stack.Screen name="RM" component={RM} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
}
