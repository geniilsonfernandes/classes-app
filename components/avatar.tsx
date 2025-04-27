import { theme } from "@/styles/theme";
import React from "react";
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

type AvatarProps = ViewProps & {
  children?: React.ReactNode;
};

export const Avatar = ({ style, children, ...props }: AvatarProps) => {
  return (
    <View style={[styles.avatar, style]} {...props}>
      {children}
    </View>
  );
};

type AvatarImageProps = ImageProps;

export const AvatarImage = ({ style, ...props }: AvatarImageProps) => {
  return <Image style={[styles.image, style]} {...props} />;
};

type AvatarFallbackProps = ViewProps & {
  fallbackText?: string;
};

export const AvatarFallback = ({
  fallbackText = "?",
  style,
  ...props
}: AvatarFallbackProps) => {
  return (
    <View style={[styles.fallback, style]} {...props}>
      <Text style={styles.fallbackText}>{fallbackText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: "relative",
    height: 40,
    width: 40,
    overflow: "hidden",
    borderRadius: 9999, // full rounded
    backgroundColor: theme.base.background,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  fallback: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.base.background, // bg-muted
    borderRadius: 9999,
  },
  fallbackText: {
    fontSize: 16,
    color: theme.text.foreground,
  },
});
