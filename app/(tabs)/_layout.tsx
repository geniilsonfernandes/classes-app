import { sx } from "@/styles/styles";
import { theme } from "@/styles/theme";
import { Tabs } from "expo-router";
import { ChartPie, Earth, Home, Settings2 } from "lucide-react-native";
import React from "react";
import { Pressable, View } from "react-native";

const TabBarIcon = ({
  children,
  focused,
}: {
  children: React.ReactNode;
  color: string;
  focused: boolean;
}) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 16,
        borderRadius: sx.rounded.full,
        backgroundColor: focused ? theme.base.background : "transparent",
      }}
    >
      {children}
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: theme.text.foreground,
        animation: "fade",
        tabBarStyle: theme.tabBar,
        tabBarButton: (props) => {
          const {} = props;
          return (
            <Pressable
              {...props}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.children}
            </Pressable>
          );
        },
        tabBarLabelStyle: {
          fontSize: 12, // opcional: muda o tamanho do texto
        },
        tabBarIconStyle: {
          marginTop: 8, // sobe o ícone se quiser
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon color={color} focused={focused}>
              <Home size={size} color={color} />
            </TabBarIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon color={color} focused={focused}>
              <Earth size={size} color={color} />
            </TabBarIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon color={color} focused={focused}>
              <ChartPie size={size} color={color} />
            </TabBarIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon color={color} focused={focused}>
              <Settings2 size={size} color={color} />
            </TabBarIcon>
          ),
        }}
      />
    </Tabs>
  );
}
