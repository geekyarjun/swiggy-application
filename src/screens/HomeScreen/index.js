import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import OffersIcon from "../../icons/offers";
import ThumbsUpIcon from "../../icons/thumbsup";
import Category from "../../components/Category";
import SectionHeading from "../../components/SectionHeading";
import RestaurantComponent from "../../components/RestaurantComponent";
import {
  sliderWidth,
  itemHorizontalMargin,
  itemWidth,
  slideHeight,
} from "./carousal.style";

const { statusBarHeight } = Constants;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <AddressAndOfferArea />
      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <BusinessCategory />
          <Stores />
          <TopPicks />
          <OffersSection />
        </View>
        <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
          <RestrauntsSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const AddressAndOfferArea = () => (
  <View style={styles.addressOfferAreaContainer}>
    <View style={{ flex: 1 }}>
      <View style={styles.addressSection}>
        <FontAwesome5 name={"map-marker-alt"} solid style={{ fontSize: 15 }} />
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 5 }}>
          Badarpur Molarband
        </Text>
      </View>
      <Text numberOfLines={1} style={{ fontSize: 10, color: "#676a6b" }}>
        110044, Additional Township, NTPC
      </Text>
    </View>
    <View style={styles.offersSection}>
      <OffersIcon />
      <Text style={{ marginLeft: 8, fontWeight: "bold" }}>Offers</Text>
    </View>
  </View>
);

const BusinessCategory = () => (
  <View style={styles.businessCategoryContainer}>
    <View style={styles.restaurantsSection}>
      <Image
        source={require("../../../assets/swiggyRajmaChawal.jpg")}
        style={styles.restaurantsImage}
      ></Image>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 25 }}>
          Restaurants
        </Text>
        <Text style={{ color: "#fff", fontSize: 12 }}>No-contact</Text>
        <Text style={{ color: "#fff", fontSize: 12 }}>delivery</Text>
      </View>
      <View style={styles.rightArrowContainer}>
        <View
          style={{
            backgroundColor: "rgba(93, 93, 93, 0.1)",
            padding: 10,
            width: "100%",
          }}
        >
          <FontAwesome5
            name={"arrow-right"}
            solid
            style={{ color: "#fff", fontSize: 15 }}
          />
        </View>
      </View>
    </View>
    <View style={styles.grocerySection}>
      <Image
        source={require("../../../assets/swiggyGrocery.png")}
        style={styles.groceryImage}
      ></Image>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Grocery
        </Text>
        <Text style={{ color: "#fff", fontSize: 12 }}>Essentials</Text>
        <Text style={{ color: "#fff", fontSize: 12 }}>delivered in 2 hrs</Text>
      </View>
      <View style={styles.rightArrowContainer}>
        <View
          style={{
            backgroundColor: "rgba(93, 93, 93, 0.1)",
            padding: 10,
            width: "100%",
          }}
        >
          <FontAwesome5
            name={"arrow-right"}
            solid
            style={{ color: "#fff", fontSize: 15 }}
          />
        </View>
      </View>
    </View>
  </View>
);

const Stores = () => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      height: 120,
      paddingRight: 10,
    }}
  >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Category
        title="Genie - Send or buy items"
        imageUri={require("../../../assets/deliveryBoy.png")}
        bgColor="#f15b5c"
      />
      <Category
        title={"Fruits & Vegetables"}
        imageUri={require("../../../assets/vegetables.png")}
        bgColor="tomato"
      />
      <Category
        title="Meet Stores"
        imageUri={require("../../../assets/meetStore.png")}
        bgColor="orange"
      />
      <Category
        title="Pet Care Stores"
        imageUri={require("../../../assets/petStores.png")}
        bgColor="#ff7e00"
      />
    </ScrollView>
  </View>
);

const TopPicks = () => (
  <View>
    <SectionHeading
      heading={"Top Picks For You"}
      showBorder
      headingIcon={<ThumbsUpIcon />}
    />
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 120,
        paddingRight: 10,
        marginTop: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Category
          title="Domino's Pizza hub"
          subTitle="30 mins"
          imageUri={require("../../../assets/deliveryBoy.png")}
          bgColor="#f15b5c"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title={"Restaurant center"}
          subTitle="54 mins"
          imageUri={require("../../../assets/vegetables.png")}
          bgColor="tomato"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title="Chai coffee Shots"
          subTitle="50 mins"
          imageUri={require("../../../assets/meetStore.png")}
          bgColor="orange"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title={"Anna ki idla & dosa"}
          subTitle="55 mins"
          imageUri={require("../../../assets/petStores.png")}
          bgColor="#ff7e00"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title={"Eggs & sandwich hub"}
          subTitle="25 mins"
          imageUri={require("../../../assets/deliveryBoy.png")}
          bgColor="#f15b5c"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title={"Chart kachori bhandar"}
          subTitle="35 mins"
          imageUri={require("../../../assets/vegetables.png")}
          bgColor="tomato"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title="Italin cafe restaurant"
          subTitle="45 mins"
          imageUri={require("../../../assets/meetStore.png")}
          bgColor="orange"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
        <Category
          title="Bikaner sweets and dairy"
          subTitle="30 mins"
          imageUri={require("../../../assets/petStores.png")}
          bgColor="#ff7e00"
          titleStyles={{ textAlign: "left", color: "#000" }}
        />
      </ScrollView>
    </View>
  </View>
);

