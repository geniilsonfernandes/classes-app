import React from "react";
import { View } from "react-native";
type DividerProps = {
  width?: number;
  height?: number;
};
export const Divider: React.FC<DividerProps> = ({ height, width }) => {
  return (
    <View
      style={{
        height: height,
        width: width ,
      }}
    ></View>
  );
};
