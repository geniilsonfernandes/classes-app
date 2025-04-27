import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AppHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 34,
      }}
    >
      <Text style={styles.title}>
        Welcome back <Text style={styles.user_title}>Jhon doe</Text>
      </Text>
      <Avatar>
        <AvatarImage
          source={{
            uri: "https://avatar.iran.liara.run/public/11",
          }}
        />
        <AvatarFallback fallbackText="JD" />
      </Avatar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 34,
  },
  title: {
    fontSize: 18,
    maxWidth: "40%",
    color: theme.text.foreground,
  },
  user_title: {
    fontWeight: "bold",
  },
});
