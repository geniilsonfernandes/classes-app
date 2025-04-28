import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { Paragraph } from "../text";

type BackProps = {
  style?: StyleProp<ViewStyle>;
};

export const Back: React.FC<BackProps> = ({ style }) => {
  const router = useRouter();
  const back = () => router.back();
  return (
    <Pressable
      onPress={back}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: sx.spacing.md,
          backgroundColor: theme.base.background,
          top: sx.spacing.md,
          zIndex: 100,
          padding: sx.spacing.md,
          borderRadius: sx.rounded.lg,
          paddingRight: sx.spacing.xl,
          elevation: 16,
        },
        style,
      ]}
    >
      <ChevronLeft size={24} color={theme.base.foreground} />

      <Paragraph>Back</Paragraph>
    </Pressable>
  );
};
