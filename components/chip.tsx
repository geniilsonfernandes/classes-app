import { usePressableAnimation } from "@/hooks/usePressableAnimation"; // Importa o hook
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import Animated, { AnimatedStyle } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type PressableIconProps = {
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  color?: "gray" | "white";
  label?: string;
  variant?: "fill" | "outline" | "light";
  onPress?: () => void;
};

export const Chip: React.FC<PressableIconProps> = ({ style, label,
    variant = "light",
    onPress 
 }) => {
  const variants = {
    fill: {
      backgroundColor: theme.base.foreground,
      color: theme.base.background,
    },
    outline: {
      backgroundColor: theme.white,
      color: theme.base.foreground,
    },
    light: {
      backgroundColor: theme.white,
      color: theme.black,
    },
  };
  const { animatedStyle, handlePressIn, handlePressOut } =
    usePressableAnimation(variants[variant].backgroundColor);

  

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.container, style, animatedStyle,{
        backgroundColor: variants[variant].backgroundColor,
      }]}
    >
      <Text
        style={{
          color: variants[variant].color,
        }}
      >{label}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 16,
    borderRadius: sx.rounded.full,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
