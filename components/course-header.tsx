import { CardContent, CardImage } from "@/components/card";
import { Students } from "@/components/students";
import { Paragraph, Title } from "@/components/text";
import { sx } from "@/styles/styles";
import { CourseMeta, CourseMetaProps } from "./course-meta";

type CourseHeaderProps = {
  imageUri: string;
  title: string;
  totalLessons: number;
  totalHours: number;
  description: string;
} & CourseMetaProps;

export const CourseHeader = ({
  imageUri,
  title,
  totalLessons,
  totalHours,
  description,
  teacherAvatarUri,
  teacherName,
  originalPrice,
  price
}: CourseHeaderProps) => {
  return (
    <>
      <CardImage uri={imageUri} height={300} />
      <CardContent>
        <CourseMeta
          teacherAvatarUri={teacherAvatarUri}
          teacherName={teacherName}
          price={price}
          originalPrice={originalPrice}
        />
        <Title pt={sx.spacing.md} fontsize={sx.font.xxxxl}>
          {title}
        </Title>
        <Paragraph
          pt={sx.spacing.md}
          opacity={0.5}
          fontsize={sx.font.md}
          fontweight="400"
        >
          {totalLessons} Lessons | {totalHours} hours
        </Paragraph>
        <Students />
        <Title pt={sx.spacing.md} fontsize={sx.font.lg}>
          Description
        </Title>
        <Paragraph
          pt={sx.spacing.md}
          fontweight="400"
          fontsize={sx.font.md}
          lineHeight={24}
        >
          {description}
        </Paragraph>
      </CardContent>
    </>
  );
};
