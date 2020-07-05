import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import OffersIcon from "../icons/offers";

const RestrauntComponent = ({
  restaurantName,
  foodCategory,
  address,
  rating,
  deliveryTime,
  price,
  onPress,
}) => {
  const data = {
    restaurantName,
    foodCategory,
    address,
    rating,
    deliveryTime,
    price,
    onPress,
  };
  return (
    <TouchableOpacity onPress={() => onPress(data)}>
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
        <View>
          <Image
            source={require("../../assets/swiggyRajmaChawal-copy.jpg")}
            style={{
              resizeMode: "cover",
              height: 100,
              width: 100,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 2, paddingHorizontal: 10 }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: "#ededed",
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {restaurantName}
            </Text>
            <Text style={{ ...style.secText, marginTop: 2 }}>
              {foodCategory}
            </Text>
            <Text style={{ ...style.secText, marginTop: 2 }}>{address}</Text>
            <Text style={{ ...style.secText, marginTop: 2 }}>
              <FontAwesome5 name={"star"} solid /> {rating} | {deliveryTime} |{" "}
              {price} For two
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <OffersIcon fill="tomato" width={"15px"} height={"15px"} />
            <Text style={{ ...style.secText }}> Use SWIGGYIT</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  secText: {
    fontSize: 12,
    color: "#676a6b",
  },
});

export default RestrauntComponent;

// Prop types to be implemented
