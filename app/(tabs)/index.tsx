import { Home } from "@/screens/home";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  return <Home />;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
