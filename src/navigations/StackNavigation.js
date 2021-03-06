import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "../screens/LandingPage";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="landing"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="forgotPwd"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
