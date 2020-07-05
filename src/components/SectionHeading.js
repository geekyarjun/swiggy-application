import React from "react";
import { Text, View } from "react-native";

const SectionHeading = ({
  heading,
  subHeading,
  showBorder,
  headingIcon,
  style = {},
}) => {
  let { containerStyle, headingStyle, subHeadingStyle } = style;
  //   containerStyle = containerStyle ? containerStyle : {};
  return (
    <View
      style={{
        // backgroundColor: "red",
        height: 50,
        flexDirection: "row",
        marginTop: 10,
        ...containerStyle,
      }}
    >
      {showBorder && (
        <View
          style={{
            borderLeftWidth: 5,
            borderColor: "#ededed",
            borderRadius: 10,
            marginLeft: 10,
          }}
        ></View>
      )}
      {headingIcon && (
        <Text style={{ alignSelf: "flex-end", marginLeft: 5 }}>
          {/* <ThumbsUpIcon /> */}
          {headingIcon}
        </Text>
      )}
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          alignSelf: "flex-end",
          paddingLeft: 10,
          ...headingStyle,
          // backgroundColor: "white",
        }}
      >
        {heading}
      </Text>
      {subHeading && (
        <Text
          style={{
            alignSelf: "flex-end",
            paddingLeft: 10,
            color: "#676a6b",
            ...subHeadingStyle,
          }}
        >
          {subHeading}
        </Text>
      )}
    </View>
  );
};
export default SectionHeading;
