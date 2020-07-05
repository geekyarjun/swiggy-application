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
import { dataForOfferSection, restaurantData } from "../../TestData";

const { statusBarHeight } = Constants;

export default function HomeScreen({ navigation }) {
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
          <RestrauntsSection navigation={navigation} />
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
  const entries = React.useMemo(() => dataForOfferSection);

  return (
    <View>
      <Carousel
        ref={slider1Ref}
        data={entries}
        renderItem={renderOffersItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={carouselStyles.slider}
        contentContainerCustomStyle={carouselStyles.sliderContentContainer}
        loop={false}
        loopClonesPerSide={2}
        autoplay={false}
        onSnapToItem={(index) => setSlider1ActiveSlide(index)}
      />
      <Pagination
        dotsLength={entries.length}
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

/**
 * Function used to render an item in Carousel in offers section
 * @param {Object} param0 contains data of an item like image url, resturant name, address etc
 */
const renderOffersItem = ({ item }) => {
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

const RestrauntsSection = ({ navigation }) => {
  const data = React.useMemo(() => restaurantData);

  const handleNvigationToResturantDetails = (data) => {
    navigation.navigate("RestaurantDetails", { data });
  };

  const RenderRestraunts = () => {
    return data.map((dt, idx) => (
      <RestaurantComponent
        key={idx}
        {...dt}
        onPress={handleNvigationToResturantDetails}
      />
    ));
  };

  return (
    <View>
      <SectionHeading
        heading={"All Restaurants Nearby"}
        subHeading={"Discover unique tastes near you"}
        style={restaurantSecHeadingStyles}
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
    overflow: "visible",
  },
  sliderContentContainer: {
    paddingVertical: 10,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

const restaurantSecHeadingStyles = {
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
