import { Title } from "@/components/text";
import { darkenHexColor } from "@/lib/utils";
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { ChevronRight, Tag } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";

export const CourseActions = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconButton}>
        <Tag color="white" size={18} />
      </Pressable>

      <Pressable style={styles.startButton}>
        <Title color="white" fontsize={sx.font.md}>
          Start learning
        </Title>

        <View style={styles.chevronContainer}>
          <ChevronRight color="white" size={18} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    marginBottom: sx.spacing.md,
    flexDirection: "row",
    gap: sx.spacing.md,
    width: "100%",
    paddingHorizontal: sx.spacing.xl,
    paddingBottom: sx.spacing.xxl,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: sx.rounded.full,
    backgroundColor: theme.base.foreground,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: sx.spacing.xxl,
    flex: 1,
    height: 48,
    borderRadius: sx.rounded.full,
    backgroundColor: theme.base.foreground,
  },
  chevronContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    borderRadius: sx.rounded.full,
    backgroundColor: darkenHexColor(theme.base.background, 150),
  },
});
