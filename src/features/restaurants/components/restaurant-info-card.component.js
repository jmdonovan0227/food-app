import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

// We can write CSS like styles with styled components!
const Title = styled.Text`
  padding: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.ui.primary};
`;

// We can style the card component specifically by passing in the card component as the first argument to styled()
const RestaurantCard = styled(Card)`
  border-radius: ${(props) => props.theme.spacing.xs};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={"https://picsum.photos/700"}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
