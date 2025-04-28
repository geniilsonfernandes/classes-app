import { Card } from "@/components/card";
import { Back } from "@/components/shared/back";
import { Paragraph, Title } from "@/components/text";
import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import {
  BadgeCheck,
  BookOpen,
  Clock,
  Flame,
  GraduationCap,
  PlayCircle,
} from "lucide-react-native";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const performanceMetrics = [
  { title: "Study Time", value: "303 Hours", Icon: Clock },
  { title: "Courses Completed", value: "12 Courses", Icon: GraduationCap },
  { title: "Lessons Watched", value: "320 Lessons", Icon: PlayCircle },
  { title: "Certificates Earned", value: "8 Certificates", Icon: BadgeCheck },
  { title: "Average Daily Study", value: "2.5 Hours", Icon: BookOpen },
  { title: "Highest Streak", value: "15 Days", Icon: Flame },
];

function ChartItem({ day }: { day: string }) {
  const randomHeight = Math.floor(Math.random() * 101);

  return (
    <View style={styles.chartItem}>
      <View style={styles.chartBarBackground}>
        <View style={[styles.chartBarFill, { height: `${randomHeight}%` }]} />
      </View>
      <Paragraph ta="center" opacity={0.5}>
        {day}
      </Paragraph>
    </View>
  );
}

function PerformanceItem({
  title,
  value,
  Icon,
}: {
  title: string;
  value: string;
  Icon: any;
}) {
  return (
    <Card style={styles.performanceCard}>
      <View style={styles.iconContainer}>
        <Icon color={theme.text.secondary} size={32} />
      </View>
      <View>
        <Title>{title}</Title>
        <Paragraph opacity={0.5}>{value}</Paragraph>
      </View>
    </Card>
  );
}

export default function Chart() {
  return (
    <View style={styles.container}>
      <Back style={styles.backButton} />
      <ScrollView style={styles.scroll}>
        <View style={styles.section}>
          <Title>This Week</Title>
          <Card style={styles.chartCard}>
            {daysOfWeek.map((day) => (
              <ChartItem key={day} day={day} />
            ))}
          </Card>
        </View>

        <View style={styles.section}>
          <Title color={theme.text.foreground}>Your Performance</Title>
          {performanceMetrics.map(({ title, value, Icon }) => (
            <PerformanceItem
              key={title}
              title={title}
              value={value}
              Icon={Icon}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.base.background,
    paddingTop: 96,
    paddingHorizontal: sx.spacing.md,
  },
  backButton: {
    position: "absolute",
    left: sx.spacing.lg,
    top: StatusBar.currentHeight,
  },
  scroll: {
    padding: sx.spacing.md,
  },
  section: {
    gap: sx.spacing.xl,
    paddingVertical: sx.spacing.lg,
  },
  chartCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: sx.spacing.xl,
    padding: sx.spacing.xxl,
  },
  chartItem: {
    flex: 1,
    gap: sx.spacing.md,
  },
  chartBarBackground: {
    height: 200,
    borderRadius: sx.rounded.md,
    backgroundColor: theme.gray[50],
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  chartBarFill: {
    backgroundColor: theme.gray[900],
  },
  performanceCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: sx.spacing.xxl,
    padding: sx.spacing.xxl,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: sx.spacing.lg,
    backgroundColor: theme.gray[50],
    alignItems: "center",
    justifyContent: "center",
  },
});
