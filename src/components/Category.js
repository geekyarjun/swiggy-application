import React from "react";
import { Text, View, Image } from "react-native";

const Category = ({ title, imageUri, bgColor, titleStyles, subTitle }) => (
  <View
    style={{
      borderRadius: 10,
      marginLeft: 10,
      width: 100,
      height: 120,
      // backgroundColor: "red",
    }}
  >
    <View
      style={{
        flex: 2,
        backgroundColor: bgColor ? bgColor : "#fff",
        borderRadius: 10,
      }}
    >
      <Image
        source={imageUri}
        style={{
          resizeMode: "contain",
          flex: 1,
          width: null,
          height: null,
        }}
      />
    </View>
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 13,
          color: "#676a6b",
          // backgroundColor: "blue",
          paddingTop: 5,
          paddingLeft: 5,
          ...titleStyles,
        }}
      >
        {title}
      </Text>
    </View>
    {subTitle && (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          // backgroundColor: "green",
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 13,
            color: "#676a6b",
            paddingTop: 10,
            paddingLeft: 5,
            alignSelf: "flex-start",
          }}
        >
          {subTitle}
        </Text>
      </View>
    )}
  </View>
);

export default Category;
