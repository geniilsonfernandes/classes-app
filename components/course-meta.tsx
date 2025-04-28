import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Card } from "@/components/card";
import { Paragraph } from "@/components/text";
import { sx } from "@/styles/styles";
import { getInitials } from "@/utils";
import { StyleSheet } from "react-native";

export type CourseMetaProps = {
  teacherAvatarUri: string;
  teacherName: string;
  price?: string;
  originalPrice?: string;
};

export const CourseMeta = ({
  teacherAvatarUri,
  teacherName,
  price,
  originalPrice,
}: CourseMetaProps) => {
  return (
    <>
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
    </>
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
