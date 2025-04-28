import { darkenHexColor } from "@/lib/utils"; // assumindo que você tem essa função
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, AvatarImage } from "./avatar";
import { Paragraph } from "./text";

export const Students = () => {
  const students = Array.from({ length: 40 }, (_, i) => i + 1);
  const maxVisible = 4;

  return (
    <View style={styles.container}>
      {students.slice(0, maxVisible).map((student, index) => (
        <Avatar
          key={student}
          style={[styles.avatar, index > 0 && styles.avatarOverlap]}
        >
          <AvatarImage
            source={{ uri: `https://avatar.iran.liara.run/public/${student}` }}
          />
        </Avatar>
      ))}
      {students.length > maxVisible && (
        <View style={styles.more}>
          <Paragraph fontsize={13} fontweight="600">
            +{students.length - (maxVisible - 1)}
          </Paragraph>
        </View>
      )}
      <Paragraph
        pl={sx.spacing.md}
        fontsize={13}
        opacity={0.7}
        fontweight="600"
      >
        Active Students
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sx.spacing.xxl,
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: theme.base.background,
    borderRadius: sx.rounded.full,
  },
  avatarOverlap: {
    marginLeft: -16,
  },
  more: {
    width: 40,
    height: 40,
    marginLeft: -20,
    borderRadius: sx.rounded.full,
    borderWidth: 2,
    borderColor: theme.base.background,
    backgroundColor: darkenHexColor(theme.base.background, 5),
    alignItems: "center",
    justifyContent: "center",
  },
});
