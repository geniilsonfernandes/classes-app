import { Container } from "@/components/container";
import { CourseCard } from "@/components/course-card";
import { SearchBar } from "@/components/search-bar";
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StatusBar, StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "./components/app-header";
import { HorizontalList } from "./components/horizontal-list";
import { coursesMock } from "./data/mock_course";
import { useCourses } from "./hooks/use-courses";

export function Home() {
  const router = useRouter();
  const navigation = useNavigation();
  const { courses, filterby, setFilterby, setSearch, search } = useCourses({
    initialCoursesFilter: coursesMock,
  });
  const [showFloatingFilters, setShowFloatingFilters] = useState(false);

  function handleScroll(event: any) {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 300) {
      // quando passar 100px de scroll
      setShowFloatingFilters(true);
    } else {
      navigation.setOptions({
        // tabBarStyle: { display: "flex", animated: true }, // Some a tab
      });
      setShowFloatingFilters(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {showFloatingFilters && (
        <Animated.View
          entering={FadeInUp.duration(200)}
          exiting={FadeOutUp.duration(200)}
          style={{
            position: "absolute",
            top: StatusBar.currentHeight,
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: theme.base.background,
            paddingBottom: sx.spacing.md,
          }}
        >
          <HorizontalList
            style={styles.horizontalList}
            filterby={filterby}
            setFilterby={setFilterby}
          />
        </Animated.View>
      )}
      <FlatList
        onScroll={handleScroll}
        ListHeaderComponent={
          <View
            style={{
              paddingBottom: sx.spacing.xl,
            }}
          >
            <Container px="xl">
              <AppHeader />
              <SearchBar search={search} setSearch={setSearch} />
            </Container>
            <HorizontalList
              style={styles.horizontalList}
              filterby={filterby}
              setFilterby={setFilterby}
            />
          </View>
        }
        data={courses}
        contentContainerStyle={{ paddingBottom: sx.spacing.xl }}
        renderItem={(item) => (
          <Pressable
            onPress={() => {
              router.push(`/course/${item.item.id}`);
            }}
          >
            <CourseCard {...item.item} />
          </Pressable>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: sx.spacing.xl }} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.base.background,
  },
  horizontalList: {
    marginTop: sx.spacing.sm,
  },
});
