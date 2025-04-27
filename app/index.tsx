import { Home } from "@/screens/home";
import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const CURSES = ["Figma", "React", "React Native", "Tailwind CSS", "TypeScript"];

export default function Index() {
  return (
  <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.base.background,
  },
});
