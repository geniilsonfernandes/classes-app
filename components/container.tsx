import { Spacings, sx } from "@/styles/styles";
import React from "react";
import { View } from "react-native";

type Props = {
  p?: Spacings;
  py?: Spacings;
  px?: Spacings;
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children, p ,py, px}) => {
  return (
    <View
      style={{
        padding: p ? sx.spacing[p] : undefined,
        paddingVertical: py ? sx.spacing[py] : undefined,
        paddingHorizontal: px ? sx.spacing[px] : undefined,
      }}
    >
      {children}
    </View>
  );
};
