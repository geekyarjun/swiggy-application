import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LeftArrow from "../icons/leftArrow";
import OffersIcon from "../icons/offers";
import DottedBorder from "../components/DotterBorder";
import SectionHeading from "../components/SectionHeading";
import { dishCompWidth } from "./HomeScreen/carousal.style";
import { ScrollView } from "react-native-gesture-handler";

const { statusBarHeight } = Constants;

export default function RestaurantScreen({ route, navigation }) {
  const {
    params: { data },
  } = route;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <RestaurantDetailSection {...data} />
        <RecommendDishSection />
      </ScrollView>
    </View>
  );
}

const Header = () => (
  <View
    style={{
      marginTop: statusBarHeight,
      backgroundColor: "#fff",
      padding: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <View style={{ flex: 1 }}>
      <LeftArrow fill="#676A6B" onPress={() => navigation.goBack()} />
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <FontAwesome5
        name={"heart"}
        solid
        style={{ color: "#676A6B", fontSize: 15, marginRight: 20 }}
      />
      <FontAwesome5
        name={"search"}
        style={{ color: "#676A6B", fontSize: 15, marginRight: 20 }}
      />
    </View>
  </View>
);

const RestaurantDetailSection = ({
  restaurantName,
  foodCategory,
  address,
  rating,
  deliveryTime,
  price,
}) => (
  <View style={{ backgroundColor: "#fff" }}>
    <View
      style={{
        padding: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{restaurantName}</Text>
      <Text style={{ ...styles.secText }}>{foodCategory}</Text>
      <Text style={{ ...styles.secText }}>{address}</Text>
      <Text style={{ ...styles.secText, fontSize: 13 }}>
        Far away restaurants. Additional ₹35 delivery fees will apply
      </Text>
    </View>
    <DottedBorder />
    <View
      style={{
        padding: 10,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <View>
        <Text style={{ textAlign: "center", color: "#000", fontSize: 12 }}>
          <FontAwesome5 name={"star"} solid style={{}} /> {rating}
        </Text>
        <Text style={{ textAlign: "center", color: "#676A6B", fontSize: 12 }}>
          Packaging 78%
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "#000", fontSize: 12 }}>
          {deliveryTime}
        </Text>
        <Text style={{ textAlign: "center", color: "#676A6B", fontSize: 12 }}>
          Delivery Time
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", color: "#000", fontSize: 12 }}>
          ₹{price}
        </Text>
        <Text style={{ textAlign: "center", color: "#676A6B", fontSize: 12 }}>
          For two
        </Text>
      </View>
    </View>
    <DottedBorder />
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
      }}
    >
      <OffersIcon fill="brown" width={"13px"} height={"13px"} />
      <Text style={{ marginLeft: 5, fontSize: 13, color: "#676A6B" }}>
        20% off on orders above ₹129
      </Text>
    </View>
  </View>
);

const RecommendDishSection = () => (
  <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
    <SectionHeading heading={"Recommended"} />
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <DishComponent />
      <DishComponent />
      <DishComponent />
      <DishComponent />
      <DishComponent />
      <DishComponent />
    </View>
  </View>
);

const DishComponent = () => {
  return (
    <View
      style={{
        padding: 10,
        width: dishCompWidth,
      }}
    >
      <View>
        <Image
          source={require("../../assets/swiggyRajmaChawal-copy.jpg")}
          style={{ width: 130, height: 120, borderRadius: 2 }}
        />
      </View>
      <View>
        <Text>DOSAS</Text>
        <Text>Anna Masala Dosa</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>₹100</Text>
        <View
          style={{ borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}
        >
          <Text>ADD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  secText: {
    fontSize: 14,
    color: "#676a6b",
  },
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

// Prop types to be implemented