const OffersSection = () => {
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);
  const slider1Ref = useRef(null);
  const ENTRIES1 = React.useMemo(() => [
    {
      name: "first image",
      imageUrl: require("../../../assets/swiggy-coupons.jpg"),
    },
    {
      name: "second image",
      imageUrl: require("../../../assets/maxresdefault.jpg"),
    },
    {
      name: "third image",
      imageUrl: require("../../../assets/Swiggy_Cashkaro.jpg"),
    },
    {
      name: "fourth image",
      imageUrl: require("../../../assets/1574661089.png"),
    },
    {
      name: "sixth image",
      imageUrl: require("../../../assets/1583822192166.png"),
    },
    {
      name: "fifth image",
      imageUrl: require("../../../assets/swiggyOfferimage.jpg"),
    },
  ]);

  return (
    <View>
      <Carousel
        ref={slider1Ref}
        data={ENTRIES1}
        renderItem={renderOffersItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        // firstItem={SLIDER_1_FIRST_ITEM}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        // inactiveSlideShift={20}
        containerCustomStyle={carouselStyles.slider}
        contentContainerCustomStyle={carouselStyles.sliderContentContainer}
        loop={false}
        loopClonesPerSide={2}
        autoplay={false}
        /* autoplayDelay={500}
        autoplayInterval={3000} */
        onSnapToItem={(index) => setSlider1ActiveSlide(index)}
      />
      <Pagination
        dotsLength={ENTRIES1.length}
        activeDotIndex={slider1ActiveSlide}
        containerStyle={carouselStyles.paginationContainer}
        dotColor={"rgba(0,0,0, 0.92)"}
        dotStyle={carouselStyles.paginationDot}
        inactiveDotColor={"#000"}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={slider1Ref}
        tappableDots={!!slider1Ref}
      />
    </View>
  );
};

const renderOffersItem = ({ item }) => {
  console.log("itemWidth", itemWidth, "slideHeight", slideHeight);
  return (
    <View
      style={{
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
      }}
    >
      <Image
        source={item.imageUrl}
        style={{
          resizeMode: "cover",
          width: "auto",
          flex: 1,
        }}
      />
    </View>
  );
};

const RestrauntsSection = () => {
  const data = [
    {
      restaurantName: "Instapizza",
      foodCategory: "Pizzas, Italian",
      address: "Greater Kailash 2 | 7.5 Kms",
      rating: "3.8",
      deliveryTime: "54 mins",
      price: "500 for two",
    },
    {
      restaurantName: "Wat a burger",
      foodCategory: "Fast food, Snacks",
      address: "Greater Kailash 2 | 7.9 Kms",
      rating: "4.0",
      deliveryTime: "54 mins",
      price: "400 for two",
    },
  ];
  const RenderRestraunts = () => {
    return data.map((dt, idx) => <RestaurantComponent key={idx} {...dt} />);
  };
  return (
    <View>
      <SectionHeading
        heading={"All Restaurants Nearby"}
        subHeading={"Discover unique tastes near you"}
        style={restaurantSecHeading}
      />
      <View style={{ padding: 10 }}>{RenderRestraunts()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f7",
  },
  addressOfferAreaContainer: {
    marginTop: statusBarHeight,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    // elevation: 2,
    // backgroundColor: "red",
    backgroundColor: "#fff",
  },
  addressSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  offersSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  businessCategoryContainer: {
    height: 150,
    // marginTop: 10,
    position: "relative",
    flexDirection: "row",
    display: "flex",
    padding: 10,
  },
  restaurantsSection: {
    position: "relative",
    backgroundColor: "tomato",
    flex: 1,
    overflow: "hidden",
    marginRight: 10,
    borderRadius: 10,
  },
  restaurantsImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: -40,
    right: -80,
  },
  grocerySection: {
    position: "relative",
    backgroundColor: "#f15b5c",
    flex: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  groceryImage: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: -20,
  },
  rightArrowContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },
});

const carouselStyles = StyleSheet.create({
  slider: {
    marginTop: 15,
    overflow: "visible", // for custom animations
    // backgroundColor: "red",
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
    // backgroundColor: "green",
  },
  paginationContainer: {
    paddingVertical: 8,
    // backgroundColor: "green",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

const restaurantSecHeading = {
  containerStyle: {
    flexDirection: "column",
  },
  headingStyle: {
    alignSelf: "flex-start",
  },
  subHeadingStyle: {
    alignSelf: "flex-start",
  },
};
