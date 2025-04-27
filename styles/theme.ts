export const theme = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    50: "#F4F0EF",
    100: "#E7E1DF",
    200: "#D1C6C4",
    300: "#B4A8A5",
    400: "#A18F8C",
    500: "#8C7572",
    600: "#7A6461",
    700: "#6A5451",
    800: "#5B4745",
    900: "#2F303B",
  },
  card: {
    background: "#fff",
    foreground: "#302D2E",
  },
  base: {
    background: "#F4F0EF",
    foreground: "#302D2E",
  },
  accent: {
    background: "#1e90ff",
    foreground: "#ffffff",
  },
  input: {
    background: "#ffffff",
    foreground: "#302D2E",
  },
  text: {
    primary: "#ffffff",
    secondary: "#7A6461",
    foreground: "#302D2E",
  },
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
