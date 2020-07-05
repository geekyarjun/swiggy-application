import React from "react";
import { Text, View } from "react-native";

const DottedBorder = () => (
  <View style={{ paddingHorizontal: 10 }}>
    <Text numberOfLines={1} style={{ color: "#676A6B" }}>
      ...........................................................................................................
      ...........
    </Text>
  </View>
);

export default DottedBorder;
