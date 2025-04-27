import { sx } from "@/styles/styles";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardContent, CardImage } from "./card";
import { Paragraph, Title } from "./text";

type CourseCardProps = {
  imageUri: string;
  teacherName: string;
  teacherAvatarUri: string;
  title: string;
  totalLessons: number;
  totalHours: number;
  price?: string;
  originalPrice?: string;
};

export const CourseCard: React.FC<CourseCardProps> = ({
  imageUri,
  teacherName,
  teacherAvatarUri,
  title,
  totalLessons,
  totalHours,
  price,
  originalPrice,
}) => {
  return (
    <Card
      style={{
        marginHorizontal: sx.spacing.xl,
      }}
    >
      <CardImage uri={imageUri} />
      <CardContent>
        <Card style={styles.author}>
          <Avatar style={styles.avatar}>
            <AvatarImage source={{ uri: teacherAvatarUri }} />
            <AvatarFallback fallbackText={getInitials(teacherName)} />
          </Avatar>
          <Paragraph>{teacherName}</Paragraph>
        </Card>

        {(price || originalPrice) && (
          <Card style={styles.price}>
            {originalPrice && (
              <Paragraph opacity={0.5} decoration="line-through">
                {originalPrice}
              </Paragraph>
            )}
            {price && <Paragraph>{price}</Paragraph>}
          </Card>
        )}

        <Title fontsize={sx.font.lg}>{title}</Title>
        <Paragraph opacity={0.5} fontweight="400">
          {totalLessons} Lessons | {totalHours} hours
        </Paragraph>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  author: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: -16,
    borderRadius: sx.rounded.full,
    elevation: 8,
    gap: sx.spacing.md,
    zIndex: 10,
    marginHorizontal: sx.spacing.md,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: -16,
    borderRadius: sx.rounded.full,
    gap: sx.spacing.sm,
    zIndex: 10,
    marginHorizontal: sx.spacing.md,
  },
  avatar: {
    width: 20,
    height: 20,
  },
});

// Função para pegar iniciais do nome
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}
