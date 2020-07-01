import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SWIGGY</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SEARCH</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CART</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ACCOUNT</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return configueTabBarIcon(route, focused);
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="SWIGGY" component={HomeScreen} />
        <Tab.Screen name="SEARCH" component={SettingsScreen} />
        <Tab.Screen name="CART" component={CartScreen} />
        <Tab.Screen name="ACCOUNT" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const configueTabBarIcon = (route, focused) => {
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
