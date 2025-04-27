import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import React from "react";
import {
    Image,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle
} from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Paragraph, Title } from "./text";

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export const CourseCard = () => {
  return (
    <Card>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Card style={styles.author}>
          <Avatar style={styles.avatar}>
            <AvatarImage
              source={{
                uri: "https://avatar.iran.liara.run/public/11",
              }}
            />
            <AvatarFallback fallbackText="JD" />
          </Avatar>
          <Paragraph>John Doe</Paragraph>
        </Card>
        <Card style={styles.price}>
          <Paragraph opacity={0.5} decoration="line-through">
            $20
          </Paragraph>
          <Paragraph>$9</Paragraph>
        </Card>
        <Title fontsize={sx.font.lg}>Figma for Designers</Title>
        <Paragraph opacity={0.5} fontweight="400">
          13 Lessons | 3 hours
        </Paragraph>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.card.background,
    marginHorizontal: sx.spacing.xl,
    borderRadius: sx.rounded.xxl,
    padding: sx.spacing.md,
  },
  image: {
    height: 150,
    resizeMode: "cover",
    borderRadius: sx.rounded.xl,
  },
  content: {
    padding: sx.spacing.md,
    paddingTop: sx.spacing.xxxl,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: -16,
    borderRadius: sx.rounded.full,
    elevation: 8,
    gap: sx.spacing.md,
    zIndex: 10,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: -16,
    borderRadius: sx.rounded.full,
    elevation: 8,
    gap: sx.spacing.sm,
    zIndex: 10,
  },
  avatar: {
    width: 20,
    height: 20,
  },
});
