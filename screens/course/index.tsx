import { CourseHeader } from "@/components/course-header";
import { Back } from "@/components/shared/back";
import { sx } from "@/styles/styles";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { CourseActions } from "./components/course-actions";
import { ModulesList } from "./components/modules-list";
import { useCourse } from "./hooks/use-course";

export default function CourseScreen() {
  const { id } = useLocalSearchParams();

  const { data } = useCourse({ id: (id as string) || "" });



  if (!data) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          paddingHorizontal: sx.spacing.xl,
        }}
      >
        <Back />

        <CourseHeader
          imageUri={data.imageUri}
          title={data.title}
          totalLessons={data.totalLessons}
          totalHours={data.totalHours}
          description={data.description || ""}
          teacherAvatarUri={data.teacherAvatarUri}
          teacherName={data.teacherName}
          originalPrice={data.originalPrice}
          price={data.price}
        />
        <ModulesList modules={data.modules} />
        <View style={{ height: 100 }} />
      </ScrollView>
      <CourseActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 16,
    flex: 1,
  },
});
