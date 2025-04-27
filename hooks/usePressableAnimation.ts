import { darkenHexColor, theme } from "@/styles/theme";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export const usePressableAnimation = (
  color = theme.gray[50] + "80",
) => {
  const backgroundProgress = useSharedValue(0);
  const borderProgress = useSharedValue(0);
  const colorDarken = darkenHexColor(color, 15);
  const colorBorderDarken = darkenHexColor(color, 15);

  const handlePressIn = () => {
    backgroundProgress.value = withTiming(1, { duration: 150 });
    borderProgress.value = withTiming(1, { duration: 150 });
  };

  const handlePressOut = () => {
    backgroundProgress.value = withTiming(0, { duration: 150 });
    borderProgress.value = withDelay(100, withTiming(0, { duration: 250 }));
  };

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      backgroundProgress.value,
      [0, 1],
      [color, colorDarken]
    );
    const borderColor = interpolateColor(
      borderProgress.value,
      [0, 1],
      [color, colorBorderDarken]
    );

    return {
      backgroundColor,
      borderColor,
    };
  });

  return {
    animatedStyle,
    handlePressIn,
    handlePressOut,
  };
};
