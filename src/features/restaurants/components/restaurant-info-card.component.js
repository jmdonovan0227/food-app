import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://via.placeholder.com/150",
    photos = [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    address = "123 Main St, Anytown, USA",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporary = false,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.cardContainer}>
      <Card.Cover
        key={"https://picsum.photos/700"}
        source={{ uri: "https://picsum.photos/700" }}
        style={styles.cardCover}
      />
      <Card.Title title={name} style={styles.cardTitle} />
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 2,
    backgroundColor: "white",
  },

  cardCover: {
    borderRadius: 2,
    padding: 20,
    backgroundColor: "white",
  },

  cardTitle: {
    padding: 16,
  },
});
