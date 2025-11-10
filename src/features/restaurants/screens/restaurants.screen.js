import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.spacing.md};
`;

const StyledListContainer = styled(View)`
  padding: ${(props) => props.theme.spacing.md};
`;

export const RestaurantsScreen = () => {
  return (
    <StyledSafeAreaView>
      <StyledSearchContainer>
        <Searchbar placeholder="Search" />
      </StyledSearchContainer>

      <StyledListContainer>
        <RestaurantInfoCard />
      </StyledListContainer>
    </StyledSafeAreaView>
  );
};
