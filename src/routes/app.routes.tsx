import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Home} />
    </Stack.Navigator>
  );
}