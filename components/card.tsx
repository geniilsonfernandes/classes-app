import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { Image, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const CardImage: React.FC<{
  uri: string;
  height?: number;
}> = ({ uri, height = 150 }) => {
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={[styles.image, { height }]}
    />
  );
};

const CardContent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <View style={styles.content}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.card.background,
    borderRadius: sx.rounded.xxl,
    padding: sx.spacing.md,
    shadowColor: theme.card.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
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
});

export { Card, CardContent, CardImage };
