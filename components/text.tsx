import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { Text } from "react-native";

type Props = {
  fontweight?: "400" | "500" | "600" | "700";
  fontsize?: number;
  opacity?: number;
  children?: React.ReactNode;
  decoration?: "line-through" | "underline";
  pt?: number;
  pl?: number;
  lineHeight?: number;
  color?: string;
};

const Title: React.FC<Props> = ({
  children,
  fontweight = "500",
  opacity = 1,
  decoration,
  fontsize,
  pt,
  color,
}) => {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : sx.font.xl,
        fontWeight: fontweight,
        color: color ? color : theme.text.foreground,
        opacity,
        textDecorationLine: decoration,
        marginTop: pt,
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
  pt,
  pl,
  lineHeight,
  color,
}) => {
  return (
    <Text
      style={{
        fontSize: fontsize ? fontsize : sx.font.sm,
        fontWeight: fontweight,
        color: color ? color : theme.text.foreground,
        opacity,
        textDecorationLine: decoration,
        marginTop: pt,
        marginLeft: pl,
        lineHeight,
      }}
    >
      {children}
    </Text>
  );
};

export { Paragraph, Title };
