import { StyleSheet, Dimensions, Platform } from "react-native";
// import { colors } from "./index.style";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const slideWidth = wp(75);
export const itemHorizontalMargin = wp(2);

export const slideHeight = viewportHeight * 0.26;
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;
