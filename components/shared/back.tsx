import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { useNavigation } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";
import { Paragraph } from "../text";

export const Back = () => {
  const navigation = useNavigation();
  const back = () => navigation.goBack();
  return (
    <Pressable
      onPress={back}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: sx.spacing.md,
        backgroundColor: theme.base.background,
        position: "absolute",
        top: sx.spacing.md,
        zIndex: 100,
        padding: sx.spacing.md,
        borderRadius: sx.rounded.lg,
        paddingRight: sx.spacing.xl,
        marginLeft: sx.spacing.md,
      }}
    >
      <ChevronLeft size={24} color={theme.base.foreground} />

      <Paragraph>Back</Paragraph>
    </Pressable>
  );
};


