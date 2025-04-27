import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { Search } from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { PressableIcon } from "./pressable-icon";

export const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={[
          styles.searchBarInput,
          Platform.OS === "web" && ({ outlineStyle: "none" } as any),
        ]}
        placeholderTextColor={theme.gray[600]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        returnKeyType="search"
        textAlignVertical="center"
        placeholder="Figma..."
        underlineColorAndroid="transparent"
      />
      <PressableIcon>
        <Search size={18} color={theme.gray[300]} />
      </PressableIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: theme.input.background,
    borderRadius: sx.rounded.full,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: sx.spacing.lg,
    marginTop: sx.spacing.lg,
    width: "100%",
    padding: sx.spacing.sm,
  },
  searchBarInput: {
    color: theme.input.foreground,
    fontWeight: "600",
    paddingHorizontal: sx.spacing.lg,
    fontSize: sx.font.lg,
    flex: 1,
    height: "100%",

   
  },


});
