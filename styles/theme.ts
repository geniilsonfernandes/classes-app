import { sx } from "./styles";

export const theme = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    50: "#f4f0ef",
    100: "#d9d6d5",
    200: "#bfbcbc",
    300: "#a4a2a2",
    400: "#898888",
    500: "#6f6e6e",
    600: "#545454",
    700: "#393a3a",
    800: "#2f3034",
    900: "#2f303b",
  },
  card: {
    background: "#fff",
    foreground: "#302D2E",
    shadow: "#302D2E40",
  },
  base: {
    background: "#F4F0EF",
    foreground: "#302D2E",
  },
  accent: {
    background: "#302D2E",
    foreground: "#ffffff",
  },
  input: {
    background: "#ffffff",
    foreground: "#302D2E",
  },
  text: {
    primary: "#ffffff",
    secondary: "#2F303B",
    foreground: "#656D86",
  },
  tabBar: {},
};

theme.tabBar = {
  borderTopWidth: 0, // tira a linha
  elevation: 0, // tira sombra Android
  shadowOpacity: 0, // tira sombra iOS
  backgroundColor: theme.card.background,
  height: 80, // 👈 ajusta a altura que quiser
  borderTopEndRadius: sx.rounded.xxl,
  borderTopStartRadius: sx.rounded.xxl,
};

export const darkenHexColor = (hex: string, amount: number): string => {
  // Remove o '#' se houver
  if (hex.startsWith("#")) hex = hex.slice(1);

  // Converte a cor hex em componentes RGB
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  // Aplica o escurecimento (diminui os valores RGB)
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  // Converte os componentes RGB de volta para hex
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};
