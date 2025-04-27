import { Container } from "@/components/container";
import { CourseCard } from "@/components/course-card";
import { SearchBar } from "@/components/search-bar";
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "./components/app-header";
import { HorizontalList } from "./components/horizontal-list";
import { coursesMock } from "./data/mock_course";

export function Home() {
  const [filterby, setFilterby] = useState<string>();
  const [showFloatingFilters, setShowFloatingFilters] = useState(false);

  function handleScroll(event: any) {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 300) {
      // quando passar 100px de scroll
      setShowFloatingFilters(true);
    } else {
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
              <SearchBar />
            </Container>
            <HorizontalList
              style={styles.horizontalList}
              filterby={filterby}
              setFilterby={setFilterby}
            />
          </View>
        }
        data={coursesMock}
        contentContainerStyle={{ paddingBottom: sx.spacing.xl }}
        renderItem={(item) => <CourseCard {...item.item} />}
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
