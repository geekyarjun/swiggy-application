import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  SearchScreen,
  CartScreen,
  AccountScreen,
  RestaurantScreen,
} from "./src/screens";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="RestaurantDetails" component={RestaurantScreen} />
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return configueTabBarIcons(route, focused);
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="SWIGGY" component={HomeStackScreen} />
        <Tab.Screen name="SEARCH" component={SearchScreen} />
        <Tab.Screen name="CART" component={CartScreen} />
        <Tab.Screen name="ACCOUNT" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const configueTabBarIcons = (route, focused) => {
  // You can return any component that you like here!
  switch (route.name) {
    case "SWIGGY": {
      return (
        <View>
          <Image
            source={
              focused
                ? require("./assets/swiggyVector.png")
                : require("./assets/swiggy-outline.png")
            }
            style={styles.tabIcon}
          />
        </View>
      );
    }
    case "SEARCH": {
      return (
        <FontAwesome5
          name={"search"}
          solid
          style={{ color: focused ? "tomato" : "gray", fontSize: 15 }}
        />
      );
    }
    case "CART": {
      return (
        <FontAwesome5
          name={"shopping-bag"}
          solid
          style={{ color: focused ? "tomato" : "gray", fontSize: 15 }}
        />
      );
    }
    case "ACCOUNT": {
      return (
        <FontAwesome5
          name={"user"}
          solid
          style={{ color: focused ? "tomato" : "gray", fontSize: 15 }}
        />
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
});
