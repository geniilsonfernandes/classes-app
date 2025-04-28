import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { Search } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, TextInput } from "react-native";
import { Card } from "./card";
import { PressableIcon } from "./pressable-icon";

type SearchBarProps = {
  setSearch: (search: string) => void;
  search: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const [input, setInput] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input); // Só dispara após o tempo de inatividade
    }, 300); // 300ms de delay

    return () => clearTimeout(timer); // limpa o timer se digitar de novo antes dos 300ms
  }, [input]);

  return (
    <Card style={styles.searchBar}>
      <TextInput
        value={input}
        onChangeText={setInput}
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
    </Card>
  );
};

const styles = StyleSheet.create({
  searchBar: {
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
