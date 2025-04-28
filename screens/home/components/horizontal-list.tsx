import { Chip } from "@/components/chip";
import { sx } from "@/styles/styles";
import React from "react";
import { FlatList, StyleProp, ViewStyle } from "react-native";
import { filtersCourses } from "../data/filters";

type Props = {
  filterby?: string;
  setFilterby: (filterby: string) => void;
  style?: StyleProp<ViewStyle>;
};

export const HorizontalList: React.FC<Props> = ({
  filterby,
  setFilterby,
  style,
}) => {
  return (
    <FlatList
      data={filtersCourses}
      style={[style]}
      horizontal
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <Chip
          onPress={() => {
            setFilterby(item);
          }}
          style={{
            marginLeft: index === 0 ? sx.spacing.xl : 4,
            marginRight:
              index === filtersCourses.length - 1 ? sx.spacing.xl : 4,
          }}
          variant={filterby === item ? "fill" : "light"}
          label={item}
        />
      )}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
