import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { Text } from "react-native";

type Props = {
  fontweight?: "400" | "500" | "600" | "700";
  fontsize?: number;
  opacity?: number;
  children?: React.ReactNode;
  decoration?: "line-through" | "underline";
};

const Title: React.FC<Props> = ({
  children,
  fontweight = "500",
  opacity = 1,
  decoration,
  fontsize,
}) => {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : sx.font.xl,
        fontWeight: fontweight,
        color: theme.text.foreground,
        opacity,
        textDecorationLine: decoration,
      }}
    >
      {children}
    </Text>
  );
};

const Paragraph: React.FC<Props> = ({
  children,
  fontweight = "500",
  opacity = 1,
  decoration,
  fontsize,
}) => {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : sx.font.sm,
        fontWeight: fontweight,
        color: theme.text.foreground,
        opacity,
        textDecorationLine: decoration,
      }}
    >
      {children}
    </Text>
  );
};


export { Paragraph, Title };
