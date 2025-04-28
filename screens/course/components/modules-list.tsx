import { ModuleCard } from "@/components/module-card";
import { Title } from "@/components/text";
import { Module } from "@/screens/course/types";
import { sx } from "@/styles/styles";
import { View } from "react-native";

interface ModulesListProps {
  modules: Module[];
}

export function ModulesList({ modules }: ModulesListProps) {
  return (
    <View style={{ paddingHorizontal: sx.spacing.sm }}>
      <Title pt={sx.spacing.md} fontsize={sx.font.lg}>
        Modules
      </Title>
      <View style={{ gap: sx.spacing.lg, paddingTop: sx.spacing.lg }}>
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </View>
    </View>
  );
}
