import { usePressableAnimation } from "@/hooks/usePressableAnimation"; // Importa o hook
import { sx } from "@/styles/styles";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type PressableIconProps = {
  children: React.ReactNode;
};

export const PressableIcon: React.FC<PressableIconProps> = ({ children }) => {
  const { animatedStyle, handlePressIn, handlePressOut } =
    usePressableAnimation();

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, animatedStyle]}
    >
      {children}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: sx.rounded.full,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
