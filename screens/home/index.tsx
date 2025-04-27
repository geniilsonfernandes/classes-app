import { Container } from "@/components/container";
import { CourseCard } from "@/components/course-card";
import { SearchBar } from "@/components/search-bar";
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "./components/app-header";
import { HorizontalList } from "./components/horizontal-list";

export function Home() {
  const [filterby, setFilterby] = useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        renderItem={() => <CourseCard />}
        ItemSeparatorComponent={() => (
          <View style={{ height: sx.spacing.xl }} />
        )}
        keyExtractor={(item) => item.toString()}
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
