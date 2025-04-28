import { Module } from "@/screens/course/types";
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { BookMarked } from "lucide-react-native";
import { View } from "react-native";
import { Card } from "./card";
import { Paragraph, Title } from "./text";

interface ModuleCardProps {
  module: Module;
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card
      style={{
        borderRadius: sx.rounded.md,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: sx.spacing.lg,
      }}
    >
      <View>
        <Title fontsize={sx.font.md}>{module.title}</Title>

        <Paragraph opacity={0.5}>
          {module.hours} hours | {module.lessonCount} lessons
        </Paragraph>
      </View>
      <BookMarked size={16} color={theme.text.secondary} />
    </Card>
  );
}
